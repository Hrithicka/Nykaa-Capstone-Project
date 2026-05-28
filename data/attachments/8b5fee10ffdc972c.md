# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart_testing/cart.spec.js >> Cart Module >> Verify product section visibility
- Location: tests/cart_testing/cart.spec.js:48:3

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
  - <launching> /home/runner/.cache/ms-playwright/firefox-1522/firefox/firefox -no-remote -wait-for-browser -foreground -profile /tmp/playwright_firefoxdev_profile-uSitKu -juggler-pipe -silent
  - <launched> pid=5659
  - [pid=5659][err] [5661] Sandbox: CanCreateUserNamespace() unshare(CLONE_NEWPID): EPERM
  - [pid=5659][err] Error: no DISPLAY environment variable specified
  - [pid=5659] <process did exit: exitCode=1, signal=null>
  - [pid=5659] starting temporary directories cleanup
  - [pid=5659] <gracefully close start>
  - [pid=5659] <kill>
  - [pid=5659] <skipped force kill spawnedProcess.killed=false processClosed=true>
  - [pid=5659] finished temporary directories cleanup
  - [pid=5659] <gracefully close end>

```