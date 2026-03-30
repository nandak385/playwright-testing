import { test } from "@playwright/test";


test(`Learn window handling using sequential mode`,async ({page,context}) => {
    
await page.goto(`https://www.flipkart.com/`);


const searchBox = page.locator(`[placeholder="Search for Products, Brands and More"]`).first();


await searchBox.fill("Phone");


await searchBox.press("Enter");


const newPage =  context.waitForEvent("page")     //listerner to capture the page that poped up while I made a click action


await page.locator(`//div[text()="Nothing Phone (4a) (White, 128 GB)"]`).first().click(); //action 


const childPage = await newPage  // newPage is the reference to resolve the promise for waitForEvent() method 
                                // childPage is the reference of the page that got invoked by the click action once the waitForEvent() is resolved


await childPage.waitForLoadState("domcontentloaded");


console.log(await page.title()); // parent page


console.log(await childPage.title()); // new childPage


await page.bringToFront();
await page.locator(`//span[text()="Electronics"]`).click();


await page.waitForTimeout(3000) // demo purpose


/* We will be using await only after waitForEvent() has completed the action of listening and capturing the page and ao we will resolve the promise only after the click action */



})