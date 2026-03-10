import {test} from "@playwright/test"

test(`Login Test & Create Lead`, async({page}) => {

    await page.goto('http://leaftaps.com/opentaps/control/main')

    await page.locator(`#username`).fill("Demosalesmanager")
    await page.locator(`#password`).fill("crmsfa")
    await page.locator(`.decorativeSubmit`).click()

    await page.locator(`#label`).click()

    await page.locator(`a[href*='createLeadForm']`).click()

    await page.locator(`#createLeadForm_companyName`).fill("HCL Tech")
    await page.locator(`#createLeadForm_firstNameLocal`).fill("Nanda")
    await page.locator(`#createLeadForm_lastNameLocal`).fill("K")
    await page.locator(`#createLeadForm_firstNameLocal`).fill("Senior Test Engineer")
    await page.locator(`#createLeadForm_departmentName`).fill("Testing")
    await page.locator(`#createLeadForm_annualRevenue`).fill("9-10")
    await page.locator(`#createLeadForm_primaryPhoneNumber`).fill("123456980")
    await page.locator(`.smallSubmit`).click()

    await page.waitForTimeout(5000)



})