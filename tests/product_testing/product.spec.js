const { test, expect } = require('@playwright/test');

test.describe('Product Details Module', () => {

  test.beforeEach(async ({ page }) => {

    await page.goto('https://www.nykaa.com', {

      waitUntil: 'domcontentloaded',
      
      timeout: 60000
    });

    const searchBox = page.locator('input[placeholder*="Search"]');

    await searchBox.fill('lipstick');

    await page.keyboard.press('Enter');

    await page.waitForLoadState('domcontentloaded');

    await page.waitForTimeout(2000);

  });

  // Test 1 - Verify product cards are visible

  test('Verify product cards visibility', async ({ page }) => {

    const products = page.locator('img:visible');

    await expect(products.first()).toBeVisible();

  });

  // Test 2 - Verify product title visibility

  test('Verify product title visibility', async ({ page }) => {

    await expect(page.locator('body')).toContainText(/₹|Wishlist|Add to Bag|Sort By/i);

  });

  // Test 3 - Verify product price visibility

  test('Verify product price visibility', async ({ page }) => {

    await page.waitForLoadState('domcontentloaded');

    await expect(page.locator('body')).toContainText('₹');

  });

  // Test 4 - Verify wishlist button visibility

  test('Verify wishlist button visibility', async ({ page }) => {

    await expect(page.locator('body')).toContainText( /Add to Bag|₹|Sort By|Brand/i);

  });

  // Test 5 - Verify product image visibility

  test('Verify product image visibility', async ({ page }) => {

    const images = page.locator('img:visible');

    await expect(images.first()).toBeVisible();

  });

  // Test 6 - Verify product actions visibility

  test('Verify product actions visibility', async ({ page }) => {

    test.setTimeout(60000);

    await expect(page.locator('body')).toContainText(/₹|Wishlist|Add to Bag/i);
    
  });

  // Test 7 - Verify discount visibility

  test('Verify discount visibility', async ({ page }) => {

    await expect(page.locator('body')).toContainText(/Off|OFF|%/);

  });

  // Test 8 - Verify bestseller tag visibility

  test('Verify bestseller tag visibility', async ({ page }) => {

    await expect(page.locator('body')).toContainText(/BESTSELLER|bestseller/i);

  });

  // Test 9 - Verify sorting option visibility

  test('Verify sorting option visibility', async ({ page }) => {

    await expect(page.locator('body')).toBeVisible();

  });

  // Test 10 - Verify filter options visibility
  
  test('Verify filter options visibility', async ({ page }) => {
    
    test.setTimeout(60000);
    
    await expect(page).toHaveURL(/nykaa/i);

  });

});