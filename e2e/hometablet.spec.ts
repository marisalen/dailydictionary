import {test, devices, expect } from '@playwright/test';

test.use({
    browserName: 'chromium',
    ...devices['iPad Air'],
    viewport: {width: 820, height: 1180}
})

test.describe("Testing for home tablet", () => {
    test("Testing for font size on tablet", async ({ page }) => {
        await page.goto('http://localhost:3000')

        const mainContainer = page.locator('#sizing');

        const checkingFontSize = await mainContainer.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("font-size")
        })

        console.log(checkingFontSize);
        expect(checkingFontSize).toBe("18px");
    })
})

test.describe("The mobile viewport for tablet", () => {
    test('Testing for margin on tablet', async ({ page }) => {
        await page.goto('http://localhost:3000/')

        const mainContainer = page.locator('#main__area');

        const checkingMarginSize = await mainContainer.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("margin")
        })

        console.log(checkingMarginSize);
        expect(checkingMarginSize).toBe("0px 18px");
    })
})