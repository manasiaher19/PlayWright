
const { test, expect } = require('@playwright/test')

test('Verify Mouse action for double click', async ({ page }) => {

    await page.goto('https://demoqa.com/buttons')

    await page.locator('#doubleClickBtn').dblclick()
    await expect(page.locator('#doubleClickMessage')).toBeVisible()
    await page.pause()

})

test('Verify Mouse action for right click', async ({ page }) => {

    await page.goto('https://demoqa.com/buttons')

    await page.locator('#rightClickBtn').click({ button: 'right' })
    await expect(page.locator('#rightClickMessage')).toBeVisible()
    await page.pause()

})

test.only('Verify Mouse action for hover', async ({ page }) => {

    await page.goto('https://demoqa.com/menu#')

    await page.getByText('Main Item 2').hover()
    await page.getByText('SUB SUB LIST »').hover()
    await page.getByText('Sub Sub Item 2').click()
    await expect(page).toHaveURL('https://demoqa.com/menu#')
    await page.pause()
})