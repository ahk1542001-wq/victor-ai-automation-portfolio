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

## Required GitHub Flow

The public repository uses GitHub Flow for every source-controlled change.

1. Keep `main` clean and deployable. Never edit or commit directly on `main`.
2. Before changing files, confirm the worktree is clean and branch from the latest `main`.
3. Use one descriptive branch per logical task, such as `feat/ui-polish`, `fix/mobile-layout`, or `docs/readme-update`.
4. Related edits may stay on the same task branch; do not create a branch for every individual file.
5. Run the checks appropriate to the change before committing. For application changes, run `npm run lint` and `npm run build`.
6. Review the diff and scan for secrets, private local paths, confidential information, unsupported claims, and unintended files before pushing.
7. Use small logical commits with clear messages, push the task branch, and open a pull request describing the change and verification.
8. Agents MUST NOT merge a pull request or merge a branch into `main`. Victor performs the final review and merge manually.
9. A green automated check is not merge approval. Wait for Victor's manual review and merge decision.

Reading, planning, auditing, running unchanged tests, and local visual review do not require a new branch when no tracked files are modified.
