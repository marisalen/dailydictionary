const { devices } = require('@playwright/test');

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    timeout: 30000,
    user: {
        ignoreHTTPSErrors: true,
    },

    projects: [
        {
            name: 'Desktop Chromium',
            user: {
                browserName: 'chromium',
                viewport: {width: 1280, height: 720},
            },
        },
        {
            name: 'Mobile Chrome',
            use: {
                browserName: 'chromium',
                ...devices['iPhone XR'],
                viewport: { width: 414, height: 896 },
            },
        },
        {
            name: 'Tablet Chrome',
            use: {
                browserName: 'chromium',
                ...devices['iPad Air'],
                viewport: { width: 820, height: 1180 },
            },
        },

    ]
}

module.exports = config