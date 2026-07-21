# Portfolio Development Agents

## Context & Routing
Agents working on this repository MUST read this file and `design-system/MASTER.md`
before making changes. If `.agents/local-context.md` exists, read it for private
local routing; that file is intentionally excluded from Git.

**Routing Rules:**
- Content in `src/data/` represents approved public claims.
- Do not add personal, client, or project claims without evidence and owner approval.
- Never copy private local context into the website or repository.

## Design System & Skills
- Read and follow `design-system/MASTER.md` for all design decisions, exclusions, and palette choices.
- **Primary Design Intelligence:** `.agents/skills/ui-ux-pro-max` (Use for UI, responsive design, typography, accessibility).
- **Secondary Design Intelligence:** `.agents/skills/ui-ux-designer` (Use only for hierarchy, recruiter scanability, responsive UX, and accessibility review).
- Do not activate other local design skills without a specific need.

**Important overrides:**
Approved public content in `src/data/` and `design-system/MASTER.md` override all skills.

*(Reinstall UI/UX Pro Max if missing: `npx ui-ux-pro-max-cli init --ai antigravity`)*
