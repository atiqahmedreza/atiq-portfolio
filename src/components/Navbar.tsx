"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/cn";
import { ThemeToggle } from "@/components/ThemeToggle";

const sectionIds = siteConfig.navLinks.map((l) => l.href.replace("#", ""));

export function Navbar() {
  const pathname = usePathname();
  // The nav links are in-page anchors, so off the home page they have to be
  // prefixed ("/#about") or they resolve to nothing.
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Shadow/border on scroll — cheap, no layout reads.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section via IntersectionObserver instead of per-scroll offsetTop reads.
  useEffect(() => {
    if (!isHome) return;

    const visible = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.set(entry.target.id, entry.intersectionRatio);
          else visible.delete(entry.target.id);
        }
        if (visible.size === 0) return;
        // Prefer the section occupying the most of the viewport, ties broken by document order.
        let best = "";
        let bestRatio = -1;
        for (const id of sectionIds) {
          const ratio = visible.get(id);
          if (ratio !== undefined && ratio > bestRatio) {
            best = id;
            bestRatio = ratio;
          }
        }
        if (best) setActive(best);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [isHome]);

  // Lock scroll while the mobile panel is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Escape to close, and keep Tab inside the open panel.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== "Tab") return;

      const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusables?.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    // Move focus into the panel so the keyboard path is continuous.
    panelRef.current?.querySelector<HTMLElement>("a[href]")?.focus();
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const handleNav = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      // Let modified clicks (new tab, new window, download) behave natively.
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
      // Off the home page, let the router handle the cross-page jump.
      if (!isHome) {
        setOpen(false);
        return;
      }
      e.preventDefault();
      setOpen(false);
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (!el) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
      // Keep the URL shareable without triggering a second jump.
      history.replaceState(null, "", href);
    },
    [isHome],
  );

  const hrefFor = (hash: string) => (isHome ? hash : `/${hash}`);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-6" aria-label="Main">
        <Link
          href={hrefFor("#home")}
          onClick={(e) => handleNav(e, "#home")}
          className="font-heading shrink-0 whitespace-nowrap rounded-lg text-base font-bold text-text transition-colors hover:text-primary-hover sm:text-lg"
        >
          {siteConfig.name}
          <span className="text-primary">.</span>
          <span className="sr-only"> — back to top</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {siteConfig.navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = isHome && active === id;
            return (
              <li key={link.href}>
                <Link
                  href={hrefFor(link.href)}
                  onClick={(e) => handleNav(e, link.href)}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "inline-block rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "text-primary-hover bg-primary/10 underline decoration-2 underline-offset-8"
                      : "text-muted hover:text-text",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <a
            href={siteConfig.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-border bg-surface px-4 py-2 text-sm font-medium text-text glow-hover hover:border-primary/40"
          >
            Resume
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface text-text"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        ref={panelRef}
        // `inert` keeps the off-screen panel out of the tab order when closed.
        inert={!open}
        aria-hidden={!open}
        className={cn(
          "lg:hidden fixed inset-x-0 bottom-0 top-[var(--nav-h,72px)] z-40 overflow-y-auto bg-background/98 backdrop-blur-sm border-t border-border transition-transform duration-300 motion-reduce:transition-none",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <ul className="flex flex-col gap-1 p-4">
          {siteConfig.navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = isHome && active === id;
            return (
              <li key={link.href}>
                <Link
                  href={hrefFor(link.href)}
                  onClick={(e) => handleNav(e, link.href)}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "block w-full rounded-xl px-4 py-3 text-left text-base font-medium",
                    isActive ? "bg-primary/10 text-primary-hover" : "text-muted",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li className="pt-2 flex flex-col gap-2 sm:flex-row">
            <ThemeToggle className="w-full sm:flex-1" showLabel />
            <a
              href={siteConfig.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full sm:flex-1 items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-on-primary"
              onClick={() => setOpen(false)}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
