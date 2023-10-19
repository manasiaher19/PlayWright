const { test, expect } = require('@playwright/test')

test('Verify single file upload with playwright', async ({ page }) => {

    await page.goto('https://webdriveruniversity.com/File-Upload/index.html')
    await page.locator('#myFile').setInputFiles('tests/UploadFiles/FileUpload1.pdf')
    page.on('dialog', async SimpleAlert => {
        await expect(SimpleAlert.message()).toContain('Your file has now been uploaded!')
        await expect(SimpleAlert.type()).toContain('alert')
        await SimpleAlert.accept()
    })
    await page.locator('#submit-button').click()
    await expect(page.url()).toContain('FileUpload1')
    await page.waitForTimeout(3000)
})

test('Verify multiple file upload withplaywright', async ({ page }) => {

    const file1 = 'tests/UploadFiles/FileUpload1.pdf'
    const file2 = 'tests/UploadFiles/FileUpload2.pdf'

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
    await page.locator('#filesToUpload').setInputFiles([file1, file2])
    await expect(page.locator('#fileList > li').first()).toHaveText('FileUpload1.pdf')
    await expect(page.locator('#fileList > li').nth(1)).toHaveText('FileUpload2.pdf')
    await page.waitForTimeout(3000)
})

//---------------------------------------------------------------------------


test('single file upload', async ({ page }) => {

    await page.goto('https://webdriveruniversity.com/File-Upload/index.html')
    await page.locator('#myFile').setInputFiles('tests/UploadFiles/FileUpload2.pdf')
    page.on('dialog', async SimpleAlert => {
        await expect(SimpleAlert.message()).toContain('Your file has now been uploaded!')
        await SimpleAlert.accept()
    })
    await page.locator('#submit-button').click()
    await expect(page.url()).toContain('FileUpload2.pdf')
    await page.waitForTimeout(3000)
})


test.only('Multipl file upload', async ({ page }) => {

    const F1 = 'tests/UploadFiles/FileUpload1.pdf'
    const F2 = 'tests/UploadFiles/FileUpload2.pdf'

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
    // await page.locator('#filesToUpload').setInputFiles(['tests/UploadFiles/FileUpload1.pdf', 'tests/UploadFiles/FileUpload2.pdf'])
    await page.locator('#filesToUpload').setInputFiles([F1, F2])
    await expect(page.locator('#fileList>li').first()).toHaveText('FileUpload1.pdf')
    await expect(page.locator('#fileList>li').nth(1)).toHaveText('FileUpload2.pdf')
    
})

