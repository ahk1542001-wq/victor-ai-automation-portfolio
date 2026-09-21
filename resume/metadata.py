#!/usr/bin/env python3
"""Set document metadata on the generated résumé PDF.

Headless Chrome takes the Title from <title>, leaves Author/Subject/Keywords
empty, and writes its entire user-agent string into Creator. PDF viewers and
applicant-tracking systems surface these fields, so they are worth setting
deliberately.

Run by build.sh after Chrome renders; safe to run on its own:
    python3 metadata.py ../public/victor-resume.pdf
"""

import sys

import pymupdf

TITLE = "Aung Hein Kyaw (Victor) — AI Automation & Agent Workflow Specialist"
AUTHOR = "Aung Hein Kyaw (Victor)"
SUBJECT = "Résumé — AI Automation & Agent Workflow Specialist"
CREATOR = "resume/build.sh"

# Terms a recruiter or ATS is likely to search on. Keep them to the things
# this résumé genuinely evidences — keyword stuffing gets a PDF filtered out.
KEYWORDS = ", ".join([
    "AI automation", "AI agent engineer", "agentic workflows",
    "Model Context Protocol", "MCP", "Google ADK", "Google Cloud Run",
    "Vertex AI", "n8n", "Python", "FastAPI", "Docker", "RAG",
    "human-in-the-loop", "LLM integration", "Bangkok", "remote",
])


def main(path: str) -> int:
    doc = pymupdf.open(path)
    doc.set_metadata({
        "title": TITLE,
        "author": AUTHOR,
        "subject": SUBJECT,
        "keywords": KEYWORDS,
        "creator": CREATOR,
        "producer": "Skia/PDF (headless Chrome)",
    })
    doc.save(path, incremental=True, encryption=pymupdf.PDF_ENCRYPT_KEEP)
    doc.close()

    check = pymupdf.open(path)
    md = check.metadata
    print(f"metadata -> author={md['author']!r} creator={md['creator']!r}")
    print(f"            subject={md['subject']!r}")
    print(f"            keywords={md['keywords'][:60]!r}...")
    check.close()
    return 0


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("usage: metadata.py <pdf>", file=sys.stderr)
        raise SystemExit(2)
    raise SystemExit(main(sys.argv[1]))
