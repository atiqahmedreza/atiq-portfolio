export const siteConfig = {
  name: "Atiq Ahmed Reza",
  shortName: "Atiq",
  title: "Atiq Ahmed Reza — Full Stack Web Developer",
  description:
    "Full Stack Web Developer building production Next.js, Node.js, and MongoDB applications. CSE student at Varendra University, Rajshahi. Three deployed full-stack products with Stripe payments and JWT auth.",
  url: "https://atiq-portfolio-pearl.vercel.app",
  designation: "Full Stack Web Developer | Frontend & Backend",
  pitch:
    "I design and build fast, accessible websites—from clean UI in React/Next.js to APIs and databases that power real products.",
  email: "atiqahmedreza@gmail.com",
  /** Display form shown in the UI. */
  phone: "+880 1706 362712",
  /** E.164 form used for tel: links so the number dials from any country. */
  phoneE164: "+8801706362712",
  whatsappNumber: "8801706362712",
  location: "Rajshahi, Bangladesh",
  timezone: "GMT+6",
  availability: "Open to junior / entry-level full-stack and frontend roles — remote or on-site.",
  resumePath: "/resume.pdf",
  profileImage: "/images/profile.jpg",
  github: "https://github.com/atiqahmedreza",
  linkedin: "https://www.linkedin.com/in/atiq-ahmed-21a673430/",
  typingRoles: ["Full Stack Developer", "Frontend Developer", "Backend Developer"],
  stats: [
    { label: "Production Deployments", value: "3" },
    { label: "Full-Stack Projects", value: "3" },
    { label: "Technologies", value: "20+" },
  ],
  aboutParagraphs: [
    "I'm Atiq, a CSE student at Varendra University (Rajshahi), graduating in 2027. I started with HTML, CSS, and JavaScript and now work mainly with React, Next.js, Node.js, and MongoDB. I like shipping complete web features: layouts that work on mobile, forms that validate well, and backends that stay simple and secure. Curious and practical—I learn quickly and enjoy turning ideas into live sites.",
    "In 2026 I completed the Complete Web Development Course with Programming Hero, earning a Certificate of Completion with Excellence, and shipped three full-stack products to production — each with real authentication, payments, and a deployed API. Alongside web development, I'm building an interest in AI and machine learning: core concepts, practical models, and how intelligent systems fit into products.",
  ],
  navLinks: [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#achievement", label: "Achievement" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ],
  contactForm: {
    /**
     * Create a free form at https://formspree.io and set NEXT_PUBLIC_FORMSPREE_ID
     * in your environment (and in the Vercel project settings) to enable delivery.
     * Until it is set, the form shows a direct-email fallback instead of silently failing.
     */
    formspreeId: process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "",
  },
} as const;
