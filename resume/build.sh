#!/usr/bin/env bash
# Render the résumé to PDF with the same engine a browser would use, so
# the output matches what you see in preview. Brand fonts are embedded
# from ./fonts via ./fonts.css — no network access needed.
set -euo pipefail

HERE="$(cd "$(dirname "$0")" && pwd)"
REPO="$(cd "$HERE/.." && pwd)"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
OUT="$REPO/public/victor-resume.pdf"

# The desktop app's HTML preview rewrites resume.html on disk, adding a
# data-page-node-id attribute to every element. Those attributes are inert
# for rendering but they bloat the file by ~13KB and have twice been
# committed by accident. So render from a stripped copy and never touch the
# source. The copy stays in this directory so the relative fonts.css and
# fonts/ references still resolve.
SRC="$HERE/resume.html"
TMP="$HERE/.resume.build.html"
sed 's/ data-page-node-id="[^"]*"//g' "$SRC" > "$TMP"

"$CHROME" \
  --headless=new \
  --disable-gpu \
  --no-sandbox \
  --no-pdf-header-footer \
  --virtual-time-budget=8000 \
  --print-to-pdf="$OUT" \
  "file://$TMP" 2>&1 | grep -v -E "^\[|Fontconfig|DevTools" || true

rm -f "$TMP" 2>/dev/null || echo "note: left $TMP behind (harmless, git-ignored)"

echo "wrote $OUT ($(stat -f%z "$OUT") bytes)"

# Chrome leaves Author empty and puts its whole user-agent in Creator, so
# set the metadata a viewer or ATS actually shows. Optional: the PDF is
# valid without it, we just print a note.
PY=""
for cand in "$HOME/.workbuddy-ai/binaries/python/envs/default/bin/python" python3; do
  if command -v "$cand" >/dev/null 2>&1 && "$cand" -c "import pymupdf" >/dev/null 2>&1; then
    PY="$cand"
    break
  fi
done

if [ -n "$PY" ]; then
  "$PY" "$HERE/metadata.py" "$OUT"
else
  echo "note: pymupdf not available — skipped PDF metadata (PDF is still valid)"
fi
