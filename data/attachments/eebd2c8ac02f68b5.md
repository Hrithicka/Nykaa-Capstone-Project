# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: search_testing/search.spec.js >> Search Module >> Verify back navigation after product search
- Location: tests/search_testing/search.spec.js:115:3

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
  - <launched> pid=9033
  - [pid=9033][err]
  - [pid=9033][err] (process:9039): Gtk-WARNING **: 12:47:42.460: Failed to open display
  - [pid=9033] <gracefully close start>
  - [pid=9033] <kill>
  - [pid=9033] <will force kill>
  - [pid=9033] <process did exit: exitCode=1, signal=null>
  - [pid=9033] starting temporary directories cleanup
  - [pid=9033] finished temporary directories cleanup
  - [pid=9033] <gracefully close end>

```