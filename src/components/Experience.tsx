import { experienceEntries } from "@/data/experience";
import { SectionHeading } from "@/components/SectionHeading";
import { Timeline, type TimelineItem } from "@/components/Timeline";

const badgeLabels: Record<string, string> = {
  hackathon: "Hackathon",
  bootcamp: "Bootcamp",
  research: "Research",
  project: "Project",
  work: "Experience",
};

const items: TimelineItem[] = experienceEntries.map((e) => ({
  id: e.id,
  title: e.role,
  subtitle: e.organization,
  period: e.period,
  bullets: e.bullets,
  badge: badgeLabels[e.type],
}));

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-28 py-16 md:py-24 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Experience & Highlights"
          subtitle="Hackathons, bootcamps, and project work—editable in src/data/experience.ts."
        />
        <Timeline items={items} />
      </div>
    </section>
  );
}
