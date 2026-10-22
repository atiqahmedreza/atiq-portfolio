export type Project = {
  slug: string;
  name: string;
  summary: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  description: string;
  challenges: string[];
  improvements: string[];
};

export const projects: Project[] = [
  {
    slug: "wanderly",
    name: "Wanderly",
    summary:
      "Full-stack travel agency for Bangladesh tours — explore packages, book with Stripe, and admin dashboards.",
    image: "/images/projects/wanderly.svg",
    tags: ["Next.js", "Express.js", "MongoDB", "Stripe", "JWT", "Render"],
    liveUrl: "https://wanderly-travel-agency-1.onrender.com",
    githubUrl: "https://github.com/atiqahmedreza/wanderly-travel-agency",
    description:
      "Wanderly is a production-style travel platform built as a monorepo: a Next.js 14 frontend with Explore filters, package detail pages, blogs, and role-based user and admin dashboards, paired with an Express API on MongoDB Atlas. JWT auth secures bookings and wishlists; Stripe Checkout handles payments with a dev fallback when keys are absent. The app is deployed on Render with separate API and web services, CORS tied to the live client URL, and seed data for nine Bangladesh tour packages.",
    challenges: [
      "Deploying Next.js and Express from one repo on Render with correct root directories, PORT binding, and env-based API URLs.",
      "Fixing hydration and image delivery on Render’s free tier without broken thumbnails or 502s during cold starts.",
      "Keeping blog slug lookup and booking flows reliable against MongoDB ObjectId edge cases in production.",
    ],
    improvements: [
      "Add email confirmations and booking reminders after Stripe checkout.",
      "Expand admin analytics and export for seasonal demand.",
      "Introduce multi-currency pricing and localized Bengali UI copy.",
    ],
  },
  {
    slug: "meridian-goods",
    name: "Meridian Goods",
    summary:
      "Polished e-commerce storefront with catalog, Firebase auth, and protected product management.",
    image: "/images/projects/meridian-goods.png",
    tags: ["Next.js", "Firebase", "TypeScript", "Tailwind CSS", "App Router"],
    liveUrl: "https://remontada-shop.vercel.app",
    githubUrl: "https://github.com/atiqahmedreza/meridian-goods",
    description:
      "Meridian Goods is a full-featured storefront built for a Next.js assessment: public landing and catalog pages, dynamic product detail routes, and Firebase-powered sign-in. Signed-in users can add and manage custom products persisted in the browser, with responsive layouts, search and filters, and accessible forms throughout.",
    challenges: [
      "Keeping SSR and client auth UI in sync to avoid hydration mismatches in the navbar.",
      "Configuring Firebase for both local development and Vercel production with public env vars.",
      "Matching assessment specs for product cards, protected routes, and deployment deliverables.",
    ],
    improvements: [
      "Persist user-added products with Firestore instead of localStorage only.",
      "Connect checkout to a payment provider and order history.",
      "Add automated E2E tests for auth and protected routes.",
    ],
  },
  {
    slug: "fable",
    name: "Fable",
    summary: "Full-stack ebook sharing platform with auth, payments, and digital libraries.",
    image: "/images/projects/fable.svg",
    tags: ["Next.js", "Express.js", "MongoDB", "Stripe", "JWT", "Google OAuth"],
    liveUrl: "#",
    githubUrl: "https://github.com/atiq-cse",
    description:
      "Fable is a production-style ebook sharing platform where readers discover titles, manage personal shelves, and publishers distribute digital copies. The Next.js frontend delivers fast, SEO-friendly browsing while an Express API handles authentication, entitlements, and Stripe checkout. MongoDB stores users, catalogs, and purchase records with indexing tuned for search and admin workflows.",
    challenges: [
      "Designing OAuth and JWT flows that stay secure without hurting signup conversion.",
      "Modeling ebook entitlements and Stripe webhooks so access updates reliably after payment.",
      "Balancing file upload size limits with responsive preview generation on the client.",
    ],
    improvements: [
      "Add full-text search with Elasticsearch or Atlas Search.",
      "Introduce reading progress sync and offline PWA support.",
      "Harden rate limiting and audit logging for admin actions.",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
