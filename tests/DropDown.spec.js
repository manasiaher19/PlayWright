const { test } = require('@playwright/test')

test('Verify Static drop down', async ({ page }) => {
    await page.goto('https://letcode.in/dropdowns')
    //by index
    await page.locator('#fruits').selectOption('3')
    //by value
    await page.locator('#superheros').selectOption('ca')
    //by Text
    await page.locator('#lang').selectOption('swift')
    await page.pause()
})

//dynyamic dropdown/Auto suggetion dropdown
test('Verify Dynamic DropDown', async ({ page }) => {

    await page.goto('https://www.redbus.in/')
    await page.locator('#src').fill('Pune')

    await page.waitForSelector('.placeHolderMainText')

    const optionCount = await page.locator('.placeHolderMainText').count()
    console.log(optionCount)

    for (let i = 0; i < optionCount; i++) {
        let text = await page.locator('.placeHolderMainText').nth(i).textContent()

        if (text == 'Nashik Phata') {
            await page.locator('.placeHolderMainText').nth(i).click()
            break
        }
    }
    let Text = await page.locator('.placeHolderMainText').allTextContents()
    console.log(Text)

    await page.pause()

})

test.only('Verify dynamic dropdown 2', async ({ page }) => {

    await page.goto('https://www.redbus.in/')
    await page.locator('#src').fill('Nashik')

    await page.waitForSelector('.placeHolderMainText')

    const options = await page.locator('.placeHolderMainText').count()
    console.log(options)    //21

    // for (let i = 0; i < options; i++) {

    //     let text = await page.locator('.placeHolderMainText').nth(i).textContent()

    //     if(text == 'Mumbai Naka'){
    //         await page.locator('.placeHolderMainText').nth(i).click()
    //         break
    //     }
    // }

    // let T2 = await page.locator('.placeHolderMainText').allTextContents()
    // console.log(T2)

    let T3 = await page.locator('.placeHolderMainText').nth(4).textContent()
    console.log(T3)  //Mumbai Naka

    


    await page.pause()

})