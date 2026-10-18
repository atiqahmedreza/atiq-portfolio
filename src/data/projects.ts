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
    slug: "fable",
    name: "Fable",
    summary: "Full-stack ebook sharing platform with auth, payments, and digital libraries.",
    image: "/images/projects/fable.svg",
    tags: ["Next.js", "Express.js", "MongoDB", "Stripe", "JWT", "Google OAuth"],
    liveUrl: "#",
    githubUrl: "https://github.com/atiq-cse",
    description:
      "Fable is a production-style ebook sharing platform where readers discover titles, manage personal shelves, and publishers distribute DRM-aware digital copies. The Next.js frontend delivers fast, SEO-friendly browsing while an Express API handles authentication, entitlements, and Stripe checkout. MongoDB stores users, catalogs, and purchase records with indexing tuned for search and admin workflows.",
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
    slug: "medguard-ai",
    name: "MedGuard AI",
    summary: "Bangladesh-focused ER command center with AI triage and SHAP explainability.",
    image: "/images/projects/medguard.svg",
    tags: ["Python", "FastAPI", "React", "SHAP", "scikit-learn", "Offline-first"],
    liveUrl: "#",
    githubUrl: "https://github.com/atiq-cse",
    description:
      "MedGuard AI targets emergency departments in Bangladesh with a command-center dashboard for patient triage, multi-model risk radar, and explainable alerts. The system combines vital signs, structured intake, and heuristic fallbacks when connectivity drops—critical for rural and overloaded urban hospitals. SHAP summaries help clinicians understand why a case was flagged without slowing bedside decisions.",
    challenges: [
      "Building interpretable models that remain useful on imbalanced, noisy clinical-style data.",
      "Supporting offline operation with sync conflict resolution when the network returns.",
      "Designing UX that surfaces risk without alarm fatigue during peak ER volume.",
    ],
    improvements: [
      "Integrate HL7/FHIR adapters for hospital EMR systems.",
      "Add federated learning pilots for privacy-preserving model updates.",
      "Run prospective validation with partner clinics and formal usability studies.",
    ],
  },
  {
    slug: "mlops-monitoring",
    name: "MLOps Monitoring & Observability Platform",
    summary: "Model and data monitoring with drift detection and operational dashboards.",
    image: "/images/projects/mlops.svg",
    tags: ["Python", "Docker", "Grafana", "Prometheus", "MLflow", "Next.js"],
    liveUrl: "#",
    githubUrl: "https://github.com/atiq-cse",
    description:
      "A reference MLOps stack for tracking model performance, input drift, and data-quality regressions after deployment. Services emit metrics to Prometheus-compatible endpoints; dashboards visualize latency percentiles, prediction distributions, and alert thresholds. The UI lets engineers annotate incidents, link deployments to metric shifts, and export reports for stakeholders.",
    challenges: [
      "Defining drift metrics that correlate with business impact rather than false positives.",
      "Keeping instrumentation overhead low enough for edge and batch inference paths.",
      "Unifying batch and online feature pipelines under one observability model.",
    ],
    improvements: [
      "Plug in Evidently or WhyLabs for automated drift reports.",
      "Add canary deployments and automatic rollback hooks in CI/CD.",
      "Support multi-tenant workspaces for team-scale model catalogs.",
    ],
  },
  {
    slug: "keenkeeper",
    name: "KeenKeeper",
    summary: "Friendship-tracking web app with insights and gentle reminders.",
    image: "/images/projects/keenkeeper.svg",
    tags: ["Next.js", "Tailwind CSS", "Recharts", "Local Storage"],
    liveUrl: "#",
    githubUrl: "https://github.com/atiq-cse",
    description:
      "KeenKeeper helps you maintain meaningful connections by logging touchpoints, notes, and milestones. Built with Next.js and Tailwind, it uses Recharts for relationship health trends and reminder nudges based on configurable intervals. The focus is privacy-first storage with export options and a calm, distraction-free interface.",
    challenges: [
      "Designing analytics that feel supportive rather than guilt-inducing.",
      "Implementing responsive charts that stay readable on small screens.",
      "Structuring client-side data for fast filters without a backend initially.",
    ],
    improvements: [
      "Optional cloud sync with end-to-end encryption.",
      "Calendar integrations for suggested check-in times.",
      "Shared circles for small friend groups with consent controls.",
    ],
  },
  {
    slug: "game-recommendation-ml",
    name: "Game Recommendation ML System",
    summary: "Machine learning recommender for personalized game discovery.",
    image: "/images/projects/games-ml.svg",
    tags: ["Python", "Pandas", "scikit-learn", "Collaborative Filtering", "Flask"],
    liveUrl: "#",
    githubUrl: "https://github.com/atiq-cse",
    description:
      "A hybrid recommendation engine combining collaborative filtering with content-based features (genre, platform, playtime). The pipeline ingests user–item interaction logs, trains matrix factorization and neighborhood models, and serves top-N suggestions through a lightweight Flask API. Evaluation uses hold-out precision@K and coverage metrics to avoid popularity bias.",
    challenges: [
      "Cold-start recommendations for new users with sparse history.",
      "Handling implicit feedback (clicks vs. purchases) in a single scoring framework.",
      "Keeping training reproducible with versioned datasets and random seeds.",
    ],
    improvements: [
      "Add deep learning embeddings (Two-Tower) for richer item representations.",
      "Deploy as a containerized microservice with A/B testing hooks.",
      "Incorporate real-time event streams for session-based recommendations.",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
