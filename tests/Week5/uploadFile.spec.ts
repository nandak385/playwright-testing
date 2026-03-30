import { test } from "@playwright/test";
import path from "path";

//Method -1 - Learn to Upload a file with input tag and type="file

test(`Learn to Upload a file with input tag and type="file`,async ({page}) => {

    await page.goto(`https://the-internet.herokuapp.com/upload`);

    const uploadFile = page.locator(`(//input[@type="file"])[1]`); // reference of the upload button webelement

    await uploadFile.setInputFiles(path.join(__dirname,`../../../Data/Absolute.png`)) // Inject the file into the application usinf setInputFiles()

    await page.waitForTimeout(3000)
})

//Method -2 - Learn to Upload a file without input tag and type="file

test.only(`Learn to Upload a file without input tag and type="file`,async ({page}) => {

    await page.goto(`https://the-internet.herokuapp.com/upload`);

    const filePromise = page.waitForEvent("filechooser") // event listener

    await page.locator(`[id="drag-drop-upload"]`).click()

    const fileUpload = await filePromise

    await fileUpload.setFiles([path.join(__dirname,`../../../Data/Absolute.png`),path.join(__dirname,`../../../Data/Feb.png`)])

    await page.waitForTimeout(3000)
})