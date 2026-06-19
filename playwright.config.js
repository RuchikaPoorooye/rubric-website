import { defineConfig, devices } from '@playwright/test'

/**
 * Playwright E2E configuration for the Rubric website.
 *
 * Runs HEADED (a visible browser) by default for local viewing; CI runs
 * headless. Tests run against the Vite dev server (reused if already running).
 *
 * Reports produced after a run:
 *   - playwright-report/index.html   (rich HTML report)  -> npm run test:e2e:report
 *   - playwright-report/results.xml  (JUnit, for CI dashboards)
 *   - test-results/                  (traces, screenshots & videos on failure)
 */
const isCI = !!process.env.CI

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 1 : 0,
  // Single worker locally so the headed run is orderly and watchable.
  workers: isCI ? undefined : 1,

  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'on-failure' }],
    ['junit', { outputFile: 'playwright-report/results.xml' }],
  ],

  use: {
    baseURL: 'http://localhost:5173',
    headless: isCI || process.env.HEADLESS === 'true', // headed locally; headless on CI or via HEADLESS=true
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    launchOptions: {
      // Slow actions down a touch so a headed run is easy to follow.
      slowMo: isCI ? 0 : 250,
    },
  },

  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],

  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: true,
    timeout: 120_000,
  },
})
