const { chromium } = require('@playwright/test');

(async () => {

  const browser = await chromium.launch({
    headless: false,
    channel: 'chrome'
  });

  const context = await browser.newContext();

  const page = await context.newPage();

  await page.goto('https://www.nykaa.com', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  console.log('Please login manually.');
  console.log('After login press ENTER in terminal.');

  process.stdin.once('data', async () => {

    await context.storageState({
      path: 'auth.json'
    });

    await browser.close();

    console.log('auth.json created successfully');

  });

})();