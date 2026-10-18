"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface glow-hover"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-background">
        <Image
          src={project.image}
          alt={`${project.name} project preview`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className="font-heading text-xl font-semibold text-text">{project.name}</h3>
        <p className="mt-2 text-sm text-muted leading-relaxed flex-1">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="font-mono text-[11px] rounded-md border border-border px-2 py-0.5 text-muted">
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={`/projects/${project.slug}`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary-hover hover:text-accent transition-colors"
        >
          View Details
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </motion.article>
  );
}
