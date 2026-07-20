import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        
        # Desktop
        page = await browser.new_page(viewport={"width": 1440, "height": 900})
        await page.goto('http://localhost:3000', wait_until='networkidle')
        await page.screenshot(path='/Users/mac/dev/qa_screenshots/desktop.png', full_page=True)
        
        # Mobile
        mobile_page = await browser.new_page(viewport={"width": 375, "height": 812})
        await mobile_page.goto('http://localhost:3000', wait_until='networkidle')
        await mobile_page.screenshot(path='/Users/mac/dev/qa_screenshots/mobile.png', full_page=True)
        
        print("Screenshots captured successfully.")
        await browser.close()

asyncio.run(main())
