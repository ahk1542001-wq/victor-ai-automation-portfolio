# Design System Master

## Core Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Typography:** Inter (Primary), Geist Mono (Code)

## Approved Decisions
- **Animations:** CSS transitions only. Respect `prefers-reduced-motion`. Framer Motion and heavy animations are strictly prohibited.
- **Media:** Use YouTube thumbnails for project images with safe fallbacks.
- **Layout:** Responsive grid system, mobile-first approach. Crisp editorial layout structure with generous spacing and thin viridian dividers.
- **Color Scheme & Aesthetics:**
  - **Main Background Color:** Deep Rich Viridian Dark Green (`#082c22` / `#0a3327`).
  - **Primary Text:** Crisp White (`#FFFFFF`) & Soft Mint Tint (`#D1E7DD`).
  - **Card Containers:** Viridian Shade (`#061f18` / `#0d4032`) with clean borders (`#165242`).
  - **Contrasting Section:** Intentionally styled Viridian Light/Cream or Charcoal band for visual rhythm.
  - **Accent Colors:** Emerald Green (`#10B981`) & Gold/Amber for status badges.
- **Components:** Cards and containers must use square corners or a maximum of 8px border radius (`rounded` or `rounded-lg`).

## Component Specifics
- **Navigation:** Fixed header, Viridian dark background (`#082c22`), crisp white wordmark, emerald status badge.
- **Hero Section:** Large editorial heading ("VICTOR / AI AUTOMATION") in white & soft viridian mint.
- **Selected Work:** Editorial grid with dark viridian cards, crisp white titles, emerald badges, and case study links.
- **Capabilities:** Numbered horizontal rows on viridian dark background with hover highlights.
- **Experience:** Clean horizontal rows on contrasting deep viridian band.
- **Contact CTA:** High-contrast recruiter heading ("BUILDING AN AI AUTOMATION TEAM? LET'S TALK.") with crisp CTA button.
- **Exclusions:** Confidential client work and unverified projects are excluded.
