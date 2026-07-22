# Design System Master

## Core Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Typography:** Inter (Primary), Geist Mono (Code)

## Approved Decisions
- **Animations:** Restrained Framer Motion is explicitly approved. It must be used tastefully for parallax and asymmetric movement without causing horizontal overflow. Responsive readability across all viewports (1440px to 320px) is strictly required. You must respect accessibility preferences by using `MotionConfig reducedMotion="user"` or `useReducedMotion`.
- **Media:** Use YouTube thumbnails for project images with safe fallbacks. Abstract TopologyDiagram component is preferred over fake UI templates.
- **Layout:** Swiss Editorial aesthetics. Break the grid intentionally with asymmetry, overlapping elements, and extreme typographic scale.
- **Color Scheme & Aesthetics:**
  - **Main Background Color:** Deep Onyx (`#1A1915`).
  - **Primary Text:** Warm Parchment (`#FBF9F5` / `#E8E4D9`).
  - **Card Containers:** Minimal use. Prefer edge-to-edge flow with typography as structure.
  - **Accent Colors:** Monochrome focus (Onyx/Parchment scale).
- **Components:** Avoid standard boxy borders. Use typography and spacing to divide sections.

## Component Specifics
- **Navigation:** Fixed header, Onyx background, crisp Parchment wordmark.
- **Hero Section:** Asymmetric split. Left: Heavily disciplined typography block. Right: TopologyDiagram.
- **Selected Work:** Editorial cards with scroll parallax and minimal borders. No numbered eyebrows.
- **Capabilities:** Scattered / Floating Pills layout spanning large vertical space with asymmetric parallax speeds. (DO NOT use boxed lists).
- **Experience:** Raw Data Ledger / Flight board aesthetic. Zero padding, high-density terminal layout.
- **Contact CTA:** High-contrast recruiter heading ("BUILDING AN AI AUTOMATION TEAM? LET'S TALK.") with crisp CTA button.
- **Exclusions:** Confidential client work and unverified projects are excluded.
