# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

This project uses **pnpm**.

- `pnpm dev` — start the dev server (Next.js with Turbopack)
- `pnpm build` — production build
- `pnpm start` — serve the production build
- `pnpm lint` — run `next lint`

There is no test suite.

## Architecture

Marketing/landing site for "Blackstar" flight simulation cockpits, built with the **Next.js 16 App Router**, **React 19**, and **TypeScript**. Originally scaffolded with v0.dev + shadcn/ui.

### Routing & page composition
- `app/page.tsx` is the home page. It is assembled by composing self-contained section components from `components/` in order: `Navigation`, `HeroSection`, `PerformanceSection`, `InstructorSection`, `ModelsSection`, `CraftsmanshipSection`, `SiteFooter`. To change the landing page layout, reorder/edit these section components rather than putting markup directly in `page.tsx`.
- Standalone routes live as `app/<name>/page.tsx`: `/privacy`, `/xplane`, `/prepar3d`, `/timeline`.
- `app/layout.tsx` is the root layout — sets metadata, loads Google fonts (`Orbitron` → `--font-mono`, `Rajdhani` → `--font-sans`), and renders the global `CookieBanner`.

### Components
- `components/*.tsx` — page-specific section components (the building blocks of pages).
- `components/ui/*.tsx` — shadcn/ui primitives (Radix-based). Configured via `components.json`; add new ones with the shadcn CLI rather than hand-rolling.

### Styling & theming
- Tailwind CSS **v3** (`tailwind.config.ts`, driven by `postcss.config.mjs` which uses the `tailwindcss` plugin). Note `@tailwindcss/postcss` v4 is also in devDependencies but is **not** the active pipeline — do not switch to it without updating PostCSS config.
- The active stylesheet is **`app/globals.css`** (imported by the root layout). `styles/globals.css` is an orphaned duplicate and is not used.
- Dark "aerospace" theme defined as HSL CSS variables in `app/globals.css` (`:root`), consumed through semantic Tailwind colors (`background`, `primary`, `accent`, etc.) in `tailwind.config.ts`. `--radius` is `0rem` (square corners by design). Change colors by editing the CSS variables, not the Tailwind config.

### Conventions
- Import alias `@/*` maps to the repo root (e.g. `@/components/...`, `@/lib/utils`, `@/hooks/...`).
- `lib/utils.ts` exports `cn()` (clsx + tailwind-merge) for conditional class composition — the standard way to build className strings.
- Static assets live in `public/` (`public/images`, `public/videos`); reference with absolute paths like `/images/hero-car.jpg`.

### Gotchas
- **`next.config.mjs` sets `typescript.ignoreBuildErrors: true`** — production builds succeed even with type errors. Type safety is not enforced at build time, so run `tsc`/editor checks deliberately when correctness matters.
- `pnpm-workspace.yaml` exists only to allow `sharp` to build (`allowBuilds`); this is not a multi-package monorepo.
