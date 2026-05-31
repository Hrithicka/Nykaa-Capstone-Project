# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homepage_testing/homepage.spec.js >> Homepage Validation Module >> Verify app download section visibility
- Location: tests/homepage_testing/homepage.spec.js:110:3

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
  3   | test.describe('Homepage Validation Module', () => {
  4   | 
  5   |   test.beforeEach(async ({ page }) => {
  6   | 
> 7   |     await page.goto('https://www.nykaa.com', {
      |                ^ Error: page.goto: net::ERR_HTTP2_PROTOCOL_ERROR at https://www.nykaa.com/
  8   |       waitUntil: 'domcontentloaded',
  9   |       timeout: 60000
  10  |     });
  11  | 
  12  |   });
  13  | 
  14  |   // Test 1 - Verify homepage title
  15  | 
  16  |   test('Verify homepage title', async ({ page }) => {
  17  | 
  18  |     await expect(page).toHaveTitle(/Nykaa/i);
  19  | 
  20  |   });
  21  | 
  22  |   // Test 2 - Verify promotional banner visibility
  23  | 
  24  |   test('Verify promotional banner visibility', async ({ page }) => {
  25  | 
  26  |     await expect(page.locator('body')).toContainText(/OFF|Offer/i);
  27  | 
  28  |   });
  29  | 
  30  |   // Test 3 - Verify Shop by Category section visibility
  31  | 
  32  |   test('Verify Shop by Category visibility', async ({ page }) => {
  33  | 
  34  |     await expect(page.locator('body')).toContainText(/Makeup|Skin|Hair/i);
  35  | 
  36  |   });
  37  | 
  38  |   // Test 4 - Verify bestseller products visibility
  39  | 
  40  |   test('Verify bestseller products visibility', async ({ page }) => {
  41  | 
  42  |     await expect(page.locator('body')).toBeVisible();
  43  | 
  44  |   });
  45  | 
  46  |   // Test 5 - Verify top navigation menu visibility
  47  | 
  48  |   test('Verify top navigation menu visibility', async ({ page }) => {
  49  | 
  50  |     await expect(page.locator('body')).toContainText(/Makeup|Skin/i);
  51  | 
  52  |   });
  53  | 
  54  |   // Test 6 - Verify Nykaa logo visibility
  55  | 
  56  |   test('Verify Nykaa logo visibility', async ({ page }) => {
  57  | 
  58  |     await expect(page.locator('body')).toContainText(/Nykaa/i);
  59  | 
  60  |   });
  61  | 
  62  |   // Test 7 - Verify search bar visibility
  63  | 
  64  |   test('Verify search bar visibility', async ({ page }) => {
  65  | 
  66  |     const searchBox = page.locator('input[placeholder*="Search"]');
  67  | 
  68  |     await expect(searchBox).toBeVisible();
  69  | 
  70  |   });
  71  | 
  72  |   // Test 8 - Verify product price visibility on homepage
  73  | 
  74  |   test('Verify product price visibility', async ({ page }) => {
  75  | 
  76  |     await expect(page.locator('body')).toContainText('₹');
  77  | 
  78  |   });
  79  | 
  80  |   // Test 9 - Verify footer visibility
  81  | 
  82  |   test('Verify footer visibility', async ({ page }) => {
  83  | 
  84  |     await expect(page.locator('body')).toContainText(
  85  |       /About Us|Help|Contact/i
  86  |     );
  87  | 
  88  |   });
  89  | 
  90  |   // Test 10 - Verify homepage loads successfully
  91  | 
  92  |   test('Verify homepage loads successfully', async ({ page }) => {
  93  | 
  94  |     await expect(page.locator('body')).toBeVisible();
  95  | 
  96  |   });
  97  | 
  98  |   // Test 11 - Verify product images are visible
  99  | 
  100 |   test('Verify product images visibility', async ({ page }) => {
  101 | 
  102 |     const visibleImages = page.locator('img:visible');
  103 | 
  104 |     await expect(visibleImages.first()).toBeVisible();
  105 | 
  106 |   });
  107 | 
```