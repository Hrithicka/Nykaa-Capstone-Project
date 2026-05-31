# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: responsive_testing/responsive.spec.js >> Responsive UI Module >> Verify responsive page refresh works
- Location: tests/responsive_testing/responsive.spec.js:217:3

# Error details

```
Error: page.goto: net::ERR_HTTP2_PROTOCOL_ERROR at https://www.nykaa.com/
Call log:
  - navigating to "https://www.nykaa.com/", waiting until "domcontentloaded"

```

# Test source

```ts
  1   | const { test, expect } = require('@playwright/test');
  2   | 
  3   | const homeUrl = 'https://www.nykaa.com';
  4   | 
  5   | test.describe('Responsive UI Module', () => {
  6   | 
  7   |   test.beforeAll(async () => {
  8   | 
  9   |     console.log('Responsive UI Module Started');
  10  | 
  11  |   });
  12  | 
  13  |   test.afterAll(async () => {
  14  | 
  15  |     console.log('Responsive UI Module Completed');
  16  | 
  17  |   });
  18  | 
  19  |   test.beforeEach(async ({ page }) => {
  20  | 
> 21  |     await page.goto(homeUrl, {
      |                ^ Error: page.goto: net::ERR_HTTP2_PROTOCOL_ERROR at https://www.nykaa.com/
  22  | 
  23  |       waitUntil: 'domcontentloaded',
  24  | 
  25  |       timeout: 60000
  26  | 
  27  |     });
  28  | 
  29  |   });
  30  | 
  31  |   // Test 1 - Verify desktop viewport loads successfully
  32  | 
  33  |   test('Verify desktop viewport loads successfully', async ({ browser }) => {
  34  | 
  35  |     const context = await browser.newContext({
  36  | 
  37  |       viewport: {
  38  | 
  39  |         width: 1366,
  40  | 
  41  |         height: 768
  42  | 
  43  |       }
  44  | 
  45  |     });
  46  | 
  47  |     const page = await context.newPage();
  48  | 
  49  |     await page.goto(homeUrl, {
  50  | 
  51  |       waitUntil: 'domcontentloaded',
  52  | 
  53  |       timeout: 60000
  54  | 
  55  |     });
  56  | 
  57  |     await expect(page.locator('body')).toBeVisible();
  58  | 
  59  |     await context.close();
  60  | 
  61  |   });
  62  | 
  63  |   // Test 2 - Verify tablet viewport loads successfully
  64  | 
  65  |   test('Verify tablet viewport loads successfully', async ({ browser }) => {
  66  | 
  67  |     const context = await browser.newContext({
  68  | 
  69  |       viewport: { width: 768, height: 1024 }
  70  | 
  71  |     });
  72  | 
  73  |     const page = await context.newPage();
  74  | 
  75  |     await page.goto(homeUrl, {
  76  | 
  77  |       waitUntil: 'domcontentloaded',
  78  | 
  79  |       timeout: 60000
  80  | 
  81  |     });
  82  | 
  83  |     await expect(page.locator('body')).toBeVisible();
  84  | 
  85  |     await context.close();
  86  | 
  87  |   });
  88  | 
  89  |   // Test 3 - Verify mobile viewport loads successfully
  90  | 
  91  |   test('Verify mobile viewport loads successfully', async ({ page }) => {
  92  | 
  93  |     await page.setViewportSize({ width: 375, height: 667 });
  94  | 
  95  |     await page.goto(homeUrl, {
  96  | 
  97  |       waitUntil: 'domcontentloaded',
  98  | 
  99  |       timeout: 60000
  100 | 
  101 |     });
  102 | 
  103 |     await expect(page.locator('body')).toBeVisible();
  104 | 
  105 |   });
  106 | 
  107 |   // Test 4 - Verify desktop page URL remains valid
  108 | 
  109 |   test('Verify desktop page URL remains valid', async ({ page }) => {
  110 | 
  111 |     await page.setViewportSize({ width: 1366, height: 768 });
  112 | 
  113 |     await expect(page).toHaveURL(/nykaa/i);
  114 | 
  115 |   });
  116 | 
  117 |   // Test 5 - Verify tablet page URL remains valid
  118 | 
  119 |   test('Verify tablet page URL remains valid', async ({ browser }) => {
  120 | 
  121 |     const context = await browser.newContext({
```