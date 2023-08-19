const puppeteer = require('puppeteer');

(async () => {
    try {
        // Launch a headless browser
        const browser = await puppeteer.launch({ headless: false });

        // Open a new page
        const page = await browser.newPage();

        // Navigate to the website
        await page.goto('https://beahub-agent-toandt.devcaprover.nexlesoft.com/');

        // Perform login
        await page.type('#horizontal_login_username', 'ag6');
        await page.type('#horizontal_login_password', '1');
        await page.click('button');

        // Wait for navigation to complete after login
        await page.waitForNavigation();

        // Delay for 3 seconds
        await new Promise((resolve) => setTimeout(resolve, 3000));


        // Capture a screenshot
        await page.screenshot({ path: 'example2.png' });

        // Close the browser
        await browser.close();

        console.log('Screenshot captured successfully.');
    } catch (error) {
        console.error('An error occurred:', error);
    }
})();