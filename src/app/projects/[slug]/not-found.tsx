import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <div className="mx-auto flex min-h-[50vh] max-w-3xl flex-col items-center justify-center px-4 py-28 text-center">
      <h1 className="font-heading text-2xl font-bold text-text">Project not found</h1>
      <p className="mt-2 text-muted">This slug is not in projects.ts.</p>
      <Link href="/#projects" className="mt-6 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white">
        Back to Projects
      </Link>
    </div>
  );
}
