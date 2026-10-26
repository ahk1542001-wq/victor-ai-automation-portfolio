# VIC — AI-assisted video production workflows

A personal content-production system directed by Victor: beginner-friendly Burmese explanations, reusable motion styles, owner-reference narration and human review.

Victor defines the audience, use case, story, visual direction and acceptance criteria, and directs AI-assisted implementation and revision. Hermes hosts the workflow; it is not a custom agent runtime built from scratch.

## What this demonstrates

- Turning an AI-agent/tool use case into a beginner script and storyboard.
- Coordinating bounded execution workers with an orchestrator that owns creative decisions.
- Producing vertical UI/cartoon explainers and horizontal spatial/cartoon/paper motion.
- Integrating my reference-conditioned voice clone, measured narration, concise display text, character animation, music and event sound.
- Running the voice stage on an owned Colab GPU runtime instead of requiring a large local GPU; prior jobs used free-tier access when available.
- Keeping resumable job checkpoints and separating technical checks from human acceptance.

## Voice cloning and GPU setup

The shared voice workflow uses VoxCPM2 with Victor's approved reference recording; it does not train a new model. It prepares the authorized runtime, generates phrase-sized chunks, verifies and retrieves audio, assembles exact narration timing, and stops the owned session. Standalone Voice and video jobs share the procedure.

See [voice cloning and Colab GPU](docs/voice-and-colab.md). Free-tier availability is conditional; this is not a free unlimited hosted voice service. Original voice references and credentials are excluded.

## Skill instructions

Read [vic-video](skills/vic-video/SKILL.md) for the exported workflow. Only owner-local paths and dependency links have been generalized; the live private skills are unchanged.

## Current release scope

This candidate contains the public-adapted VIC skill instructions (five styles), an original timing helper with tests, public-facing documentation and a credential-free configuration example. It does not include the private Hermes installation, voice recording, credentials, conversations, rendered media or a turnkey renderer installer. Runtime implementations and personal media assets are deliberately excluded. See [runtime boundaries](skills/vic-video/references/runtime-map.md) and [rights](docs/RIGHTS.md); this instruction edition alone cannot render videos. See the [sample provenance review](docs/sample-provenance.md) for checked origins, owner authorization and remaining rights/verification limits.

Existing videos demonstrate individual styles. The consolidated five-style skill has offline checks and historical render evidence; a fresh unattended end-to-end run across all five styles is not established. No campaign performance, sales, retention or audience-growth results are claimed.

See [architecture and workflow](docs/architecture.md), [styles](docs/styles.md), [setup](docs/setup.md), and [release checklist](docs/release-checklist.md).

## Attribution and rights

Hermes, AniDoodle, huashu-art-motion, HyperFrames, GSAP and VoxCPM are upstream dependencies/references, not original frameworks authored by Victor. Retain applicable upstream notices when source or assets are included. Third-party mascots, music, fonts, screenshots and brand marks are not automatically covered by the code license. No new license for the combined pack or sample media is asserted by this draft.
