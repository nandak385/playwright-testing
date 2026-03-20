import test, { expect } from "@playwright/test";

test('Assertions', async ({ page }) => {

  await page.goto('https://leafground.com/input.xhtml');

  // Validate disabled textbox
  await expect(page.locator('//input[@placeholder="Disabled"]')).toBeDisabled();

  
  // Validate editable textbox
  await expect(page.locator('//input[@placeholder="Babu Manickam"]')).toBeEditable();


  // Fill name
  await page.locator('//input[@placeholder="Babu Manickam"]').fill('Nanda');


  // Soft assertion
  await expect.soft(page.locator('//input[@value="My learning is superb so far."]')).toBeDisabled();


  // Fill text
  await page.locator('//input[@value="Can you clear me, please?"]').fill('Jack');

  await page.waitForTimeout(3000);

});