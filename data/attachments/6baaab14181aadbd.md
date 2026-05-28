# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: product_testing/product.spec.js >> Product Details Module >> Verify wishlist button visibility
- Location: tests/product_testing/product.spec.js:54:3

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
  - <launching> /home/runner/.cache/ms-playwright/firefox-1522/firefox/firefox -no-remote -wait-for-browser -foreground -profile /tmp/playwright_firefoxdev_profile-7r4yQk -juggler-pipe -silent
  - <launched> pid=7755
  - [pid=7755][err] [7757] Sandbox: CanCreateUserNamespace() unshare(CLONE_NEWPID): EPERM
  - [pid=7755][err] Error: no DISPLAY environment variable specified
  - [pid=7755] <process did exit: exitCode=1, signal=null>
  - [pid=7755] starting temporary directories cleanup
  - [pid=7755] <gracefully close start>
  - [pid=7755] <kill>
  - [pid=7755] <skipped force kill spawnedProcess.killed=false processClosed=true>
  - [pid=7755] finished temporary directories cleanup
  - [pid=7755] <gracefully close end>

```