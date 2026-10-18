import { FaFacebook, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/cn";

const items = [
  { href: siteConfig.github, label: "GitHub profile", Icon: FaGithub },
  { href: siteConfig.linkedin, label: "LinkedIn profile", Icon: FaLinkedin },
  { href: siteConfig.facebook, label: "Facebook profile", Icon: FaFacebook },
  { href: siteConfig.twitter, label: "X (Twitter) profile", Icon: FaXTwitter },
] as const;

type SocialLinksProps = {
  className?: string;
  iconClassName?: string;
};

export function SocialLinks({ className, iconClassName }: SocialLinksProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      {items.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={cn(
            "inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface text-muted glow-hover hover:text-primary-hover hover:border-primary/40",
            iconClassName,
          )}
        >
          <Icon className="h-5 w-5" aria-hidden />
        </a>
      ))}
    </div>
  );
}
