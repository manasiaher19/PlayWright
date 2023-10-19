const { test, expect } = require('@playwright/test')

let page
test.beforeEach(async ({ browser }) => {
    page = await browser.newPage()
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('input[name="username"]').fill('Admin')
    await page.locator('input[name="password"]').fill('admin123')
    await page.locator('button[type="submit"]').click()
})

test('Login functionallity for valid credentials', async () => {
    await expect(page.url()).toContain('dashboard')
})

test('Login functionallity for valid credentials 2', async () => {
    await expect(page.locator('input[class="oxd-input oxd-input--active"]')).toBeVisible()
})

test.afterEach(async () => {
    await page.locator('p[class="oxd-userdropdown-name"]').click()
    await page.locator('a[href="/web/index.php/auth/logout"]').click()
    await page.pause()
})