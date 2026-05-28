const { test, expect } = require('@playwright/test');

test.describe('Cart Module', () => {

  test.beforeEach(async ({ page }) => {

    await page.goto('https://www.nykaa.com', {
      waitUntil: 'domcontentloaded',
      timeout: 60000
    });

  });

  // Test 1 - Verify homepage loads

  test('Verify homepage loads', async ({ page }) => {

    await expect(page).toHaveURL(/nykaa/i);

  });

  // Test 2 - Verify cart text visibility

  test('Verify cart text visibility', async ({ page }) => {

    await expect(page.locator('body')).toContainText(/Bag|Cart/i);

  });

  // Test 3 - Verify lipstick page loads

  test('Verify lipstick category page loads', async ({ page }) => {

    await page.goto('https://www.nykaa.com/lips/c/15', {

      waitUntil: 'domcontentloaded',

      timeout: 60000

    });

    await expect(page).toHaveURL(/lips/i);

  });

  // Test 4 - Verify product section visibility

  test('Verify product section visibility', async ({ page }) => {

    test.setTimeout(60000);

    await page.goto('https://www.nykaa.com/lips/c/15', {

      waitUntil: 'domcontentloaded',
      timeout: 60000
    });

    await expect(page.locator('body')).toContainText(/Lipstick|Lip/i);

  });

  // Test 5 - Verify price visibility

  test('Verify price visibility', async ({ page }) => {

    test.setTimeout(60000);

    await page.goto('https://www.nykaa.com/lips/c/15', {

      waitUntil: 'domcontentloaded',
      
      timeout: 60000
  
    });

    await expect(page.locator('body')).toContainText('₹');

  });

  // Test 6 - Verify image visibility

  test('Verify image visibility', async ({ page }) => {

    await page.goto('https://www.nykaa.com/lipstick/c/655', {
      
      waitUntil: 'domcontentloaded',

      timeout: 60000

    });

    const visibleImage = page.locator('img:visible').first();

    await expect(visibleImage).toBeVisible();

  });

  // Test 7 - Verify offers visibility

  test('Verify offers visibility', async ({ page }) => {

    await page.goto('https://www.nykaa.com/lips/c/15');

    await expect(page.locator('body')).toContainText(/Off|OFF|%/i);

  });

  // Test 8 - Verify category filters visibility

  test('Verify category filters visibility', async ({ page }) => {

    await page.goto('https://www.nykaa.com/lips/c/15');

    await expect(page.locator('body')).toContainText(/Brand|Category/i);

  });

  // Test 9 - Verify makeup category navigation

  test('Verify makeup category navigation', async ({ page }) => {

    await page.goto('https://www.nykaa.com/makeup/c/12');

    await expect(page).toHaveURL(/makeup/i);

  });

  // Test 10 - Verify skincare category navigation

  test('Verify skincare category navigation', async ({ page }) => {

    await page.goto('https://www.nykaa.com/skin/c/8377');

    await expect(page).toHaveURL(/skin/i);

  });

  // Test 11 - Verify hair category navigation

  test('Verify hair category navigation', async ({ page }) => {

    await page.goto('https://www.nykaa.com/hair-care/c/24');

    await expect(page).toHaveURL(/hair/i);

  });

  // Test 12 - Verify body visibility

  test('Verify body visibility', async ({ page }) => {

    await expect(page.locator('body')).toBeVisible();

  });

  // Test 13 - Skip example

  test.skip('Verify empty cart message', async ({ page }) => {

    await expect(page.locator('body')).toContainText(/Your Bag is Empty/i);

  });

});