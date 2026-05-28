const { test, expect } = require('@playwright/test');

test.describe('Homepage Validation Module', () => {

  test.beforeEach(async ({ page }) => {

    await page.goto('https://www.nykaa.com');

  });

  // Test 1 - Verify homepage title

  test('Verify homepage title', async ({ page }) => {

    await expect(page).toHaveTitle(/Nykaa/i);

  });

  // Test 2 - Verify promotional banner visibility

  test('Verify promotional banner visibility', async ({ page }) => {

    await expect(page.locator('body')).toContainText(/OFF|Offer/i);

  });

  // Test 3 - Verify Shop by Category section visibility

  test('Verify Shop by Category visibility', async ({ page }) => {

    await expect(page.locator('body')).toContainText(/Makeup|Skin|Hair/i);

  });

  // Test 4 - Verify bestseller products visibility

  test('Verify bestseller products visibility', async ({ page }) => {

    await expect(page.locator('body')).toContainText(/BESTSELLER/i);

  });

  // Test 5 - Verify top navigation menu visibility

  test('Verify top navigation menu visibility', async ({ page }) => {

    await expect(page.locator('body')).toContainText(
      /Makeup|Skin|Hair|Fragrance/i
    );

  });

  // Test 6 - Verify Nykaa logo visibility

  test('Verify Nykaa logo visibility', async ({ page }) => {

    await expect(page.locator('body')).toContainText(/Nykaa/i);

  });

  // Test 7 - Verify search bar visibility

  test('Verify search bar visibility', async ({ page }) => {

    const searchBox = page.locator('input[placeholder*="Search"]');

    await expect(searchBox).toBeVisible();

  });

  // Test 8 - Verify product price visibility on homepage

  test('Verify product price visibility', async ({ page }) => {

    await expect(page.locator('body')).toContainText('₹');

  });

  // Test 9 - Verify footer visibility

  test('Verify footer visibility', async ({ page }) => {

    await expect(page.locator('body')).toContainText(
      /About Us|Help|Contact/i
    );

  });

  // Test 10 - Verify homepage loads successfully

  test('Verify homepage loads successfully', async ({ page }) => {

    await expect(page.locator('body')).toBeVisible();

  });

  // Test 11 - Verify product images are visible

  test('Verify product images visibility', async ({ page }) => {

    const visibleImages = page.locator('img:visible');

    await expect(visibleImages.first()).toBeVisible();

  });

  // Test 12 - Verify app download section visibility

  test('Verify app download section visibility', async ({ page }) => {

    await expect(page.locator('body')).toContainText(/App|Download/i);

  });

  // Test 13 - Verify homepage responsiveness in tablet view

  test.skip('Verify homepage responsiveness in tablet viewport', async ({ page }) => {

    await page.setViewportSize({

      width: 768,

      height: 1024

    });

    await page.goto('https://www.nykaa.com');

    await expect(page.locator('body')).toBeVisible();

  });


});

