"use client";

import { useId, useState } from "react";
import { siteConfig } from "@/data/site";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;
type Status = "idle" | "submitting" | "success" | "error";

const EMPTY: FormState = { name: "", email: "", message: "" };

export function ContactForm() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  /** Bot trap: real people never fill a hidden field. */
  const [honeypot, setHoneypot] = useState("");
  const uid = useId();

  const endpointConfigured = Boolean(siteConfig.contactForm.formspreeId);

  const fieldId = (k: keyof FormState) => `${uid}-${k}`;
  const errorId = (k: keyof FormState) => `${uid}-${k}-error`;

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!form.name.trim()) next.name = "Name is required.";
    if (!form.email.trim()) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email address.";
    if (!form.message.trim()) next.message = "Message is required.";
    else if (form.message.trim().length < 10) next.message = "Message should be at least 10 characters.";
    return next;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;

    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      // Move focus to the first problem so keyboard and screen-reader users land on it.
      const firstKey = (Object.keys(nextErrors) as (keyof FormState)[])[0];
      document.getElementById(fieldId(firstKey))?.focus();
      return;
    }

    if (honeypot) {
      // Silently accept and drop — do not tell the bot it failed.
      setStatus("success");
      setForm(EMPTY);
      return;
    }

    if (!endpointConfigured) {
      // No endpoint configured: hand the message to the visitor's mail client
      // with everything already filled in, rather than losing what they typed.
      const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
      const body = encodeURIComponent(`${form.message}

--
${form.name}
${form.email}`);
      window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(`https://formspree.io/f/${siteConfig.contactForm.formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(`Formspree responded ${res.status}`);
      setStatus("success");
      setForm(EMPTY);
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-text placeholder:text-muted/90 focus:border-primary/50 aria-[invalid=true]:border-red-500";

  if (status === "success") {
    return (
      <div className="flex min-h-[18rem] flex-col items-center justify-center gap-3 text-center" role="status">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-2xl text-accent">
          ✓
        </span>
        <p className="font-heading text-lg font-semibold text-text">Message sent</p>
        <p className="max-w-sm text-sm text-muted">
          Thanks for reaching out — I&apos;ll reply to you by email, usually within a day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 rounded-xl border border-border bg-surface px-4 py-2 text-sm font-medium text-text glow-hover hover:border-primary/40"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {!endpointConfigured ? (
        <p className="rounded-xl border border-border bg-background/60 px-4 py-3 text-xs leading-relaxed text-muted">
          Heads up: sending opens your email app with this message ready to go. Prefer to write it yourself?{" "}
          <a href={`mailto:${siteConfig.email}`} className="font-semibold text-primary-hover underline">
            {siteConfig.email}
          </a>
          .
        </p>
      ) : null}

      <div>
        <label htmlFor={fieldId("name")} className="block text-sm font-medium text-text mb-1.5">
          Name
        </label>
        <input
          id={fieldId("name")}
          name="name"
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          className={inputClass}
          placeholder="Your name"
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? errorId("name") : undefined}
        />
        {errors.name ? (
          <p id={errorId("name")} className="mt-1 text-xs text-red-400">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor={fieldId("email")} className="block text-sm font-medium text-text mb-1.5">
          Email
        </label>
        <input
          id={fieldId("email")}
          name="email"
          type="email"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          className={inputClass}
          placeholder="you@example.com"
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? errorId("email") : undefined}
        />
        {errors.email ? (
          <p id={errorId("email")} className="mt-1 text-xs text-red-400">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor={fieldId("message")} className="block text-sm font-medium text-text mb-1.5">
          Message
        </label>
        <textarea
          id={fieldId("message")}
          name="message"
          rows={5}
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          className={`${inputClass} resize-y`}
          placeholder="Tell me about your project or opportunity..."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? errorId("message") : undefined}
        />
        {errors.message ? (
          <p id={errorId("message")} className="mt-1 text-xs text-red-400">
            {errors.message}
          </p>
        ) : null}
      </div>

      {/* Honeypot — visually and programmatically hidden from people, visible to bots. */}
      <div className="absolute left-[-9999px]" aria-hidden>
        <label htmlFor={`${uid}-company`}>Company (leave blank)</label>
        <input
          id={`${uid}-company`}
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-on-primary glow-hover hover:bg-primary-hover transition-colors disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? "Sending…" : endpointConfigured ? "Send Message" : "Send via email app"}
      </button>

      {status === "error" ? (
        <p className="text-sm text-red-400" role="alert">
          Sorry — that didn&apos;t go through. Please email me directly at{" "}
          <a href={`mailto:${siteConfig.email}`} className="font-semibold underline">
            {siteConfig.email}
          </a>
          .
        </p>
      ) : null}
    </form>
  );
}
