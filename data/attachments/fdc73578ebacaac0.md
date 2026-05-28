# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: navigation_testing/navigation.spec.js >> Brand & Category Navigation Module >> Verify category filters visibility
- Location: tests/navigation_testing/navigation.spec.js:77:3

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
  - <launched> pid=7603
  - [pid=7603][err]
  - [pid=7603][err] (process:7609): Gtk-WARNING **: 12:47:05.330: Failed to open display
  - [pid=7603] <gracefully close start>
  - [pid=7603] <kill>
  - [pid=7603] <will force kill>
  - [pid=7603] <process did exit: exitCode=1, signal=null>
  - [pid=7603] starting temporary directories cleanup
  - [pid=7603] finished temporary directories cleanup
  - [pid=7603] <gracefully close end>

```