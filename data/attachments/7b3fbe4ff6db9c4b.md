# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: product_testing/product.spec.js >> Product Details Module >> Verify product cards visibility
- Location: tests/product_testing/product.spec.js:26:3

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
  - <launched> pid=7823
  - [pid=7823][err]
  - [pid=7823][err] (process:7829): Gtk-WARNING **: 12:29:48.239: Failed to open display
  - [pid=7823] <gracefully close start>
  - [pid=7823] <kill>
  - [pid=7823] <will force kill>
  - [pid=7823] <process did exit: exitCode=1, signal=null>
  - [pid=7823] starting temporary directories cleanup
  - [pid=7823] finished temporary directories cleanup
  - [pid=7823] <gracefully close end>

```