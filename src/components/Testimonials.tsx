import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Testimonials() {
  // No section at all until there is a real quote to show.
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="relative scroll-mt-28 overflow-hidden py-16 md:py-24">
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          title={testimonials.length > 1 ? "References" : "Reference"}
          subtitle="What people I have worked with say."
        />

        <ul className="grid gap-6 lg:grid-cols-2">
          {testimonials.map((item, index) => (
            <Reveal
              key={item.id}
              as="li"
              delay={index * 80}
              className="relative overflow-hidden rounded-2xl border border-border bg-surface/90 p-5 md:p-6 glow-hover"
            >
              <Quote className="h-6 w-6 text-primary/50" aria-hidden />

              <blockquote className="mt-3 text-sm leading-relaxed text-text md:text-base">
                &ldquo;{item.quote}&rdquo;
              </blockquote>

              <figcaption className="mt-4 border-t border-border/70 pt-4">
                <p className="text-sm font-semibold text-text">{item.author}</p>
                <p className="mt-0.5 text-xs text-muted">{item.role}</p>
                {item.context ? (
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted/80">{item.context}</p>
                ) : null}
                {item.sourceUrl ? (
                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-xs font-semibold text-primary-hover transition-colors hover:text-accent"
                  >
                    View the original
                  </a>
                ) : null}
              </figcaption>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
