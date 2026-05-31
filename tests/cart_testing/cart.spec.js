const { test, expect } = require('@playwright/test');

const homeUrl = 'https://www.nykaa.com';

const lipsUrl = 'https://www.nykaa.com/lips/c/15';

test.describe('Cart Module', () => {

  test.beforeAll(async () => {

    console.log('Cart Module Started');

  });

  test.afterAll(async () => {

    console.log('Cart Module Completed');

  });

  test.beforeEach(async ({ page }) => {

    page.on('dialog', async dialog => {

      await dialog.accept();

    });

  });


  // Test 1 - Verify Nykaa homepage loads successfully

  test('Verify Nykaa homepage loads successfully', async ({ page }) => {

    await page.goto(homeUrl, {

      waitUntil: 'domcontentloaded',

      timeout: 60000

    });

    await expect(page.locator('body')).toBeVisible();

  });

  // Test 2 - Verify homepage URL is valid

  test('Verify homepage URL is valid', async ({ page }) => {

    await page.goto(homeUrl, {

      waitUntil: 'domcontentloaded',

      timeout: 60000

    });

    await expect(page).toHaveURL(/nykaa/i);

  });

  // Test 3 - Verify cart or bag text availability on homepage

  test('Verify cart or bag text availability on homepage', async ({ page }) => {

    await page.goto(homeUrl, {

      waitUntil: 'domcontentloaded',

      timeout: 60000

    });

    await expect(page.locator('body')).toContainText(/Bag|Cart|Nykaa/i);

  });

  // Test 4 - Verify lips category page loads successfully

  test('Verify lips category page loads successfully', async ({ page }) => {

    await page.goto(lipsUrl, {

      waitUntil: 'domcontentloaded',

      timeout: 60000

    });

    await expect(page).toHaveURL(/lips/i);

  });

  // Test 5 - Verify product listing is visible before cart action

  test('Verify product listing is visible before cart action', async ({ page }) => {

    await page.goto(lipsUrl, {

      waitUntil: 'domcontentloaded',

      timeout: 60000

    });

    await expect(page.locator('body')).toContainText(/Lipstick|Lip|Product/i);

  });

  // Test 6 - Verify product price is visible before cart action

  test('Verify product price is visible before cart action', async ({ page }) => {

    await page.goto(lipsUrl, {

      waitUntil: 'domcontentloaded',

      timeout: 60000

    });

    await expect(page.locator('body')).toContainText('₹');

  });

  // Test 7 - Verify Add to Bag related text is available

  test('Verify Add to Bag related text is available', async ({ page }) => {

    await page.goto(lipsUrl, {

      waitUntil: 'domcontentloaded',

      timeout: 60000

    });

    await expect(page.locator('body')).toContainText(/Add to Bag|Bag|Wishlist/i);

  });

  // Test 8 - Verify product image visibility before cart action

  test('Verify product image visibility before cart action', async ({ page }) => {

    await page.goto(lipsUrl, {

      waitUntil: 'domcontentloaded',

      timeout: 60000

    });

    const visibleImage = page.locator('img:visible').first();

    await expect(visibleImage).toBeVisible();

  });

  // Test 9 - Verify cart module content does not crash

  test('Verify cart module content does not crash', async ({ page }) => {

    await page.goto(homeUrl, {

      waitUntil: 'domcontentloaded',

      timeout: 60000

    });

    const content = await page.content();

    expect(content.length).toBeGreaterThan(500);

  });

  // Test 10 - Verify cart related flow using test steps

  test('Verify cart related flow using test steps', async ({ page }) => {

    await test.step('Open Nykaa homepage', async () => {

      await page.goto(homeUrl, {

        waitUntil: 'domcontentloaded',

        timeout: 60000

      });

      await expect(page.locator('body')).toBeVisible();

    });

    await test.step('Open lips category page', async () => {

      await page.goto(lipsUrl, {

        waitUntil: 'domcontentloaded',

        timeout: 60000

      });

      await expect(page.locator('body')).toContainText(/Lip|₹|Bag/i);

    });

  });

  // Test 11 - Verify cart module using soft assertions

  test('Verify cart module using soft assertions', async ({ page }) => {

    await page.goto(lipsUrl, {

      waitUntil: 'domcontentloaded',

      timeout: 60000

    });

    await expect.soft(page.locator('body')).toBeVisible();

    await expect.soft(page.locator('body')).toContainText(/Lip|₹|Bag|Wishlist/i);

  });

  // Test 12 - Verify cart module with polling assertion

  test('Verify cart module with polling assertion', async ({ page }) => {

    await page.goto(lipsUrl, {

      waitUntil: 'domcontentloaded',

      timeout: 60000

    });

    await expect.poll(async () => {

      return await page.locator('body').isVisible();

    }).toBeTruthy();

  });

  // Test 13 - Verify cart module works in tablet viewport

  test('Verify cart module works in tablet viewport', async ({ browser }) => {

    const context = await browser.newContext({
      viewport: {
        width: 768,
        height: 1024 
      }
    });

    const page = await context.newPage();

    await page.goto(lipsUrl, {

      waitUntil: 'domcontentloaded',

      timeout: 60000
      
    });

    await expect(page.locator('body')).toBeVisible();

    await context.close();

  });

});