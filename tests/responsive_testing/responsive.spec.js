const { test, expect } = require('@playwright/test');

const homeUrl = 'https://www.nykaa.com';

test.describe('Responsive UI Module', () => {

  test.beforeAll(async () => {

    console.log('Responsive UI Module Started');

  });

  test.afterAll(async () => {

    console.log('Responsive UI Module Completed');

  });

  test.beforeEach(async ({ page }) => {

    await page.goto(homeUrl, {

      waitUntil: 'domcontentloaded',

      timeout: 60000

    });

  });

  // Test 1 - Verify desktop viewport loads successfully

  test('Verify desktop viewport loads successfully', async ({ browser }) => {

    const context = await browser.newContext({

      viewport: {

        width: 1366,

        height: 768

      }

    });

    const page = await context.newPage();

    await page.goto(homeUrl, {

      waitUntil: 'domcontentloaded',

      timeout: 60000

    });

    await expect(page.locator('body')).toBeVisible();

    await context.close();

  });

  // Test 2 - Verify tablet viewport loads successfully

  test('Verify tablet viewport loads successfully', async ({ browser }) => {

    const context = await browser.newContext({

      viewport: { width: 768, height: 1024 }

    });

    const page = await context.newPage();

    await page.goto(homeUrl, {

      waitUntil: 'domcontentloaded',

      timeout: 60000

    });

    await expect(page.locator('body')).toBeVisible();

    await context.close();

  });

  // Test 3 - Verify mobile viewport loads successfully

  test('Verify mobile viewport loads successfully', async ({ page }) => {

    await page.setViewportSize({ width: 375, height: 667 });

    await page.goto(homeUrl, {

      waitUntil: 'domcontentloaded',

      timeout: 60000

    });

    await expect(page.locator('body')).toBeVisible();

  });

  // Test 4 - Verify desktop page URL remains valid

  test('Verify desktop page URL remains valid', async ({ page }) => {

    await page.setViewportSize({ width: 1366, height: 768 });

    await expect(page).toHaveURL(/nykaa/i);

  });

  // Test 5 - Verify tablet page URL remains valid

  test('Verify tablet page URL remains valid', async ({ browser }) => {

    const context = await browser.newContext({

      viewport: { width: 768, height: 1024 }

    });

    const page = await context.newPage();

    await page.goto(homeUrl, {

      waitUntil: 'domcontentloaded',

      timeout: 60000

    });

    await expect(page).toHaveURL(/nykaa/i);

    await context.close();

  });

  // Test 6 - Verify mobile page URL remains valid

  test('Verify mobile page URL remains valid', async ({ page }) => {

    await page.setViewportSize({ width: 375, height: 667 });

    await page.reload({

      waitUntil: 'domcontentloaded',

      timeout: 60000

    });

    await expect(page).toHaveURL(/nykaa/i);

  });

  // Test 7 - Verify desktop layout body content is visible

  test('Verify desktop layout body content is visible', async ({ page }) => {

    await page.setViewportSize({ width: 1440, height: 900 });

    await expect(page.locator('body')).toContainText(/Nykaa|Beauty|Makeup/i);

  });

  // Test 8 - Verify tablet layout body content is visible

  test('Verify tablet layout body content is visible', async ({ page }) => {

    await page.setViewportSize({ width: 768, height: 1024 });

    await page.reload({

      waitUntil: 'domcontentloaded',

      timeout: 60000

    });

    await expect(page.locator('body')).toContainText(/Nykaa|Beauty|Makeup/i);

  });

  // Test 9 - Verify mobile layout body content is visible

  test('Verify mobile layout body content is visible', async ({ browser }) => {

    const context = await browser.newContext({
      
      viewport: { width: 375, height: 667 }
  
    });

    const page = await context.newPage();

    await page.goto(homeUrl, {
      
      waitUntil: 'domcontentloaded',
      
      timeout: 60000
    
    });

    await expect(page.locator('body')).toBeVisible();

    await context.close();

  });

  // Test 10 - Verify responsive page refresh works

  test('Verify responsive page refresh works', async ({ page }) => {

    await page.setViewportSize({ width: 768, height: 1024 });

    await page.reload({

      waitUntil: 'domcontentloaded',

      timeout: 60000

    });

    await expect(page.locator('body')).toBeVisible();

  });

  // Test 11 - Verify responsive layout using test steps

  test('Verify responsive layout using test steps', async ({ browser }) => {

    await test.step('Check mobile viewport', async () => {

      const mobileContext = await browser.newContext({

        viewport: { width: 375, height: 667 }

      });

      const mobilePage = await mobileContext.newPage();

      await mobilePage.goto(homeUrl, {

        waitUntil: 'domcontentloaded',

        timeout: 60000

      });

      await expect(mobilePage.locator('body')).toBeVisible();

      await mobileContext.close();

    });

    await test.step('Check tablet viewport', async () => {

      const tabletContext = await browser.newContext({

       viewport: { width: 768, height: 1024 }

      });

      const tabletPage = await tabletContext.newPage();

      await tabletPage.goto(homeUrl, {

        waitUntil: 'domcontentloaded',

        timeout: 60000

      });

      await expect(tabletPage.locator('body')).toBeVisible();

      await tabletContext.close();

    });
    
  });

  // Test 12 - Verify responsive page using soft assertions

  test('Verify responsive page using soft assertions', async ({ browser }) => {

    const context = await browser.newContext({

      viewport: { width: 375, height: 667 }

    });

    const page = await context.newPage();

    await page.goto(homeUrl, {

      waitUntil: 'domcontentloaded',

      timeout: 60000

    });

    await expect.soft(page.locator('body')).toBeVisible();

    await expect.soft(page).toHaveURL(/nykaa/i);

  
    await context.close();

  });

  // Test 13 - Verify responsive page with polling assertion

  test('Verify responsive page with polling assertion', async ({ page }) => {

    await page.setViewportSize({ width: 768, height: 1024 });

    await page.reload({

      waitUntil: 'domcontentloaded',

      timeout: 60000

    });

    await expect.poll(async () => {

      return await page.locator('body').isVisible();

    }).toBeTruthy();

  });

});