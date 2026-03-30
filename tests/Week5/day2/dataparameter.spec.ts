import test from "@playwright/test"
import credentails from "../../../Data/login.json"

for(let details of credentails){
test(`Data Parameterization SF ${details.TcaseId}`, async({page}) => {

await page.goto('https://login.salesforce.com/?locale=in')
await page.locator(`//input[@id="username"]`).fill(details.Username)
await page.locator(`//input[contains(@class,"pass")]`).fill(details.Password)
await page.locator(`//input[@name="Login"]`).click()

console.log(`Username: ${details.Username}`)



})}