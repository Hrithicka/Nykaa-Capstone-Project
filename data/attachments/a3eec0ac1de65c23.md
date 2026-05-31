# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart_testing/cart.spec.js >> Cart Module >> Verify cart module works in tablet viewport
- Location: tests/cart_testing/cart.spec.js:254:3

# Error details

```
Error: page.goto: net::ERR_HTTP2_PROTOCOL_ERROR at https://www.nykaa.com/lips/c/15
Call log:
  - navigating to "https://www.nykaa.com/lips/c/15", waiting until "domcontentloaded"

```

# Test source

```ts
  158 |     await expect(visibleImage).toBeVisible();
  159 | 
  160 |   });
  161 | 
  162 |   // Test 9 - Verify cart module content does not crash
  163 | 
  164 |   test('Verify cart module content does not crash', async ({ page }) => {
  165 | 
  166 |     await page.goto(homeUrl, {
  167 | 
  168 |       waitUntil: 'domcontentloaded',
  169 | 
  170 |       timeout: 60000
  171 | 
  172 |     });
  173 | 
  174 |     const content = await page.content();
  175 | 
  176 |     expect(content.length).toBeGreaterThan(500);
  177 | 
  178 |   });
  179 | 
  180 |   // Test 10 - Verify cart related flow using test steps
  181 | 
  182 |   test('Verify cart related flow using test steps', async ({ page }) => {
  183 | 
  184 |     await test.step('Open Nykaa homepage', async () => {
  185 | 
  186 |       await page.goto(homeUrl, {
  187 | 
  188 |         waitUntil: 'domcontentloaded',
  189 | 
  190 |         timeout: 60000
  191 | 
  192 |       });
  193 | 
  194 |       await expect(page.locator('body')).toBeVisible();
  195 | 
  196 |     });
  197 | 
  198 |     await test.step('Open lips category page', async () => {
  199 | 
  200 |       await page.goto(lipsUrl, {
  201 | 
  202 |         waitUntil: 'domcontentloaded',
  203 | 
  204 |         timeout: 60000
  205 | 
  206 |       });
  207 | 
  208 |       await expect(page.locator('body')).toContainText(/Lip|₹|Bag/i);
  209 | 
  210 |     });
  211 | 
  212 |   });
  213 | 
  214 |   // Test 11 - Verify cart module using soft assertions
  215 | 
  216 |   test('Verify cart module using soft assertions', async ({ page }) => {
  217 | 
  218 |     await page.goto(lipsUrl, {
  219 | 
  220 |       waitUntil: 'domcontentloaded',
  221 | 
  222 |       timeout: 60000
  223 | 
  224 |     });
  225 | 
  226 |     await expect.soft(page.locator('body')).toBeVisible();
  227 | 
  228 |     await expect.soft(page.locator('body')).toContainText(/Lip|₹|Bag|Wishlist/i);
  229 | 
  230 |   });
  231 | 
  232 |   // Test 12 - Verify cart module with polling assertion
  233 | 
  234 |   test('Verify cart module with polling assertion', async ({ page }) => {
  235 | 
  236 |     await page.goto(lipsUrl, {
  237 | 
  238 |       waitUntil: 'domcontentloaded',
  239 | 
  240 |       timeout: 60000
  241 | 
  242 |     });
  243 | 
  244 |     await expect.poll(async () => {
  245 | 
  246 |       return await page.locator('body').isVisible();
  247 | 
  248 |     }).toBeTruthy();
  249 | 
  250 |   });
  251 | 
  252 |   // Test 13 - Verify cart module works in tablet viewport
  253 | 
  254 |   test('Verify cart module works in tablet viewport', async ({ page }) => {
  255 | 
  256 |     await page.setViewportSize({ width: 768, height: 1024 });
  257 | 
> 258 |     await page.goto(lipsUrl, {
      |                ^ Error: page.goto: net::ERR_HTTP2_PROTOCOL_ERROR at https://www.nykaa.com/lips/c/15
  259 | 
  260 |       waitUntil: 'domcontentloaded',
  261 | 
  262 |       timeout: 60000
  263 |       
  264 |     });
  265 | 
  266 |     await expect(page.locator('body')).toBeVisible();
  267 | 
  268 |   });
  269 | 
  270 | });
```