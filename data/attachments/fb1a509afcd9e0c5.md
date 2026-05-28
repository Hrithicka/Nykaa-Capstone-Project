# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: search_testing/search.spec.js >> Search Module >> Verify back navigation after product search
- Location: tests/search_testing/search.spec.js:115:3

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
  - <launching> /home/runner/.cache/ms-playwright/firefox-1522/firefox/firefox -no-remote -wait-for-browser -foreground -profile /tmp/playwright_firefoxdev_profile-cGOpf4 -juggler-pipe -silent
  - <launched> pid=8645
  - [pid=8645][err] [8647] Sandbox: CanCreateUserNamespace() unshare(CLONE_NEWPID): EPERM
  - [pid=8645][err] Error: no DISPLAY environment variable specified
  - [pid=8645] <process did exit: exitCode=1, signal=null>
  - [pid=8645] starting temporary directories cleanup
  - [pid=8645] <gracefully close start>
  - [pid=8645] <kill>
  - [pid=8645] <skipped force kill spawnedProcess.killed=false processClosed=true>
  - [pid=8645] finished temporary directories cleanup
  - [pid=8645] <gracefully close end>

```