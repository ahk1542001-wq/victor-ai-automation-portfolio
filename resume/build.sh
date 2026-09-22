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
CHROME_PROFILE="$(mktemp -d "${TMPDIR:-/tmp}/victor-resume-chrome.XXXXXX")"
CHROME_LOG="$(mktemp "${TMPDIR:-/tmp}/victor-resume-chrome.XXXXXX")"
PDF_TMP_DIR="$(mktemp -d "$REPO/public/.resume-pdf.XXXXXX")"
PDF_TMP="$PDF_TMP_DIR/victor-resume.pdf"
cleanup() {
  rm -f "$TMP"
  rm -f "$CHROME_LOG"
  rm -rf "$CHROME_PROFILE"
  rm -rf "$PDF_TMP_DIR"
}
trap cleanup EXIT
sed 's/ data-page-node-id="[^"]*"//g' "$SRC" > "$TMP"

# Chrome 153 on macOS can keep its parent process alive after a successful
# print even though the PDF is already complete. A bounded alarm prevents a
# stuck build. Render into a temporary directory and replace the public artifact
# only after a fresh non-empty PDF exists, so a failed build preserves the last
# known-good résumé.
set +e
{ (perl -e 'alarm 15; exec @ARGV' \
  "$CHROME" \
  --headless=new \
  --disable-gpu \
  --no-sandbox \
  --user-data-dir="$CHROME_PROFILE" \
  --no-first-run \
  --no-default-browser-check \
  --disable-background-networking \
  --disable-component-update \
  --disable-sync \
  --disable-extensions \
  --metrics-recording-only \
  --disable-cache \
  --no-pdf-header-footer \
  --virtual-time-budget=8000 \
  --print-to-pdf="$PDF_TMP" \
  "file://$TMP") >"$CHROME_LOG" 2>&1; } 2>/dev/null
CHROME_STATUS=$?
set -e

if [ ! -s "$PDF_TMP" ]; then
  cat "$CHROME_LOG" >&2
  echo "error: Chrome did not produce a résumé PDF (exit $CHROME_STATUS)" >&2
  exit "$CHROME_STATUS"
fi

mv "$PDF_TMP" "$OUT"

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
