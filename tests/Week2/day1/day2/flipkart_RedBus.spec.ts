import { test, chromium, firefox } from '@playwright/test';

test('Launch RedBus in Edge and Flipkart in Firefox', async () => {

    // Edge Browser
    const edgeBrowser = await chromium.launch({
        channel: 'msedge',
        headless: false
    });

    const edgeContext = await edgeBrowser.newContext();
    const redbusPage = await edgeContext.newPage();

    await redbusPage.goto('https://www.redbus.in');

    console.log("RedBus Title: " + await redbusPage.title());
    console.log("RedBus URL: " + redbusPage.url());

    // Firefox Browser
    const firefoxBrowser = await firefox.launch({ headless: false });

    const firefoxContext = await firefoxBrowser.newContext();
    const flipkartPage = await firefoxContext.newPage();

    await flipkartPage.goto('https://www.flipkart.com');

    console.log("Flipkart Title: " + await flipkartPage.title());
    console.log("Flipkart URL: " + flipkartPage.url());

    await edgeBrowser.close();
    await firefoxBrowser.close();
});