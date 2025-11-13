# IB Personal Project — Self-Improvement Website

## Overview

This is a multi-page educational website created as an IB Middle Years Programme Personal Project. The site explores self-improvement through 12 research questions, combining theoretical research with personal experience and practical application. The project aims to help others overcome anxiety and build confidence through evidence-based self-improvement strategies.

The website features a modern, premium design with dedicated pages for each research question, ensuring content is well-organized and examiner-friendly. It includes learning and product goals, research content, personal journey documentation, survey results, and practical strategies for sustainable growth.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter (lightweight client-side routing library)
- **UI Components**: Radix UI primitives with custom styling through shadcn/ui component library
- **Styling**: Tailwind CSS with custom design system following the "New York" style variant
- **Animations**: Framer Motion for page transitions with reduced motion support for accessibility
- **State Management**: TanStack React Query for server state and data fetching
- **Forms**: React Hook Form with Zod validation via @hookform/resolvers

**Design System**:
- Color palette: Minimal black & white with subtle grays, clean and simple design
- Typography: Inter (sans-serif) for all text - headings and body, inspired by James Clear's clean aesthetic
- Layout: Single column with max-width 768px (max-w-3xl), content-focused design
- Accessibility: Semantic HTML, keyboard navigation, WCAG AA contrast ratios (4.5:1)
- Minimal aesthetic inspired by jamesclear.com - clean, readable, distraction-free

**Key Components**:
- `PageLayout`: Global wrapper with Navigation and Footer
- `HeroSection`: Page headers with gradient backgrounds and optional images
- `ContentCard`: Main content containers with prose styling
- `Breadcrumbs`: Navigation aids on all inner pages
- `PrevNextNav`: Sequential navigation between question pages
- `SEO`: Helmet-based meta tags with Open Graph and Twitter card support
- `ThemeToggle`: Light/dark mode switcher with localStorage persistence

### Backend Architecture
- **Framework**: Express.js server running on Node.js
- **TypeScript**: Full type safety with ESM module format
- **Development**: Hot module replacement via Vite middleware integration
- **Production**: Bundled with esbuild for optimal performance
- **Routing**: RESTful API patterns with centralized route registration

**Server Features**:
- Request/response logging middleware with JSON capture
- Static file serving in production
- Vite dev server integration in development
- Sitemap.xml generation for SEO (dynamic URL list)

### Data Storage Solutions
- **ORM**: Drizzle ORM configured for PostgreSQL with Neon serverless driver
- **Schema Location**: `shared/schema.ts` for type sharing between client and server
- **Migrations**: Drizzle Kit with migration files in `/migrations` directory
- **Current Schema**: Users table with UUID primary keys (prepared for future authentication)
- **In-Memory Fallback**: `MemStorage` class provides development/testing storage without database

**Database Design Pattern**:
- Shared schema between frontend and backend via TypeScript path aliases
- Zod validation schemas generated from Drizzle tables
- Type-safe insert and select operations

### Authentication and Authorization
- **Current State**: User schema defined but authentication not yet implemented
- **Prepared Infrastructure**: User table with username/password fields, storage interface ready for authentication logic
- **Session Management**: connect-pg-simple dependency included for future PostgreSQL-backed sessions
- **Security Consideration**: Password field exists but hashing/validation not yet implemented

### Path Aliases and Module Resolution
- `@/*`: Client source files (`./client/src/*`)
- `@shared/*`: Shared types and schemas (`./shared/*`)
- `@assets/*`: Static assets including generated images (`./attached_assets`)

**Bundler Configuration**:
- Vite resolves aliases for client-side code
- TypeScript paths mirror Vite aliases for type checking
- esbuild handles server-side bundling with external packages

### Performance and SEO Strategy
- **Image Optimization**: Pre-generated images stored in attached_assets, lazy-loading ready
- **Code Splitting**: Vite automatic code splitting by route
- **Meta Tags**: Per-page SEO component with dynamic titles, descriptions, canonical URLs
- **Sitemap**: Server-generated XML sitemap with all page routes
- **Social Sharing**: Open Graph and Twitter Card meta tags on all pages

## External Dependencies

### Third-Party Services
- **Fonts**: Google Fonts (Playfair Display, Inter) loaded via CDN with preconnect optimization
- **Database**: Configured for Neon serverless PostgreSQL (via `@neondatabase/serverless`)
- **Environment Variables**: 
  - `DATABASE_URL`: PostgreSQL connection string (required for production)
  - `BASE_URL`: Site URL for absolute links in meta tags and sitemap
  - `REPLIT_DEV_DOMAIN`: Auto-detected Replit domain for development

### UI Component Libraries
- **Radix UI**: Headless, accessible component primitives (accordion, dialog, dropdown, popover, etc.)
- **Lucide React**: Icon library for UI elements
- **cmdk**: Command palette component (included but not actively used)
- **embla-carousel-react**: Carousel component (included but not actively used)

### Development Tools
- **Replit Plugins**: 
  - `@replit/vite-plugin-runtime-error-modal`: Development error overlay
  - `@replit/vite-plugin-cartographer`: Code navigation
  - `@replit/vite-plugin-dev-banner`: Development mode indicator

### Build and Development Dependencies
- **Build**: Vite (frontend), esbuild (backend bundling)
- **Type Checking**: TypeScript with strict mode enabled
- **CSS**: PostCSS with Tailwind CSS and Autoprefixer
- **Validation**: Zod for runtime type validation, drizzle-zod for schema generation
- **Date Handling**: date-fns for date formatting

### Content Organization
The site follows a strict page structure with 15 distinct routes:
- Home, Learning Goal, Product Goal
- Q1-Q12 (12 research question pages)
- About

Each research question page includes hero section, breadcrumbs, content card, key takeaway, and prev/next navigation for seamless browsing experience.

### Data Visualization
- **Q11 Survey Results Page**: Features 7 interactive charts built with Recharts library displaying survey data from 36 respondents
  - Familiarity levels with self-improvement concepts (pie chart)
  - Perceived importance ratings (bar chart)
  - Practice adoption rates (pie chart)
  - Consistency levels in maintaining habits (bar chart)
  - Most important development areas (horizontal bar chart)
  - Effectiveness ratings across 5 categories (bar chart with 1-5 scale)
  - Impact on confidence and anxiety reduction (pie chart)
- Survey data translated from Turkish to English with accurate counts, percentages, and insights
- Responsive chart containers adapt to all screen sizes
- Additional narrative sections cover common challenges, motivations, popular practices, and advice for beginners