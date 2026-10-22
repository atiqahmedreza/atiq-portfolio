"use client";

import { useState } from "react";
import { siteConfig } from "@/data/site";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

export function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!form.name.trim()) next.name = "Name is required.";
    if (!form.email.trim()) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email.";
    if (!form.message.trim()) next.message = "Message is required.";
    else if (form.message.trim().length < 10) next.message = "Message should be at least 10 characters.";
    return next;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    const { formspreeId, useMailtoFallback } = siteConfig.contactForm;

    if (formspreeId) {
      try {
        const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(form),
        });
        if (!res.ok) throw new Error("Formspree error");
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        return;
      } catch {
        setStatus("error");
        return;
      }
    }

    if (useMailtoFallback) {
      const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
      window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
      setStatus("success");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text mb-1.5">
          Name
        </label>
        <input
          id="name"
          name="name"
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-text placeholder:text-muted/90 focus:border-primary/50"
          placeholder="Your name"
          autoComplete="name"
        />
        {errors.name ? <p className="mt-1 text-xs text-red-400">{errors.name}</p> : null}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text mb-1.5">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-text placeholder:text-muted/90 focus:border-primary/50"
          placeholder="you@example.com"
          autoComplete="email"
        />
        {errors.email ? <p className="mt-1 text-xs text-red-400">{errors.email}</p> : null}
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          className="w-full resize-y rounded-xl border border-border bg-background px-4 py-3 text-sm text-text placeholder:text-muted/90 focus:border-primary/50"
          placeholder="Tell me about your project or opportunity..."
        />
        {errors.message ? <p className="mt-1 text-xs text-red-400">{errors.message}</p> : null}
      </div>
      <button
        type="submit"
        className="w-full rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white glow-hover hover:bg-primary-hover transition-colors"
      >
        Send Message
      </button>
      {status === "success" ? (
        <p className="text-sm text-accent" role="status">
          Thanks! Your message client is ready to send (mailto or Formspree when configured).
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-red-400" role="alert">
          Something went wrong. Please email me directly.
        </p>
      ) : null}
    </form>
  );
}
