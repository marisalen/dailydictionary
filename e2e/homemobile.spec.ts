import { test, devices, expect } from '@playwright/test';

test.use({
    browserName: 'chromium',
    ...devices['iPhone XR'],
    viewport: {width: 414, height: 896}
})

test.describe("The mobile viewport for iPhone XR", () => {
    test('Testing for font sizes on iPhone XR', async ({ page }) => {
        await page.goto('http://localhost:3000/')

        const mainContainer = page.locator('#sizing');

        const checkingFontSize = await mainContainer.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("font-size")
        })

        console.log(checkingFontSize);
        expect(checkingFontSize).toBe("16px");
    })
})

test.describe("The mobile viewport for iPhone XR", () => {
    test('Testing for margin on iPhone XR', async ({ page }) => {
        await page.goto('http://localhost:3000/')

        const mainContainer = page.locator('#container');

        const checkingMarginSize = await mainContainer.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("margin")
        })

        console.log(checkingMarginSize);
        expect(checkingMarginSize).toBe("0px 20px 0px 20px");
    })
})