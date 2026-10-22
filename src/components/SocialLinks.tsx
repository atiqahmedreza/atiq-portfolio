import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/cn";

const items = [
  {
    href: siteConfig.github,
    label: "GitHub profile",
    Icon: FaGithub,
    iconClass: "text-[#181717] dark:text-white",
  },
  {
    href: siteConfig.linkedin,
    label: "LinkedIn profile",
    Icon: FaLinkedin,
    iconClass: "text-[#0A66C2]",
  },
] as const;

type SocialLinksProps = {
  className?: string;
  iconClassName?: string;
};

export function SocialLinks({ className, iconClassName }: SocialLinksProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      {items.map(({ href, label, Icon, iconClass }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={cn(
            "inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface glow-hover hover:border-primary/40 transition-colors",
            iconClassName,
          )}
        >
          <Icon className={cn("h-5 w-5", iconClass)} aria-hidden />
        </a>
      ))}
    </div>
  );
}
