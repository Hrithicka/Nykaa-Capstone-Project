# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart_testing/cart.spec.js >> Cart Module >> Verify offers visibility
- Location: tests/cart_testing/cart.spec.js:100:3

# Error details

```
Error: browserType.launch: Failed to launch the browser process.
Browser logs:

╔════════════════════════════════════════════════════════════════════════════════════════════════╗
║ Looks like you launched a headed browser without having a XServer running.                     ║
║ Set either 'headless: true' or use 'xvfb-run <your-playwright-app>' before running Playwright. ║
║                                                                                                ║
║ <3 Playwright Team                                                                             ║
╚════════════════════════════════════════════════════════════════════════════════════════════════╝
Call log:
  - <launching> /home/runner/.cache/ms-playwright/firefox-1522/firefox/firefox -no-remote -wait-for-browser -foreground -profile /tmp/playwright_firefoxdev_profile-79NtFY -juggler-pipe -silent
  - <launched> pid=5840
  - [pid=5840][err] [5842] Sandbox: CanCreateUserNamespace() unshare(CLONE_NEWPID): EPERM
  - [pid=5840][err] Error: no DISPLAY environment variable specified
  - [pid=5840] <process did exit: exitCode=1, signal=null>
  - [pid=5840] starting temporary directories cleanup
  - [pid=5840] <gracefully close start>
  - [pid=5840] <kill>
  - [pid=5840] <skipped force kill spawnedProcess.killed=false processClosed=true>
  - [pid=5840] finished temporary directories cleanup
  - [pid=5840] <gracefully close end>

```