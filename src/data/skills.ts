export type SkillItem = {
  name: string;
};

export type SkillCategory = {
  id: string;
  title: string;
  icon: string;
  skills: SkillItem[];
};

/** Technologies I actively build with. Edit this file to add or remove entries. */
export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    icon: "layout",
    skills: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: "server",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "REST APIs" },
      { name: "JWT / OAuth" },
    ],
  },
  {
    id: "ui",
    title: "UI & UX",
    icon: "palette",
    skills: [
      { name: "Responsive Design" },
      { name: "Accessibility basics" },
      { name: "Component design" },
      { name: "Figma (layout)" },
      { name: "Recharts / charts" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    icon: "workflow",
    skills: [
      { name: "Git / GitHub" },
      { name: "npm / package scripts" },
      { name: "Docker basics" },
      { name: "CI/CD basics" },
      { name: "Cursor / VS Code" },
    ],
  },
];
