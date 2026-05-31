# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: recommendation_testing/recommendation.spec.js >> Product Recommendation Module >> Verify recommended product price information visibility
- Location: tests/recommendation_testing/recommendation.spec.js:68:3

# Error details

```
Error: page.goto: net::ERR_HTTP2_PROTOCOL_ERROR at https://www.nykaa.com/dot-key-watermelon-hyaluronic-toning-mist/p/6011849
Call log:
  - navigating to "https://www.nykaa.com/dot-key-watermelon-hyaluronic-toning-mist/p/6011849", waiting until "domcontentloaded"

```

# Test source

```ts
  1   | const { test, expect } = require('@playwright/test');
  2   | 
  3   | const productUrl = 'https://www.nykaa.com/dot-key-watermelon-hyaluronic-toning-mist/p/6011849';
  4   | 
  5   | test.describe('Product Recommendation Module', () => {
  6   | 
  7   |   test.beforeAll(async () => {
  8   | 
  9   |     console.log('Product Recommendation Module Started');
  10  | 
  11  |   });
  12  | 
  13  |   test.afterAll(async () => {
  14  | 
  15  |     console.log('Product Recommendation Module Completed');
  16  | 
  17  |   });
  18  | 
  19  |   test.beforeEach(async ({ page }) => {
  20  | 
> 21  |     await page.goto(productUrl, {
      |                ^ Error: page.goto: net::ERR_HTTP2_PROTOCOL_ERROR at https://www.nykaa.com/dot-key-watermelon-hyaluronic-toning-mist/p/6011849
  22  | 
  23  |       waitUntil: 'domcontentloaded',
  24  | 
  25  |       timeout: 60000
  26  | 
  27  |     });
  28  | 
  29  |   });
  30  | 
  31  | 
  32  |   // Test 1 - Verify product detail page loads successfully
  33  | 
  34  |   test('Verify product detail page loads successfully', async ({ page }) => {
  35  | 
  36  |     await expect(page.locator('body')).toBeVisible();
  37  | 
  38  |   });
  39  | 
  40  |   // Test 2 - Verify product page URL is valid
  41  | 
  42  |   test('Verify product page URL is valid', async ({ page }) => {
  43  | 
  44  |     await expect(page).toHaveURL(/nykaa|dot-key|6011849/i);
  45  | 
  46  |   });
  47  | 
  48  |   // Test 3 - Verify recommendation related content loads on product page
  49  | 
  50  |   test('Verify recommendation related content loads on product page', async ({ page }) => {
  51  | 
  52  |     await expect(page.locator('body')).toContainText(/Similar|Related|Recommended|You May Also Like|Products/i);
  53  | 
  54  |   });
  55  | 
  56  |   // Test 4 - Verify product recommendation page content does not crash
  57  | 
  58  |   test('Verify product recommendation page content does not crash', async ({ page }) => {
  59  | 
  60  |     const content = await page.content();
  61  | 
  62  |     expect(content.length).toBeGreaterThan(500);
  63  | 
  64  |   });
  65  | 
  66  |   // Test 5 - Verify recommended product price information visibility
  67  | 
  68  |   test('Verify recommended product price information visibility', async ({ page }) => {
  69  | 
  70  |     await expect(page.locator('body')).toContainText(/₹|MRP|Price/i);
  71  |   });
  72  | 
  73  |   // Test 6 - Verify recommended product image availability
  74  | 
  75  |   test('Verify recommended product image availability', async ({ page }) => {
  76  | 
  77  |     const imageCount = await page.locator('img').count();
  78  | 
  79  |     expect(imageCount).toBeGreaterThan(0);
  80  | 
  81  |   });
  82  | 
  83  |   // Test 7 - Verify recommendation page contains product brand or product name
  84  | 
  85  |   test('Verify recommendation page contains product brand or product name', async ({ page }) => {
  86  | 
  87  |     await expect(page.locator('body')).toContainText(/Dot|Key|Product|Mist|Skin/i);
  88  | 
  89  |   });
  90  | 
  91  |   // Test 8 - Verify recommendation page refresh works successfully
  92  | 
  93  |   test('Verify recommendation page refresh works successfully', async ({ page }) => {
  94  | 
  95  |     await page.reload({
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
  107 |   // Test 9 - Verify recommendation section using soft assertions
  108 | 
  109 |   test('Verify recommendation section using soft assertions', async ({ page }) => {
  110 | 
  111 |     await expect.soft(page.locator('body')).toBeVisible();
  112 | 
  113 |     await expect.soft(page.locator('body')).toContainText(/₹|Product|Nykaa/i);
  114 | 
  115 |   });
  116 | 
  117 |   // Test 10 - Verify recommendation flow using test steps
  118 | 
  119 |   test('Verify recommendation flow using test steps', async ({ page }) => {
  120 | 
  121 |     await test.step('Open product detail page', async () => {
```