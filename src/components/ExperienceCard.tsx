import { Briefcase, MapPin } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import type { ExperienceEntry } from "@/data/experience";

type ExperienceCardProps = {
  entry: ExperienceEntry;
  index: number;
};

export function ExperienceCard({ entry, index }: ExperienceCardProps) {
  return (
    <Reveal
      as="li"
      delay={index * 70}
      className="relative overflow-hidden rounded-2xl border border-border bg-surface/90 p-5 md:p-6 glow-hover"
    >
      <div
        className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-primary via-primary-hover to-accent"
        aria-hidden
      />

      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary-hover">
            <Briefcase className="h-5 w-5" aria-hidden />
          </span>
          <div className="min-w-0">
            <h3 className="font-heading text-lg font-semibold leading-snug text-text">{entry.role}</h3>
            <p className="mt-0.5 text-sm font-medium text-primary-hover">{entry.organization}</p>
            {entry.location ? (
              <p className="mt-1 inline-flex items-center gap-1 text-xs text-muted">
                <MapPin className="h-3 w-3" aria-hidden />
                {entry.location}
              </p>
            ) : null}
          </div>
        </div>

        <div className="flex flex-col items-start gap-1.5 sm:items-end">
          <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary-hover">
            {entry.kind}
          </span>
          <span className="font-mono text-xs text-muted">{entry.period}</span>
          {entry.current ? (
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              Current
            </span>
          ) : null}
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-text">{entry.summary}</p>

      <ul className="mt-4 space-y-2">
        {entry.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-2.5 text-sm leading-relaxed text-text">
            <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {entry.stack.map((tech) => (
          <li key={tech} className="rounded-md border border-border px-2 py-0.5 font-mono text-[11px] text-muted">
            {tech}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
