const { test, expect } = require('@playwright/test');

test.describe('Brand & Category Navigation Module', () => {

  test.beforeEach(async ({ page }) => {

    await page.goto('https://www.nykaa.com');

  });

  // Test 1 - Verify categories section visibility on homepage

  test('Verify categories menu visibility', async ({ page }) => {

    await expect(page.locator('body')).toContainText('categories');

  });

  // Test 2 - Verify Brands section visibility

  test('Verify brands section visibility', async ({ page }) => {

    await expect(page.locator('body')).toContainText('brands');

  });

  // Test 3 - Verify Makeup category navigation

  test('Verify Makeup category navigation', async ({ page }) => {

    await page.goto('https://www.nykaa.com/makeup/c/12');

    await expect(page.locator('body')).toContainText(/makeup/i);

  });

  // Test 4 - Verify Skin category navigation

  test('Verify Skin category navigation', async ({ page }) => {

    await page.goto('https://www.nykaa.com/skin/c/8377');

    await expect(page.locator('body')).toContainText(/skin/i);

  });

  // Test 5 - Verify Hair category navigation

  test('Verify Hair category navigation', async ({ page }) => {

    await page.goto('https://www.nykaa.com/hair-care/c/24');

    await expect(page.locator('body')).toContainText(/hair/i);

  });

  // Test 6 - Verify Nykaa Fashion navigation

  test('Verify Nykaa Fashion visibility', async ({ page }) => {

    await expect(page.locator('body')).toContainText(/fashion/i);

  });

  // Test 7 - Verify category product listing visibility

  test('Verify product listing in category page', async ({ page }) => {

    await page.goto('https://www.nykaa.com/makeup/c/12');

    await expect(page.locator('body')).toContainText('Sort By');

  });

  // Test 8 - Verify filter section visibility in category page

  test('Verify category filters visibility', async ({ page }) => {

    await page.goto('https://www.nykaa.com/skin/c/8377');

    await page.waitForLoadState('domcontentloaded');

    await expect(page.locator('body')).toContainText(/Brand|Price|Discount/i);

  });

  // Test 9 - Verify brand page navigation

  test('Verify popular brands visibility', async ({ page }) => {

    await expect(page.locator('body')).toContainText(/Lakme|Maybelline|Nykaa Cosmetics/i);

  });

  // Test 10 - Verify category page URL structure

  test('Verify category page URL', async ({ page }) => {

    await page.goto('https://www.nykaa.com/makeup/c/12');

    await expect(page).toHaveURL(/makeup/);

  });

});