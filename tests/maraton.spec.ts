import {test, expect} from "@playwright/test"
test.use({permissions:['geolocation']})

test(`PVR Booking` , async ({page}) => {

await page.goto('https://www.pvrcinemas.com/');
await page.locator(`(//h6[@class="cities-name pointer"])[6]`).click()
await page.locator(`//span[@class="cinemas-inactive"]`).click()
await page.locator(`//span[text()="Select Cinema"]`).click()
//choose movie location
await page.getByText('INOX The Marina Mall, OMR').click();
//choose today's date
await page.locator("//li[contains(.,'Today')]").click();
//choose movie name
await page.locator(`(//span[text()="YOUTH"])[2]`).click();
//choose time
await page.locator(`//span[text()="07:35 PM"]`).click();
//Book
await page.locator('(//span[text()="Book"])[4]').click();
await page.locator('//button[text()="Accept"]').click();
//choose seat
await page.locator('//span[@id="CL.CLUB|J:14"]').click();
await page.locator('//span[@id="CL.CLUB|J:15"]').click();
//proceed
await page.locator('//button[text()="Proceed"]').click();
// get price
const priceText = await page.locator('//span[text()="436.04"]').innerText();
console.log("Price from UI:", priceText);
// convert to number
const price = parseFloat(priceText);

const expectedPrice = 436.04;

if (price === expectedPrice) {
  console.log('✅ Price matched');
} else {
  console.log('❌ Price mismatch');
}






await page.waitForTimeout(3000)


})