# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: navigation_testing/navigation.spec.js >> Brand & Category Navigation Module >> Verify Makeup category navigation
- Location: tests/navigation_testing/navigation.spec.js:29:3

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
  - <launching> /home/runner/.cache/ms-playwright/firefox-1522/firefox/firefox -no-remote -wait-for-browser -foreground -profile /tmp/playwright_firefoxdev_profile-dS4mK0 -juggler-pipe -silent
  - <launched> pid=7087
  - [pid=7087][err] [7089] Sandbox: CanCreateUserNamespace() unshare(CLONE_NEWPID): EPERM
  - [pid=7087][err] Error: no DISPLAY environment variable specified
  - [pid=7087] <process did exit: exitCode=1, signal=null>
  - [pid=7087] starting temporary directories cleanup
  - [pid=7087] <gracefully close start>
  - [pid=7087] <kill>
  - [pid=7087] <skipped force kill spawnedProcess.killed=false processClosed=true>
  - [pid=7087] finished temporary directories cleanup
  - [pid=7087] <gracefully close end>

```