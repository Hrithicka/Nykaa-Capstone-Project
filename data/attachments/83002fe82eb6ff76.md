# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homepage_testing/homepage.spec.js >> Homepage Validation Module >> Verify app download section visibility
- Location: tests/homepage_testing/homepage.spec.js:109:3

# Error details

```
Error: page.goto: net::ERR_HTTP2_PROTOCOL_ERROR at https://www.nykaa.com/
Call log:
  - navigating to "https://www.nykaa.com/", waiting until "load"

```

# Test source

```ts
  1   | const { test, expect } = require('@playwright/test');
  2   | 
  3   | test.describe('Homepage Validation Module', () => {
  4   | 
  5   |   test.beforeEach(async ({ page }) => {
  6   | 
> 7   |     await page.goto('https://www.nykaa.com');
      |                ^ Error: page.goto: net::ERR_HTTP2_PROTOCOL_ERROR at https://www.nykaa.com/
  8   | 
  9   |   });
  10  | 
  11  |   // Test 1 - Verify homepage title
  12  | 
  13  |   test('Verify homepage title', async ({ page }) => {
  14  | 
  15  |     await expect(page).toHaveTitle(/Nykaa/i);
  16  | 
  17  |   });
  18  | 
  19  |   // Test 2 - Verify promotional banner visibility
  20  | 
  21  |   test('Verify promotional banner visibility', async ({ page }) => {
  22  | 
  23  |     await expect(page.locator('body')).toContainText(/OFF|Offer/i);
  24  | 
  25  |   });
  26  | 
  27  |   // Test 3 - Verify Shop by Category section visibility
  28  | 
  29  |   test('Verify Shop by Category visibility', async ({ page }) => {
  30  | 
  31  |     await expect(page.locator('body')).toContainText(/Makeup|Skin|Hair/i);
  32  | 
  33  |   });
  34  | 
  35  |   // Test 4 - Verify bestseller products visibility
  36  | 
  37  |   test('Verify bestseller products visibility', async ({ page }) => {
  38  | 
  39  |     await expect(page.locator('body')).toContainText(/BESTSELLER/i);
  40  | 
  41  |   });
  42  | 
  43  |   // Test 5 - Verify top navigation menu visibility
  44  | 
  45  |   test('Verify top navigation menu visibility', async ({ page }) => {
  46  | 
  47  |     await expect(page.locator('body')).toContainText(
  48  |       /Makeup|Skin|Hair|Fragrance/i
  49  |     );
  50  | 
  51  |   });
  52  | 
  53  |   // Test 6 - Verify Nykaa logo visibility
  54  | 
  55  |   test('Verify Nykaa logo visibility', async ({ page }) => {
  56  | 
  57  |     await expect(page.locator('body')).toContainText(/Nykaa/i);
  58  | 
  59  |   });
  60  | 
  61  |   // Test 7 - Verify search bar visibility
  62  | 
  63  |   test('Verify search bar visibility', async ({ page }) => {
  64  | 
  65  |     const searchBox = page.locator('input[placeholder*="Search"]');
  66  | 
  67  |     await expect(searchBox).toBeVisible();
  68  | 
  69  |   });
  70  | 
  71  |   // Test 8 - Verify product price visibility on homepage
  72  | 
  73  |   test('Verify product price visibility', async ({ page }) => {
  74  | 
  75  |     await expect(page.locator('body')).toContainText('₹');
  76  | 
  77  |   });
  78  | 
  79  |   // Test 9 - Verify footer visibility
  80  | 
  81  |   test('Verify footer visibility', async ({ page }) => {
  82  | 
  83  |     await expect(page.locator('body')).toContainText(
  84  |       /About Us|Help|Contact/i
  85  |     );
  86  | 
  87  |   });
  88  | 
  89  |   // Test 10 - Verify homepage loads successfully
  90  | 
  91  |   test('Verify homepage loads successfully', async ({ page }) => {
  92  | 
  93  |     await expect(page.locator('body')).toBeVisible();
  94  | 
  95  |   });
  96  | 
  97  |   // Test 11 - Verify product images are visible
  98  | 
  99  |   test('Verify product images visibility', async ({ page }) => {
  100 | 
  101 |     const visibleImages = page.locator('img:visible');
  102 | 
  103 |     await expect(visibleImages.first()).toBeVisible();
  104 | 
  105 |   });
  106 | 
  107 |   // Test 12 - Verify app download section visibility
```