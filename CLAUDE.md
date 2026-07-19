# Grabov Aerial Media — project brief (handoff for any Claude session)

This file is auto-loaded by Claude Code. Read it before doing anything so a fresh
session (web / phone / new machine) continues exactly where we left off.

## The business
Grabov Aerial Media — **FAA Part 107 certified drone photography & video** for real
estate, land, ranches, farms, construction and roof inspections. Based in **Granbury,
TX**, serving ~50 miles across North Central Texas (Weatherford, Glen Rose,
Stephenville, Cleburne, Cresson). Owner: **Max** · (682) 288-2885 · max@grabov.com ·
grabov.com. Goal of the site: leads/bookings + showcase the aerial work.

## The site (this is the live project)
- **App:** Next.js 16 (App Router) + React 19 + Tailwind v4 + Framer Motion, in **`web/`**.
- **Live:** https://grabov-com.vercel.app — auto-deploys on every push to `main`.
- **Repo:** github.com/WIXVW/grabov-com (branch `main`).
- **Vercel settings that MUST stay:** Root Directory = `web`, Framework Preset = Next.js.
  (Wrong preset → 404; empty root → serves the legacy static `index.html` at repo root.)

## Working agreement (READ THIS — hard-won, do not repeat past mistakes)
- We build the homepage **block by block from DJI.com references Max hand-picks.** For each
  block he sends a screenshot/URL; replicate that block's structure and feel, then push.
- **Do NOT** open with "here are 3 directions" — every time they ended up being the same
  template and Max got frustrated. Follow the pinned reference exactly.
- **Palette: clean neutral (white / graphite) + a single BLUE accent `#2b7de9`.**
  NOT gold/bronze — Max explicitly rejected "brown". Accent var is `--accent` in
  `web/src/app/globals.css`.
- **"Grey tones" means a grey palette/mood, NOT a grayscale filter on photos.** Photos stay
  in color; grey comes from gradient overlays and neutral UI.
- Typography: **Inter (sans), no serif.** Clean, DJI-like, big and light.
- Match the DJI reference: full-bleed photo blocks, big headings, sticky/utility nav,
  outline pills, blue primary CTA.

## Current state (built so far)
- **Block 1 — hero** (`web/src/app/page.tsx`, `.hero`/`.nav`/`.switcher` in globals):
  grey DJI-Air-3S-style hero, ~88svh ("almost full height, not full"). Top nav (GRABOV
  logo + links + blue "Book a shoot" pill), kicker → huge "GRABOV AERIAL" (second word
  lighter weight) → tagline "See it from above" → two outline pills → bottom-left category
  switcher.
- **Block 2 — category cards** (`.cats` in globals): centered heading + 3 cards (Real
  Estate / Land Ranch & Farm / Construction & Roofs), each = light photo bg + white
  top-scrim + kicker + big title + "Learn More ›".
- Next blocks: ask Max for the next DJI reference.

## Assets / gotchas
- Placeholder photo: **`web/public/hero.jpg`** (downscaled sunset-ranch shot) is reused
  across all blocks. Real per-category / hero photos are still pending from Max — swap them
  in as they arrive.
- **Do NOT use `web/public/aerial-2.jpeg` (free-drone-media.jpeg)** — it's a marketing
  collage with a "FREE DRONE PHOTOS & VIDEO" badge baked in.
- Repo root also holds the **legacy static `index.html`** (old light-premium landing),
  `business-card.html` + print PDFs, brand assets. These are NOT the new site; the new
  site is `web/` only.

## Local dev caveat
`npm run dev` (Turbopack) **crashes on Max's D: drive** (worker exit `0xc0000142`, slow
filesystem). To preview locally, use **`cd web && npm run build && npm run start`**
(production server on :3000). Simplest path: just push and let Vercel build/preview.

## Loop
Build the block → `cd web && npm run build` (sanity) → commit + push to `main` → Vercel
auto-deploys → refresh the live URL. Then ask Max for the next block.
