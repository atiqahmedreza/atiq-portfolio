import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillCategoryCard } from "@/components/SkillCategoryCard";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-28 py-16 md:py-24 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Skills"
          title="Technical Skills"
          subtitle="Proficiency levels are editable in src/data/skills.ts."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <SkillCategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
