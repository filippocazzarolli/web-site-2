# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server with HMR
npm run build     # Production build (output: dist/)
npm run preview   # Preview production build locally
npm run lint      # Run ESLint
```

## Architecture

This is a React 19 + Vite 7 single-page personal portfolio application (JavaScript, no TypeScript). No router — navigation uses anchor links with smooth scroll to sections on a single page.

### Entry Points

- `src/main.jsx` — mounts `<App>` into `#root`
- `src/App.jsx` — root component composing all sections
- `index.html` — HTML shell

### Components (`src/components/`)

| File | Purpose |
|------|---------|
| `Nav.jsx` | Fixed header with branding and anchor links (`#about`, `#skills`, `#cta`). Hides links on mobile. |
| `Hero.jsx` | Landing section with terminal-style prompt and typing animation cycling through developer taglines |
| `Stats.jsx` | Four key statistics with animated counter-up effect on scroll |
| `About.jsx` | Two-column layout: bio text (left) + terminal window showing JSON profile (right) |
| `Skills.jsx` | Two-column grid (Backend/Frontend) with animated progress bars triggered on scroll |
| `Cta.jsx` | Call-to-action section with contact email field and send button |
| `Cursor.jsx` | Custom animated cursor for desktop (hidden on touch devices) |

### Hooks (`src/hooks/`)

- `useFadeUp.js` — IntersectionObserver hook, returns `[ref, visible]`. Triggers once at 0.2 threshold for fade-up animations.

### Styling

- **Tailwind CSS v4** via `@tailwindcss/vite` plugin — primary utility classes
- **`src/index.css`** — global styles:
  - Google Fonts: JetBrains Mono, Space Mono
  - CSS custom properties: `--color-bg` (#080808), `--color-green` (#00ff88), `--color-chalk` (#e8e8e8), `--font-mono`, `--font-space`
  - Custom keyframes: `blink`, `scrollLine`
  - Utility classes: `.fade-up`, `.animate-blink`, `.stat-bar`
  - Scanlines overlay effect via body pseudo-element
- **`src/App.css`** — empty, minimal
- Fluid typography with `clamp()` for responsive headings
- Design aesthetic: dark terminal/retro theme with neon green accents

## ESLint

- Flat config (`eslint.config.js`), ESLint 9.x
- Applies to `**/*.{js,jsx}`, ignores `dist/`
- Uses `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh`
- `no-unused-vars` is an error; variables matching `/^[A-Z_]/` are exempt

## Key Conventions

- Functional components only, no class components
- Scroll-based animations via `useFadeUp` + IntersectionObserver
- Local state with `useState`/`useRef` — no global state manager
- PascalCase components, camelCase functions/variables
- Mobile-first responsive design with Tailwind breakpoints (`sm:`, `md:`, `lg:`)
