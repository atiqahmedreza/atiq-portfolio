export const siteConfig = {
  name: "Atiq",
  title: "Atiq | MLOps Engineer in the Making",
  description:
    "Portfolio of Atiq — CSE undergraduate at Varendra University, Rajshahi, building production-grade ML systems, full-stack apps, and MLOps tooling.",
  url: "https://atiq-portfolio-pearl.vercel.app",
  designation:
    "MLOps Engineer in the Making | Full Stack and AI/ML Developer",
  pitch:
    "I build reliable, production-grade ML systems—from data pipelines and model serving to monitoring and observability—so AI works when it matters.",
  email: "YOUR_EMAIL@example.com",
  phone: "+880-1XXX-XXXXXX",
  whatsappNumber: "8801XXXXXXXXX",
  resumePath: "/resume.pdf",
  profileImage: "/images/profile.jpg",
  github: "https://github.com/atiq-cse",
  linkedin: "#",
  facebook: "#",
  twitter: "#",
  typingRoles: ["MLOps Engineer", "Full Stack Developer", "AI/ML Engineer"],
  stats: [
    { label: "Projects Built", value: "12+" },
    { label: "Years Learning", value: "4+" },
    { label: "Technologies", value: "25+" },
  ],
  aboutParagraphs: [
    "Hi, I'm Atiq—a Computer Science and Engineering student at Varendra University, Rajshahi, graduating in 2027. My path into tech started with vanilla HTML, CSS, and JavaScript: building static pages, debugging layout quirks, and learning how the web actually works under the hood. That foundation still shapes how I think about systems today—clear structure, predictable behavior, and user-first design.",
    "From there I moved into React and Next.js, then full-stack work with Node.js, Express, and MongoDB. Lately I've been deepening my AI/ML stack with Python, scikit-learn, and TensorFlow/PyTorch fundamentals, while orienting my career toward MLOps: packaging models, automating deployments, and making sure they stay healthy in production.",
    "The work I enjoy most sits at the intersection of engineering and impact—shipping end-to-end features, wiring CI/CD, instrumenting models for drift and latency, and turning research prototypes into tools people can rely on. Whether it's a hackathon triage dashboard or a monitoring platform for model behavior, I care about reliability as much as accuracy.",
    "[HOBBY PLACEHOLDER: e.g., reading tech blogs, football, photography—edit in src/data/site.ts]",
    "I'm curious, practical, and always learning—the kind of person who reads docs at midnight and still shows up ready to pair-program the next morning.",
  ],
  navLinks: [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ],
  contactForm: {
    formspreeId: "",
    useMailtoFallback: true,
  },
} as const;
