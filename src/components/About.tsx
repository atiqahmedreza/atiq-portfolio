"use client";

import { motion } from "framer-motion";
import { CalendarDays, Code2, FolderKanban } from "lucide-react";
import { siteConfig } from "@/data/site";
import { SectionHeading } from "@/components/SectionHeading";

const statMeta = [
  { icon: FolderKanban, tone: "from-primary/25 to-primary/5" },
  { icon: CalendarDays, tone: "from-accent/30 to-accent/5" },
  { icon: Code2, tone: "from-primary-hover/25 to-primary/5" },
] as const;

export function About() {
  return (
    <section id="about" className="relative scroll-mt-28 overflow-hidden py-16 md:py-24">
      <div className="about-section-bg pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading title="About Me" />

        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="space-y-4 lg:col-span-7">
            {siteConfig.aboutParagraphs.map((paragraph, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="relative overflow-hidden rounded-2xl border border-border/80 bg-surface/90 p-5 shadow-[inset_0_1px_0_0_rgba(255,250,246,0.04)] md:p-6"
              >
                <div
                  className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-primary via-primary-hover to-accent"
                  aria-hidden
                />
                {index === 0 ? (
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl" aria-hidden />
                ) : null}

                <p className="relative text-sm leading-relaxed text-text md:text-base md:leading-7">{paragraph}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-surface via-surface to-background p-6 glow-hover md:p-7">
              <div className="absolute -right-10 bottom-0 h-32 w-32 rounded-full bg-accent/15 blur-3xl" aria-hidden />
              <dl className="space-y-3">
                {siteConfig.stats.map((stat, index) => {
                  const meta = statMeta[index] ?? statMeta[0];
                  const Icon = meta.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08, duration: 0.35 }}
                      className={`group relative overflow-hidden rounded-xl border border-border/80 bg-gradient-to-br ${meta.tone} px-4 py-4 transition-transform duration-300 hover:-translate-y-0.5`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <dt className="text-sm font-medium text-muted">{stat.label}</dt>
                          <dd className="font-heading mt-1 text-3xl font-bold tracking-tight text-text">
                            {stat.value}
                          </dd>
                        </div>
                        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-background/50 text-primary-hover transition-colors group-hover:border-primary/45">
                          <Icon className="h-5 w-5" aria-hidden />
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </dl>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
