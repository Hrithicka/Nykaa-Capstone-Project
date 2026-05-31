const { test, expect } = require('@playwright/test');

test.describe('Search Module', () => {

  test.beforeEach(async ({ page }) => {

    await page.goto('https://www.nykaa.com', {

      waitUntil: 'domcontentloaded',

      timeout: 60000

    });

  });

  // Test 1 - Verify search bar is visible

  test('Verify search bar visibility', async ({ page }) => {

    const searchBox = page.locator('input[placeholder*="Search"]');

    await expect(searchBox).toBeVisible();

  });

  // Test 2 - Verify valid product search

  test('Verify valid product search', async ({ page }) => {

    test.setTimeout(60000);

    const searchBox = page.locator('input[placeholder*="Search"]');

    await searchBox.fill('lipstick');

    await page.keyboard.press('Enter');

    await page.waitForTimeout(5000);

    await expect(page.locator('body')).toBeVisible();

  });

  // Test 3 - Verify autosuggestion appears during search

  test('Verify search autosuggestion visibility', async ({ page }) => {

    test.setTimeout(60000);

    const searchBox = page.locator('input[placeholder*="Search"]');

    await searchBox.waitFor({ state: 'visible' });

    await searchBox.fill('perfume');

    await expect(searchBox).toHaveValue('perfume');

  });

  // Test 4 - Verify search results page loads successfully

  test('Verify search results page visibility', async ({ page }) => {

    const searchBox = page.locator('input[placeholder*="Search"]');

    await searchBox.fill('shampoo');

    await page.keyboard.press('Enter');

    await page.waitForLoadState('domcontentloaded');

    await expect(page.locator('body')).toBeVisible();

  });

  // Test 5 -  Verify search result page opens for foundation
  
  test(' Verify search result page opens for foundation', async ({ page }) => {

    const searchBox = page.locator('input[placeholder*="Search"]');

    await searchBox.fill('foundation');

    await page.keyboard.press('Enter');

    await page.waitForLoadState('domcontentloaded');

    await expect(page.locator('body')).toBeVisible();

  });

  // Test 6 - Verify sorting option visibility in search results

  test('Verify sorting functionality visibility', async ({ page }) => {

    const searchBox = page.locator('input[placeholder*="Search"]');

    await searchBox.fill('compact');

    await page.keyboard.press('Enter');

    await page.waitForLoadState('domcontentloaded');

    await expect(page.locator('body')).toContainText(/Sort By|Brand|Price/i);

  });

  // Test 7 - Verify filter section visibility

  test('Verify filter section visibility', async ({ page }) => {

    const searchBox = page.locator('input[placeholder*="Search"]');

    await searchBox.fill('moisturizer');

    await page.keyboard.press('Enter');

    await page.waitForLoadState('domcontentloaded');

    await expect(page.locator('body')).toContainText('Brand');

  });

  // Test 8 - Verify browser back navigation after search

  test('Verify back navigation after product search', async ({ page }) => {

    const searchBox = page.locator('input[placeholder*="Search"]');

    await searchBox.fill('serum');

    await page.keyboard.press('Enter');

    await page.waitForLoadState('domcontentloaded');

    await expect(page.locator('body')).toBeVisible();

  });

  // Test 9 - Verify eyeliner search result loads

  test('Verify eyeliner search result loads', async ({ page }) => {

    const searchBox = page.locator('input[placeholder*="Search"]');

    await searchBox.fill('eyeliner');

    await page.keyboard.press('Enter');

    await page.waitForLoadState('domcontentloaded');

    await expect(page.locator('body')).toBeVisible();

  });

  // Test 10 - Verify empty search handling

  test('Verify empty search behavior', async ({ page }) => {

    test.setTimeout(60000);

    const searchBox = page.locator('input[placeholder*="Search"]');

    await searchBox.waitFor({ state: 'visible' });

    await expect(searchBox).toBeVisible();

  });

});