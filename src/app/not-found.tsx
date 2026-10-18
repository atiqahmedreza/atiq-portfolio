import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-center justify-center px-4 py-24 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">404</p>
      <h1 className="font-heading mt-3 text-3xl font-bold text-text">Page not found</h1>
      <p className="mt-3 max-w-md text-muted">The page you requested does not exist or may have moved.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white glow-hover">
          Back to Home
        </Link>
        <Link
          href="/#projects"
          className="rounded-xl border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-text glow-hover"
        >
          View Projects
        </Link>
      </div>
    </div>
  );
}
