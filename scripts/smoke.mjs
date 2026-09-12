import fs from 'fs';
import path from 'path';

console.log('Running Production Smoke Verification...');

const outDir = path.join(process.cwd(), '.next/server/app');
const projectsDataPath = path.join(process.cwd(), 'src/data/projects.ts');

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

// 3. Dynamically extract project IDs from projects.ts to prevent silent omissions
if (!fs.existsSync(projectsDataPath)) {
  console.error(`FAIL: Projects data source not found at ${projectsDataPath}`);
  process.exit(1);
}

const projectsSource = fs.readFileSync(projectsDataPath, 'utf-8');
const idMatches = [...projectsSource.matchAll(/id:\s*['"]([^'"]+)['"]/g)];
const projectSlugs = idMatches.map((m) => m[1]);

if (projectSlugs.length < 10) {
  console.error(`FAIL: Expected at least 10 projects, but found ${projectSlugs.length}`);
  process.exit(1);
}

console.log(`Verifying ${projectSlugs.length} project case studies...`);

// 4. Verify Each Project Route & Mandatory Sections
const mandatorySections = [
  'The Problem',
  'My Role',
  'What I Personally Directed',
  'The Solution',
  'Verified Outcome'
];

for (const slug of projectSlugs) {
  // Check link existence on homepage
  if (!homeHtml.includes(`/projects/${slug}`)) {
    console.error(`FAIL: Homepage missing link to project ${slug}`);
    process.exit(1);
  }

  const projectHtmlPath = path.join(outDir, 'projects', `${slug}.html`);
  if (!fs.existsSync(projectHtmlPath)) {
    console.error(`FAIL: Case study page for ${slug} not found at ${projectHtmlPath}`);
    process.exit(1);
  }

  const projectHtml = fs.readFileSync(projectHtmlPath, 'utf-8');
  for (const section of mandatorySections) {
    if (!projectHtml.includes(section)) {
      console.error(`FAIL: ${slug} missing mandatory case study section "${section}"`);
      process.exit(1);
    }
  }
}

// 5. Specific Verification for Hackathon & Architecture Showcases
const gcpHtml = fs.readFileSync(path.join(outDir, 'projects', 'gcp-genai-agent-architectures.html'), 'utf-8');
if (!gcpHtml.includes('https://youtu.be/boDhNKUwZyE')) {
  console.error('FAIL: GCP GenAI Agent Architectures missing YouTube demo link');
  process.exit(1);
}
if (!gcpHtml.includes('https://personal-gemini-journal-ypp4pspywq-uc.a.run.app')) {
  console.error('FAIL: GCP GenAI Agent Architectures missing Cloud Run live app link');
  process.exit(1);
}

const fyfHtml = fs.readFileSync(path.join(outDir, 'projects', 'fyf-video-pipeline.html'), 'utf-8');
if (!fyfHtml.includes('https://youtu.be/9MYzaFjR0ck')) {
  console.error('FAIL: FYF Video Pipeline missing YouTube demo link');
  process.exit(1);
}
if (!fyfHtml.includes('https://fyf-pipeline-605161166139.asia-southeast1.run.app')) {
  console.error('FAIL: FYF Video Pipeline missing Cloud Run live app link');
  process.exit(1);
}

const travelCareHtml = fs.readFileSync(path.join(outDir, 'projects', 'travelcare-ai.html'), 'utf-8');
if (!travelCareHtml.includes('https://youtu.be/H-MC2JHWl7M')) {
  console.error('FAIL: TravelCare AI missing YouTube demo link');
  process.exit(1);
}
if (!travelCareHtml.includes('https://github.com/ahk1542001-wq/alibaba-atlas-rescue-agent')) {
  console.error('FAIL: TravelCare AI missing GitHub repository link');
  process.exit(1);
}

// 6. Verify Dedicated Credentials Page
if (!homeHtml.includes('/credentials')) {
  console.error('FAIL: Homepage missing link to /credentials');
  process.exit(1);
}

const credentialsHtmlPath = path.join(outDir, 'credentials.html');
if (!fs.existsSync(credentialsHtmlPath)) {
  console.error('FAIL: Credentials build output credentials.html not found');
  process.exit(1);
}

const credentialsHtml = fs.readFileSync(credentialsHtmlPath, 'utf-8');
if (!credentialsHtml.includes('Verified AI Credentials')) {
  console.error('FAIL: Credentials page missing heading "Verified AI Credentials"');
  process.exit(1);
}
if (!credentialsHtml.includes('https://verify.skilljar.com/c/pjy6v36xapxe')) {
  console.error('FAIL: Credentials page missing Claude Code in Action verification link');
  process.exit(1);
}
if (!credentialsHtml.includes('https://www.coursera.org/account/accomplishments/professional-cert/0SL5SWTENN43')) {
  console.error('FAIL: Credentials page missing Google AI Professional verification link');
  process.exit(1);
}

console.log(`PASS: All production smoke checks (${projectSlugs.length} projects + credentials page + homepage links + mandatory sections) completed successfully!`);
