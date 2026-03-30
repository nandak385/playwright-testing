import { test } from "@playwright/test";

test(`Learn to handle frames using playwright`,async ({page}) => {
    

    await page.goto(`https://developer.servicenow.com/dev.do`);

    const allframes = page.frames(); //[frame1,fram2,....] => always frame1 is main page of the application

    const frameCount = allframes.length
    console.log(frameCount);


})