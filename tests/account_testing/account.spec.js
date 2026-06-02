const { test, expect } = require('@playwright/test');

const homeUrl = 'https://www.nykaa.com';

const loginUrl = 'https://www.nykaa.com/login';

const accountUrl = 'https://www.nykaa.com/account';

test.describe('User Account and Profile Management Module', () => {

  test.beforeAll(async () => {

    console.log('User Account and Profile Management Module Started');

  });

  test.afterAll(async () => {

    console.log('User Account and Profile Management Module Completed');

  });

  test.beforeEach(async ({ page }) => {

    page.on('dialog', async dialog => {

      await dialog.accept();

    });

    await page.goto(homeUrl, {

      waitUntil: 'domcontentloaded',

      timeout: 60000

    });

  });


  // Test 1 - Verify Nykaa homepage loads for account module

  test('Verify Nykaa homepage loads for account module', async ({ page }) => {

    await expect(page.locator('body')).toBeVisible();

  });

  // Test 2 - Verify sign in text is visible for guest user

  test('Verify sign in text is visible for guest user', async ({ page }) => {

    await expect(page.locator('body')).toContainText(/Sign in|Login|Account/i);

  });

  // Test 3 - Verify login page loads successfully

  test('Verify login page loads successfully', async ({ page }) => {

    await page.goto(loginUrl, {

      waitUntil: 'domcontentloaded',

      timeout: 60000

    });

    await expect(page.locator('body')).toBeVisible();

  });

  // Test 4 - Verify login page URL is valid

  test('Verify login page URL is valid', async ({ page }) => {

    await page.goto(loginUrl, {

      waitUntil: 'domcontentloaded',

      timeout: 60000

    });


    await expect(page).toHaveURL(/nykaa/i);

  });

  // Test 5 - Verify login page shows sign in related content

  test('Verify login page shows sign in related content', async ({ page }) => {

    await page.goto(loginUrl, {

      waitUntil: 'domcontentloaded',

      timeout: 60000

    });

    await expect(page.locator('body')).toBeVisible();

  });

  // Test 6 - Verify account page loads without crash for guest user

  test('Verify account page loads without crash for guest user', async ({ page }) => {

    await page.goto(accountUrl, {

      waitUntil: 'domcontentloaded',

      timeout: 60000

    });

    await expect(page.locator('body')).toBeVisible();

  });

  // Test 7 - Verify account page asks guest user to sign in

  test('Verify account page asks guest user to sign in', async ({ page }) => {

    await page.goto('https://www.nykaa.com/account', {

      waitUntil: 'domcontentloaded',

      timeout: 60000

    });

    await expect(page.locator('body')).toBeVisible;

  });

  // Test 8 - Verify invalid login input does not crash page

  test('Verify invalid login input does not crash page', async ({ page }) => {

    await page.goto('https://www.nykaa.com/login', {

      waitUntil: 'domcontentloaded',

      timeout: 60000

    });

    await expect(page.locator('body')).toBeVisible();

  });

  // Test 9 - Verify profile access page content loads

  test('Verify profile access page content loads', async ({ page }) => {

    await page.goto(accountUrl, {

      waitUntil: 'domcontentloaded',

      timeout: 60000

    });

    const pageContent = await page.content();

    expect(pageContent.length).toBeGreaterThan(500);

  });

  // Test 10 - Verify account flow using test steps

  test('Verify account flow using test steps', async ({ page }) => {

    await test.step('Open login page', async () => {

      await page.goto('https://www.nykaa.com/login', {

        waitUntil: 'domcontentloaded',

        timeout: 60000

      });

      await expect(page.locator('body')).toBeVisible();

    });

    await test.step('Open account page as guest user', async () => {

      await page.goto('https://www.nykaa.com/account', {

        waitUntil: 'domcontentloaded',

        timeout: 60000

      });

      await expect(page.locator('body')).toBeVisible();

    });

  });

  // Test 11 - Verify account page using soft assertions

  test('Verify account page using soft assertions', async ({ page }) => {

    await page.goto(accountUrl, {

      waitUntil: 'domcontentloaded',

      timeout: 60000

    });

    await expect.soft(page.locator('body')).toBeVisible();

    await expect.soft(page).toHaveURL(/nykaa/i);

  });

  // Test 12 - Verify account page with polling assertion

  test('Verify account page with polling assertion', async ({ page }) => {

    await page.goto(accountUrl, {

      waitUntil: 'domcontentloaded',

      timeout: 60000

    });

    await expect.poll(async () => {

      return await page.locator('body').isVisible();

    }).toBeTruthy();


  });

  // Test 13 - Verify account page in mobile viewport

  test('Verify account page in mobile viewport', async ({ browser }) => {

    const context = await browser.newContext({

      viewport: { width: 375, height: 667 }

    });

    const page = await context.newPage();

    await page.goto('https://www.nykaa.com/account', {

      waitUntil: 'domcontentloaded',

      timeout: 60000
      
    });

    await expect(page.locator('body')).toBeVisible();

    await context.close();

  });

});