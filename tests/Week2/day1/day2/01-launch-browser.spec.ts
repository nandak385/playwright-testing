import {test, webkit, firefox, chromium} from"@playwright/test";

test(`Launch webkit broswer`, async () =>{

    const browser = await chromium.launch({channel: "chrome", headless:false})
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://www.amazon.in/');
    


})