# Dev Notes

## What Was Built

- Next.js + TypeScript + Tailwind single-page portfolio.
- Full homepage sequence: hero, About, Experience, expandable Projects, Contact.
- Replaced the original card-based page with a compact editorial layout.
- Added real interface captures for SunSight, AtlasFX, and CivSense.
- Added explicit Fall 2026 co-op positioning without narrowing the search to a fixed role list.
- Added the honors engineering program, entrepreneurship minor, and robotics and automation concentration directly to the hero.
- Reframed the narrative around product, program execution, operations, KPIs, continuous improvement, sustainability, and community impact.
- Added `public/resume.pdf` from the verified local resume.
- Added metadata, favicon route, robots route, and sitemap route.
- Deployed successfully to Vercel at `https://dhruvtoprani-lemon.vercel.app`.

## Design Decisions

- Used an oversized typography-led hero with a single-line name, restrained neon accents, and no generated hero art.
- Kept UAE-inspired colors as identity signals while adding lime, cyan, pink, and orange for controlled visual energy.
- Added slim neon skill tickers between sections with alternating colors, direction, and reduced-motion support.
- Gave each major section a distinct high-contrast surface: gray About, electric-purple Experience, lime Projects, and magenta Contact.
- Styled Experience with a golden-yellow header and white content; Contact uses a subtle white emboss hover.
- Added a reduced-motion-aware text system: clipped headline rises, staggered words, and line-by-line principle reveals.
- Rebuilt the personal principle as a full-width sans-serif statement with a solid red label.
- Replaced repeated cards with an expandable five-project stack and concise ledger rows.
- Used real project captures as evidence instead of generic project illustrations.
- Kept the page content-first and horizontally stable on mobile.

## Project Decisions

- Five projects are presented in the expandable stack.
- Remaining public work is available through a direct GitHub button.
- Project demo and source links live inside expanded rows.

## Known Issues

- `npm audit` reports moderate vulnerabilities in transitive dependencies after installing latest packages.
- Public LinkedIn indexing did not expose reliable role detail, so experience copy remains grounded in the verified local resume and supplied project brief.

## Tradeoffs

- The first version avoids project detail pages and filtering to keep the MVP focused.
- Project screenshots are used only where they provide evidence; the hero remains code-native and lightweight.
