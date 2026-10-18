"use client";

import { Brain, GitBranch, LayoutGrid, Server } from "lucide-react";
import { motion } from "framer-motion";
import type { SkillCategory } from "@/data/skills";

const iconMap = {
  layout: LayoutGrid,
  server: Server,
  brain: Brain,
  workflow: GitBranch,
} as const;

type SkillCategoryCardProps = {
  category: SkillCategory;
  index: number;
};

export function SkillCategoryCard({ category, index }: SkillCategoryCardProps) {
  const Icon = iconMap[category.icon as keyof typeof iconMap] ?? LayoutGrid;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="rounded-2xl border border-border bg-surface p-6 glow-hover"
    >
      <div className="flex items-center gap-3 mb-5">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary-hover">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <h3 className="font-heading text-lg font-semibold text-text">{category.title}</h3>
      </div>
      <ul className="space-y-4">
        {category.skills.map((skill) => (
          <li key={skill.name}>
            <div className="flex justify-between text-sm mb-1.5">
              <span className="text-text font-medium">{skill.name}</span>
              <span className="font-mono text-xs text-muted">{skill.proficiency}%</span>
            </div>
            <div className="h-2 rounded-full bg-background overflow-hidden border border-border/60">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.proficiency}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 + index * 0.05 }}
              />
            </div>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
