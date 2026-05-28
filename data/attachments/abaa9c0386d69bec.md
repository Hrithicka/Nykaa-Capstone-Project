# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart_testing/cart.spec.js >> Cart Module >> Verify lipstick category page loads
- Location: tests/cart_testing/cart.spec.js:32:3

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
  - <launching> /home/runner/.cache/ms-playwright/firefox-1522/firefox/firefox -no-remote -wait-for-browser -foreground -profile /tmp/playwright_firefoxdev_profile-NgyG1Q -juggler-pipe -silent
  - <launched> pid=5569
  - [pid=5569][err] [5571] Sandbox: CanCreateUserNamespace() unshare(CLONE_NEWPID): EPERM
  - [pid=5569][err] Error: no DISPLAY environment variable specified
  - [pid=5569] <process did exit: exitCode=1, signal=null>
  - [pid=5569] starting temporary directories cleanup
  - [pid=5569] <gracefully close start>
  - [pid=5569] <kill>
  - [pid=5569] <skipped force kill spawnedProcess.killed=false processClosed=true>
  - [pid=5569] finished temporary directories cleanup
  - [pid=5569] <gracefully close end>

```