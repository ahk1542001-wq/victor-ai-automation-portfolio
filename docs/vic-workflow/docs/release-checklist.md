# Release checklist

This is a local candidate, not approval to publish.

- [x] Inspect latest portfolio main and preserve dirty local resume work.
- [x] Verify model/worker settings against local configuration without exporting secrets.
- [x] Record existing sample paths, file hashes and ffprobe metadata privately.
- [x] Draft public copy without local home paths or private credentials.
- [ ] Owner selects which sample versions can be publicly shown, including their voice tracks.
- [ ] Review music/SFX, illustration, avatar, brand, screenshot and font reuse rights for each selected sample.
- [ ] Audit exact full skill/resource export and dependency closure; remove private paths and historical-job dependencies; validate all links.
- [ ] Choose repository name, visibility and licensing for original work; retain required upstream notices. Do not give upstream work a blanket new license.
- [ ] Approve public project claims and final portfolio copy.
- [ ] Implement in an isolated branch from current main; lint/build/smoke and responsive visual review.
- [ ] Review the exact allowlisted GitHub diff before push/PR; Victor merges manually.
- [ ] Check final media hosting, poster images, caption/transcript accessibility and public playback.

Exclude private Hermes profiles/config dumps, .env, keys, service accounts, OAuth state, voice references, chat/session databases, raw logs, cloud session receipts, internal project IDs, backups, node_modules, model weights, rejected/old exports and restricted upstream mascots. A gitignore is a guardrail, not a security review.
