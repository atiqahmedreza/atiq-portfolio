"""Even out terracotta background shadow on profile photo (left-side dark band)."""
from __future__ import annotations

import shutil
from pathlib import Path

import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
PROFILE = ROOT / "public" / "images" / "profile.jpg"
BACKUP = ROOT / "public" / "images" / "profile-backup.jpg"


def is_background_rgb(rgb: np.ndarray, target: np.ndarray) -> bool:
    r, g, b = rgb
    if r < 85 or b > r * 0.95:
        return False
    if r < g * 0.85:
        return False
    dist = np.linalg.norm(rgb.astype(np.float32) - target)
    return dist < 95 or (r > 115 and g > 70 and r >= g >= b * 0.55)


def main() -> None:
    if not PROFILE.exists():
        raise SystemExit(f"Missing {PROFILE}")

    if not BACKUP.exists():
        shutil.copy2(PROFILE, BACKUP)

    img = Image.open(PROFILE).convert("RGB")
    arr = np.array(img, dtype=np.float32)
    h, w, _ = arr.shape

    # Bright reference from upper-right background (avoid face in center)
    ref_region = arr[int(h * 0.05) : int(h * 0.28), int(w * 0.78) : int(w * 0.98)]
    target = np.median(ref_region.reshape(-1, 3), axis=0)
    target_lum = 0.2126 * target[0] + 0.7152 * target[1] + 0.0722 * target[2]

    cx, cy = w * 0.52, h * 0.42
    rx, ry = w * 0.22, h * 0.32

    out = arr.copy()
    for y in range(h):
        for x in range(w):
            # Skip face/body ellipse
            nx = (x - cx) / rx
            ny = (y - cy) / ry
            if nx * nx + ny * ny < 1.0:
                continue

            pixel = arr[y, x]
            if not is_background_rgb(pixel, target):
                continue

            lum = 0.2126 * pixel[0] + 0.7152 * pixel[1] + 0.0722 * pixel[2]
            if lum >= target_lum - 8:
                continue

            # Stronger fix on left where shadow sits
            left_weight = max(0.0, 1.0 - x / (w * 0.55))
            fix = min(1.0, (target_lum - lum) / 55.0) * (0.55 + 0.45 * left_weight)
            out[y, x] = pixel * (1.0 - fix) + target * fix

    Image.fromarray(np.clip(out, 0, 255).astype(np.uint8), mode="RGB").save(
        PROFILE, quality=92, optimize=True
    )
    print(f"Updated {PROFILE}")


if __name__ == "__main__":
    main()
