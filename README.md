# Atiq Ahmed Reza — Portfolio

Personal portfolio built with **Next.js 16 (App Router)** and **Tailwind CSS 4**, with no animation library.
All content is driven by typed data files, so updating the site is a data edit rather than a markup edit.

**Live:** https://atiq-portfolio-pearl.vercel.app
**Repo:** https://github.com/atiqahmedreza/atiq-portfolio

---

## Highlights

- **Fully static** — every route is prerendered (`○ Static` / `● SSG`), including per-project detail pages.
- **Light & dark themes** with system-preference detection, driven by CSS custom properties.
- **Accessible by default** — skip link, focus trap in the mobile menu, `aria-current` navigation, labelled
  form errors, and WCAG AA contrast on all interactive text.
- **Reduced-motion aware** — every animation is CSS, so `prefers-reduced-motion` is honoured without
  shipping a byte of JS to the users who opt out.
- **Almost entirely server-rendered** — scroll reveals go through one small `<Reveal>` client component
  (an IntersectionObserver plus a CSS transition), so the sections themselves stay server components.
- **SEO complete** — `robots.txt`, `sitemap.xml`, a web manifest, canonical URLs, Open Graph/Twitter cards,
  and JSON-LD `Person` + `ProfilePage` + `SoftwareSourceCode` structured data.

---

## Getting started

```bash
npm install
cp .env.example .env.local   # optional, see "Contact form" below
npm run dev
```

Open http://localhost:3000.

## Scripts

| Script | What it does |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint (flat config) |
| `npm run lint:fix` | ESLint with autofix |
| `npm run typecheck` | `tsc --noEmit` |

CI runs lint, typecheck, and build on every push and pull request to `main`
(see [.github/workflows/ci.yml](.github/workflows/ci.yml)).

---

## Editing content

| What | File |
|------|------|
| Name, contact, socials, about text, stats, availability | `src/data/site.ts` |
| Skills by category | `src/data/skills.ts` |
| Experience entries | `src/data/experience.ts` |
| References / testimonials | `src/data/testimonials.ts` |
| Education timeline | `src/data/education.ts` |
| Certifications & achievements | `src/data/achievements.ts` |
| Projects & their detail pages | `src/data/projects.ts` |

**Adding a project:** append an entry to `projects` in `src/data/projects.ts` with a unique `slug`.
The route `/projects/[slug]`, the `/projects` index, the technology filter, and the sitemap entries are all
generated from that array.

**Adding a reference:** `src/data/testimonials.ts` ships empty on purpose, and the section renders nothing
while it is. Add an entry only for a quote you can point at a real source for — a LinkedIn recommendation,
a mentor's written feedback, a client email.

**Replacing the photo:** overwrite `public/images/profile.jpg`. Keep it square and around 800×800 —
the hero renders it at a maximum of 384 CSS pixels.

**Replacing the resume:** overwrite `public/resume.pdf`. The hero, navbar, and mobile menu all link to it.
Keep it a text-based PDF (not a scan) so applicant tracking systems can parse it.

---

## Contact form

The form posts to [Formspree](https://formspree.io) and reads its form ID from an environment variable:

```bash
# .env.local  — and the same key in your Vercel project settings
NEXT_PUBLIC_FORMSPREE_ID=your_form_id
```

If the variable is unset, the form does **not** fail silently: it tells the visitor the form is unavailable
and surfaces a direct `mailto:` link instead. A hidden honeypot field drops bot submissions.

---

## Deployment

### Vercel

1. Push to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new) — defaults are correct for Next.js.
3. Add `NEXT_PUBLIC_FORMSPREE_ID` under *Settings → Environment Variables*.
4. Set `siteConfig.url` in `src/data/site.ts` to the production URL (it drives canonical URLs,
   the sitemap, Open Graph tags, and JSON-LD).

---

## Tech stack

- Next.js 16 (App Router, React 19)
- Tailwind CSS 4
- next-themes
- lucide-react & react-icons
- TypeScript

## License

Private portfolio — © Atiq Ahmed Reza.
