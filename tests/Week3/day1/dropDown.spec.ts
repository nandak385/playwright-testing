import {test, expect} from "@playwright/test"
import { validateHeaderValue } from "node:http"

test(`Login Test & Create Lead`, async({page}) => {

    await page.goto('http://leaftaps.com/opentaps/control/main')

    await page.locator(`#username`).fill("Demosalesmanager")
    await page.locator(`#password`).fill("crmsfa")
    await page.locator(`.decorativeSubmit`).click()

    await page.locator(`#label`).click()

    await page.locator(`a[href*='createLeadForm']`).click()

    await page.locator(`#createLeadForm_companyName`).fill("HCL Tech")
    await page.locator(`//input[@id="createLeadForm_firstName"]`).fill("Nanda")
    await page.locator(`//input[@id="createLeadForm_lastName"]`).fill("K")
    await page.locator(`#createLeadForm_firstNameLocal`).fill("Senior Test Engineer")
    await page.locator(`#createLeadForm_departmentName`).fill("Testing")
    await page.locator(`#createLeadForm_annualRevenue`).fill("9-10")
    await page.locator(`#createLeadForm_primaryPhoneNumber`).fill("123456980")
    await page.locator(`//select[@id="createLeadForm_industryEnumId"]`).selectOption({value:"IND_SOFTWARE"})

    const dropIndus = page.locator(`//select[@id="createLeadForm_industryEnumId"]/option`)
    const dropDownCount = await dropIndus.count()

    console.log('Industy list: ')
    for(let index =0; index <dropDownCount; index++){
    console.log(await dropIndus.nth(index).innerText())
}
    await page.locator(`.smallSubmit`).click()

    await page.waitForTimeout(5000)



})