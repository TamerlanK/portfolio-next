# Tamerlan Kangarli Wiki Portfolio

A Wikipedia-inspired portfolio built with Next.js, React, TypeScript, and Tailwind CSS. The project is intentionally structured as a small production-grade frontend system rather than a single-page demo: static article content is server-rendered, interactive behavior is isolated into client islands, and the visual language is captured through reusable wiki UI primitives.

## Why This Project Exists

This portfolio is designed to communicate two things at once:

- A clear professional profile for Tamerlan Kangarli as a Frontend Engineer.
- A codebase that demonstrates architectural discipline, component boundaries, maintainability, and modern Next.js practices.

The interface borrows the familiar information density of Wikipedia while adapting it into a personal encyclopedia format: searchable sections, an infobox, structured career history, skill tables, contact cards, theme switching, and an in-browser CV preview.

## Tech Stack

- **Framework:** Next.js 16 App Router
- **UI Runtime:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4 with CSS custom properties for theme tokens
- **PDF Preview:** Browser-native PDF viewer
- **Quality Gates:** ESLint flat config, TypeScript strict mode, production build verification

## Architecture

```txt
src/
  app/
    layout.tsx              # Root document, metadata, font wiring
    page.tsx                # Route entrypoint
    global-error.tsx        # Global runtime error boundary
    not-found.tsx           # 404 article fallback
    globals.css             # Tailwind import and wiki design tokens

  components/
    wiki/                   # Reusable wiki UI primitives

  features/
    wiki-portfolio/
      content/              # Domain content split by concern
      components/           # Feature-specific UI and client islands
      sections/             # Article sections
      WikiPortfolioPage.tsx # Server-rendered feature shell

  hooks/                    # Shared browser hooks
  lib/
    dom/                    # Small DOM utilities
```

## Key Engineering Decisions

### Server-first rendering

The portfolio article is mostly static content, so the page shell and article composition are server components. Client components are reserved for browser-only interactions such as search, theme selection, CV modal rendering, collapsible contents, expandable career bullets, and scroll-to-top behavior.

### Feature-local content

Portfolio data lives inside `src/features/wiki-portfolio/content` instead of a generic global `lib` module. That keeps domain content close to the feature that owns it and makes future edits safer.

### Small reusable primitives

Repeated wiki patterns are centralized in `src/components/wiki`, including links, headings, paragraphs, tables, buttons, and info cards. This keeps section files focused on content and intent instead of long repeated Tailwind strings.

### Theme tokens over ad-hoc colors

The visual system is driven by CSS variables in `globals.css`. Components reference semantic wiki tokens such as `--wiki-surface`, `--wiki-border`, and `--wiki-link`, which keeps light/dark mode consistent and easy to evolve.

### Explicit quality gate

The `check` script runs linting, type checking, and a production build. That gives the project a single command for pre-deploy confidence.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev        # Start the local development server
npm run build      # Create a production build
npm run start      # Start the production server
npm run lint       # Run ESLint
npm run typecheck  # Run TypeScript without emitting files
npm run check      # Run lint, typecheck, and production build
```

## Content Editing Guide

- Personal profile: `src/features/wiki-portfolio/content/person.ts`
- Education: `src/features/wiki-portfolio/content/education.ts`
- Experience: `src/features/wiki-portfolio/content/experience.ts`
- Skills: `src/features/wiki-portfolio/content/skills.ts`
- Projects: `src/features/wiki-portfolio/content/projects.ts`
- Languages: `src/features/wiki-portfolio/content/languages.ts`
- Table of contents: `src/features/wiki-portfolio/content/navigation.ts`

## Assets

Runtime assets live in `public/`:

- `me.webp` is used by the infobox profile image.
- `TamerlanKangarliCV.pdf` is used by the CV download and preview actions.

## Quality Notes

This repository is intentionally small, but it follows the same habits expected in larger frontend systems:

- Keep static content server-rendered by default.
- Isolate browser-only behavior into explicit client components.
- Prefer feature-local modules for feature-owned data and UI.
- Promote repeated styling into semantic primitives.
- Treat lint, typecheck, and production build as the minimum merge bar.
