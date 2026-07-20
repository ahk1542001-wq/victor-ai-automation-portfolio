# Design System Master

## Core Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Typography:** Inter (Primary), Geist Mono (Code)

## Approved Decisions
- **Animations:** CSS transitions only (`.transition-card`). Framer Motion is strictly prohibited.
- **Media:** Use YouTube thumbnails (`img.youtube.com/vi/<ID>/maxresdefault.jpg`) for project images. No separate screenshots.
- **Layout:** Responsive grid system, mobile-first approach.
- **Color Scheme:** Minimalist Slate (`slate-50` to `slate-950`) with blue accents for CTA/links. Supports light and dark modes natively.

## Component Specifics
- **Hero Section:** Must contain the strict H1 (Victor Aung Hein Kyaw), Role (AI Automation & Agent Workflow Specialist), and Learning Direction copy exactly as approved.
- **Projects List:** Must render exactly the verified claims and tools from `PROJECT_EVIDENCE.md`.
- **Exclusions:** Project 7 (AI Lead Nurturing CRM) and Ye Man are explicitly excluded from the public UI.
