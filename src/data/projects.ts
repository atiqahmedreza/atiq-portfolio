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
    slug: "meridian-goods",
    name: "Meridian Goods",
    summary:
      "Polished e-commerce storefront with catalog, Firebase auth, and protected product management.",
    image: "/images/projects/meridian-goods.svg",
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
  {
    slug: "taskboard",
    name: "TaskBoard",
    summary: "Kanban-style task manager with drag-and-drop columns and team labels.",
    image: "/images/projects/mlops.svg",
    tags: ["React", "TypeScript", "Tailwind CSS", "Local API"],
    liveUrl: "#",
    githubUrl: "https://github.com/atiq-cse",
    description:
      "TaskBoard is a web-based Kanban board for personal and small-team planning. Users create columns, drag cards between stages, filter by labels, and persist state through a lightweight Express API. The UI prioritizes keyboard-friendly interactions and readable typography on phones and desktops.",
    challenges: [
      "Smooth drag-and-drop without jank on lower-end mobile browsers.",
      "Optimistic UI updates while saving card order to the server.",
      "Keeping bundle size small while adding rich filtering.",
    ],
    improvements: [
      "Real-time updates with WebSockets for shared boards.",
      "Due dates, notifications, and calendar export.",
      "Role-based permissions for team workspaces.",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
