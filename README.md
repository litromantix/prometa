# PROMETA

Marketing website for PROMETA İnşaat Taahhüt Cephe Sistemleri, an architectural facade engineering and fabrication company based in Ankara, Turkey.

## Pages

- **Home** — brand intro and hero CTA
- **About** — company profile, engineering workflow, and capabilities
- **Projects** — filterable portfolio of completed facade projects with photos
- **References** — searchable/filterable registry of past clients and general contractors
- **Contact** — HQ details, embedded map, department routing, and a multi-step RFQ/tender form

## Tech Stack

- [Next.js](https://nextjs.org) 16 (App Router) + React 19 + TypeScript
- [Tailwind CSS](https://tailwindcss.com) 4
- Project and reference data live as static TypeScript files (`app/projects/data.ts`, `app/refs/data.ts`) — no CMS or database

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Deployment

Deploy on [Vercel](https://vercel.com/new) — connect this repo and it deploys with zero config.
