"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ElementType, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Element to render. Defaults to a div. */
  as?: ElementType;
  /** Which direction the element travels in from. */
  variant?: "up" | "right" | "scale";
  /** Stagger, in milliseconds. */
  delay?: number;
  /** Shrinks the observed area so the reveal fires once the element is properly in view. */
  rootMargin?: string;
  className?: string;
  id?: string;
};

/**
 * Scroll-triggered reveal: one IntersectionObserver per element, then the
 * transition itself runs in CSS (see `[data-reveal]` in globals.css).
 *
 * This replaces Framer Motion's `whileInView`, which pulled the whole animation
 * runtime into the client bundle and forced every section to be a client
 * component. `prefers-reduced-motion` is handled in CSS, so there is no
 * provider to wire up and no JS cost for users who opt out.
 */
export function Reveal({
  children,
  as,
  variant = "up",
  delay = 0,
  rootMargin = "-40px",
  className,
  id,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      // No observer: show the content rather than stranding it at opacity 0.
      el.dataset.revealed = "true";
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  const Tag = (as ?? "div") as ElementType;

  return (
    <Tag
      ref={ref}
      id={id}
      className={className}
      data-reveal={variant}
      data-revealed={revealed ? "true" : undefined}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
