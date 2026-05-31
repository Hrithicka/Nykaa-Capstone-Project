# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart_testing/cart.spec.js >> Cart Module >> Verify Nykaa homepage loads successfully
- Location: tests/cart_testing/cart.spec.js:34:3

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
  5   | const lipsUrl = 'https://www.nykaa.com/lips/c/15';
  6   | 
  7   | test.describe('Cart Module', () => {
  8   | 
  9   |   test.beforeAll(async () => {
  10  | 
  11  |     console.log('Cart Module Started');
  12  | 
  13  |   });
  14  | 
  15  |   test.afterAll(async () => {
  16  | 
  17  |     console.log('Cart Module Completed');
  18  | 
  19  |   });
  20  | 
  21  |   test.beforeEach(async ({ page }) => {
  22  | 
  23  |     page.on('dialog', async dialog => {
  24  | 
  25  |       await dialog.accept();
  26  | 
  27  |     });
  28  | 
  29  |   });
  30  | 
  31  | 
  32  |   // Test 1 - Verify Nykaa homepage loads successfully
  33  | 
  34  |   test('Verify Nykaa homepage loads successfully', async ({ page }) => {
  35  | 
> 36  |     await page.goto(homeUrl, {
      |                ^ Error: page.goto: net::ERR_HTTP2_PROTOCOL_ERROR at https://www.nykaa.com/
  37  | 
  38  |       waitUntil: 'domcontentloaded',
  39  | 
  40  |       timeout: 60000
  41  | 
  42  |     });
  43  | 
  44  |     await expect(page.locator('body')).toBeVisible();
  45  | 
  46  |   });
  47  | 
  48  |   // Test 2 - Verify homepage URL is valid
  49  | 
  50  |   test('Verify homepage URL is valid', async ({ page }) => {
  51  | 
  52  |     await page.goto(homeUrl, {
  53  | 
  54  |       waitUntil: 'domcontentloaded',
  55  | 
  56  |       timeout: 60000
  57  | 
  58  |     });
  59  | 
  60  |     await expect(page).toHaveURL(/nykaa/i);
  61  | 
  62  |   });
  63  | 
  64  |   // Test 3 - Verify cart or bag text availability on homepage
  65  | 
  66  |   test('Verify cart or bag text availability on homepage', async ({ page }) => {
  67  | 
  68  |     await page.goto(homeUrl, {
  69  | 
  70  |       waitUntil: 'domcontentloaded',
  71  | 
  72  |       timeout: 60000
  73  | 
  74  |     });
  75  | 
  76  |     await expect(page.locator('body')).toContainText(/Bag|Cart|Nykaa/i);
  77  | 
  78  |   });
  79  | 
  80  |   // Test 4 - Verify lips category page loads successfully
  81  | 
  82  |   test('Verify lips category page loads successfully', async ({ page }) => {
  83  | 
  84  |     await page.goto(lipsUrl, {
  85  | 
  86  |       waitUntil: 'domcontentloaded',
  87  | 
  88  |       timeout: 60000
  89  | 
  90  |     });
  91  | 
  92  |     await expect(page).toHaveURL(/lips/i);
  93  | 
  94  |   });
  95  | 
  96  |   // Test 5 - Verify product listing is visible before cart action
  97  | 
  98  |   test('Verify product listing is visible before cart action', async ({ page }) => {
  99  | 
  100 |     await page.goto(lipsUrl, {
  101 | 
  102 |       waitUntil: 'domcontentloaded',
  103 | 
  104 |       timeout: 60000
  105 | 
  106 |     });
  107 | 
  108 |     await expect(page.locator('body')).toContainText(/Lipstick|Lip|Product/i);
  109 | 
  110 |   });
  111 | 
  112 |   // Test 6 - Verify product price is visible before cart action
  113 | 
  114 |   test('Verify product price is visible before cart action', async ({ page }) => {
  115 | 
  116 |     await page.goto(lipsUrl, {
  117 | 
  118 |       waitUntil: 'domcontentloaded',
  119 | 
  120 |       timeout: 60000
  121 | 
  122 |     });
  123 | 
  124 |     await expect(page.locator('body')).toContainText('₹');
  125 | 
  126 |   });
  127 | 
  128 |   // Test 7 - Verify Add to Bag related text is available
  129 | 
  130 |   test('Verify Add to Bag related text is available', async ({ page }) => {
  131 | 
  132 |     await page.goto(lipsUrl, {
  133 | 
  134 |       waitUntil: 'domcontentloaded',
  135 | 
  136 |       timeout: 60000
```