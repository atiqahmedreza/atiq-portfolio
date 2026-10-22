"use client";

import Image from "next/image";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { SocialLinks } from "@/components/SocialLinks";
import { TypingRoles } from "@/components/TypingRoles";

export function Hero() {
  return (
    <section
      id="home"
      className="relative grid-hero-bg scroll-mt-28 flex min-h-dvh flex-col justify-center overflow-hidden pt-24 pb-12 md:pt-28 md:pb-16"
    >
      <div className="pointer-events-none absolute inset-0 hero-photo-glow" aria-hidden />
      <div className="relative mx-auto grid w-full max-w-6xl flex-1 items-center gap-10 px-4 py-6 md:px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h1 className="font-heading text-4xl font-extrabold tracking-tight text-text sm:text-5xl md:text-6xl">
            Hi, I&apos;m <span className="text-primary-hover">{siteConfig.name}</span>
          </h1>
          <p className="text-lg md:text-xl font-medium text-text leading-snug max-w-xl">{siteConfig.designation}</p>
          <TypingRoles />
          <p className="text-text text-base md:text-lg leading-relaxed max-w-xl">{siteConfig.pitch}</p>

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
            <div className="relative rounded-2xl border border-primary/30 bg-surface p-2">
              <div className="relative h-72 w-72 sm:h-80 sm:w-80 md:h-[22rem] md:w-[22rem] lg:h-[24rem] lg:w-[24rem] overflow-hidden rounded-xl ring-2 ring-primary/55 ring-offset-2 ring-offset-background">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
