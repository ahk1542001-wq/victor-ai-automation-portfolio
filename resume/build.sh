#!/usr/bin/env bash
# Render the résumé to PDF with the same engine a browser would use, so
# the output matches what you see in preview. Brand fonts are embedded
# from ./fonts via ./fonts.css — no network access needed.
set -euo pipefail

HERE="$(cd "$(dirname "$0")" && pwd)"
REPO="$(cd "$HERE/.." && pwd)"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
OUT="$REPO/public/victor-resume.pdf"

"$CHROME" \
  --headless=new \
  --disable-gpu \
  --no-sandbox \
  --no-pdf-header-footer \
  --virtual-time-budget=8000 \
  --print-to-pdf="$OUT" \
  "file://$HERE/resume.html" 2>&1 | grep -v -E "^\[|Fontconfig|DevTools" || true

echo "wrote $OUT ($(stat -f%z "$OUT") bytes)"
