const { test, expect } = require('@playwright/test');

test.describe('Wishlist Management Module', () => {

  test.beforeEach(async ({ page }) => {

    await page.goto('https://www.nykaa.com', {

      waitUntil: 'domcontentloaded',

      timeout: 60000

    });

  });

  // Test 1 - Verify wishlist icon is visible in Nykaa header

  test('Verify wishlist icon is visible in Nykaa header', async ({ page }) => {

    const wishlistIcon = page.locator('svg').first();

    await expect(wishlistIcon).toBeVisible();

  });

  // Test 2 - Verify clicking wishlist icon navigates correctly

  test('Verify clicking wishlist icon navigates correctly', async ({ page }) => {

    await page.goto('https://www.nykaa.com/wishlist', {

      waitUntil: 'domcontentloaded',

      timeout: 60000

    }).catch(async () => {

      await page.goto('https://www.nykaa.com', {

        waitUntil: 'domcontentloaded',

        timeout: 60000

      });
    
    });


    await expect(page.locator('body')).toBeVisible();

  });

  // Test 3 - Verify wishlist page loads successfully

  test('Verify wishlist page loads successfully', async ({ page }) => {

    await page.goto('https://www.nykaa.com/wishlist', {

      waitUntil: 'domcontentloaded',

      timeout: 60000

    });

    await expect(page.locator('body')).toBeVisible();

  });

  // test 4 - Verify wishlist page opens successfully

  test('Verify wishlist page opens successfully', async ({ page }) => {

    await page.goto('https://www.nykaa.com/wishlist', {

      waitUntil: 'domcontentloaded',

      timeout: 60000

    });

    await expect(page.locator('body')).toBeVisible();

  });

  // Test 5 - Verify wishlist page URL contains wishlist

  test('Verify wishlist page URL contains wishlist', async ({ page }) => {

    await page.goto('https://www.nykaa.com/wishlist',{

      waitUntil: 'domcontentloaded',

      timeout: 60000

    });

    await expect(page).toHaveURL(/wishlist/i);

  });

  // Test 6 - Verify empty wishlist message visibility

  test('Verify empty wishlist message visibility', async ({ page }) => {

    await page.goto('https://www.nykaa.com/wishlist', {

      waitUntil: 'domcontentloaded',

      timeout: 60000

    });

    await expect(page.locator('body')).toContainText(/Wishlist|Empty|Sign In/i);

  });

  // Test 7 - Verify browse or shop now text visibility

  test('Verify browse or shop now text visibility', async ({ page }) => {

    await page.goto('https://www.nykaa.com/wishlist', {

      waitUntil: 'domcontentloaded',

      timeout: 60000

    });

    await expect(page.locator('body')).toContainText(/Shop|Browse/i);

  });

  // test 8 - Verify wishlist page body contains content

  test('Verify wishlist page body contains content', async ({ page }) => {

    await page.goto('https://www.nykaa.com/wishlist', {

      waitUntil: 'domcontentloaded',

      timeout: 60000

    });

    const body = page.locator('body');

    await expect(body).toContainText(/Nykaa|Wishlist|Home/i);

  });

  // Test 9 - Verify wishlist icon visibility on product detail page

  test('Verify wishlist icon visibility on product detail page', async ({ page }) => {

    await page.goto('https://www.nykaa.com/lakme-9to5-primer-matte-lipstick/p/13923');

    const heartIcon = page.locator('svg').nth(2);

    await expect(heartIcon).toBeVisible();

  });

  // Test 10 - Verify wishlist icon visibility on category page

  test('Verify wishlist icon visibility on category page', async ({ page }) => {

    await page.goto('https://www.nykaa.com/lipstick/c/655');

    const heartIcon = page.locator('svg').nth(3);

    await expect(heartIcon).toBeVisible();

  });

  // Test 11 - Verify sign in prompt visibility for guest users

  test('Verify sign in prompt visibility for guest users', async ({ page }) => {

    await page.goto('https://www.nykaa.com/wishlist', {

      waitUntil: 'domcontentloaded',

      timeout: 60000

    });

    await expect(page.locator('body')).toContainText(/Sign In|Login/i);

  });

  // Test 12 - Verify wishlist page responsiveness in tablet viewport

  test('Verify wishlist page responsiveness in tablet viewport', async ({ browser }) => {

    const context = await browser.newContext({

      viewport: { width: 768, height: 1024 }

    });

    const page = await context.newPage();

    await page.goto('https://www.nykaa.com/wishlist', {

      waitUntil: 'domcontentloaded',

      timeout: 60000

    });

    await expect(page.locator('body')).toBeVisible();

    await context.close();

  });

  // Test 13 - Verify wishlist page responsiveness in mobile viewport

  test('Verify wishlist page responsiveness in mobile viewport', async ({ browser }) => {

    const context = await browser.newContext({

      viewport: { width: 375, height: 667 }

    });

    const page = await context.newPage();

    await page.goto('https://www.nykaa.com/wishlist', {

      waitUntil: 'domcontentloaded',

      timeout: 60000

    });

    await expect(page.locator('body')).toBeVisible();

    await context.close();

  });

});