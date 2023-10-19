
const { test, expect } = require('@playwright/test')

test('Handling the radio buttons', async ({ page }) => {

    await page.goto('https://demo.guru99.com/test/radio.html')
    //await expect(page.locator('#vfb-7-1')).not.toBeChecked()
    await page.locator('#vfb-7-1').check()

    await page.locator('#vfb-7-2').check()
    await expect(page.locator('#vfb-7-2')).toBeChecked()

    await expect(page.locator('#vfb-7-3')).not.toBeChecked()

    await page.pause()
})

test.only('Handling the radioBtn with click method', async ({ page }) => {

    await page.goto('https://demo.guru99.com/test/radio.html')
    //await expect(page.locator('#vfb-7-1')).not.toBeChecked()

    await page.locator('#vfb-7-1').click()
    await page.locator('#vfb-7-2').click()

    await expect(page.locator('#vfb-7-2')).toBeChecked()
    await page.pause()
})

test('Handling the checkbox', async ({ page }) => {
    await page.goto('https://demo.guru99.com/test/radio.html')
    await expect(page.locator('#vfb-6-0')).not.toBeChecked()
    await page.locator('#vfb-6-0').check()
    await page.locator('#vfb-6-1').check()
    await expect(page.locator('#vfb-6-1')).toBeChecked()

    await page.pause()

})

test('Handling the checkbox with click method', async ({ page }) => {
    await page.goto('https://demo.guru99.com/test/radio.html')
    await expect(page.locator('#vfb-6-0')).not.toBeChecked()
    await page.locator('#vfb-6-0').click()
    await page.locator('#vfb-6-1').click()
    await expect(page.locator('#vfb-6-1')).toBeChecked()

    await page.pause()

})