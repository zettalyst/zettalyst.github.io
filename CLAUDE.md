# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro-based static blog site deployed on GitHub Pages. The blog features a dynamic color system where newer posts appear brighter, and posts gradually fade to darker colors as they age.

## Key Commands

```bash
npm run dev        # Start dev server at localhost:4321
npm run build      # Type check and build to ./dist/
npm run preview    # Preview production build locally
npm run format     # Format code with Prettier
```

No test suite configured. Type checking runs during build via `astro check`.

## Architecture & Key Patterns

### Content Structure
- Blog posts: `src/content/post/YYYYMMDD_title.md`
- Frontmatter schema defined in `src/content/config.ts`
  - Required: title, description, pubDate
  - Optional: updatedDate, heroImage, draft
- Draft posts (`draft: true`) only visible in dev mode

### Dynamic Color System (`src/pages/index.astro`)
Post titles fade from bright to dark based on age:
- Uses Color.js with LAB color space for perceptual uniformity
- Calculates "staleness" as ratio of post age to time since first post
- First post baseline: October 28, 2024
- Separate color ranges for light/dark themes applied via CSS custom properties

### Styling
- Tailwind CSS v4 (Vite plugin, no `@apply` directive)
- Dark/light theme via CSS custom properties (`--bg`, `--text`, `--title`)
- Pretendard font family
- Max content width: `max-w-2xl` (640px)

### Image Management
- Source images: `src/assets/YYYYMMDD/`
- Public images: `public/assets/YYYYMMDD/`
- Posts reference images from `/assets/YYYYMMDD/`

## Deployment

Automatic deployment via GitHub Actions on push to `main`:
- Workflow: `.github/workflows/deploy.yml`
- Uses `withastro/action@v3` for build
- Deploys to GitHub Pages

## Generated Files

- `dist/astronomy-sitemap-0.xml` - Custom sitemap filename
- `dist/rss.xml` - RSS feed (generated via `src/pages/rss.xml.js`)