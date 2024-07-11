import { test } from '@playwright/test';

test.afterAll(async ({ page }, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus) {
      const screenshotPath = 'screenshots/'+`${testInfo.title.replace(/\s+/g, '_')}`+'.png';
      await page.screenshot({ path: screenshotPath });
      console.log(`Screenshot taken: ${screenshotPath}`);
    }
  });