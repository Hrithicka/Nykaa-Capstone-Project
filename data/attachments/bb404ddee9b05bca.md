# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homepage_testing/homepage.spec.js >> Homepage Validation Module >> Verify Nykaa logo visibility
- Location: tests/homepage_testing/homepage.spec.js:55:3

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
  - <launched> pid=6667
  - [pid=6667][err]
  - [pid=6667][err] (process:6673): Gtk-WARNING **: 12:29:17.952: Failed to open display
  - [pid=6667] <gracefully close start>
  - [pid=6667] <kill>
  - [pid=6667] <will force kill>
  - [pid=6667] <process did exit: exitCode=1, signal=null>
  - [pid=6667] starting temporary directories cleanup
  - [pid=6667] finished temporary directories cleanup
  - [pid=6667] <gracefully close end>

```