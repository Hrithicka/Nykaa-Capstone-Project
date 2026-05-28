# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart_testing/cart.spec.js >> Cart Module >> Verify makeup category navigation
- Location: tests/cart_testing/cart.spec.js:120:3

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
  - <launched> pid=6007
  - [pid=6007][err]
  - [pid=6007][err] (process:6013): Gtk-WARNING **: 12:46:24.251: Failed to open display
  - [pid=6007] <gracefully close start>
  - [pid=6007] <kill>
  - [pid=6007] <will force kill>
  - [pid=6007] <process did exit: exitCode=1, signal=null>
  - [pid=6007] starting temporary directories cleanup
  - [pid=6007] finished temporary directories cleanup
  - [pid=6007] <gracefully close end>

```