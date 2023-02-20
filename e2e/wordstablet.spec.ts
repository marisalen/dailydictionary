import {test, devices, expect } from '@playwright/test';

test.use({
    browserName: 'chromium',
    ...devices['iPad Air'],
    viewport: {width: 820, height: 1180}
})

test.describe("Testing for home tablet", () => {
    test("Testing for weight on tablet", async ({ page }) => {
        await page.goto('http://localhost:3000')

        const mainContainer = page.locator('#title');

        const checkingFontWeight = await mainContainer.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("font-weight")
        })

        console.log(checkingFontWeight);
        expect(checkingFontWeight).toBe("500");
    })
})

test.describe("Testing for tablet", () => {
    test('Testing for image width on tablet', async ({ page }) => {
        await page.goto('http://localhost:3000/')

        const mainContainer = page.locator('#leftimage');

        const checkingImageWidth = await mainContainer.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("width")
        })

        console.log(checkingImageWidth);
        expect(checkingImageWidth).toBe("5%");
    })
})