class LoginPage {
 
    async navigateToLoginPage() {
        await page.goto('https://staging.tinyserver.info/auth')
    }

    async fillEmail() {
        await page.locator('css=[data-cucumber=input-login-email]').fill("nhatthai+1@gmail.com")
    }

    async fillPassword(){
        await page.locator('css=[data-cucumber=input-login-password]').fill("Superman1989");
    }

    async clickContinueButton() {
        await page.locator('css=[data-cucumber=button-continue]').click();
    }

    async clickLoginButton() {
        await page.locator('css=[data-cucumber=button-login]').click()
    }
}

module.exports = { LoginPage }