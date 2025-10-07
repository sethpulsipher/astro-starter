# Technology Stack

## Core Framework

- **Astro v5** - Static site generator with component-based architecture
- **TypeScript** - Type safety with strict null checks enabled
- **Node.js** - Runtime environment

## Styling & UI

- **Tailwind CSS v4** - Utility-first CSS framework via Vite plugin
- **LESS** - CSS preprocessor for component styles
- **CodeStitch Components** - Pre-built responsive UI components
- **Roboto Font** - Self-hosted web fonts (400, 700, 900 weights)

## Content Management

- **Decap CMS** - Git-based headless CMS for content management
- **Astro Content Collections** - Type-safe content with frontmatter validation
- **Markdown/MDX** - Content authoring format

## Build Tools & Integrations

- **Vite** - Build tool and dev server
- **Astro Icon** - SVG icon system
- **Astro Sitemap** - Automatic sitemap generation
- **Autoprefixer** - CSS vendor prefix automation
- **PostCSS** - CSS processing

## Common Commands

### Development

```bash
npm run dev        # Start development server on localhost:4321
npm run start      # Alias for dev command
```

### Build & Deploy

```bash
npm run build      # Build for production
npm run preview    # Preview production build locally
```

### Content Management (Local)

```bash
npm run decap      # Start local Decap CMS server (if configured)
```

## Path Aliases

The project uses TypeScript path mapping for clean imports:

- `@layouts/*` → `src/layouts/*`
- `@assets/*` → `src/assets/*`
- `@data/*` → `src/data/*`
- `@styles/*` → `src/styles/*`
- `@components/*` → `src/components/*`
- `@js/*` → `src/js/*`

## Performance Features

- Image optimization with modern formats (WebP, AVIF)
- View transitions for SPA-like navigation
- Preloading for above-the-fold images
- Font display swap for better loading
- Incremental TypeScript compilation
