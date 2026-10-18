export type EducationEntry = {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  period: string;
  description?: string;
  highlight?: boolean;
};

export const educationEntries: EducationEntry[] = [
  {
    id: "bsc-cse",
    degree: "B.Sc. in Computer Science and Engineering (CSE)",
    institution: "Varendra University",
    location: "Rajshahi, Bangladesh",
    period: "Expected graduation 2027",
    description:
      "Coursework spanning algorithms, databases, software engineering, and applied machine learning—with a growing focus on production ML systems.",
    highlight: true,
  },
  {
    id: "ostad-bootcamp",
    degree: "AI & ML Engineering Bootcamp",
    institution: "Ostad",
    period: "2024 – 2025",
    description:
      "Intensive hands-on training in ML pipelines, model evaluation, and deploying AI solutions with industry-oriented projects.",
  },
  {
    id: "nsda-cert",
    degree: "Certificate: AI in Immersive Technology, Level 6 (BNQF)",
    institution: "NSDA",
    period: "[YEAR PLACEHOLDER]",
    description:
      "National Skills Development Authority qualification covering AI applications in immersive and interactive environments.",
  },
  {
    id: "hsc",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "[INSTITUTION PLACEHOLDER]",
    location: "Bangladesh",
    period: "[YEAR PLACEHOLDER]",
  },
  {
    id: "ssc",
    degree: "Secondary School Certificate (SSC)",
    institution: "[INSTITUTION PLACEHOLDER]",
    location: "Bangladesh",
    period: "[YEAR PLACEHOLDER]",
  },
];
