import {expect, test} from "@playwright/test"

test(`Test launch SalesForce App`, async({page}) => {

    await page.goto('https://login.salesforce.com/?locale=in')

    // await page.locator(`#username`).fill("dilipkumar.rajendran@testleaf.com")
    // await page.locator(`#password`).fill("TestLeaf@2025")
    // await page.locator(`#Login`).click()

    await page.locator(`//input[@id="username"]`).fill("dilipkumar.rajendran@testleaf.com")
    await page.locator(`//input[contains(@class,"pass")]`).fill("TestLeaf@2025")
    await page.locator(`//input[@name="Login"]`).click()
    await expect(page.locator(`//span[text()="Quarterly Performance"]`)).toBeVisible




})