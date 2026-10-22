import { Mail, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";

export function Contact() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}`;

  return (
    <section id="contact" className="scroll-mt-28 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading title="Get In Touch" />
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-surface p-6 glow-hover space-y-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-start gap-3 text-text hover:text-primary-hover transition-colors"
              >
                <Mail className="h-5 w-5 mt-0.5 shrink-0 text-primary" aria-hidden />
                <span>
                  <span className="block text-xs font-mono uppercase tracking-wider text-muted mb-0.5">Email</span>
                  {siteConfig.email}
                </span>
              </a>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="flex items-start gap-3 text-text hover:text-primary-hover transition-colors">
                <Phone className="h-5 w-5 mt-0.5 shrink-0 text-primary" aria-hidden />
                <span>
                  <span className="block text-xs font-mono uppercase tracking-wider text-muted mb-0.5">Phone</span>
                  {siteConfig.phone}
                </span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-medium text-text glow-hover hover:border-primary/40"
              >
                <MessageCircle className="h-4 w-4 text-accent" aria-hidden />
                Chat on WhatsApp
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-6 md:p-8 glow-hover">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
