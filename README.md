# Zinway

A Vercel-ready Next.js 16 website for Zinway with a dark bio-digital visual system, GSAP + Lenis interactions, and responsive WebGL (desktop/tablet) with CSS fallbacks on mobile.

## Stack

- Next.js (App Router)
- TypeScript + ESLint
- GSAP + ScrollTrigger
- Lenis smooth scroll
- Three.js + @react-three/fiber + drei
- MDX blog support via `@next/mdx`

## Run locally

```bash
npm install
npm run dev
```

Open: `http://localhost:3000`

## Production build

```bash
npm run lint
npm run build
npm run start
```

## MDX blog content

Add/update posts in:

- `src/app/blog/posts/*.mdx`
- `src/data/blogPosts.ts` (card metadata + slug mapping)

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import project in Vercel.
3. Framework preset: **Next.js** (auto-detected).
4. Build command: `npm run build`
5. Output: `.next` (auto)

No extra environment variables are required for this static marketing implementation.
