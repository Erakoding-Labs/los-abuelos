# Los Abuelos Mexican Restaurant

Premium marketing website for **Los Abuelos Mexican Restaurant** — a family-owned Mexican restaurant in Menard, Texas.

Built with **SvelteKit · TypeScript (strict) · Tailwind CSS v4 · Lucide Icons**. Fully prerendered static output, SEO-optimized, accessible, and ready to deploy on **Vercel** or **Cloudflare Pages**.

## Features

- 6 pages: Home, Menu, About, Gallery, Reviews, Contact
- Sticky responsive navbar with mobile drawer
- Motion-style scroll-reveal animations (IntersectionObserver, respects `prefers-reduced-motion`)
- Menu with sticky category rail + scrollspy
- Masonry gallery with keyboard-navigable lightbox
- Contact form (mailto handoff — swap for a real endpoint when a backend is added)
- SEO: per-page titles/descriptions, Open Graph + Twitter cards, canonical URLs
- `Restaurant` / LocalBusiness JSON-LD schema, `sitemap.xml`, `robots.txt`
- Warm terracotta · cream · charcoal · gold design system (`src/app.css`)

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build (prerendered)
npm run preview  # preview the build
npm run check    # svelte-check (TypeScript)
```

## Project structure

```
src/
  app.css                  Design tokens, base styles, animations
  routes/                  +layout + 6 pages (all prerendered)
  lib/
    components/            Navbar, Footer, cards, sections, Seo, ...
      ui/                  Button, Card, Badge, StarRating, SectionHeading
    data/                  business, menu, reviews, content, images
    actions/reveal.ts      Scroll-reveal action
    seo.ts                 SEO helpers + JSON-LD schema
    utils.ts               cn() class merge
static/                    favicon, robots.txt, sitemap.xml
```

## Customization

- **Business info / hours** — `src/lib/data/business.ts` (single source of truth, also feeds JSON-LD).
- **Menu** — `src/lib/data/menu.ts`.
- **Reviews** — `src/lib/data/reviews.ts`.
- **Images** — `src/lib/data/images.ts`. Currently references the Unsplash CDN; swap the photo IDs for owned photography before launch and add a real `/static/og-image.jpg`.
- **Colors / fonts** — `@theme` block in `src/app.css`.
- **Site URL** — `SITE_URL` in `src/lib/seo.ts` (used for canonical + sitemap).

## Deploy

Uses `@sveltejs/adapter-auto`, which auto-detects Vercel and Cloudflare Pages — no config needed. Push to a connected repo, or:

- **Vercel:** import the repo; framework preset = SvelteKit.
- **Cloudflare Pages:** build command `npm run build`, output dir `.svelte-kit/cloudflare`.

For a pure static host, install `@sveltejs/adapter-static` and set it in `svelte.config.js` (all routes are already prerendered).
