import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './tests',
  outputDir: '.playwright-artifacts',
  fullyParallel: false,
  workers: 1,
  timeout: 60_000,
  expect: { timeout: 10_000 },
  reporter: 'list',
  use: { baseURL: 'http://127.0.0.1:3100', browserName: 'chromium', channel: 'chrome', headless: true, screenshot: 'only-on-failure', trace: 'retain-on-failure' },
  webServer: { command: 'npm run start -- --hostname 127.0.0.1 --port 3100', url: 'http://127.0.0.1:3100', reuseExistingServer: false, timeout: 120_000 },
});
