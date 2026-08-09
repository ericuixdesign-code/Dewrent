# Dewrent

Rental everything showcase — static template inspired by editorial e-commerce.
Built with Vite + React + TypeScript + Tailwind. Zero backend, zero database,
zero external API. Pure showcase.

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Scripts

- `npm run dev` — start dev server on port 5173
- `npm run build` — production build to `dist/`
- `npm run preview` — serve production build locally
- `npm run start` — alias for preview (used by Replit deployment)

## Structure

```
src/
├── components/
│   ├── home/           # Home page sections
│   ├── layout/         # Header, Footer, overlays, drawer
│   ├── ui/             # Button, Input, Textarea, Select, Tag
│   ├── ItemCard.tsx
│   ├── Preloader.tsx
│   └── SectionHeader.tsx
├── contexts/
│   └── CartContext.tsx # Cart state (session-only)
├── data/
│   ├── categories.ts   # 15 categories
│   └── items.ts        # 45 rental items (dummy)
├── hooks/
│   ├── useLenis.ts     # Smooth scroll
│   └── useReveal.ts    # Scroll reveal
├── lib/
│   ├── cn.ts
│   └── format.ts       # IDR + date + reservation ID
├── pages/
│   ├── Home.tsx
│   ├── Rentals.tsx
│   ├── RentalDetail.tsx
│   ├── Keranjang.tsx
│   ├── Pemesanan.tsx
│   ├── About.tsx
│   └── NotFound.tsx
├── styles/globals.css
├── App.tsx
└── main.tsx
```

## Design System

Locked into `tailwind.config.ts` and `src/styles/globals.css`.

**Colors:**
- Primary `#7D70BA` (lavender), scale 50-950
- Secondary `#5CC8FF` (sky), scale 50-950
- Neutrals cool-gray, semantic (success/warning/danger)

**Typography:**
- Display: Bricolage Grotesque (Google Fonts, variable, free)
- Body: Inter
- Numeric/Mono: JetBrains Mono

**Buttons:** 5 sizes (xs/sm/md/lg/xl), 6 variants (primary, secondary,
outline, ghost, accent, dark). `radius-md (12px)`, generous padding.

**Forms:** Tall inputs (sm: 44px, md: 56px, lg: 64px, xl: 72px).

## Deploying to Replit

Two ways:

### A. Rapid import (recommended)
1. Push this repo to GitHub
2. Open `https://replit.com/github.com/USERNAME/REPO-NAME` in browser
3. Replit auto-clones, detects Node/Vite, installs deps
4. Click `Run` — dev server starts
5. Click `Publish` (top-right) → pick `Static Deployment` → `Publish`

### B. Manual
1. Create a new Repl → Import from GitHub
2. Paste this repo URL
3. Same as above from step 4

The `.replit` file in this repo tells Replit:
- Run command: `npm run dev`
- Static deployment: `npm run build` → serve `dist/`

## Notes

- **No storage.** Cart state is session-only React context.
  Refresh clears the bag. Intentional — this is a showcase template.
- **No backend.** All data is hardcoded in `src/data/*.ts`.
- **No payment integration.** Pemesanan form validates client-side, then shows
  a fake success screen with generated reservation ID.
- **Images** are Unsplash CDN links. Free for commercial use with attribution
  recommended. Swap with your own assets when remixing.

## Remixing

Fork this template and:
1. Replace items in `src/data/items.ts` with your own rentals
2. Update `src/data/categories.ts` if categories differ
3. Change brand name and colors in `tailwind.config.ts` + all references to "Dewrent"
4. Wire up a real backend (Supabase, Firebase) if you want persistence
5. Integrate real payment (Midtrans, Stripe) at `src/pages/Pemesanan.tsx`

## License

MIT — remix freely.
