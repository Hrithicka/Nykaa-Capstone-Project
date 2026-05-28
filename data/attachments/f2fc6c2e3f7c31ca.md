# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: search_testing/search.spec.js >> Search Module >> Verify product opening from search results
- Location: tests/search_testing/search.spec.js:73:3

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
  - <launching> /home/runner/.cache/ms-playwright/firefox-1522/firefox/firefox -no-remote -wait-for-browser -foreground -profile /tmp/playwright_firefoxdev_profile-bWuLRt -juggler-pipe -silent
  - <launched> pid=8474
  - [pid=8474][err] [8476] Sandbox: CanCreateUserNamespace() unshare(CLONE_NEWPID): EPERM
  - [pid=8474][err] Error: no DISPLAY environment variable specified
  - [pid=8474] <process did exit: exitCode=1, signal=null>
  - [pid=8474] starting temporary directories cleanup
  - [pid=8474] <gracefully close start>
  - [pid=8474] <kill>
  - [pid=8474] <skipped force kill spawnedProcess.killed=false processClosed=true>
  - [pid=8474] finished temporary directories cleanup
  - [pid=8474] <gracefully close end>

```