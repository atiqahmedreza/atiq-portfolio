"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/data/site";

export function TypingRoles() {
  const roles = siteConfig.typingRoles;
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          const next = current.slice(0, text.length + 1);
          setText(next);
          if (next === current) {
            setDeleting(true);
          }
        } else {
          const next = current.slice(0, text.length - 1);
          setText(next);
          if (next === "") {
            setDeleting(false);
            setRoleIndex((i) => (i + 1) % roles.length);
          }
        }
      },
      deleting ? 45 : text.length === roles[roleIndex].length ? 1400 : 70,
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex, roles]);

  return (
    <p className="font-mono text-sm md:text-base text-primary-hover min-h-[1.5rem]">
      <span aria-live="polite">{text}</span>
      <span className="inline-block w-[2px] h-4 ml-0.5 bg-primary-hover animate-pulse align-middle" aria-hidden />
    </p>
  );
}
