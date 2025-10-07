# Project Structure

## Root Directory Organization

```
├── public/                 # Static assets (unprocessed)
│   ├── admin/             # Decap CMS configuration
│   ├── assets/            # Static images, fonts, icons
│   ├── favicon.svg        # Site favicon
│   ├── robots.txt         # Search engine directives
│   └── _redirects         # Netlify redirects
├── src/                   # Source code (processed by Astro)
├── .astro/               # Astro build artifacts
├── .kiro/                # Kiro IDE configuration
└── node_modules/         # Dependencies
```

## Source Directory (`src/`)

### Core Directories

- **`assets/`** - Images and media for optimization by Astro
- **`components/`** - Reusable Astro components
- **`content/`** - Content collections (blog posts, etc.)
- **`data/`** - JSON data files for site configuration
- **`icons/`** - SVG icons for the Icon component
- **`js/`** - JavaScript utilities and helpers
- **`layouts/`** - Page layout templates
- **`pages/`** - File-based routing (generates site pages)
- **`styles/`** - CSS and LESS stylesheets

## Component Organization

### Component Types

- **Layout Components** (`layouts/`) - Page wrappers and templates
- **UI Components** (`components/`) - Reusable interface elements
- **Template Components** (`components/TemplateComponents/`) - Specialized components

### Component Conventions

- Use `.astro` extension for Astro components
- Include component-scoped styles using `<style lang="less">`
- Props are destructured from `Astro.props`
- Follow CodeStitch naming conventions for CSS classes

## Content Structure

### Content Collections (`src/content/`)

- **`config.ts`** - Content collection schemas and validation
- **`blog/`** - Blog post markdown files
- Each collection has TypeScript type safety and frontmatter validation

### Data Files (`src/data/`)

- **`client.json`** - Client/business information for meta tags and contact
- **`navData.json`** - Navigation structure with support for dropdowns

## Styling Architecture

### Style Files (`src/styles/`)

- **`global.css`** - Tailwind CSS imports
- **`root.less`** - Core styles, CSS variables, and base components
- **`__utils.less`** - Utility classes and responsive helpers
- **`dark.less`** - Dark mode styles
- **`sidebar.less`** - Sidebar-specific styles

### CSS Conventions

- Use CSS custom properties (variables) defined in `:root`
- Follow CodeStitch class naming patterns
- Component styles are scoped using Astro's `<style>` tags
- Responsive design with mobile-first approach
- LESS nesting for component organization

## Page Structure

### File-Based Routing

- Pages in `src/pages/` automatically become routes
- Subfolders create nested routes (e.g., `pages/projects/` → `/projects/`)
- Index files (`index.astro`) serve as directory defaults

### Page Conventions

- Use `BaseLayout` wrapper for consistent page structure
- Include frontmatter for page metadata
- Preload above-the-fold images using `getImage()`
- Follow SEO best practices with proper meta tags

## Asset Management

### Image Handling

- **Optimized assets** → `src/assets/images/` (processed by Astro)
- **Static assets** → `public/assets/images/` (served as-is)
- **CMS uploads** → `src/assets/images/blog/` (for content collections)

### Font Management

- Self-hosted fonts in `public/assets/fonts/`
- Font-face declarations in `root.less`
- Use `font-display: swap` for performance

## Configuration Files

### Key Config Files

- **`astro.config.mjs`** - Astro configuration and integrations
- **`tsconfig.json`** - TypeScript settings and path aliases
- **`postcss.config.cjs`** - PostCSS configuration
- **`public/admin/config.yml`** - Decap CMS configuration
