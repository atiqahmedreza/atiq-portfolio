"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/cn";

const ALL = "All";

type ProjectsExplorerProps = {
  projects: Project[];
  tags: string[];
};

export function ProjectsExplorer({ projects, tags }: ProjectsExplorerProps) {
  const [active, setActive] = useState<string>(ALL);

  const filtered = useMemo(
    () => (active === ALL ? projects : projects.filter((project) => project.tags.includes(active))),
    [active, projects],
  );

  const options = [ALL, ...tags];

  return (
    <>
      <div className="mb-8">
        <h2 className="sr-only">Filter projects by technology</h2>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by technology">
          {options.map((tag) => {
            const isActive = tag === active;
            const count = tag === ALL ? projects.length : projects.filter((p) => p.tags.includes(tag)).length;

            return (
              <button
                key={tag}
                type="button"
                onClick={() => setActive(tag)}
                aria-pressed={isActive}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 font-mono text-xs transition-colors",
                  isActive
                    ? "border-primary bg-primary text-on-primary"
                    : "border-border bg-surface text-muted hover:border-primary/40 hover:text-text",
                )}
              >
                {tag}
                {/* Opacities kept high enough to clear 4.5:1 in both themes at 10px:
                    on-primary/90 is 5.37:1 dark / 4.76:1 light, muted/80 is 9.76:1 / 5.62:1. */}
                <span className={cn("text-[10px]", isActive ? "text-on-primary/90" : "text-muted/80")}>{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      <p aria-live="polite" className="sr-only">
        {filtered.length} {filtered.length === 1 ? "project" : "projects"} shown
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </>
  );
}
