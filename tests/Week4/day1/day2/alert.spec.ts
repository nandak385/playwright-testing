import { test } from "@playwright/test";


test(`Learn to handle modal alerts using playwright tool`, async ({ page }) => {


    await page.goto(`https://leafground.com/alert.xhtml`);

    page.on("dialog", async (alert) => {  // listerner is ready to capture the alert that pops up after the click action is made

        console.log(alert.message()); // retreive the message from the alert

        console.log(alert.type()); // get the type pf alert

        const alertType = alert.type()

        //Step1 : capture simple alert push it inside the listerner block so that we can handle the alert using accept()/dismiss()/retrieve the type()/message() for an alert.
        //Step2 : capture confirm alert push it inside the listerner block so that we can handle the alert using accept()/dismiss()/retrieve the type()/message() for an alert.
        //Step3 : capture prompt alert push it inside the listerner block so that we can handle the alert using accept()/dismiss()/retrieve the type()/message() for an alert.

        if (alertType === "confirm") {

            await alert.dismiss()

        } else if (alertType === "prompt") {

            await alert.accept("Testleaf")
        } else {

            await alert.dismiss()
        }

    })


    await page.locator(`(//span[text()="Show"])[1]`).click();

    await page.waitForTimeout(3000) // demo purpose


    //here we have to handle the alert

    await page.locator(`(//span[text()="Show"])[2]`).click();

    await page.waitForTimeout(3000) //demo purpose

    await page.locator(`(//span[text()="Show"])[5]`).click();

    await page.waitForTimeout(3000) //demo purpose




})


/* Note : 

Simple - Only "OK" button
Confirm - Has "OK" and "Cancel"
prompt - Has "OK" and "Cancel" also include a text box to get the inour from the user  */