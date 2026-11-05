import { experienceEntries } from "@/data/experience";
import { SectionHeading } from "@/components/SectionHeading";
import { ExperienceCard } from "@/components/ExperienceCard";

export function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-28 overflow-hidden py-16 md:py-24">
      <div className="skills-section-bg pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          title="Experience"
          subtitle="Self-directed and training work — every item below maps to a public repository or credential."
        />

        <ol className="relative space-y-5 md:space-y-6">
          {experienceEntries.map((entry, index) => (
            <ExperienceCard key={entry.id} entry={entry} index={index} />
          ))}
        </ol>
      </div>
    </section>
  );
}
