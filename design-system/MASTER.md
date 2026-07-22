# Design System Master

## Core Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Typography:** Inter (Primary), Geist Mono (Code)

## Approved Decisions
- **Pre-flight Rules:** Audit existing UI before redesign. Preserve approved content and Information Architecture (IA).
- **Responsive Readability:** Strictly required at 1440px, 1024px, 390px, and 320px.
- **Animations:** Motion/Framer Motion allowed but limit to transform/opacity only where practical. `prefers-reduced-motion` mandatory.
- **Visuals:** No fake UI, fake metrics, or decorative status elements. Abstract TopologyDiagram component is preferred.
- **QA:** Visual QA required before PR.
- **Layout:** Swiss Editorial aesthetics. Break the grid intentionally with asymmetry, overlapping elements, and extreme typographic scale, but ensure elements are bounded and readable.
- **Color Scheme & Aesthetics:**
  - **Main Background Color:** Deep Onyx (`#1A1915`).
  - **Primary Text:** Warm Parchment (`#FBF9F5` / `#E8E4D9`).
  - **Card Containers:** Minimal use. Prefer edge-to-edge flow with typography as structure.
  - **Accent Colors:** Monochrome focus (Onyx/Parchment scale). Do NOT change the approved color palette.
- **Components:** Avoid standard boxy borders. Use typography and spacing to divide sections.

## Component Specifics
- **Navigation:** Fixed header, Onyx background, crisp Parchment wordmark.
- **Hero Section:** Asymmetric split. Left: Heavily disciplined typography block. Right: TopologyDiagram.
- **Selected Work:** Editorial cards with scroll parallax and minimal borders. No numbered eyebrows.
- **Capabilities:** Bounded responsive motion layout (no scattered off-screen pills).
- **Experience:** Raw Data Ledger / Flight board aesthetic. Zero padding, high-density terminal layout.
- **Contact CTA:** High-contrast recruiter heading ("BUILDING AN AI AUTOMATION TEAM? LET'S TALK.") with crisp CTA button.
- **Exclusions:** Confidential client work and unverified projects are excluded.
