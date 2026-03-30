import test from "@playwright/test"
import { parse } from "csv-parse/sync"; // here we are importing to use the parse keyword to convert csv to object format
import fs from "fs"// fs is file system this is used to read the file from the system

let records:any[] = parse(fs.readFileSync("Data/details.csv"),{columns:true,skip_empty_lines:true})

test.describe.serial("Test to be executed in serial mode",async () => {

for( let data of records){

test(`Learn to Handle CSV ${data.tcid}`, async ({ page }) => {

    await page.goto('http://leaftaps.com/opentaps/control/main');

    await page.locator(`//input[@id="username"]`).fill(data.username); // 0=>demosalesmanager, 1=>democsr

    await page.locator(`//input[@id="password"]`).fill(data.password);//0=>crmsfa, 1=> crmsfa

    await page.locator(`//input[@class="decorativeSubmit"]`).click();

    await page.locator(`//a[contains(text(),"CRM")]`).click();

    await page.waitForTimeout(3000) // FOR DEMO

})
}
})
