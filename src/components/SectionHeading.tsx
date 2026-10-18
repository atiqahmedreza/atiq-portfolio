"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({ id, eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      id={id}
      className="mb-10 md:mb-12 scroll-mt-28"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      {eyebrow ? (
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-2">{eyebrow}</p>
      ) : null}
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-text tracking-tight">{title}</h2>
      {subtitle ? <p className="mt-3 max-w-2xl text-muted text-base md:text-lg leading-relaxed">{subtitle}</p> : null}
    </motion.div>
  );
}
