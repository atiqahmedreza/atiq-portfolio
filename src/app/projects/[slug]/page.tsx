import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { getAllProjectSlugs, getProjectBySlug } from "@/data/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.name,
    description: project.summary,
    openGraph: {
      title: project.name,
      description: project.summary,
      images: [{ url: project.image, alt: project.name }],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const isLivePlaceholder = project.liveUrl === "#";

  return (
    <article className="mx-auto max-w-4xl px-4 py-28 md:px-6 md:py-32">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-primary-hover transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Back to Projects
      </Link>

      <header className="space-y-4">
        <h1 className="font-heading text-3xl md:text-5xl font-bold text-text tracking-tight">{project.name}</h1>
        <p className="text-lg text-muted leading-relaxed">{project.summary}</p>
      </header>

      <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-surface">
        <Image
          src={project.image}
          alt={`${project.name} hero screenshot`}
          fill
          priority
          sizes="(max-width: 896px) 100vw, 896px"
          className="object-cover"
        />
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="font-mono text-xs rounded-lg border border-border bg-surface px-2.5 py-1 text-muted">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {isLivePlaceholder ? (
          <span className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2.5 text-sm text-muted">
            <ExternalLink className="h-4 w-4" aria-hidden />
            Live demo — add URL in projects.ts
          </span>
        ) : (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white glow-hover"
          >
            <ExternalLink className="h-4 w-4" aria-hidden />
            Live Project
          </a>
        )}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2.5 text-sm font-semibold text-text glow-hover"
        >
          <FaGithub className="h-4 w-4" aria-hidden />
          GitHub Repository
        </a>
      </div>

      <section className="mt-12 space-y-4">
        <h2 className="font-heading text-2xl font-semibold text-text">Overview</h2>
        <p className="text-muted leading-relaxed">{project.description}</p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-heading text-2xl font-semibold text-text">Challenges</h2>
        <ul className="list-disc space-y-2 pl-5 text-muted leading-relaxed">
          {project.challenges.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-heading text-2xl font-semibold text-text">Future Improvements</h2>
        <ul className="list-disc space-y-2 pl-5 text-muted leading-relaxed">
          {project.improvements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </article>
  );
}
