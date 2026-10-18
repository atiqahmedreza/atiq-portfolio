"use client";

import { ArrowUp } from "lucide-react";
import { siteConfig } from "@/data/site";
import { SocialLinks } from "@/components/SocialLinks";

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-12">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-start">
          <div>
            <p className="font-heading text-lg font-bold text-text">
              {siteConfig.name}
              <span className="text-primary">.</span>
            </p>
            <p className="mt-2 max-w-md text-sm text-muted leading-relaxed">
              Building dependable ML systems and thoughtful web experiences—from Rajshahi to production.
            </p>
            <SocialLinks className="mt-5" />
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-accent mb-3">Quick links</p>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-muted hover:text-primary-hover transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-t border-border pt-6">
          <p className="text-xs text-muted">© 2026 Atiq. All rights reserved.</p>
          <button
            type="button"
            onClick={scrollTop}
            className="inline-flex items-center gap-2 self-start sm:self-auto rounded-xl border border-border bg-background px-4 py-2 text-xs font-medium text-text glow-hover hover:border-primary/40"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" aria-hidden />
          </button>
        </div>
      </div>
    </footer>
  );
}
