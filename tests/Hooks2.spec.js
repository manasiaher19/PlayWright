const { test, expect } = require('@playwright/test')

let page
test.beforeAll(async ({ browser }) => {
    page = await browser.newPage()
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('input[name="username"]').fill('Admin')
    await page.locator('input[name="password"]').fill('admin123')
    await page.locator('button[type="submit"]').click()
})

test.afterAll(async () => {

    await page.locator('.oxd-userdropdown-name').click()
    await page.locator('[href="/web/index.php/auth/logout"]').click()
    // await page.waitForTimeout(3000)
})


test('Verify the HomePage logo', async () => {

    await expect(page.locator('span[class="oxd-text oxd-text--span oxd-main-menu-item--name"]').first()).toBeVisible()
    await expect(page.locator('img[alt="client brand banner"]')).toBeVisible()
    await expect(page.locator('.oxd-topbar-header-breadcrumb-module')).toHaveText('Dashboard')
})

test('Verify url & Title', async () => {

    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    //await expect(page.url()).toHaveText('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    await expect(page).toHaveTitle('OrangeHRM')
})


