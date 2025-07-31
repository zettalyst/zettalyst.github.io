# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro-based static blog site deployed on GitHub Pages. The blog features a dynamic color system where newer posts appear brighter, and posts gradually fade to darker colors as they age.

## Key Commands

### Development
```bash
npm run dev        # Start dev server at localhost:4321
npm run build      # Type check and build to ./dist/
npm run preview    # Preview production build locally
npm run format     # Format code with Prettier
```

### Testing
No test suite is currently configured. Type checking is performed during build.

## Architecture & Key Patterns

### Content Structure
- Blog posts live in `src/content/post/` with filename pattern: `YYYYMMDD_title.md`
- Posts use frontmatter with required fields: title, description, pubDate
- Optional fields: updatedDate, heroImage, draft
- Draft posts are only visible in development mode

### Dynamic Color System
The blog implements a unique visual feature where post title colors change based on age:
- Located in `src/pages/index.astro` (not PostList.astro)
- Uses Color.js and LAB color space for perceptually uniform transitions
- Separate color ranges for light (LAB color space) and dark themes
- First post date: October 28, 2024 (used as baseline for calculations)

### Image Management
- Source images: `src/assets/YYYYMMDD/`
- Public images: `public/assets/YYYYMMDD/`
- Blog posts reference images from public directory

### Styling
- Tailwind CSS v4 with Vite plugin
- Custom Pretendard font family
- Dark/light theme support via CSS custom properties
- Content max-width: 640px (2xl breakpoint)

## Important Configurations

### Site Constants (`src/consts.ts`)
- SITE_TITLE: "Fail Fast, Learn Faster"
- SITE_DESCRIPTION: "zettalyst.github.io"

### Build Output
- Static files generated to `dist/` directory
- Includes sitemap.xml and rss.xml for SEO/syndication

## Development Notes

- When adding new posts, maintain the YYYYMMDD filename convention
- Images for posts should be added to both src/assets and public/assets directories
- The dynamic color system automatically handles new posts without configuration
- Draft posts can be created by adding `draft: true` to frontmatter