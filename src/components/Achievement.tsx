"use client";

import { Download, ExternalLink, Award } from "lucide-react";
import { motion } from "framer-motion";
import { achievements } from "@/data/achievements";
import { SectionHeading } from "@/components/SectionHeading";

export function Achievement() {
  const { certificatePath, certificateTitle } = achievements;

  return (
    <section id="achievement" className="relative scroll-mt-28 overflow-hidden py-16 md:py-24">
      <div className="education-section-bg pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading title="Achievement" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-md overflow-hidden rounded-2xl border border-primary/35 bg-gradient-to-br from-primary/30 to-primary/5 p-4 md:max-w-lg md:p-5 glow-hover"
        >
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/25 bg-background/50 text-primary-hover">
                <Award className="h-5 w-5" aria-hidden />
              </span>
              <div className="min-w-0">
                <h3 className="font-heading text-base font-semibold text-text">{certificateTitle}</h3>
                <p className="text-xs text-text mt-0.5">PDF certificate</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <a
                href={certificatePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-white glow-hover hover:bg-primary-hover transition-colors sm:text-sm"
              >
                <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                View
              </a>
              <a
                href={certificatePath}
                download
                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-2 text-xs font-semibold text-text glow-hover hover:border-primary/40 sm:text-sm"
              >
                <Download className="h-3.5 w-3.5" aria-hidden />
                Download
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-border/80 bg-background">
            <iframe
              src={`${certificatePath}#toolbar=0&navpanes=0`}
              title="Achievement certificate"
              className="aspect-[4/3] h-auto w-full max-h-[220px] md:max-h-[260px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
