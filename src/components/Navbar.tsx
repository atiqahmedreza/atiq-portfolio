"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/cn";

const sectionIds = siteConfig.navLinks.map((l) => l.href.replace("#", ""));

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const offset = window.scrollY + 120;
      let current = "home";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= offset) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNav = (href: string) => {
    setOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-6" aria-label="Main">
        <button
          type="button"
          onClick={() => handleNav("#home")}
          className="font-heading text-lg font-bold text-text hover:text-primary-hover transition-colors"
        >
          {siteConfig.name}
          <span className="text-primary">.</span>
        </button>

        <ul className="hidden lg:flex items-center gap-1">
          {siteConfig.navLinks.map((link) => {
            const id = link.href.replace("#", "");
            return (
              <li key={link.href}>
                <button
                  type="button"
                  onClick={() => handleNav(link.href)}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    active === id ? "text-primary-hover bg-primary/10" : "text-muted hover:text-text",
                  )}
                >
                  {link.label}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={siteConfig.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-border bg-surface px-4 py-2 text-sm font-medium text-text glow-hover hover:border-primary/40"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface text-text"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          "lg:hidden fixed inset-0 top-[72px] z-40 bg-background/98 backdrop-blur-sm border-t border-border transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <ul className="flex flex-col gap-1 p-4">
          {siteConfig.navLinks.map((link) => {
            const id = link.href.replace("#", "");
            return (
              <li key={link.href}>
                <button
                  type="button"
                  onClick={() => handleNav(link.href)}
                  className={cn(
                    "w-full rounded-xl px-4 py-3 text-left text-base font-medium",
                    active === id ? "bg-primary/10 text-primary-hover" : "text-muted",
                  )}
                >
                  {link.label}
                </button>
              </li>
            );
          })}
          <li className="pt-2">
            <a
              href={siteConfig.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white"
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
