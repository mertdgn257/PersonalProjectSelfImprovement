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
The site follows a strict page structure with 16 distinct routes:
- Home, Learning Goal, Product Goal
- Q1-Q12 (12 research question pages)
- Recommended Reading (19 curated book recommendations)
- About

Each research question page includes hero section, breadcrumbs, content card, key takeaway, and prev/next navigation for seamless browsing experience.

**Book Recommendations Page** (November 2025):
- Added comprehensive "Recommended Reading" page at `/recommended-reading`
- Features 19 carefully curated books from James Clear's reading list
- Prominently features "Atomic Habits" as the foundation of this project
- 12 books now display authentic book covers (user-provided images)
- Books organized with covers, descriptions, and direct links to James Clear's book pages
- Categories include self-help, psychology, habit formation, and personal development
- All book data sourced from jamesclear.com/best-books (self-help and psychology sections)
- Navigation flow: Q12 → Recommended Reading → About
- Accessible via main navigation "Books" link

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

### James Clear Atomic Habits Integration (November 2025)
Integrated evidence-based content and visual diagrams inspired by James Clear's Atomic Habits across four key question pages:

**Q4 (Small Changes & Long-term Growth)**:
- Custom-generated diagrams: 1% compound growth, Plateau of Latent Potential, Habit Loop
- Paraphrased content explaining compound effect mathematics, valley of disappointment, and the four-stage habit loop
- Visual explanations showing why small changes compound exponentially over time

**Q7 (Habits of Successful People)**:
- Four Laws of Behavior Change framework (Make It Obvious, Attractive, Easy, Satisfying)
- Habit stacking diagram and implementation strategies
- Practical examples for each law with both building good habits and breaking bad habits

**Q12 (Everyday Strategies)**:
- Five practical implementation strategies: Two-Minute Rule, Implementation Intentions, Environment Design, Temptation Bundling, Never Miss Twice
- Real-world examples for each strategy showing how to apply them daily
- Emphasis on making habits easy to start and optimizing environment over relying on willpower

**Q9 (Challenges & Misconceptions)**:
- Six common misconceptions debunked (breaking habits completely, 21-day myth, willpower over environment, immediate results)
- Evidence-based solutions for common challenges (starting difficulties, stopping bad habits)
- Realistic expectations about plateaus, persistence, and the nature of habit change

All content paraphrased and integrated seamlessly with existing research, maintaining academic tone while adding practical frameworks and visual aids for IB examiner clarity.