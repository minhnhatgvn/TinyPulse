const { expect } = require("@playwright/test")


class Dashboard {
    async clickOnSettingMenu() {
        await page.locator('text=settingsSettingsexpand_more >> div').first().click()
    }

    async clickOnAddPeopleMenu() {
        await page.locator('text=Add People').click()
    }
    
    async fillFirstName() {
        await page.locator('[placeholder="First Name"]').first().click()
        await page.locator('[placeholder="First Name"]').first().fill('nhat')
    }

    async fillLastName() {
        await page.locator('[placeholder="Last Name"]').first().click()
        await page.locator('[placeholder="Last Name"]').first().fill('test')
    }

    async fillEmail() {
        let random = Date.now() + Math.random()
        await page.locator('.pt3 > .Input__container___3DFfQ > .Input__input___1hjYb').first().click()
        await page.locator('.pt3 > .Input__container___3DFfQ > .Input__input___1hjYb').first().fill('nhatthai+'+ random + '@gmail.com')
        await page.locator('.Dropdown__trigger___gDKbL > .Input__container___3DFfQ > .Input__input___1hjYb').first().click()
    }

    async fillStartDate() {
        await page.locator('.Dropdown__trigger___gDKbL > .Input__container___3DFfQ > .Input__input___1hjYb').first().click()
        await page.locator('text=01').first().click()
    }

    async fillManager() {
        await page.locator('div[role="button"]:has-text("Select ...")').first().click()
        await page.locator('text=nhatthai+1@gmail.com').click()
        await page.locator('#react-select-2--value >> text=Select...').click()
    }

    async clickAddPeopleButton() {
        await page.locator('div[role="button"]:has-text("Add People")').click()
    }

    async assertNewEmployeeIsAdded(){
        await expect(page.locator('text=1 employee has been added to TINYpulse')).toBeVisible()
        await expect(page.locator('text=Congratulations')).toBeVisible()
    }
}

module.exports = { Dashboard }