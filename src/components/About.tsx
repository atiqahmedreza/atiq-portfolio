"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  return (
    <section id="about" className="scroll-mt-28 py-16 md:py-24 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="About"
          title="About Me"
          subtitle="Engineering student focused on MLOps, full-stack development, and practical AI."
        />
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:gap-12">
          <div className="space-y-4 text-muted leading-relaxed text-base md:text-lg">
            {siteConfig.aboutParagraphs.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl border border-border bg-surface p-6 glow-hover h-fit"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-accent mb-4">At a glance</p>
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {siteConfig.stats.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-border/80 bg-background/40 px-4 py-3">
                  <dt className="text-sm text-muted">{stat.label}</dt>
                  <dd className="font-heading text-2xl font-bold text-primary-hover mt-1">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
