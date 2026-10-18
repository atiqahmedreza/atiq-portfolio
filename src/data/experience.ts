export type ExperienceEntry = {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: "hackathon" | "bootcamp" | "research" | "project" | "work";
  bullets: string[];
};

export const experienceEntries: ExperienceEntry[] = [
  {
    id: "medguard",
    role: "Hackathon Team Lead / ML Engineer",
    organization: "MedGuard AI — Emergency Triage Command Center",
    period: "2025",
    type: "hackathon",
    bullets: [
      "Built a Bangladesh-focused ER command center with multi-model risk scoring, SHAP explainability, and offline-first operation for unstable connectivity.",
      "Integrated triage workflows with interpretable alerts so clinicians can trust model outputs under time pressure.",
      "Coordinated full-stack and ML teammates across data ingestion, API design, and dashboard UX.",
    ],
  },
  {
    id: "mlops-platform",
    role: "Personal Project — MLOps Platform",
    organization: "Model & Data Monitoring Stack",
    period: "2025 – Present",
    type: "project",
    bullets: [
      "Designed dashboards for latency, drift, and data-quality signals with alerting hooks for retraining decisions.",
      "Prototyped CI/CD patterns for model artifacts, containerized services, and environment promotion.",
      "Documented observability practices aligned with production MLOps workflows.",
    ],
  },
  {
    id: "ostad-projects",
    role: "Bootcamp Practitioner",
    organization: "Ostad AI & ML Engineering Bootcamp",
    period: "2024 – 2025",
    type: "bootcamp",
    bullets: [
      "Completed end-to-end ML assignments from EDA through deployment-ready notebooks and API stubs.",
      "Practiced model validation, metric selection, and error analysis on real-world-style datasets.",
    ],
  },
  {
    id: "fable",
    role: "Full-Stack Developer",
    organization: "Fable — Ebook Sharing Platform",
    period: "2024 – 2025",
    type: "project",
    bullets: [
      "Shipped authentication (JWT + Google OAuth), payments with Stripe, and a Next.js + Express + MongoDB architecture.",
      "Implemented secure file handling and role-based access for shared digital libraries.",
    ],
  },
];
