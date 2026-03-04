# Filippo Cazzarolli — Personal Portfolio

A single-page personal portfolio website built with React 19 and Vite 7. Dark terminal/retro aesthetic with neon green accents, scroll-based animations, and a custom animated cursor.

## Tech Stack

- **React 19** — functional components, hooks
- **Vite 7** — dev server with HMR, production builds
- **Tailwind CSS v4** — utility-first styling via `@tailwindcss/vite` plugin
- **ESLint 9** — flat config with react-hooks and react-refresh plugins

## Getting Started

```bash
npm install
npm run dev       # Start dev server (localhost:5173)
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
npm run lint      # Run ESLint
```

## Project Structure

```
src/
├── main.jsx              # App entry point
├── App.jsx               # Root component
├── index.css             # Global styles, CSS variables, keyframes
├── components/
│   ├── Nav.jsx           # Fixed header with anchor links
│   ├── Hero.jsx          # Landing section with typing animation
│   ├── Stats.jsx         # Animated counters (scroll-triggered)
│   ├── About.jsx         # Bio + terminal JSON profile panel
│   ├── Skills.jsx        # Backend/Frontend skill bars (scroll-triggered)
│   ├── Cta.jsx           # Contact call-to-action
│   └── Cursor.jsx        # Custom animated cursor (desktop only)
└── hooks/
    └── useFadeUp.js      # IntersectionObserver hook for fade-up animations
```

## Design System

| Token | Value |
|-------|-------|
| Background | `#080808` |
| Accent (green) | `#00ff88` |
| Text (chalk) | `#e8e8e8` |
| Primary font | JetBrains Mono |
| Secondary font | Space Mono |

- Fluid typography with `clamp()` for responsive headings
- Scroll-based animations via `useFadeUp` (IntersectionObserver, threshold 0.2, fires once)
- Scanlines overlay via `body::after` pseudo-element
- Mobile-first responsive layout; custom cursor hidden on touch devices
