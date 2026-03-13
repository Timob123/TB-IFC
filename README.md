# IFC Finance

Modern rebuild of IFC Finance – Ireland's Leading Financial Advisor. React website with Vite, TypeScript, Tailwind CSS.

## Run

```bash
npm install
npm run dev     # dev server at http://localhost:5173
npm run build   # production build
npm run preview # preview production build
```

## Images

All images are **real photos** from [Wikimedia Commons](https://commons.wikimedia.org) (free, CC-licensed):
- 218K+ Dublin/Ireland images
- Verified direct URLs (Dublin Spire, Trinity College, Cliffs of Moher, Ring of Kerry, etc.)

Optional: Add `VITE_PEXELS_API_KEY` for dynamic search via `src/lib/pexels.ts` (10.8K+ Dublin on Pexels).

## Forms

Contact and callback forms support Formspree. Add to `.env`:

```
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

## Stack

- React 19, React Router
- Vite 6, TypeScript
- Tailwind CSS 4, Framer Motion
