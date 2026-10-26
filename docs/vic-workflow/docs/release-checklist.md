# Release checklist

The owner authorized a public GitHub review branch and PR on 2026-10-26. Merge and production deployment remain separate. This checklist records the scoped review, not an independent legal clearance.

- [x] Inspect latest portfolio main and preserve dirty local resume work.
- [x] Verify model/worker settings against local configuration without exporting secrets.
- [x] Record existing sample paths, file hashes and ffprobe metadata privately.
- [x] Draft public copy without local home paths or private credentials.
- [x] Owner reviewed the self-hosted gallery/voice demo and instructed push/PR.
- [x] Record bounded music/art/voice/source provenance and upstream credits; distinguish remaining licensing uncertainty in sample-provenance.md.
- [x] Audit the exact instruction/helper edition; validate links and metadata; exclude private runtime/asset/voice dependencies explicitly. This is not a full executable runtime export.
- [x] Use the existing public portfolio repository and retain upstream attribution. No blanket new license has been assigned.
- [x] Owner approved content-creation headline/supporting copy, reviewed local preview and instructed push/PR.
- [x] Implement in an isolated branch from main; lint/build/smoke, exported timing tests and responsive visual review passed.
- [x] Review the exact allowlisted source/media diff and archive contents before push/PR; Victor merges manually.
- [x] Verify local self-hosted media/posters, embedded captions, voice transcript, keyboard controls and download.
- [ ] Verify public preview/production playback after a separately authorized deployment.
- [ ] Independently certify every historical source media right (not established by this scoped review).

Exclude private Hermes profiles/config dumps, .env, keys, service accounts, OAuth state, voice references, chat/session databases, raw logs, cloud session receipts, internal project IDs, backups, node_modules, model weights, rejected/old exports and restricted upstream mascots. A gitignore is a guardrail, not a security review.
