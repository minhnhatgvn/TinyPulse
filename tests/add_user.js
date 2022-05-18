const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('https://staging.tinyserver.info/auth');
});

test.describe('Input user name and password', () => {
    test('fill email and password', async ({ page }) => {
      // Create 1st todo.
      await page.locator('.Input__input___1hjYb').fill("nhatthai+1@gmail.com");
      await page.locator('.Button__button___3FFWB').click();
    });
});