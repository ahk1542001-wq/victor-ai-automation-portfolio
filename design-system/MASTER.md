# Design System Master

## Core Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Typography:** Inter (Primary), Geist Mono (Code)

## Approved Decisions
- **Animations:** CSS transitions only (`.transition-card`). Framer Motion and decorative animations are strictly prohibited.
- **Media:** Use YouTube thumbnails (`img.youtube.com/vi/<ID>/maxresdefault.jpg`) for project images with safe fallbacks (e.g. `hqdefault.jpg`). No separate screenshots.
- **Layout:** Responsive grid system, mobile-first approach.
- **Color Scheme & Aesthetics:**
  - Restrained professional neutral palette (e.g., standard Zinc or Gray).
  - Two controlled accent colors (e.g., standard Blue for primary links, Emerald for success/verified states).
  - STRICTLY AVOID: purple-heavy styling, excessive dark slate, glassmorphism, gradients, oversized pills, generic AI visuals.
- **Components:** Cards and containers must use a maximum of 8px border radius (`rounded` or `rounded-lg`).

## Component Specifics
- **Hero Section:** Must contain the strict H1 (Victor Aung Hein Kyaw), Role (AI Automation & Agent Workflow Specialist), concise value proposition, and contact CTA.
- **Projects List:** Must render exactly the verified claims and tools from `PROJECT_EVIDENCE.md` using a data-driven TS structure.
- **Exclusions:** Project 7 (AI Lead Nurturing CRM) and Ye Man are explicitly excluded from the public UI. No unsupported metrics or production claims. No resume link (unless sanitized public resume exists).
