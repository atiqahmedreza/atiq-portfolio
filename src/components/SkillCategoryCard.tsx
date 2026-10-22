"use client";

import { GitBranch, LayoutGrid, Palette, Server } from "lucide-react";
import { motion } from "framer-motion";
import type { SkillCategory } from "@/data/skills";
import { useTheme } from "next-themes";
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
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-2xl border border-border/80 bg-gradient-to-br from-surface via-surface to-background p-6 glow-hover md:p-7"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" aria-hidden />

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
            <motion.li
              key={skill.name}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.05 + skillIndex * 0.03 }}
              className="flex flex-col items-center gap-2 rounded-xl border border-border/70 bg-background/50 p-3 text-center transition-transform duration-200 hover:-translate-y-0.5"
            >
              <span
                className="inline-flex h-11 w-11 items-center justify-center"
                aria-hidden
              >
                <SkillIcon className="h-8 w-8" style={{ color: brandColor }} />
              </span>
              <span className="text-[11px] font-medium leading-snug text-text">{skill.name}</span>
            </motion.li>
          );
        })}
      </ul>
    </motion.article>
  );
}
