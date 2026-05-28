# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homepage_testing/homepage.spec.js >> Homepage Validation Module >> Verify bestseller products visibility
- Location: tests/homepage_testing/homepage.spec.js:37:3

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
  - <launching> /home/runner/.cache/ms-playwright/firefox-1522/firefox/firefox -no-remote -wait-for-browser -foreground -profile /tmp/playwright_firefoxdev_profile-yRAuQS -juggler-pipe -silent
  - <launched> pid=6424
  - [pid=6424][err] [6426] Sandbox: CanCreateUserNamespace() unshare(CLONE_NEWPID): EPERM
  - [pid=6424][err] Error: no DISPLAY environment variable specified
  - [pid=6424] <process did exit: exitCode=1, signal=null>
  - [pid=6424] starting temporary directories cleanup
  - [pid=6424] <gracefully close start>
  - [pid=6424] <kill>
  - [pid=6424] <skipped force kill spawnedProcess.killed=false processClosed=true>
  - [pid=6424] finished temporary directories cleanup
  - [pid=6424] <gracefully close end>

```