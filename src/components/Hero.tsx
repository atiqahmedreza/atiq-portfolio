"use client";

import Image from "next/image";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { SocialLinks } from "@/components/SocialLinks";
import { TypingRoles } from "@/components/TypingRoles";

export function Hero() {
  return (
    <section id="home" className="relative grid-hero-bg scroll-mt-28 pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.12),transparent_55%)]" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 md:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">Rajshahi, Bangladesh · CSE @ Varendra University</p>
          <h1 className="font-heading text-4xl font-extrabold tracking-tight text-text sm:text-5xl md:text-6xl">
            Hi, I&apos;m <span className="text-primary-hover">{siteConfig.name}</span>
          </h1>
          <p className="text-lg md:text-xl font-medium text-text/90 leading-snug max-w-xl">{siteConfig.designation}</p>
          <TypingRoles />
          <p className="text-muted text-base md:text-lg leading-relaxed max-w-xl">{siteConfig.pitch}</p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
            <a
              href={siteConfig.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white glow-hover hover:bg-primary-hover transition-colors"
            >
              <Download className="h-4 w-4" aria-hidden />
              View / Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-border bg-surface px-6 py-3 text-sm font-semibold text-text glow-hover hover:border-primary/40"
            >
              Get in Touch
            </a>
          </div>

          <SocialLinks />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-3 rounded-[20px] bg-primary/20 blur-2xl" aria-hidden />
            <div className="relative rounded-2xl border border-border bg-surface p-2 shadow-[0_0_0_1px_rgba(59,130,246,0.25)]">
              <div className="relative h-64 w-64 sm:h-72 sm:w-72 md:h-80 md:w-80 overflow-hidden rounded-xl ring-2 ring-primary/50 ring-offset-2 ring-offset-background">
                <Image
                  src={siteConfig.profileImage}
                  alt="Professional portrait of Atiq"
                  fill
                  priority
                  sizes="(max-width: 768px) 256px, 320px"
                  className="object-cover"
                />
              </div>
            </div>
            <p className="mt-3 text-center font-mono text-xs text-muted">Replace /public/images/profile.jpg with your photo</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
