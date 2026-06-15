# Dhruv Toprani Portfolio

Clean, fast, single-page portfolio for Dhruv Toprani. The site positions Dhruv around product, technical program execution, operations, continuous improvement, sustainability, and community impact.

Live demo: [dhruvtoprani.vercel.app](https://dhruvtoprani.vercel.app)

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Vercel

## Features

- Typography-led hero with a single-line name and restrained neon accents
- Explicit Fall 2026 co-op availability
- Hero-level honors engineering, entrepreneurship minor, and robotics concentration
- Exact personal principle plus three concise impact pillars
- Experience section spanning product, program, operations, research, robotics, and engineering
- Neon skill tickers between sections with reduced-motion support
- Clipped heading reveals, staggered hero copy, and line-by-line principle motion
- Distinct gray, electric-purple, lime, and magenta section surfaces with larger editorial typography
- Five-project neon stack with expandable detail rows
- Real SunSight, AtlasFX, and CivSense interface captures revealed on demand
- Direct source and live demo actions inside expanded projects
- Direct GitHub link for the remaining public work
- Navigation ordered as About, Experience, Projects, Contact
- No resume dependency or project progress labels in the visible interface
- SEO metadata, Open Graph image, favicon, robots, and sitemap

## Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run lint
npm run build
```

## Deploy on Vercel

1. Import this repository into Vercel.
2. Set `NEXT_PUBLIC_SITE_URL=https://dhruvtoprani.vercel.app`.
3. Deploy.

## Future Improvements

- Add project case study pages.
- Add project filtering and search.
- Add Vercel Analytics.
- Add a command palette.
- Add MDX writing once the MVP is stable.
