# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: product_testing/product.spec.js >> Product Details Module >> Verify product title visibility
- Location: tests/product_testing/product.spec.js:36:3

# Error details

```
Error: browserType.launch: Target page, context or browser has been closed
Browser logs:

╔════════════════════════════════════════════════════════════════════════════════════════════════╗
║ Looks like you launched a headed browser without having a XServer running.                     ║
║ Set either 'headless: true' or use 'xvfb-run <your-playwright-app>' before running Playwright. ║
║                                                                                                ║
║ <3 Playwright Team                                                                             ║
╚════════════════════════════════════════════════════════════════════════════════════════════════╝
Call log:
  - <launching> /home/runner/.cache/ms-playwright/webkit-2287/pw_run.sh --inspector-pipe --no-startup-window
  - <launched> pid=7892
  - [pid=7892][err]
  - [pid=7892][err] (process:7898): Gtk-WARNING **: 12:29:50.046: Failed to open display
  - [pid=7892] <gracefully close start>
  - [pid=7892] <kill>
  - [pid=7892] <will force kill>
  - [pid=7892] <process did exit: exitCode=1, signal=null>
  - [pid=7892] starting temporary directories cleanup
  - [pid=7892] finished temporary directories cleanup
  - [pid=7892] <gracefully close end>

```