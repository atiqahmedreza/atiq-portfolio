import type { IconType } from "react-icons";
import { BiBarChartAlt2, BiLayer } from "react-icons/bi";
import { FaGlobe, FaUniversalAccess } from "react-icons/fa6";
import { MdOutlineSmartphone } from "react-icons/md";
import {
  SiCss,
  SiCursor,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGithub,
  SiGithubactions,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import { TbComponents } from "react-icons/tb";

const skillIconMap: Record<string, IconType> = {
  HTML: SiHtml5,
  CSS: SiCss,
  JavaScript: SiJavascript,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  MongoDB: SiMongodb,
  "REST APIs": FaGlobe,
  "JWT / OAuth": SiJsonwebtokens,
  "Responsive Design": MdOutlineSmartphone,
  "Accessibility basics": FaUniversalAccess,
  "Component design": TbComponents,
  "Figma (layout)": SiFigma,
  "Recharts / charts": BiBarChartAlt2,
  "Git / GitHub": SiGithub,
  "npm / package scripts": SiNpm,
  "Docker basics": SiDocker,
  "CI/CD basics": SiGithubactions,
  "Cursor / VS Code": SiCursor,
};

const fallbackIcon: IconType = BiLayer;

/** Official / common brand colors for skill icons */
const skillBrandColors: Record<string, string> = {
  HTML: "#E34F26",
  CSS: "#1572B6",
  JavaScript: "#F7DF1E",
  React: "#61DAFB",
  "Next.js": "#FFFFFF",
  "Tailwind CSS": "#06B6D4",
  "Node.js": "#339933",
  "Express.js": "#FFFFFF",
  MongoDB: "#47A248",
  "REST APIs": "#2563EB",
  "JWT / OAuth": "#D946EF",
  "Responsive Design": "#A78BFA",
  "Accessibility basics": "#0EA5E9",
  "Component design": "#F97316",
  "Figma (layout)": "#F24E1E",
  "Recharts / charts": "#22C55E",
  "Git / GitHub": "#FFFFFF",
  "npm / package scripts": "#CB3837",
  "Docker basics": "#2496ED",
  "CI/CD basics": "#2088FF",
  "Cursor / VS Code": "#007ACC",
};

const fallbackBrandColor = "#E8A088";

export function getSkillIcon(skillName: string): IconType {
  return skillIconMap[skillName] ?? fallbackIcon;
}

export function getSkillBrandColor(skillName: string): string {
  return skillBrandColors[skillName] ?? fallbackBrandColor;
}
