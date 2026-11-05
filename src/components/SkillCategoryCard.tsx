"use client";

import { GitBranch, LayoutGrid, Palette, Server } from "lucide-react";
import { useTheme } from "next-themes";
import type { SkillCategory } from "@/data/skills";
import { Reveal } from "@/components/Reveal";
import { getSkillBrandColor, getSkillIcon } from "@/lib/skill-icons";

const lightModeDarkIcons = new Set(["Next.js", "Express.js", "Git / GitHub"]);

const iconMap = {
  layout: LayoutGrid,
  server: Server,
  palette: Palette,
  workflow: GitBranch,
} as const;

type SkillCategoryCardProps = {
  category: SkillCategory;
  index: number;
};

export function SkillCategoryCard({ category, index }: SkillCategoryCardProps) {
  const { resolvedTheme } = useTheme();
  const Icon = iconMap[category.icon as keyof typeof iconMap] ?? LayoutGrid;

  return (
    <Reveal
      as="article"
      delay={index * 80}
      rootMargin="-60px"
      className="group relative overflow-hidden rounded-2xl border border-border/80 bg-gradient-to-br from-surface via-surface to-background p-6 glow-hover md:p-7"
    >
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        aria-hidden
      />

      <div className="mb-5 flex items-center gap-3">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary-hover shadow-[0_0_24px_-8px_rgba(213,126,95,0.55)]">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <h3 className="font-heading text-lg font-semibold text-text">{category.title}</h3>
      </div>

      <ul className="grid grid-cols-3 gap-3 sm:grid-cols-4">
        {category.skills.map((skill, skillIndex) => {
          const SkillIcon = getSkillIcon(skill.name);
          let brandColor = getSkillBrandColor(skill.name);
          if (resolvedTheme === "light" && lightModeDarkIcons.has(skill.name)) {
            brandColor = "#1a1210";
          }

          return (
            <Reveal key={skill.name} as="li" variant="scale" delay={50 + skillIndex * 30}>
              {/* Hover-lift lives on the inner element: the reveal owns the outer
                  transform, so the two would otherwise fight. */}
              <div className="flex h-full flex-col items-center gap-2 rounded-xl border border-border/70 bg-background/50 p-3 text-center transition-transform duration-200 hover:-translate-y-0.5">
                <span className="inline-flex h-11 w-11 items-center justify-center" aria-hidden>
                  <SkillIcon className="h-8 w-8" style={{ color: brandColor }} />
                </span>
                <span className="text-[11px] font-medium leading-snug text-text">{skill.name}</span>
              </div>
            </Reveal>
          );
        })}
      </ul>
    </Reveal>
  );
}
