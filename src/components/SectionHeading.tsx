import { Reveal } from "@/components/Reveal";

type SectionHeadingProps = {
  id?: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({ id, title, subtitle }: SectionHeadingProps) {
  return (
    <Reveal id={id} className="mb-10 md:mb-12 scroll-mt-28" rootMargin="-80px">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-text tracking-tight">{title}</h2>
      {subtitle ? <p className="mt-3 max-w-2xl text-muted text-base md:text-lg leading-relaxed">{subtitle}</p> : null}
    </Reveal>
  );
}
