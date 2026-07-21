# Design System Master

## Core Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Typography:** Inter (Primary), Geist Mono (Code)

## Approved Decisions
- **Animations:** CSS transitions only. Small staggered text entrance, initial heading mask/reveal, subtle fade/rise for cards. Must respect `prefers-reduced-motion`. Framer Motion, magnetic buttons, heavy parallax, and decorative animations are strictly prohibited.
- **Media:** Use YouTube thumbnails for project images with safe fallbacks.
- **Layout:** Responsive grid system, mobile-first approach. Predominantly white and soft-gray background. Generous whitespace, thin dividers.
- **Color Scheme & Aesthetics:**
  - Clean editorial style.
  - Strong black typography.
  - Minimal black buttons.
  - One intentionally dark charcoal Experience section.
  - STRICTLY AVOID: Site-wide dark themes, gradients, glassmorphism, glowing logos/text, decorative color blobs, and excessive green/amber palettes.
- **Components:** Cards and containers must use square corners or a maximum of 8px border radius (`rounded` or `rounded-lg`).

## Component Specifics
- **Navigation:** Small, restrained. Availability status on the left. Simple wordmark "Victor".
- **Hero Section:** Typography-led, very large editorial heading (oversized VICTOR). Must contain approved role, location, value proposition, and availability. No invented portraits.
- **Selected Work:** Two-column editorial grid focusing on project name, role, one outcome, and links.
- **Capabilities:** Large horizontal rows (e.g. Workflow Automation). Must remain keyboard accessible. No unsupported claims like UI/UX Design.
- **Experience:** One full-width dark charcoal section. Clean horizontal rows.
- **Contact CTA:** Large recruiter-focused heading ("Building an AI automation team? Let’s talk.") on a light background.
- **Exclusions:** Confidential client work and unverified projects are excluded. Do not publish unsupported metrics or production claims.
