# Erioluwa Portfolio

A minimalist, dark-themed personal portfolio for **Fawehinmi Erioluwa** — a self-taught product engineer based in Lagos, Nigeria — interfaces, backends, and applied machine learning.
## Stack

- **Astro** `^7.0.6` — static site generator (zero client-side JavaScript by default)
- Plain CSS via scoped `<style>` blocks per component, plus small vanilla `<script>` blocks for interactivity
- Google Fonts: *Lora* (serif)

There is no UI framework, no Tailwind, and no CSS modules. Everything compiles down to static HTML and CSS.

## Features

- A widget-board layout on every page except Projects: one 12-column grid (4 columns on phones, so small widgets pair up two-by-two) with paper, dark and yellow tiles — see the *Widgets* section of `global.css`
- Home page (`/`) board: intro, live Lagos clock, project widgets with 4K screenshots, the layers, principles, latest letter and contact
- A "Letters" blog section (`/letters`) with individual post pages
- A Ctrl+K command palette for navigation and quick actions
- A subtle CRT scanline overlay

## Project structure

```
src/
  components/   # Navbar, Hero, Technologies, Projects, ProjectCard, About, Footer, CommandPalette, CTASection, TypewriterQuote
  layouts/      # Layout (base), BlogPost
  pages/        # index.astro, letters.astro, letters/<slug>.astro
  styles/       # global.css
public/         # static assets (brand.jpg, favicon.svg, icons.svg)
  projects/     # project screenshots — 4K only (3840×2160)
```

## Commands

| Command           | Action                                |
| ----------------- | ------------------------------------- |
| `npm install`     | Install dependencies                  |
| `npm run dev`     | Start the dev server (`astro dev`)    |
| `npm run build`   | Build the static site to `dist/`      |
| `npm run preview` | Preview the built site locally        |

> This project ships a `bun.lock`, so `bun install` / `bun run dev` work too.

## Notes

`prompt.md` in this repo is the original AI generation spec. The finished site diverged from it (Astro + serif theme rather than the React/terminal spec), so treat `prompt.md` as historical context, not current documentation
