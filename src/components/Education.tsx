import { educationEntries } from "@/data/education";
import { SectionHeading } from "@/components/SectionHeading";
import { EducationTimeline } from "@/components/EducationTimeline";

export function Education() {
  return (
    <section id="education" className="relative scroll-mt-28 overflow-hidden py-16 md:py-24">
      <div className="education-section-bg pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading title="Educational Qualification" />

        <EducationTimeline entries={educationEntries} />
      </div>
    </section>
  );
}
