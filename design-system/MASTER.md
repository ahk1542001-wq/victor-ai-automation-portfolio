# Design System Master

## Core Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Typography:** Inter (Primary), Geist Mono (Code)

## Approved Decisions
- **Animations:** CSS transitions only. Small staggered text entrance, initial heading mask/reveal, subtle fade/rise for cards. Respect `prefers-reduced-motion`. Framer Motion, magnetic buttons, heavy parallax, and decorative animations are strictly prohibited.
- **Media:** Use YouTube thumbnails for project images with safe fallbacks.
- **Layout:** Responsive grid system, mobile-first approach. Clean editorial portfolio structure with generous whitespace and thin dividers.
- **Color Scheme & Aesthetics:**
  - **Signature Brand Color:** Viridian Green (`#0D5C46` / `#094232`).
  - **Accent Tints:** Soft Viridian Light (`#F0F7F4` / `#E2F0EC`).
  - **Base Neutrals:** Pure White (`#FFFFFF`), Soft Gray (`#F9FAF9`), Deep Charcoal (`#1A1A1A`), Rich Black (`#111111`).
  - **Dark Accent Section:** One intentionally dark Viridian-Charcoal Experience section.
  - **STRICTLY AVOID:** Site-wide pure dark themes, heavy gradients, glassmorphism, glowing neon logos/text, and decorative color blobs.
- **Components:** Cards and containers must use square corners or a maximum of 8px border radius (`rounded` or `rounded-lg`).

## Component Specifics
- **Navigation:** Small, restrained. Availability status on the left. Simple wordmark "Victor". Viridian green hover states.
- **Hero Section:** Typography-led, very large editorial heading (oversized VICTOR). Styled with Viridian green text highlights and clean layout.
- **Selected Work:** Two-column editorial grid with Viridian accent badges, project role, outcome, and links.
- **Capabilities:** Large horizontal rows with Viridian green indicators and hover interactions.
- **Experience:** Full-width dark Viridian-Charcoal section with clean horizontal rows.
- **Contact CTA:** Large recruiter-focused heading ("Building an AI automation team? Let’s talk.") with Viridian CTA button.
- **Exclusions:** Confidential client work and unverified projects are excluded.
