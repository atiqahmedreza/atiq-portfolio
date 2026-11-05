export type Achievement = {
  id: string;
  title: string;
  issuer: string;
  /** Short distinction shown as a badge, e.g. "With Excellence". */
  distinction?: string;
  /** Human-readable award date. */
  date: string;
  /** ISO date for <time dateTime>. */
  dateISO: string;
  /** Period the programme ran, if relevant. */
  period?: string;
  credentialId?: string;
  verifyUrl?: string;
  certificatePath?: string;
  description: string;
  skills: string[];
};

export const achievements: Achievement[] = [
  {
    id: "programming-hero-web-dev",
    title: "Complete Web Development Course",
    issuer: "Programming Hero",
    distinction: "With Excellence",
    date: "October 2026",
    dateISO: "2026-10-11",
    period: "January 2026 – October 2026",
    credentialId: "WEB13-3304 (batch-13)",
    verifyUrl: "https://web.programming-hero.com/verification?validationNumber=PHbatch-13WEB13-33041907",
    certificatePath: "/certificates/achievement.pdf",
    description:
      "Completed Programming Hero's flagship 10-month full-stack programme with the 'with Excellence' distinction, awarded for performance across assignments and shipped projects.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "AI-assisted development",
    ],
  },
];
