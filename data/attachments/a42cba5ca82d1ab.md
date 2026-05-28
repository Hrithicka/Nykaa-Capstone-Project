# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: search_testing/search.spec.js >> Search Module >> Verify search autosuggestion visibility
- Location: tests/search_testing/search.spec.js:41:3

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
  - <launched> pid=8665
  - [pid=8665][err]
  - [pid=8665][err] (process:8671): Gtk-WARNING **: 12:47:32.924: Failed to open display
  - [pid=8665] <gracefully close start>
  - [pid=8665] <kill>
  - [pid=8665] <will force kill>
  - [pid=8665] <process did exit: exitCode=1, signal=null>
  - [pid=8665] starting temporary directories cleanup
  - [pid=8665] finished temporary directories cleanup
  - [pid=8665] <gracefully close end>

```