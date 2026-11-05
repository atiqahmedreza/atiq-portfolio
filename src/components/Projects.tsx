import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading title="Featured Projects" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-text glow-hover hover:border-primary/40"
          >
            Browse all projects by technology
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
