# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart_testing/cart.spec.js >> Cart Module >> Verify offers visibility
- Location: tests/cart_testing/cart.spec.js:100:3

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
  - <launched> pid=5830
  - [pid=5830][err]
  - [pid=5830][err] (process:5836): Gtk-WARNING **: 14:36:53.302: Failed to open display
  - [pid=5830] <gracefully close start>
  - [pid=5830] <kill>
  - [pid=5830] <will force kill>
  - [pid=5830] <process did exit: exitCode=1, signal=null>
  - [pid=5830] starting temporary directories cleanup
  - [pid=5830] finished temporary directories cleanup
  - [pid=5830] <gracefully close end>

```