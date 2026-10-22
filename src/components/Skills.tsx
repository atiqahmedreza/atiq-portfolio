import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillCategoryCard } from "@/components/SkillCategoryCard";

export function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-28 overflow-hidden py-16 md:py-24">
      <div className="skills-section-bg pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading title="Technical Skills" />
        <div className="mb-8 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-border/80 bg-surface/80 px-4 py-3 text-center">
            <p className="font-mono text-[10px] uppercase tracking-wider text-muted">Focus</p>
            <p className="mt-1 text-sm font-semibold text-text">Full-stack web</p>
          </div>
          <div className="rounded-xl border border-border/80 bg-surface/80 px-4 py-3 text-center">
            <p className="font-mono text-[10px] uppercase tracking-wider text-muted">Learning time</p>
            <p className="mt-1 text-sm font-semibold text-primary-hover">9 months</p>
          </div>
          <div className="rounded-xl border border-border/80 bg-surface/80 px-4 py-3 text-center sm:col-span-1">
            <p className="font-mono text-[10px] uppercase tracking-wider text-muted">Categories</p>
            <p className="mt-1 text-sm font-semibold text-text">{skillCategories.length} skill areas</p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <SkillCategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
