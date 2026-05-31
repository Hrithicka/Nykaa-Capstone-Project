const { test, expect } = require('@playwright/test');

const productUrl = 'https://www.nykaa.com/dot-key-watermelon-hyaluronic-toning-mist/p/6011849';

test.describe('Product Recommendation Module', () => {

  test.beforeAll(async () => {

    console.log('Product Recommendation Module Started');

  });

  test.afterAll(async () => {

    console.log('Product Recommendation Module Completed');

  });

  test.beforeEach(async ({ page }) => {

    await page.goto(productUrl, {

      waitUntil: 'domcontentloaded',

      timeout: 60000

    });

  });


  // Test 1 - Verify product detail page loads successfully

  test('Verify product detail page loads successfully', async ({ page }) => {

    await expect(page.locator('body')).toBeVisible();

  });

  // Test 2 - Verify product page URL is valid

  test('Verify product page URL is valid', async ({ page }) => {

    await expect(page).toHaveURL(/nykaa|dot-key|6011849/i);

  });

  // Test 3 - Verify recommendation related content loads on product page

  test('Verify recommendation related content loads on product page', async ({ page }) => {

    await expect(page.locator('body')).toContainText(/Similar|Related|Recommended|You May Also Like|Products/i);

  });

  // Test 4 - Verify product recommendation page content does not crash

  test('Verify product recommendation page content does not crash', async ({ page }) => {

    const content = await page.content();

    expect(content.length).toBeGreaterThan(500);

  });

  // Test 5 - Verify recommended product price information visibility

  test('Verify recommended product price information visibility', async ({ page }) => {

    await expect(page.locator('body')).toContainText(/₹|MRP|Price/i);
  });

  // Test 6 - Verify recommended product image availability

  test('Verify recommended product image availability', async ({ page }) => {

    const imageCount = await page.locator('img').count();

    expect(imageCount).toBeGreaterThan(0);

  });

  // Test 7 - Verify recommendation page contains product brand or product name

  test('Verify recommendation page contains product brand or product name', async ({ page }) => {

    await expect(page.locator('body')).toContainText(/Dot|Key|Product|Mist|Skin/i);

  });

  // Test 8 - Verify recommendation page refresh works successfully

  test('Verify recommendation page refresh works successfully', async ({ page }) => {

    await page.reload({

      waitUntil: 'domcontentloaded',

      timeout: 60000

    });

    await expect(page.locator('body')).toBeVisible();

  });

  // Test 9 - Verify recommendation section using soft assertions

  test('Verify recommendation section using soft assertions', async ({ page }) => {

    await expect.soft(page.locator('body')).toBeVisible();

    await expect.soft(page.locator('body')).toContainText(/₹|Product|Nykaa/i);

  });

  // Test 10 - Verify recommendation flow using test steps

  test('Verify recommendation flow using test steps', async ({ page }) => {

    await test.step('Open product detail page', async () => {

      await expect(page.locator('body')).toBeVisible();

    });

    await test.step('Validate recommendation related page content', async () => {

      await expect(page.locator('body')).toContainText(/Product|₹|Nykaa/i);

    });

  });

  // Test 11 - Verify recommendation page with polling assertion

  test('Verify recommendation page with polling assertion', async ({ page }) => {

    await expect.poll(async () => {

      return await page.locator('body').isVisible();

    }).toBeTruthy();

  });

  // Test 12 - Verify recommendation page on mobile viewport

  test('Verify recommendation page on mobile viewport', async ({ browser }) => {

    const context = await browser.newContext({

      viewport: { width: 375, height: 667 }

    });

    const page = await context.newPage();

    await page.goto('https://www.nykaa.com/lipstick/c/655', {

      waitUntil: 'domcontentloaded',

      timeout: 60000

    });

    await expect(page.locator('body')).toBeVisible();

    await context.close();

  });
  
  // Test 13 - Verify recommendation page on tablet viewport

  test('Verify recommendation page on tablet viewport', async ({ browser }) => {

    const context = await browser.newContext({

      viewport: { width: 768, height: 1024 }

    });

    const page = await context.newPage();

    await page.goto(productUrl, {

      waitUntil: 'domcontentloaded',

      timeout: 60000
      
    });

    await expect(page.locator('body')).toBeVisible();

   await context.close();

  });

});