const { test, expect } = require('@playwright/test')

// let page
// test.beforeEach(async ({ browser }) => {
//     page = await browser.newPage()

//     await page.goto('https://www.saucedemo.com/')
//     await page.fill('#user-name', 'standard_user')
//     await page.fill('#password', 'secret_sauce')
//     await page.click('#login-button')
// })

// test.afterEach(async () => {
//     await page.locator('#react-burger-menu-btn').click()
//     await page.locator('#logout_sidebar_link').click()
//     await page.pause()
// })

// test('Verify Url for valid credential', async () => {
//     await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
// })

// test('Verify title for valid credential',async()=>{
//      await expect(page).toHaveTitle('Swag Labs')
// })


//-----------------------------------------------------------------------------------

//beforeAll - afterAll

let page
test.beforeAll(async ({ browser }) => {
    page = await browser.newPage()
    await page.goto('https://www.saucedemo.com/')
    await page.fill('#user-name', 'standard_user')
    await page.fill('#password', 'secret_sauce')
    await page.click('#login-button')
})

test.afterAll(async () => {
    await page.locator('#react-burger-menu-btn').click()
    await page.locator('#logout_sidebar_link').click()
    await page.waitForTimeout(5000)
})

test('Verify Url for valid credential', async () => {
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
})

test('Verify title for valid credential', async () => {
    //await expect(page).toHaveTitle('Swag Labs')

    // await page.locator('#add-to-cart-sauce-labs-backpack').click()
    // await expect(page.locator('#remove-sauce-labs-backpack')).toHaveText('Remove')

    await page.locator('#item_0_title_link').click()
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory-item.html?id=0')
})


