"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

type ThemeToggleProps = {
  className?: string;
  showLabel?: boolean;
};

export function ThemeToggle({ className, showLabel = false }: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isLight = (resolvedTheme ?? theme) === "light";

  const toggle = () => setTheme(isLight ? "dark" : "light");

  if (!mounted) {
    return (
      <span
        className={cn(
          "inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface",
          className,
        )}
        aria-hidden
      />
    );
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface text-text glow-hover hover:border-primary/40 transition-colors",
        showLabel ? "px-4 py-2 text-sm font-medium" : "h-11 w-11",
        className,
      )}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
    >
      {isLight ? <Moon className="h-5 w-5 shrink-0" aria-hidden /> : <Sun className="h-5 w-5 shrink-0" aria-hidden />}
      {showLabel ? <span>{isLight ? "Dark" : "Light"}</span> : null}
    </button>
  );
}
