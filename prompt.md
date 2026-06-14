# Portfolio Build Prompt — Fawehinmi Erioluwa

## Overview

Build a **minimalist, dark-themed developer portfolio** as a single-page React app (`.jsx`). The design language is already established in the reference component provided — terminal aesthetics, monospaced fonts, near-black backgrounds, tight letter-spacing, and muted accents. Extend and complete it into a full portfolio.

---

## Owner

| Field | Value |
|---|---|
| Name | Fawehinmi Erioluwa |
| Age | 17 |
| Role | Frontend Engineer (+ backend instincts) |
| Location | Lagos, Nigeria |
| Status | Self-taught · always learning |
| Email | erioluwafawehinmi@gmail.com |
| Open to | Collaborations · QA testing roles · developer opportunities |

---

## Design Rules (non-negotiable)

- **Background:** `#0a0a0a` base. Card surfaces: `#0d0d0d`. Borders: `#1a1a1a` or `#1e1e1e`.
- **Font:** `'Courier New', 'Lucida Console', monospace` for UI text. `Georgia, serif` for the display name only.
- **Accent colors:** White `#ffffff` (default), Mint `#00DC82` (active/success), Cyan `#54C5F8` (highlight).
- **No gradients**, no rounded corners beyond `border-radius: 3–4px`. No shadows.
- **Scanline overlay** — keep the `repeating-linear-gradient` fixed overlay for the CRT feel.
- Section labels use the `// section-name` comment syntax, `0.6rem`, `letterSpacing: 3`, `color: #333`, `textTransform: uppercase`.
- All interactive elements (buttons, skill chips, project cards) animate with `transition: all 0.18s ease`. No elaborate animations.
- The terminal intro block at the top stays exactly as-is.

---

## Sections to Build

### 1. Terminal Intro ✅ (already done — keep as-is)
Animated typewriter block. Lines appear sequentially. Blinking cursor (`█`). Lines:
```
> loading persona...
> name: Fawehinmi Erioluwa
> age: 17
> role: Frontend Engineer (+ backend instincts)
> status: self-learning // always
> open_to: collaborations = true
> ready.
```

---

### 2. Name + Tagline ✅ (already done — keep as-is)
Display name in serif. Tagline: *"The first step to greatness is taking action"*

---

### 3. Operating Mode Switcher ✅ (already done — keep as-is)
Three modes: `solo`, `team`, `ai`. Each has a label, description, and trait chips.

---

### 4. Tech Stack ✅ (already done — keep as-is)
Clickable skill chips. Skills:
- TypeScript, Flutter/Dart, React, Next.js, Nuxt.js, PostgreSQL, MongoDB, Figma, Git
- Also add: **Python** (icon: `Py`, color: `#3776AB`, type: `lang`)

---

### 5. Projects Section (EXPAND THIS)

Replace the existing minimal project list with proper project cards. Each card should show:
- Project name
- One-line description
- Status tag (Public / Private / In Progress / Flagship)
- Optional: a "Stack" line showing the key technologies used as small inline chips
- Optional: a "→ view" link (use `#` as placeholder if no live URL)

**Projects to include:**

#### Todo App
- Desc: CRUD fundamentals. Where it all started.
- Tag: Public
- Stack: React, TypeScript

#### YEMS (Youth Educational Management System)
- Desc: Offline-first school management system. Real constraints, real solutions. Six-container Docker setup, designed for low-connectivity environments.
- Tag: Private
- Stack: Next.js, PostgreSQL, Docker, TypeScript

#### CourtVision *(FLAGSHIP — give this special visual treatment)*
- Tag: In Progress
- Tag color: `#54C5F8` (cyan, to signal it's the active build)
- Stack: Python, YOLOv8, DeepSORT, MediaPipe, Groq API, LangChain, Supabase, Streamlit
- Description (use this — it's the actual vision):

> CourtVision is a conversational AI basketball analyst. It watches game footage, tracks player movement and positioning using computer vision (YOLOv8 + DeepSORT for detection and tracking, MediaPipe for pose analysis), builds a tendency database per player, and delivers intelligent play-by-play commentary through a natural language interface powered by Groq's LLM and LangChain pipelines. The goal: fill a gap no public tool currently occupies — live film study, player tendency modeling, and a conversational analyst, combined. Built solo, from scratch, on a $0 budget.

- Give CourtVision its own distinct card style: cyan left-border (`3px solid #54C5F8`), subtle cyan background tint, and a `[FLAGSHIP]` or `[ACTIVE BUILD]` badge in the top-right corner.
- Add a one-line mission statement below the description: `"Film study. Tendency engine. Real-time intelligence."`

---

### 6. About / Background Block (NEW — add after projects)

A small block, no heading, just quiet facts in a terminal-list style. Use `>` prefixes:

```
> self-taught since day one
> building from Lagos, Nigeria
> basketball plays · Roblox dev · AI enthusiast
> currently on a 26-week build roadmap for CourtVision
> open to QA testing roles and frontend collaborations
```

---

### 7. Footer / Contact ✅ (already done — extend slightly)

Keep the email button. Add:
- A GitHub link button (`→ github`) — placeholder `href="https://github.com/erioluwafawehinmi"` (or update if known)
- The small text: `17 · open to collabs · self-taught · Lagos, NG`

---

## Technical Requirements

- **Single file React component** (`ErioluwaPortfolio.jsx` or similar), default export.
- Use only `useState`, `useEffect`, `useRef` from React (already imported).
- No external libraries, no Tailwind, no CSS modules — all styles inline or in the `<style>` tag already present.
- The `@keyframes fadeIn` and scrollbar styles in the existing `<style>` block should be preserved.
- `overflow: hidden` on root div is fine for desktop. For narrow viewports, allow `overflow-y: auto`.
- The scanline overlay (`position: fixed`) should remain.
- All layout uses flexbox or CSS Grid (already established pattern).

---

## Reference Component

The existing component (`ErioluwaPersona`) is the starting point. Do not discard any of its logic or style. Extend it by:
1. Adding Python to the skills array.
2. Replacing the `projects` array with the expanded version above.
3. Adding the About block after projects.
4. Updating the footer.
5. Giving CourtVision its own special card treatment within the projects section.

---

## Tone & Voice

This portfolio should feel like a developer terminal, not a marketing page. Descriptions are dry, confident, and precise — not hype-driven. No buzzwords. Code comments (`//`) instead of section headings. The owner is 17, self-taught, building ambitious things alone. Let the work speak.

---

## Output

Single `.jsx` file, ready to drop into a React project or render in a Claude Artifact. No placeholders left unresolved except external URLs where noted.
