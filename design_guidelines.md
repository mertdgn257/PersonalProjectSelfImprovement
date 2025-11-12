# IB Personal Project - Design Guidelines

## Color System

**Light Mode (Default):**
- Primary: Deep Navy `#0F172A`
- Accent: Teal `#0EA5A4`
- Background: Off-White `#F8FAFC`
- Surface: White `#FFFFFF`
- Text Primary: Charcoal `#1F2937`
- Text Secondary: Soft Gray `#E5E7EB`

**Dark Mode:**
- Background: Deep Navy `#0F172A`
- Surface: Charcoal `#1F2937`
- Text Primary: Off-White `#F8FAFC`
- Text Secondary: Soft Gray `#E5E7EB`
- Accent remains: Teal `#0EA5A4`

## Typography

**Font Families:**
- Headings: Playfair Display (serif) via Google Fonts
- Body: Inter (sans-serif) via Google Fonts

**Type Scale:**
- Base body text: `18-19px`
- H1: `40-44px` (page titles)
- H2: `32-36px` (section headings)
- H3: `24-28px` (subsections)
- Small text: `16px` (metadata, captions)

**Font Weights:**
- Headings: 600-700
- Body: 400 (regular), 500 (medium for emphasis)

## Layout System

**Grid:**
- 12-column responsive grid system
- Container max-width: `1100-1200px`
- Generous whitespace with breathing room between sections

**Spacing Scale (Tailwind units):**
- Use units: 2, 4, 6, 8, 12, 16, 20, 24, 32
- Section padding: `py-16` to `py-24` on desktop, `py-12` on mobile
- Component spacing: `gap-8` for cards, `gap-6` for list items

## Navigation Components

**Top Navigation:**
- Sticky positioned at top
- Contains: Home, Learning Goal, Product Goal, Questions (dropdown), About
- Questions dropdown reveals Q1-Q12 links
- Theme toggle (sun/moon icon) in top right
- Mobile: Hamburger menu

**Breadcrumbs:**
- Appear on all inner pages below sticky nav
- Format: Home > Questions > Current Page
- Small text (16px), subtle color

**Prev/Next Links:**
- Bottom of every question page
- Large touch targets (min 44px height)
- Arrow icons with page titles
- Two-column layout: Prev (left), Next (right)

## Page Template Structure

**Hero Section:**
- Soft gradient background (Deep Navy to slightly lighter navy)
- H1 page title centered
- Minimum height: `300-400px`
- Use background patterns or subtle imagery where relevant

**Summary Block:**
- Immediately below hero
- 1-2 sentence overview in larger text (20-22px)
- Centered, max-width `prose`

**Main Content Card:**
- White background (light mode) / Charcoal (dark mode)
- Rounded corners: `rounded-xl` (12px)
- Soft shadow: `shadow-lg`
- Padding: `p-8` to `p-12`
- Max-width for readability: `max-w-4xl`
- User-provided text inserted verbatim with proper paragraph spacing

**Key Takeaway Callout:**
- Accent border-left (Teal, 4px thick)
- Background: very light teal tint (light mode) / dark teal tint (dark mode)
- Padding: `p-6`
- One impactful sentence highlighting main insight
- Positioned after main content

## Component Library

**Buttons:**
- Primary: Teal background, white text, `rounded-lg`, `px-6 py-3`
- Secondary: Teal outline, teal text
- Hover: Slight darkening + subtle scale (1.02)
- For buttons on images: blur backdrop (`backdrop-blur-sm`)

**Cards:**
- Rounded: `rounded-xl`
- Shadow: `shadow-md` default, `shadow-lg` on hover
- Padding: `p-6` to `p-8`
- Smooth transition on hover

**Dropdown Menu:**
- Opens below Questions nav item
- Grid layout for Q1-Q12 (2-3 columns)
- Each item shows question number + short title
- Smooth fade-in animation

## Accessibility Requirements

- Semantic HTML5 elements (`<nav>`, `<main>`, `<article>`, `<section>`)
- Visible focus rings: Teal outline `ring-2 ring-teal-400`
- Color contrast minimum: `4.5:1` for all text
- Alt text for all images
- Full keyboard navigation support
- ARIA labels where needed

## Animations & Motion

- Subtle fade/slide on page transitions (200-300ms)
- Respect `prefers-reduced-motion` media query
- Smooth scroll behavior for anchor links
- Card hover lifts: `transform translateY(-2px)`
- NO autoplay, NO excessive motion

## Images

**Hero Images:**
- Use relevant, high-quality images for hero sections
- Soft overlay gradient to ensure text readability
- Position: background or as decorative element

**Content Images:**
- Tasteful, relevant visuals per page (diagrams, metaphorical imagery)
- Lazy-load all images
- Responsive sizing with proper aspect ratios

**Suggested Placements:**
- Home page: Inspiring growth/journey imagery
- Question pages: Conceptual illustrations related to topic
- About page: Personal or professional photo

## Footer

- Global across all pages
- Contains: "Project by Mert — Last updated: [DATE]"
- Theme toggle (if not in nav)
- Subtle background color differentiation
- Padding: `py-8`

## Responsive Breakpoints

- Mobile: `< 768px` - Single column, stacked navigation
- Tablet: `768px - 1024px` - 2-column grids where appropriate
- Desktop: `> 1024px` - Full 12-column grid, max-width container

## Dark Mode Toggle

- Persistent across sessions (localStorage)
- Smooth color transitions (300ms)
- Icon changes: sun (light mode) / moon (dark mode)
- Maintains all contrast requirements in both modes

This premium, examiner-friendly design prioritizes readability, professional presentation, and seamless navigation through 14+ dedicated research pages.