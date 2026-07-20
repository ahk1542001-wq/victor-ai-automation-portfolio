import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  
  // Desktop
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.screenshot({ path: '/Users/mac/dev/qa_screenshots/desktop.png', fullPage: true });
  
  // Mobile
  const mobilePage = await browser.newPage({ viewport: { width: 375, height: 812 } });
  await mobilePage.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await mobilePage.screenshot({ path: '/Users/mac/dev/qa_screenshots/mobile.png', fullPage: true });
  
  console.log("Screenshots captured successfully.");
  await browser.close();
})();
