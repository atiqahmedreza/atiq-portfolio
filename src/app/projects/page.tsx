import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getAllProjectTags, projects } from "@/data/projects";
import { ProjectsExplorer } from "@/components/ProjectsExplorer";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Full-stack projects by Atiq Ahmed Reza — each one deployed, with a public repository and a live URL. Filter by technology.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsIndexPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-28 md:px-6 md:py-32">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-text"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Back to home
      </Link>

      <h1 className="font-heading mt-6 text-3xl font-bold tracking-tight text-text md:text-4xl">All Projects</h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
        {projects.length} full-stack {projects.length === 1 ? "project" : "projects"}, each deployed with a live URL and
        a public repository. Filter by technology to see what I have shipped with it.
      </p>

      <div className="mt-10">
        <ProjectsExplorer projects={projects} tags={getAllProjectTags()} />
      </div>
    </div>
  );
}
