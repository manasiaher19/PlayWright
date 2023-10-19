const { test } = require('@playwright/test')

test('verify login functionality', async ({ page }) => {

    //step 1 : open web page
    //step 2 : enter username & password
    //step 3 : click on login button

    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user')
    await page.locator('#password').fill('secret_sauce')
    await page.click('#login-button')

    
    // await page.fill('#user-name','standard_user');
    // await page.fill('#password','secret_sauce');
    //await page.click('#login-button')
})