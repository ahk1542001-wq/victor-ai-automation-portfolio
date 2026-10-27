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
  - **Accent Colors:** Viridian green (`#58f28f`) used selectively for identity, active proof, and primary emphasis. Onyx/Parchment remain dominant.
- **Components:** Avoid standard boxy borders. Use typography and spacing to divide sections.

## Taste Review Constraints
- Use audit-first redesign mode: preserve approved content, URLs, navigation meaning, and evidence hierarchy before changing presentation.
- Keep one accent color across the experience: Viridian `#58f28f`. Do not introduce unrelated CTA colors.
- Keep one sharp editorial shape language. Rounded pills and mixed radius systems are not part of this portfolio.
- Keep the page theme consistently Onyx/Parchment; section hierarchy comes from spacing and restrained surface shifts, not unrelated theme changes.
- Keep the Hero disciplined: a single visible name, concise role/value copy, and a visible contact action without decorative status strips or scroll cues.
- Use real project screenshots and demos. Do not build fake terminals, fake dashboards, fake simulators, fake metrics, or decorative product UI.
- Avoid numbered decorative eyebrows, three-equal-card feature rows, atmospheric city/time strips, and excessive border rows.
- Prefer Motion transforms/opacity with reduced-motion support. Do not add hand-rolled window scroll listeners.
- Treat these as project-local design constraints derived from the owner-approved Taste Skill documentation. The external skill is not installed or trusted as executable code.

## Component Specifics
- **Navigation:** Fixed header, Onyx background, crisp Parchment wordmark, homepage anchors plus dedicated Credentials route.
- **Hero Section:** Concise owner-approved identity, supporting sentence and clear work/contact actions. No decorative tools rail; selected work follows immediately.
- **Hero Identity:** Use one visible `VICTOR` title only; do not add a second decorative name watermark above the canvas.
- **Brand Assets:** Tool and repository marks must use approved real brand assets. Do not substitute text glyphs or generic code icons for brand logos; omit a brand when a permitted asset is unavailable.
- **Selected Work:** Homepage curates exactly three starting points: one software demo, one commercial concept and one personal-brand explainer. Full Products & Automation inventory lives at `/work` (software/n8n tracks); full Films & Content inventory lives at `/films` (v-vic/VIC). Preserve dedicated case studies and existing media. Show output before workflow detail.
- **Capabilities:** Bounded responsive motion layout (no scattered off-screen pills).
- **Experience:** Keep homepage background and selected credentials concise; detailed professional history and education at `/about`, full verified credentials at `/credentials`.
- **Credentials:** Dedicated evidence page for all verified credentials; homepage shows only the four most relevant items and links to the full page.
- **Contact CTA:** Clear invitation for systems/content work with direct email and LinkedIn actions.
- **Exclusions:** Confidential client work and unverified projects are excluded.
