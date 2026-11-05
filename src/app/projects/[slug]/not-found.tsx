import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <div className="mx-auto flex min-h-[50vh] max-w-3xl flex-col items-center justify-center px-4 py-28 text-center">
      <h1 className="font-heading text-2xl font-bold text-text">Project not found</h1>
      <p className="mt-2 text-muted">That project doesn&apos;t exist or may have been renamed.</p>
      <Link href="/projects" className="mt-6 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-on-primary">
        Browse all projects
      </Link>
    </div>
  );
}
