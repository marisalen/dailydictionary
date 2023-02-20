import { test, devices, expect } from '@playwright/test';

test.use({
    browserName: 'chromium',
    ...devices['Desktop Chromium']
})

test.describe("Testing for desktop", () => {
    test("Testing for weight on desktop", async ({ page }) => {
        await page.goto('http://localhost:3000')

        const mainContainer = page.locator('#title');

        const checkingFontWeight = await mainContainer.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("font-weight")
        })

        console.log(checkingFontWeight);
        expect(checkingFontWeight).toBe("600");
    })
})

test.describe("Testing for desktop", () => {
    test('Testing for image visibility on desktop', async ({ page }) => {
        await page.goto('http://localhost:3000/')

        const mainContainer = page.locator('#leftimage');

        const checkingImageWidth = await mainContainer.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("width")
        })

        console.log(checkingImageWidth);
        expect(checkingImageWidth).toBe("15%");
    })
})