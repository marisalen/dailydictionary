import { test, devices, expect } from '@playwright/test';

test.use({
    browserName: 'chromium',
    ...devices['iPhone XR'],
    viewport: {width: 414, height: 896}
})

test.describe("Testing for iPhone XR", () => {
    test("Testing for weight on iPhone XR", async ({ page }) => {
        await page.goto('http://localhost:3000')

        const mainContainer = page.locator('#title');

        const checkingFontWeight = await mainContainer.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("font-weight")
        })

        console.log(checkingFontWeight);
        expect(checkingFontWeight).toBe("400");
    })
})

test.describe("Testing for iPhone XR", () => {
    test('Testing for image width on iPhone XR', async ({ page }) => {
        await page.goto('http://localhost:3000/')

        const mainContainer = page.locator('#leftimage');

        const checkingImageWidth = await mainContainer.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("width")
        })

        console.log(checkingImageWidth);
        expect(checkingImageWidth).toBe("0%");
    })
})