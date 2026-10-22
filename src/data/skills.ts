export type SkillItem = {
  name: string;
  proficiency: number;
};

export type SkillCategory = {
  id: string;
  title: string;
  icon: string;
  skills: SkillItem[];
};

/** Fresher-friendly levels (~9 months web dev). Edit values in this file anytime. */
export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    icon: "layout",
    skills: [
      { name: "HTML", proficiency: 78 },
      { name: "CSS", proficiency: 72 },
      { name: "JavaScript", proficiency: 68 },
      { name: "React", proficiency: 62 },
      { name: "Next.js", proficiency: 58 },
      { name: "Tailwind CSS", proficiency: 70 },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: "server",
    skills: [
      { name: "Node.js", proficiency: 55 },
      { name: "Express.js", proficiency: 52 },
      { name: "MongoDB", proficiency: 50 },
      { name: "REST APIs", proficiency: 58 },
      { name: "JWT / OAuth", proficiency: 45 },
    ],
  },
  {
    id: "ui",
    title: "UI & UX",
    icon: "palette",
    skills: [
      { name: "Responsive Design", proficiency: 70 },
      { name: "Accessibility basics", proficiency: 48 },
      { name: "Component design", proficiency: 60 },
      { name: "Figma (layout)", proficiency: 45 },
      { name: "Recharts / charts", proficiency: 40 },
    ],
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    icon: "workflow",
    skills: [
      { name: "Git / GitHub", proficiency: 65 },
      { name: "npm / package scripts", proficiency: 62 },
      { name: "Docker basics", proficiency: 35 },
      { name: "CI/CD basics", proficiency: 38 },
      { name: "Cursor / VS Code", proficiency: 72 },
    ],
  },
];
