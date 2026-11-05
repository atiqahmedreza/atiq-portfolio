import { Award, BadgeCheck, Download, ExternalLink } from "lucide-react";
import { achievements } from "@/data/achievements";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Achievement() {
  return (
    <section id="achievement" className="relative scroll-mt-28 overflow-hidden py-16 md:py-24">
      <div className="education-section-bg pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          title={achievements.length > 1 ? "Achievements" : "Achievement"}
          subtitle="Credentials earned, with public verification."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {achievements.map((item, index) => (
            <Reveal
              key={item.id}
              as="article"
              delay={index * 80}
              className="relative overflow-hidden rounded-2xl border border-primary/35 bg-gradient-to-br from-primary/25 to-primary/5 p-5 md:p-6 glow-hover"
            >
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-primary/10 blur-3xl" aria-hidden />

              <div className="relative flex items-start gap-3">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-background/50 text-primary-hover">
                  <Award className="h-5 w-5" aria-hidden />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-heading text-lg font-semibold leading-snug text-text">{item.title}</h3>
                  <p className="mt-1 text-sm font-medium text-primary-hover">{item.issuer}</p>

                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    {item.distinction ? (
                      <span className="inline-flex items-center gap-1 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                        <BadgeCheck className="h-3 w-3" aria-hidden />
                        {item.distinction}
                      </span>
                    ) : null}
                    <time
                      dateTime={item.dateISO}
                      className="font-mono text-[11px] uppercase tracking-wider text-muted"
                    >
                      {item.date}
                    </time>
                  </div>
                </div>
              </div>

              <p className="relative mt-4 text-sm leading-relaxed text-text">{item.description}</p>

              <dl className="relative mt-4 grid gap-3 sm:grid-cols-2">
                {item.period ? (
                  <div className="rounded-xl border border-border/70 bg-background/40 px-3 py-2">
                    <dt className="font-mono text-[10px] uppercase tracking-wider text-muted">Programme</dt>
                    <dd className="mt-0.5 text-xs font-medium text-text">{item.period}</dd>
                  </div>
                ) : null}
                {item.credentialId ? (
                  <div className="rounded-xl border border-border/70 bg-background/40 px-3 py-2">
                    <dt className="font-mono text-[10px] uppercase tracking-wider text-muted">Credential ID</dt>
                    <dd className="mt-0.5 font-mono text-xs font-medium text-text">{item.credentialId}</dd>
                  </div>
                ) : null}
              </dl>

              {item.skills.length ? (
                <ul className="relative mt-4 flex flex-wrap gap-1.5">
                  {item.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-border/70 bg-background/40 px-2 py-0.5 font-mono text-[11px] text-muted"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              ) : null}

              <div className="relative mt-5 flex flex-wrap gap-2">
                {item.verifyUrl ? (
                  <a
                    href={item.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-on-primary glow-hover hover:bg-primary-hover transition-colors sm:text-sm"
                  >
                    <BadgeCheck className="h-3.5 w-3.5" aria-hidden />
                    Verify credential
                  </a>
                ) : null}
                {item.certificatePath ? (
                  <>
                    <a
                      href={item.certificatePath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-2 text-xs font-semibold text-text glow-hover hover:border-primary/40 sm:text-sm"
                    >
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                      View certificate
                    </a>
                    <a
                      href={item.certificatePath}
                      download
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-2 text-xs font-semibold text-text glow-hover hover:border-primary/40 sm:text-sm"
                    >
                      <Download className="h-3.5 w-3.5" aria-hidden />
                      Download
                    </a>
                  </>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
