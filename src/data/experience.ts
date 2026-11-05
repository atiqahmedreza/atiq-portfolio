export type ExperienceEntry = {
  id: string;
  role: string;
  organization: string;
  /** Short qualifier rendered as a badge, e.g. "Self-directed". */
  kind: string;
  location?: string;
  period: string;
  summary: string;
  bullets: string[];
  stack: string[];
  current?: boolean;
};

/**
 * Honest framing: these are self-directed and training engagements, not salaried roles.
 * Every bullet maps to something verifiable in the linked public repositories.
 * Replace or extend with employment/internship/client entries as they happen.
 */
export const experienceEntries: ExperienceEntry[] = [
  {
    id: "self-directed-fullstack",
    role: "Full-Stack Web Developer",
    organization: "Self-directed project work",
    kind: "Self-directed",
    location: "Rajshahi, Bangladesh",
    period: "Feb 2026 – Present",
    current: true,
    summary:
      "Designed, built, and deployed three full-stack products end to end — frontend, API, database, auth, payments, and hosting — each running live on public infrastructure.",
    bullets: [
      "Shipped three production applications (Wanderly, Meridian Goods, Fable), each with a public URL and an open-source repository.",
      "Built REST APIs on Express and MongoDB Atlas with JWT sessions, role-based access for user/admin dashboards, and Google OAuth via Better Auth.",
      "Integrated Stripe Checkout for payments, including webhook-driven entitlement updates and a demo-mode fallback for environments without live keys.",
      "Deployed a monorepo across split Render services and Vercel, configuring root directories, PORT binding, environment-based API URLs, and CORS locked to the production origin.",
      "Debugged real production issues: SSR/client hydration mismatches in auth-aware navigation, MongoDB ObjectId edge cases in slug lookups, and cold-start failures on free-tier hosting.",
    ],
    stack: ["Next.js", "React", "Express.js", "MongoDB", "Stripe", "JWT", "Tailwind CSS", "Vercel", "Render"],
  },
  {
    id: "programming-hero",
    role: "Full-Stack Web Development Trainee",
    organization: "Programming Hero",
    kind: "Intensive programme",
    location: "Remote",
    period: "Jan 2026 – Oct 2026",
    summary:
      "Completed a 10-month intensive full-stack programme, graduating with the 'with Excellence' distinction.",
    bullets: [
      "Worked through the full MERN stack curriculum: semantic HTML and CSS, JavaScript fundamentals, React, Next.js, Node.js, Express, and MongoDB.",
      "Delivered assignments and milestone projects on a recurring deadline cadence across the full programme.",
      "Earned the 'with Excellence' distinction (credential WEB13-3304), awarded on assignment and project performance.",
      "Practised AI-assisted development workflows as part of the programme's professional-readiness track.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Node.js", "Express.js", "MongoDB"],
  },
];
