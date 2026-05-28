# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: navigation_testing/navigation.spec.js >> Brand & Category Navigation Module >> Verify Skin category navigation
- Location: tests/navigation_testing/navigation.spec.js:39:3

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
  - <launching> /home/runner/.cache/ms-playwright/firefox-1522/firefox/firefox -no-remote -wait-for-browser -foreground -profile /tmp/playwright_firefoxdev_profile-SAj8wz -juggler-pipe -silent
  - <launched> pid=7136
  - [pid=7136][err] [7138] Sandbox: CanCreateUserNamespace() unshare(CLONE_NEWPID): EPERM
  - [pid=7136][err] Error: no DISPLAY environment variable specified
  - [pid=7136] <process did exit: exitCode=1, signal=null>
  - [pid=7136] starting temporary directories cleanup
  - [pid=7136] <gracefully close start>
  - [pid=7136] <kill>
  - [pid=7136] <skipped force kill spawnedProcess.killed=false processClosed=true>
  - [pid=7136] finished temporary directories cleanup
  - [pid=7136] <gracefully close end>

```