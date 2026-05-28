# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: navigation_testing/navigation.spec.js >> Brand & Category Navigation Module >> Verify category filters visibility
- Location: tests/navigation_testing/navigation.spec.js:77:3

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
  - <launching> /home/runner/.cache/ms-playwright/firefox-1522/firefox/firefox -no-remote -wait-for-browser -foreground -profile /tmp/playwright_firefoxdev_profile-TsjH0l -juggler-pipe -silent
  - <launched> pid=7387
  - [pid=7387][err] [7389] Sandbox: CanCreateUserNamespace() unshare(CLONE_NEWPID): EPERM
  - [pid=7387][err] Error: no DISPLAY environment variable specified
  - [pid=7387] <process did exit: exitCode=1, signal=null>
  - [pid=7387] starting temporary directories cleanup
  - [pid=7387] <gracefully close start>
  - [pid=7387] <kill>
  - [pid=7387] <skipped force kill spawnedProcess.killed=false processClosed=true>
  - [pid=7387] finished temporary directories cleanup
  - [pid=7387] <gracefully close end>

```