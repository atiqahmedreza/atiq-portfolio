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

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    icon: "layout",
    skills: [
      { name: "HTML", proficiency: 92 },
      { name: "CSS", proficiency: 88 },
      { name: "JavaScript", proficiency: 90 },
      { name: "React", proficiency: 85 },
      { name: "Next.js", proficiency: 82 },
      { name: "Tailwind CSS", proficiency: 88 },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: "server",
    skills: [
      { name: "Node.js", proficiency: 80 },
      { name: "Express.js", proficiency: 78 },
      { name: "MongoDB", proficiency: 75 },
      { name: "REST APIs", proficiency: 85 },
      { name: "JWT / OAuth", proficiency: 72 },
    ],
  },
  {
    id: "aiml",
    title: "AI / ML",
    icon: "brain",
    skills: [
      { name: "Python", proficiency: 82 },
      { name: "scikit-learn", proficiency: 75 },
      { name: "TensorFlow / PyTorch", proficiency: 68 },
      { name: "SHAP", proficiency: 70 },
      { name: "Pandas", proficiency: 80 },
    ],
  },
  {
    id: "mlops",
    title: "MLOps & Tools",
    icon: "workflow",
    skills: [
      { name: "Git / GitHub", proficiency: 88 },
      { name: "Docker", proficiency: 70 },
      { name: "CI/CD", proficiency: 72 },
      { name: "Model Monitoring", proficiency: 68 },
      { name: "Cursor", proficiency: 85 },
    ],
  },
];
