export const siteConfig = {
  name: "Atiq",
  title: "Atiq | Portfolio",
  description:
    "Portfolio of Atiq — CSE student at Varendra University, Rajshahi, building responsive websites and full-stack web applications.",
  url: "https://atiq-portfolio-pearl.vercel.app",
  designation: "Full Stack Web Developer | Frontend & Backend",
  pitch:
    "I design and build fast, accessible websites—from clean UI in React/Next.js to APIs and databases that power real products.",
  email: "atiqahmedreza@gmail.com",
  phone: "01706362712",
  whatsappNumber: "8801706362712",
  resumePath: "/resume.pdf",
  profileImage: "/images/profile.jpg",
  github: "https://github.com/atiq-cse",
  linkedin: "https://www.linkedin.com/in/atiq-ahmed-21a673430/",
  typingRoles: ["Full Stack Developer", "Frontend Developer", "Backend Developer"],
  stats: [
    { label: "Projects Built", value: "10+" },
    { label: "Months Learning", value: "9" },
    { label: "Technologies", value: "20+" },
  ],
  aboutParagraphs: [
    "I'm Atiq, a CSE student at Varendra University (Rajshahi), graduating in 2027. I started with HTML, CSS, and JavaScript and now work mainly with React, Next.js, Node.js, and MongoDB. I like shipping complete web features: layouts that work on mobile, forms that validate well, and backends that stay simple and secure. Curious and practical—I learn quickly and enjoy turning ideas into live sites.",
    "Alongside web development, I'm building an interest in AI and machine learning—core concepts, practical models, and how intelligent systems fit into products. I'm also writing research papers and enjoy turning what I learn into clear, structured writing.",
  ],
  navLinks: [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#achievement", label: "Achievement" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ],
  contactForm: {
    formspreeId: "",
    useMailtoFallback: true,
  },
} as const;
