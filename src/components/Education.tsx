import { educationEntries } from "@/data/education";
import { SectionHeading } from "@/components/SectionHeading";
import { Timeline, type TimelineItem } from "@/components/Timeline";

const items: TimelineItem[] = educationEntries.map((e) => ({
  id: e.id,
  title: e.degree,
  subtitle: [e.institution, e.location].filter(Boolean).join(" · "),
  period: e.period,
  description: e.description,
  highlight: e.highlight,
}));

export function Education() {
  return (
    <section id="education" className="scroll-mt-28 py-16 md:py-24 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading eyebrow="Education" title="Educational Qualification" subtitle="Academic path and certifications." />
        <Timeline items={items} />
      </div>
    </section>
  );
}
