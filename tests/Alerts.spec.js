const { test, expect } = require('@playwright/test')

test('Handling simple js alert with playwright', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    page.on('dialog', async simpleAlert => {

        await expect(simpleAlert.message()).toContain('I am a JS Alert')
        await expect(simpleAlert.type()).toContain('alert')
        await simpleAlert.accept()

        // await console.log(simpleAlert.message())  //I am a JS Alert
        // await console.log(simpleAlert.type())   //alert
    })
    await page.locator('button[onclick="jsAlert()"]').click()
    await expect(page.locator('#result')).toHaveText('You successfully clicked an alert')
    await page.pause()
})

test('Handling confirm js alert with playwright', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    page.on('dialog', async ConfirmAlert => {
        await expect(ConfirmAlert.message()).toContain('I am a JS Confirm')
        await expect(ConfirmAlert.type()).toContain('confirm')
        //await console.log(ConfirmAlert.message())
        //await console.log(ConfirmAlert.type())
        //await ConfirmAlert.accept()
        await ConfirmAlert.dismiss()
    })
    await page.getByText('Click for JS Confirm').click()
    //await expect(page.locator('#result')).toHaveText('You clicked: Ok')
    await expect(page.locator('#result')).toHaveText('You clicked: Cancel')
    await page.waitForTimeout(5000)
})

test.only('Handling Promt alert with playwright', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    page.on('dialog', async PromtAlert => {

        // await console.log(PromtAlert.message())
        // await console.log(PromtAlert.type())

        await expect(PromtAlert.message()).toContain('I am a JS prompt')
        await expect(PromtAlert.type()).toContain('prompt')
        //await PromtAlert.accept('Learning Alerts')
        await PromtAlert.dismiss()
    })
    await page.getByText('Click for JS Prompt').click()
    // await expect(page.locator('#result')).toHaveText('You entered: Learning Alerts')
    await expect(page.locator('#result')).toHaveText('You entered: null')
})


