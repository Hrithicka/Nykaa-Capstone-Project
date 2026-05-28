# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: search_testing/search.spec.js >> Search Module >> Verify product opening from search results
- Location: tests/search_testing/search.spec.js:73:3

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
  - <launched> pid=8842
  - [pid=8842][err]
  - [pid=8842][err] (process:8848): Gtk-WARNING **: 12:30:14.583: Failed to open display
  - [pid=8842] <gracefully close start>
  - [pid=8842] <kill>
  - [pid=8842] <will force kill>
  - [pid=8842] <process did exit: exitCode=1, signal=null>
  - [pid=8842] starting temporary directories cleanup
  - [pid=8842] finished temporary directories cleanup
  - [pid=8842] <gracefully close end>

```