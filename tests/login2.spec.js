const { test, expect } = require('@playwright/test')

test('Verify login functionality with valid credentials', async ({ page }) => {

    //step 1 = navigate to url
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //step 2 = Enter the username & password
    await page.locator('input[name="username"]').fill('Admin')
    await page.locator('input[type="password"]').fill('admin123')

    //step 3 = click on login button
    await page.click('button[type="submit"]')

    //step 4 = validation
    await expect(page.locator('span[class="oxd-text oxd-text--span oxd-main-menu-item--name"]').first()).toBeVisible()
    await expect(page.locator('img[alt="client brand banner"]')).toBeVisible()
    await expect(page.locator('.oxd-topbar-header-breadcrumb-module')).toHaveText('Dashboard')
    await expect(page).toHaveTitle('OrangeHRM')
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

    await page.pause()
})

test('verify login functionality with invalid credential', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('input[name="username"]').fill('Admin')
    await page.locator('input[name="password"]').fill('Admin123')
    await page.click('button[type="submit"]')
    await expect(page.locator('.oxd-alert-content-text')).toBeVisible()
    await expect(page.locator('.oxd-alert-content-text')).toHaveText('Invalid credentials')
    await page.pause()
})

//-------------------------------------------------------------------------------------------

test.only('Verify login functionallity for validate credentials', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.fill('input[name="username"]', 'Admin')
    await page.fill('input[type="password"]', 'admin123')
    await page.click('button[type="submit"]')
    // await page.locator('button[type="submit"]').click()

    await expect(page.url()).toContain('dashboard')
    await expect(page.locator('span[class="oxd-text oxd-text--span oxd-main-menu-item--name"]').first()).toBeVisible()
    await expect(page.locator('img[alt="client brand banner"]')).toBeVisible()
    await expect(page.locator('p[class="oxd-userdropdown-name"]')).toBeVisible()
    await expect(page.locator('.oxd-main-menu>li').nth(1)).toHaveText('PIM')
    await expect(page.locator('.oxd-main-menu>li').last()).toHaveText('Buzz')
    await page.pause()
})