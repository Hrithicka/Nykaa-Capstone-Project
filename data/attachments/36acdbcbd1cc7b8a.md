# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart_testing/cart.spec.js >> Cart Module >> Verify product section visibility
- Location: tests/cart_testing/cart.spec.js:48:3

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
  - <launched> pid=5646
  - [pid=5646][err]
  - [pid=5646][err] (process:5652): Gtk-WARNING **: 14:36:48.615: Failed to open display
  - [pid=5646] <gracefully close start>
  - [pid=5646] <kill>
  - [pid=5646] <will force kill>
  - [pid=5646] <process did exit: exitCode=1, signal=null>
  - [pid=5646] starting temporary directories cleanup
  - [pid=5646] finished temporary directories cleanup
  - [pid=5646] <gracefully close end>

```