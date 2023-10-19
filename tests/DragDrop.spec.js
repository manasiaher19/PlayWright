
const { test, expect } = require('@playwright/test')

test.only('Drag & Drop using inbuild command', async ({ page }) => {
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')

    // const rome = await page.locator('#box6')
    // const italy = await page.locator('#box106')
    // await rome.dragTo(italy)
    // await expect(page.locator('#box6')).toHaveAttribute('style', 'visibility: visible; background-color: rgb(0, 255, 0);')

    await page.locator('#box6').dragTo(await page.locator('#box106'))
    await expect(page.locator('#box6')).toHaveAttribute('style', 'visibility: visible; background-color: rgb(0, 255, 0);')

    await page.pause()
})

test('Drag & Drop using mouse action', async ({ page }) => {

    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')

    await page.locator('#box3').hover()
    await page.mouse.down()
    await page.locator('#box103').hover()
    await page.mouse.up()
    await expect(page.locator('#box3')).toHaveAttribute('style', 'visibility: visible; background-color: rgb(0, 255, 0);')
    await page.waitForTimeout(3000)
})

test('Drag & Drop', async ({ page }) => {
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    await page.locator('#box2').dragTo(await page.locator('#box102'))
    await expect(page.locator('#box2')).toHaveAttribute('style', "visibility: visible; background-color: rgb(0, 255, 0);")
    await page.waitForTimeout(3000)

})