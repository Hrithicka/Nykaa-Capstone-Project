const { test, expect } = require('@playwright/test');

const cartUrl = 'https://www.nykaa.com/cart';

const checkoutUrl = 'https://www.nykaa.com/checkout';

test.describe('Module 8 - Checkout Validation', () => {

  test.beforeAll(async () => {

    console.log('Checkout module started');

  });

  test.afterAll(async () => {

    console.log('Checkout module completed');

  });

  test.beforeEach(async ({ page }) => {

    page.on('dialog', async dialog => {

      await dialog.accept();

    });

  });

  // Test 1 - Verify cart page loads successfully

  test('Verify cart page loads successfully', async ({ page }) => {

    await page.goto(cartUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });

    await expect(page.locator('body')).toBeVisible();

  });

  // Test 2 - Verify cart page URL is valid

  test('Verify cart page URL is valid', async ({ page }) => {

    await page.goto(cartUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });

    await expect(page).toHaveURL(/nykaa/i);

  });

  // Test 3 - Verify cart page content loads without crash

  test('Verify cart page content loads without crash', async ({ page }) => {

    await page.goto(cartUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });

    const content = await page.content();

    expect(content.length).toBeGreaterThan(500);

  });

  // Test 4 - Verify checkout page loads successfully

  test('Verify checkout page loads successfully', async ({ page }) => {

    await page.goto(checkoutUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });

    await expect(page.locator('body')).toBeVisible();

  });

  // Test 5 - Verify checkout URL is valid

  test('Verify checkout URL is valid', async ({ page }) => {

    await page.goto(checkoutUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });

    await expect(page).toHaveURL(/nykaa/i);

  });

  // Test 6 - Verify guest checkout shows login or cart related content

  test('Verify guest checkout shows login or cart related content', async ({ page }) => {

    await page.goto(checkoutUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });

    await expect(page.locator('body')).toContainText(/Sign|Login|Cart|Bag|Nykaa/i);

  });

  // Test 7 - Verify checkout page using soft assertions

  test('Verify checkout page using soft assertions', async ({ page }) => {

    await page.goto(checkoutUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });

    await expect.soft(page.locator('body')).toBeVisible();

    await expect.soft(page).toHaveURL(/nykaa/i);

  });

  // Test 8 - Verify cart page refresh works successfully

  test('Verify cart page refresh works successfully', async ({ page }) => {

    await page.goto(cartUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });

    await page.reload({ waitUntil: 'domcontentloaded', timeout: 60000 });

    await expect(page.locator('body')).toBeVisible();

  });

  // Test 9 - Verify checkout page refresh works successfully

  test('Verify checkout page refresh works successfully', async ({ page }) => {

    await page.goto(checkoutUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });

    await page.reload({ waitUntil: 'domcontentloaded', timeout: 60000 });

    await expect(page.locator('body')).toBeVisible();

  });

  // Test 10 - Verify checkout flow using test steps

  test('Verify checkout flow using test steps', async ({ page }) => {

    await test.step('Open cart page', async () => {

      await page.goto(cartUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });

      await expect(page.locator('body')).toBeVisible();

    });

    await test.step('Open checkout page as guest user', async () => {

      await page.goto(checkoutUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });

      await expect(page.locator('body')).toBeVisible();

    });

  });

  // Test 11 - Verify cart page visibility with polling assertion

  test('Verify cart page visibility with polling assertion', async ({ page }) => {

    await page.goto(cartUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });

    await expect.poll(async () => {

      return await page.locator('body').isVisible();

    }).toBeTruthy();

  });

  // Test 12 - Verify cart page in mobile viewport

  test('Verify cart page in mobile viewport', async ({ browser }) => {

    const context = await browser.newContext({

      viewport: { width: 375, height: 667 }

    });

    const page = await context.newPage();

    await page.goto(cartUrl, {

      waitUntil: 'domcontentloaded',

      timeout: 60000

    });

    await expect(page.locator('body')).toBeVisible();

    await context.close();

  });

  // Test 13 - Verify cart page in tablet viewport

  test('Verify cart page in tablet viewport', async ({ browser }) => {

    const context = await browser.newContext({

      viewport: { width: 768, height: 1024 }

    });

    const page = await context.newPage();

    await page.goto(cartUrl, {

      waitUntil: 'domcontentloaded',

      timeout: 60000
      
    });

    await expect(page.locator('body')).toBeVisible();

    await context.close();

  });

});
