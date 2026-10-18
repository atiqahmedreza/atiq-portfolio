"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

export type TimelineItem = {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  description?: string;
  bullets?: string[];
  badge?: string;
  highlight?: boolean;
};

type TimelineProps = {
  items: TimelineItem[];
};

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-[11px] top-2 bottom-2 w-px bg-border md:left-1/2 md:-translate-x-px" aria-hidden />
      <ul className="space-y-8">
        {items.map((item, index) => (
          <motion.li
            key={item.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className={cn(
              "relative grid gap-4 md:grid-cols-2 md:gap-8",
              index % 2 === 0 ? "md:[&>div:first-child]:col-start-1" : "md:[&>div:first-child]:col-start-2",
            )}
          >
            <div className={cn("md:pr-8", index % 2 !== 0 && "md:order-2 md:pl-8 md:pr-0")}>
              <div
                className={cn(
                  "rounded-2xl border bg-surface p-5 md:p-6 glow-hover",
                  item.highlight ? "border-primary/40" : "border-border",
                )}
              >
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  {item.badge ? (
                    <span className="font-mono text-[10px] uppercase tracking-wider rounded-md bg-primary/15 px-2 py-0.5 text-accent">
                      {item.badge}
                    </span>
                  ) : null}
                  <span className="font-mono text-xs text-muted">{item.period}</span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-text">{item.title}</h3>
                <p className="text-sm text-primary-hover mt-1">{item.subtitle}</p>
                {item.description ? <p className="mt-3 text-sm text-muted leading-relaxed">{item.description}</p> : null}
                {item.bullets?.length ? (
                  <ul className="mt-3 space-y-2 text-sm text-muted list-disc pl-5">
                    {item.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
            <div className="hidden md:block" aria-hidden />
            <span
              className="absolute left-0 top-6 h-[22px] w-[22px] rounded-full border-2 border-primary bg-background md:left-1/2 md:-translate-x-1/2"
              aria-hidden
            />
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
