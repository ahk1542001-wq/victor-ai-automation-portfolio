# Setup reference — not a turnkey installer

The example records the architecture of the owner's inspected installation. Model names are installation-specific identifiers, not a promise of public availability, entitlement, price or compatibility. Configure your own authorized accounts. No credentials or subscription access are distributed.

- Main: GPT-6.1 Sol, medium reasoning, openai-codex route.
- Workers: ag/gemini-3.8-flash-high, high reasoning, through the local 9Router gateway.
- Standalone Voice: same Flash route for orchestration; actual TTS inference is VoxCPM2 on an authorized owned Google Colab runtime.
- Worker settings: depth 1; at most 2 concurrent children; 100 iterations per task; no configured fallback providers.
- Creator native toolsets: web, browser, skills, terminal, file, code_execution, vision, tts, memory, delegation. Toolset configuration alone does not verify every browser/backend capability.
- No profile-local MCP server entries were present in the inspected Creator config. Do not describe this as a bundled custom MCP server.
- Vertex is intended for authorized artwork generation. Existing project/region settings are not proof of current image capability, credits or valid credentials; production requires a live capability preflight.

## Render dependencies

Short: existing HTML/browser capture and FFmpeg. Spatial: local HyperFrames 0.8.117 and GSAP 3.14.2. Cartoon: existing Canvas runtime, fonts, local rig and FFmpeg. Paper: existing Canvas/JS engine, Python, Playwright and FFmpeg. Verify pinned versions and license notices before packaging; this draft installs nothing.

## Shared voice

Use one shared procedure/driver for standalone audio and video jobs. Preserve the approved reference privately. Split approved Burmese narration at natural phrase boundaries; retain separate display and pronunciation text. The existing reference-only VoxCPM2 working recipe uses cfg_value 2.0 and inference_timesteps 10. It is not retraining and is not a universal quality guarantee.

Run only an authorized job in an owned disposable Colab runtime, including permitted dependency/model setup. Preserve raw chunks and assemble a 48 kHz mono PCM16 master with sample timing and a 10 ms amplitude envelope. Verify completeness and natural joins by listening. Stop only the owned runtime after retrieval and verification. Never publish the reference recording, OAuth tokens, remote session handles or real account/project identifiers.

## Colab access and cost limits

See [voice cloning and Colab GPU](voice-and-colab.md) for the staged process, conditional free-tier availability and current-policy checks. Do not describe historical CLI runs as a guaranteed always-on free GPU service.
