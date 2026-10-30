# Design System Master

## Core Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Typography:** Instrument Serif (headings), Geist (body/UI), Geist Mono (code and compact metadata)

## Approved Decisions
- **Pre-flight Rules:** Audit existing UI before redesign. Preserve approved content and Information Architecture (IA).
- **Responsive Readability:** Strictly required at 1440px, 1024px, 390px, and 320px.
- **Animations:** Motion/Framer Motion allowed but limit to transform/opacity only where practical. `prefers-reduced-motion` mandatory.
- **Visuals:** No fake UI, fake metrics, or decorative status elements. Abstract TopologyDiagram component is preferred.
- **QA:** Visual QA required before PR.
- **Layout:** Warm editorial portfolio. Use deliberate asymmetry within equal outer margins, large serif headings and real output previews. Keep the text and media balanced and readable.
- **Color Scheme & Aesthetics:**
  - **Main Background Color:** Deep Onyx (`#14130e` dark; `#f4f1ea` light).
  - **Primary Text:** Warm Parchment (`#f2efe6` dark; `#16150f` light).
  - **Card Containers:** Minimal use. Prefer edge-to-edge flow with typography as structure.
  - **Accent Colors:** Pine (`#6fbf9a` dark / `#2e5e4e` light) for links and selected states; clay (`#e08a5c` dark / `#ab5d37` light) for primary actions. Onyx/Parchment remain dominant.
- **Components:** Typography and spacing divide sections; retain the owner-requested strong collection borders and restrained offset shadows.

## Taste Review Constraints
- Use audit-first redesign mode: preserve approved content, URLs, navigation meaning, and evidence hierarchy before changing presentation.
- Keep the pine-link / clay-action roles above consistent. Do not introduce unrelated accent colors.
- Use the existing restrained frame language consistently: 10px controls/media, 12px larger frames; compact metadata may use pills. Avoid unrelated corner/shadow systems.
- Keep the page theme consistently Onyx/Parchment; section hierarchy comes from spacing and restrained surface shifts, not unrelated theme changes.
- Keep the Hero disciplined: a single visible name, concise role/value copy, and a visible contact action without decorative status strips or scroll cues. Use an identity-led typographic opening, with no project screenshot or portrait in the first screen.
- Use real project screenshots and demos. Do not build fake terminals, fake dashboards, fake simulators, fake metrics, or decorative product UI.
- Avoid numbered decorative eyebrows, three-equal-card feature rows, atmospheric city/time strips, and excessive border rows.
- Prefer Motion transforms/opacity with reduced-motion support. Do not add hand-rolled window scroll listeners.
- Treat these as project-local design constraints derived from the owner-approved Taste Skill documentation. The external skill is not installed or trusted as executable code.

## Component Specifics
- **Navigation:** Fixed header, Onyx background, crisp Parchment wordmark, homepage anchors plus dedicated Credentials route.
- **Hero Section:** Text-led identity with supporting sentence and clear work/email/GitHub actions. The owner does not want the portrait in the hero/top section. Keep the retained real portrait lower on the homepage in Background/About, on the right of the background copy on desktop and after it on phone. The owner-approved compact Tools rail sits beneath the hero, followed by selected work. Keep it secondary to the headline, with explicit pause/resume and static reduced-motion/no-JS fallback.
- **Hero Identity:** Use one visible `VICTOR` title only; do not add a second decorative name watermark above the canvas.
- **Brand Assets:** Tool and repository marks must use approved real brand assets. Do not substitute text glyphs or generic code icons for brand logos; omit a brand when a permitted asset is unavailable.
- **Selected Work:** Homepage curates exactly three starting points: one software demo, one commercial concept and one personal-brand explainer. Full Products & Automation inventory lives at `/work` (software/n8n tracks); full Films & Content inventory lives at `/films` (v-vic/VIC). Preserve dedicated case studies and existing media. Show output before workflow detail.
- **Capabilities:** Bounded responsive motion layout (no scattered off-screen pills).
- **Experience:** Keep homepage background and selected credentials concise; detailed professional history and education at `/about`, full verified credentials at `/credentials`.
- **Credentials:** Dedicated evidence page for all verified credentials; homepage shows only the four most relevant items and links to the full page.
- **Contact CTA:** Clear invitation for systems/content work with direct email, LinkedIn and a visible text GitHub link.
- **Collection navigation:** Products and Films each have their own strong bordered container; distinguish them on both stacked-phone and side-by-side desktop layouts.
- **Production approach:** Keep a short homepage teaser with the full role/stage map on `/films#production-approach`. Describe the human-directed system without claiming every sample was produced autonomously end-to-end.
- **Exclusions:** Confidential client work and unverified projects are excluded.

## Approved visual/recruiter polish — 2026-10-27
- Owner correction after PR44: the hero is about Victor, not a project. Use bold, two-line identity copy with restrained pine/clay word blocks, supporting context and work/résumé/contact actions. No hero project preview or face. Keep the original portrait lower/right in Background; selected projects begin below the hero.
- Keep exactly three selected works; commercial and explainer previews share a stage height while preserving their native video ratios.
- Products use compact, output-first browsing cards; complete outcomes and implementation detail remain in each case study.
- Film topics lead, with visual style as a secondary label. Preserve all eight projects, five VIC samples and three commercial films.
- Use selective one-time IntersectionObserver reveals with visible server-rendered content, native scrolling and fine-pointer hover feedback. No custom cursor, scroll hijacking, scroll listeners or autoplay.
- Anchor offset must clear the sticky header. Reduced-motion must disable smooth scrolling and movement. Test keyboard/touch, no-JS reading and 1440/1024/390/320 widths.
- Taste documentation is a reference for subject-specific imagery, hierarchy and screenshot critique. Existing owner-approved content, palette, borders and routing take precedence; no external skill scripts or assets are installed.

## Hero motion and tools refinement — 2026-10-27
- One short transform/opacity entrance for title, supporting copy and actions; gentle word-block settling. Text remains readable, with no opacity-zero loading state. Reduced motion is static.
- Hero-only, low-opacity static SVG grain, no moving particles or downloaded assets.
- Hero email uses a labelled envelope icon; GitHub uses the retained real mark. Icon links need 44px targets, visible focus and accessible names/tooltips.
- Restore the existing technology marquee concept as a compact rail below the hero; reuse approved local marks, support pause/resume, hover/focus pause and wrapping reduced-motion/no-JS content. Do not add skills, dependencies, logo substitutes or unverified tool claims.
- Footer keeps Email as the primary labelled action, with LinkedIn/GitHub secondary; do not duplicate the hero's icon-only treatment throughout the page.
