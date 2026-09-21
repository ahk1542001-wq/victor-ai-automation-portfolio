#!/usr/bin/env python3
"""Audit every external link the portfolio and the resume point at.

The deploys are being torn down, so any remaining dead link is now a live
liability — a recruiter who clicks a 404 stops trusting the rest of the page.
Crawls the home page, the credentials page and all 11 case studies, plus the
link annotations in the generated PDF, then checks each unique URL.

Usage: python link_audit.py
"""
import concurrent.futures as cf
import html
import re
import sys
import urllib.error
import urllib.request
from pathlib import Path

BASE = "https://portfolioweb-three-sigma.vercel.app"
PDF = Path(__file__).resolve().parents[1] / "public/victor-resume.pdf"
UA = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/126.0 Safari/537.36"
)

SLUGS = [
    "voice-receptionist", "content-research", "swoosh-shortener",
    "gcp-genai-agent-architectures", "fyf-video-pipeline", "travelcare-ai",
    "job-matching", "lead-qualification", "lead-nurturing-crm",
    "personal-finance", "daily-news",
]

PAGES = ["/", "/credentials"] + [f"/projects/{s}" for s in SLUGS]


def fetch(url, timeout=25):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return r.status, r.read().decode("utf-8", "replace")


def collect():
    """Return {url: set(where it was found)} for the site and the PDF."""
    found = {}

    def add(u, where):
        u = u.rstrip(".,;")
        if u.startswith("http"):
            found.setdefault(u, set()).add(where)

    for path in PAGES:
        url = BASE + path
        try:
            _, body = fetch(url)
        except Exception as e:  # noqa: BLE001
            print(f"  !! could not fetch {url}: {e}")
            continue
        for m in re.finditer(r'href="(https?://[^"]+)"', html.unescape(body)):
            add(m.group(1), path)
        print(f"  crawled {path}")

    if PDF.exists():
        import pymupdf
        doc = pymupdf.open(PDF)
        for page in doc:
            for link in page.get_links():
                if link.get("uri"):
                    add(link["uri"], "resume.pdf")
        print("  crawled resume.pdf")

    return found


def check(url):
    try:
        req = urllib.request.Request(url, headers={"User-Agent": UA})
        with urllib.request.urlopen(req, timeout=30) as r:
            return url, r.status
    except urllib.error.HTTPError as e:
        return url, e.code
    except Exception as e:  # noqa: BLE001
        return url, type(e).__name__


def main():
    print("=== crawling ===")
    found = collect()
    print(f"\n{len(found)} unique external links\n")

    print("=== checking ===")
    with cf.ThreadPoolExecutor(max_workers=10) as pool:
        results = dict(pool.map(check, found))

    ok, bad = [], []
    for url, status in sorted(results.items(), key=lambda kv: str(kv[1])):
        (ok if status == 200 else bad).append((url, status))

    print(f"\n--- {len(ok)} OK ---")
    for url, status in ok:
        print(f"  {status}  {url}")

    print(f"\n--- {len(bad)} NEED ATTENTION ---")
    for url, status in bad:
        where = ", ".join(sorted(found[url]))
        print(f"  {status}  {url}\n        found on: {where}")

    return 1 if bad else 0


if __name__ == "__main__":
    sys.exit(main())
