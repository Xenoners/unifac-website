# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server on localhost:3000
npm run build    # Production build
npm run lint     # ESLint
```

## Stack

- **Next.js 16** (App Router) — check `node_modules/next/dist/docs/` before writing any Next.js code; v16 has breaking changes vs prior versions
- **React 19** with Server Components by default; add `'use client'` only for components needing state/events/browser APIs
- **Tailwind CSS v4** — config is CSS-based via `@theme` in `globals.css`, no `tailwind.config.js`
- **next-sanity + @sanity/image-url** — installed but Sanity project not yet initialized; env vars needed

## Architecture

```
src/
  app/                     # App Router — every folder = a route
    layout.tsx             # Root layout: Navbar + Footer wrap all pages
    page.tsx               # Homepage
    over/page.tsx          # About Unifac
    over/pijlers/page.tsx  # Four pillars
    team/page.tsx          # Board members
    activiteiten/page.tsx  # Events listing
    clubs/page.tsx         # Student clubs by category
    partners/page.tsx      # Sponsors/partners
    contact/page.tsx       # Contact info
  components/
    Navbar.tsx             # 'use client' — sticky nav with mobile menu + dropdown
    Footer.tsx             # Server component
  lib/
    sanity.ts              # Sanity client (reads env vars)
```

## Tailwind custom colors

Defined in `src/app/globals.css` under `@theme`:
- `navy` (#003087) — primary brand color, backgrounds, headings
- `navy-dark` (#00235f) — hover states, footer
- `navy-light` (#1a4fa0) — lighter blue accents
- `gold` (#f5a623) — accent, CTAs, highlights

## Sanity CMS setup (not yet done)

To enable CMS editing:
1. Create account at sanity.io
2. Run `npx sanity@latest init` in a `studio/` folder
3. Copy `.env.local.example` to `.env.local` and fill in project ID + token

## Key conventions

- All page content is in Dutch (`lang="nl"`)
- `params` in dynamic routes is a `Promise` in Next.js 16 — always `await params`
- `PageProps` and `LayoutProps` are global type helpers in Next.js 16 — no import needed
- Content is currently hardcoded; Sanity will replace static data once set up
