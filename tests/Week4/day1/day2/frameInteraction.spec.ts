import { test } from "@playwright/test";

test(`Learn to interact with a webelement inside a frame using url`, async ({ page }) => {

    await page.goto(`https://leafground.com/frame.xhtml`);

    const frameurl = page.frame({ url: "https://leafground.com/default.xhtml" }); // out of 4 frames we have chosen first frame using url

    await frameurl?.locator("#Click").click();

    const title = await frameurl?.evaluate(() => document.title);

    console.log(`The title of he frame is ${title}`);

    /* ? optional chaining will make sure that the frameurl value is not undefined or null */

    /* ?=>optional chaining
    if(frame){
    await frame.locator("#Click").click()
    }else{
        console.log("Frame detached")
        } */

    await page.waitForTimeout(3000)


    //await page.locator().click() => focus changes back to main page
})


test(`Learn to interact with a webelement inside a frame using name`, async ({ page }) => {

    await page.goto(`https://leafground.com/frame.xhtml`);

    const frameurl = page.frame({ name: "frame2" }); // out of 4 frames we have chosen first frame using url

  
    await frameurl?.locator("#Click").click();

    /* ? optional chaining will make sure that the frameurl value is not undefined or null */

    /* ?=>optional chaining
    if(frame){
    await frame.locator("#Click").click()
    }else{
        console.log("Frame detached")
        } */
    await page.waitForTimeout(3000)
    //await page.locator().click()

})



test(`Learn to interact with a webelement inside a frame using frameLocator()`, async ({ page }) => {

    await page.goto(`https://leafground.com/frame.xhtml`);

    const frameRef = page.frameLocator(`[src="nested.xhtml"]`) // Step 1 identify the drame using the locator strategy

    await frameRef.locator("#Click").click();

    console.log(await page.title())


    await page.waitForTimeout(3000)

    //await page.locator().click()

})


test.only(`Learn to interact with a webelement inside a frame using nestedFrame()`, async ({ page }) => {

    await page.goto(`https://leafground.com/frame.xhtml`);

    const outerframe_ref = page.frameLocator(`[src="page.xhtml"]`) // Step 1 identify the frame using the locator strategy

    const innerframe_ref = outerframe_ref.frameLocator(`[src="framebutton.xhtml"]`) // Step2 : Using the reference of the outerframe identify the innerframe with unique attribute 

    await innerframe_ref.locator("#Click").click(); // Step3 : Using the reference of inner frame we will be able to interact with the webelement present inside the innerframe.

    // await page.locator("").click()

    await page.waitForTimeout(3000)

})