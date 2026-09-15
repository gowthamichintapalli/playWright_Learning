import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './',

  use: {
    baseURL: 'https://www.google.com',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
