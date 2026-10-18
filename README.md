# Atiq — Personal Portfolio

Dark, professional portfolio built with **Next.js (App Router)**, **Tailwind CSS**, and **Framer Motion**. Content is driven by typed data files for easy updates.

## Live site

**Live:** [https://atiq-portfolio-pearl.vercel.app](https://atiq-portfolio-pearl.vercel.app)

**GitHub:** [https://github.com/atiqahmedreza/atiq-portfolio](https://github.com/atiqahmedreza/atiq-portfolio)

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Edit content

| What | File |
|------|------|
| Name, contact, socials, about text, stats | `src/data/site.ts` |
| Skills & proficiency bars | `src/data/skills.ts` |
| Education timeline | `src/data/education.ts` |
| Experience timeline | `src/data/experience.ts` |
| Projects & detail pages | `src/data/projects.ts` |

Adding a project: append an entry to `projects` in `src/data/projects.ts` with a unique `slug`. The page `/projects/[slug]` is generated automatically.

## Replace photo & resume

1. **Photo:** Replace `public/images/profile.jpg` with your professional headshot (recommended ~800×800, JPG or WebP).
2. **Resume:** Replace `public/resume.pdf` with your PDF. The hero and navbar link to `/resume.pdf`.

## Contact form

By default the form validates client-side and opens a **mailto:** link. To use [Formspree](https://formspree.io), set `contactForm.formspreeId` in `src/data/site.ts` and set `useMailtoFallback` to `false`.

## Deploy

### Vercel (recommended)

1. Push this repo to GitHub.
2. Import the repository at [vercel.com/new](https://vercel.com/new).
3. Use default Next.js settings; deploy.
4. Update `siteConfig.url` in `src/data/site.ts` with your production URL.

### Netlify

Connect the repo and set build command `npm run build`, publish directory `.next` is handled by Netlify’s Next adapter, or use `@netlify/plugin-nextjs`.

## Tech stack

- Next.js 16 App Router
- Tailwind CSS 4
- Framer Motion
- lucide-react & react-icons

## License

Private portfolio — © 2026 Atiq.
