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
    image: "/images/projects/wanderly.jpg",
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
    summary:
      "Ebook marketplace — browse and buy originals, writer publishing fees, role dashboards, and admin analytics.",
    image: "/images/projects/fable.jpg",
    tags: ["Next.js", "Express.js", "MongoDB Atlas", "Stripe", "JWT", "Vercel", "Render"],
    liveUrl: "https://fable-client-pi.vercel.app",
    githubUrl: "https://github.com/atiqahmedreza/fable-client",
    description:
      "Fable is a full-stack ebook sharing platform with separate Next.js and Express repos. Readers search, filter, and purchase single-copy titles; writers pay a one-time publishing fee then manage manuscripts; admins oversee users, the catalog, and revenue charts. JWT auth (7-day sessions), optional Google via Better Auth, Stripe or demo checkout, and MongoDB Atlas back the live deployment — client on Vercel and API on Render with CORS locked to the production origin. API repo: github.com/atiqahmedreza/fable-server.",
    challenges: [
      "Connecting Atlas, Render, and Vercel with correct MONGODB_URI, CLIENT_URL, and NEXT_PUBLIC_API_URL without CORS or auth failures.",
      "Keeping private-route reloads stable with JWT in localStorage while still supporting Google OAuth on the client.",
      "Modeling single-buyer ebook sales, writer fees, and admin analytics from real transaction records.",
    ],
    improvements: [
      "Enable production Stripe webhooks and imgBB uploads end-to-end on Render.",
      "Add Atlas Search for faster full-text discovery across long manuscript content.",
      "Expand automated smoke tests for login, browse, and dashboard reload flows.",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
