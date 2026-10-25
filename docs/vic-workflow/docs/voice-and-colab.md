# Voice cloning and Colab GPU workflow

## What Victor implemented

A shared narration procedure integrates reference-conditioned VoxCPM2 synthesis with Burmese script chunking, pronunciation handling, a reusable job driver, audio assembly and measured video timing. Victor directed and iterated this integration; VoxCPM2 and Colab are upstream technologies, not a voice model or GPU platform he built.

The voice belongs to Victor and is conditioned from an approved recording. This is inference-time voice cloning, not a claim of fine-tuning or training a new model. The public portfolio can include an approved generated narration sample; the private conditioning recording is not distributed.

## How the existing workflow operates

1. Freeze approved narration; keep display text separate from documented pronunciation substitutions.
2. Divide Burmese speech into natural phrases without breaking combining sequences or protected terms. Pause values follow delivery; no universal four-second cap.
3. Confirm authorization and session ownership. Check actual GPU availability and runtime state; prepare the required dependencies/model in the disposable runtime when permitted.
4. Use the existing shared driver and VoxCPM2 reference-only recipe to generate chunks. Inspect remote progress before retrying after a connection failure.
5. Retrieve expected files and verify IDs/hashes. Listen for missing words, repetition, glitches, pronunciation and joins; regenerate only concrete defective chunks.
6. Preserve raw audio and assemble a 48 kHz mono PCM16 master with sample-based timing and a 10 ms amplitude envelope. Animation follows measured speech rather than stretching narration to a planned duration. The envelope supports amplitude-driven mouth animation, not phoneme-level alignment.
7. Verify downloaded output before stopping only the owned session. Keep receipts private and summarize verification limits honestly.

## Free-tier GPU: demonstrated access, not a guarantee

Prior project jobs used free Colab GPU access when available, avoiding the requirement to run the voice model on the owner's small local GPU. This does not mean the complete production stack costs nothing: reasoning models, artwork, storage and media rights are separate.

Google states that Colab resources are not guaranteed or unlimited; GPU types, quotas and runtime lifetimes vary. Its free-tier prioritizes interactive notebook use and restricts some remote-control and distributed-worker patterns. Historical CLI access is not proof that an unattended public service is supported or permitted. Before presenting a reproducible setup, review the current access method and applicable policies. This document does not provide a limit bypass, remote shell setup or always-on endpoint.

Source checked 2026-10-26: [Google Colab FAQ — resources and restrictions](https://research.google.com/colaboratory/faq.html).

## Public/private boundary

Publish the explanation, credential-free configuration and approved output samples. Exclude the original voice reference, tokens, service accounts, session handles and raw logs. Anyone adapting the workflow must use a voice they are authorized to synthesize and their own permitted compute access. Model/software and sample-media redistribution rights require separate review.
