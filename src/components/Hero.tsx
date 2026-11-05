import Image from "next/image";
import { Download } from "lucide-react";
import { siteConfig } from "@/data/site";
import { SocialLinks } from "@/components/SocialLinks";
import { TypingRoles } from "@/components/TypingRoles";

export function Hero() {
  return (
    <section
      id="home"
      /*
       * `100svh` rather than `100dvh`: dvh changes as mobile browser chrome
       * hides on scroll, which reflows the whole hero mid-scroll. The
       * max-height query releases the minimum on short landscape viewports,
       * where forcing a full-viewport hero pushed the CTAs below the fold.
       */
      className="relative grid-hero-bg scroll-mt-28 flex min-h-[100svh] flex-col justify-center overflow-hidden pt-24 pb-12 md:pt-28 md:pb-16 [@media(max-height:700px)]:min-h-0 [@media(max-height:700px)]:py-20"
    >
      <div className="pointer-events-none absolute inset-0 hero-photo-glow" aria-hidden />
      <div className="relative mx-auto grid w-full max-w-6xl flex-1 items-center gap-10 px-4 py-6 md:px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="hero-enter space-y-6">
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
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-on-primary glow-hover hover:bg-primary-hover transition-colors"
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

          <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
            <span className="inline-flex items-center gap-1.5 font-medium text-accent">
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Available for work
            </span>
            <span aria-hidden>·</span>
            <span>{siteConfig.location}</span>
            <span aria-hidden>·</span>
            <span>{siteConfig.timezone}</span>
          </p>

          <SocialLinks />
        </div>

        <div className="hero-enter-photo flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-3 rounded-[20px] bg-primary/20 blur-2xl" aria-hidden />
            <div className="relative rounded-2xl border border-primary/30 bg-surface p-2">
              <div className="relative h-72 w-72 sm:h-80 sm:w-80 md:h-[22rem] md:w-[22rem] lg:h-[24rem] lg:w-[24rem] overflow-hidden rounded-xl ring-2 ring-primary/55 ring-offset-2 ring-offset-background">
                <Image
                  src={siteConfig.profileImage}
                  alt="Professional portrait of Atiq"
                  fill
                  priority
                  sizes="(max-width: 640px) 288px, (max-width: 768px) 320px, (max-width: 1024px) 352px, 384px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
