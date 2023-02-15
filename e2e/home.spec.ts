import { test, devices, expect } from '@playwright/test';

test.use({
    browserName: 'chromium',
    ...devices['Desktop Chromium']
})

test.describe("Testing for desktop", () => {
    test('Testing for font sizes on desktop', async ({ page }) => {
        await page.goto('http://localhost:3000/')

        const mainContainer = page.locator('#sizing');

        const checkingFontSize = await mainContainer.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("font-size")
        })

        console.log(checkingFontSize);
        expect(checkingFontSize).toBe("16px");
    })
})