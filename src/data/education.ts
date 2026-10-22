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
      "Algorithms, databases, software engineering, and web technology coursework with team projects.",
    highlight: true,
  },
  {
    id: "hsc",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Agrani School and College",
    location: "Bangladesh",
    period: "Passed 2021",
  },
  {
    id: "ssc",
    degree: "Secondary School Certificate (SSC)",
    institution: "Agrani School and College",
    location: "Bangladesh",
    period: "Passed 2019",
  },
];
