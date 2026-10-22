"use client";

import { BookOpen, GraduationCap, Landmark, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import type { EducationEntry } from "@/data/education";
import { cn } from "@/lib/cn";

const entryMeta: Record<string, { icon: typeof GraduationCap; label: string }> = {
  "bsc-cse": { icon: GraduationCap, label: "University" },
  "web-bootcamp": { icon: Sparkles, label: "Training" },
  hsc: { icon: Landmark, label: "HSC" },
  ssc: { icon: BookOpen, label: "SSC" },
};

const educationCardClass =
  "relative overflow-hidden rounded-2xl border border-primary/35 bg-gradient-to-br from-primary/30 to-primary/5 p-5 shadow-[0_0_0_1px_rgba(213,126,95,0.15)] md:p-6 glow-hover";

type EducationTimelineProps = {
  entries: EducationEntry[];
};

export function EducationTimeline({ entries }: EducationTimelineProps) {
  return (
    <div className="relative">
      <div
        className="absolute left-[7.25rem] top-3 hidden h-[calc(100%-1.5rem)] w-px bg-gradient-to-b from-primary/60 via-border to-transparent sm:block"
        aria-hidden
      />

      <ul className="space-y-5 md:space-y-6">
        {entries.map((entry, index) => {
          const meta = entryMeta[entry.id] ?? entryMeta["bsc-cse"];
          const Icon = meta.icon;

          return (
            <motion.li
              key={entry.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="grid gap-4 sm:grid-cols-[7.25rem_1fr] sm:items-start"
            >
              <div className="sm:pt-5">
                <p className="font-mono text-xs font-medium uppercase tracking-wide text-primary-hover">{entry.period}</p>
              </div>

              <article className={educationCardClass}>
                {entry.highlight ? (
                  <span className="absolute right-4 top-4 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary-hover">
                    Current
                  </span>
                ) : null}

                <div className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-background/50 text-primary-hover">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className={cn("min-w-0", entry.highlight && "pr-20 sm:pr-24")}>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-accent">{meta.label}</span>
                    <h3 className="font-heading mt-1 text-lg font-semibold leading-snug text-text">{entry.degree}</h3>
                    <p className="mt-1 text-sm font-medium text-primary-hover">
                      {entry.institution}
                      {entry.location ? ` · ${entry.location}` : ""}
                    </p>
                    {entry.description ? (
                      <p className="mt-3 text-sm leading-relaxed text-text">{entry.description}</p>
                    ) : null}
                  </div>
                </div>
              </article>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
