import fs from 'fs';
import path from 'path';

console.log('Running Production Smoke Verification...');

const outDir = path.join(process.cwd(), '.next/server/app');

// 1. Verify Homepage
const homeHtmlPath = path.join(outDir, 'index.html');
if (!fs.existsSync(homeHtmlPath)) {
  console.error('FAIL: Homepage build output index.html not found');
  process.exit(1);
}

const homeHtml = fs.readFileSync(homeHtmlPath, 'utf-8');

if (!homeHtml.includes('VICTOR')) {
  console.error('FAIL: Hero text VICTOR not found on homepage');
  process.exit(1);
}

// 2. Privacy & Exclusions Check
if (homeHtml.includes('Ye Man')) {
  console.error('FAIL: Confidential client Ye Man found on homepage');
  process.exit(1);
}

// 3. Verify Project Routes
const projects = [
  'voice-receptionist',
  'content-research',
  'swoosh-shortener',
  'job-matching',
  'lead-qualification',
  'personal-finance',
  'daily-news'
];

for (const slug of projects) {
  const projectHtmlPath = path.join(outDir, 'projects', `${slug}.html`);
  if (!fs.existsSync(projectHtmlPath)) {
    console.error(`FAIL: Case study page for ${slug} not found at ${projectHtmlPath}`);
    process.exit(1);
  }
  const projectHtml = fs.readFileSync(projectHtmlPath, 'utf-8');
  if (!projectHtml.includes('What I Personally Directed')) {
    console.error(`FAIL: ${slug} missing mandatory case study section`);
    process.exit(1);
  }
}

console.log('PASS: All production smoke checks completed successfully!');
