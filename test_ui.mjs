import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

(async () => {
  const browser = await chromium.launch();
  const outputDir = path.resolve(process.env.QA_OUTPUT_DIR || 'qa_screenshots');
  await mkdir(outputDir, { recursive: true });

  // Desktop
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.join(outputDir, 'desktop.png'), fullPage: true });

  // Mobile
  const mobilePage = await browser.newPage({ viewport: { width: 375, height: 812 } });
  await mobilePage.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await mobilePage.screenshot({ path: path.join(outputDir, 'mobile.png'), fullPage: true });

  console.log("Screenshots captured successfully.");
  await browser.close();
})();
