# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: product_testing/product.spec.js >> Product Details Module >> Verify discount visibility
- Location: tests/product_testing/product.spec.js:84:3

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
  - <launched> pid=8226
  - [pid=8226][err]
  - [pid=8226][err] (process:8232): Gtk-WARNING **: 12:47:21.692: Failed to open display
  - [pid=8226] <gracefully close start>
  - [pid=8226] <kill>
  - [pid=8226] <will force kill>
  - [pid=8226] <process did exit: exitCode=1, signal=null>
  - [pid=8226] starting temporary directories cleanup
  - [pid=8226] finished temporary directories cleanup
  - [pid=8226] <gracefully close end>

```