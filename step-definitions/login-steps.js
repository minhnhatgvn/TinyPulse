const {Given, When, Then, defineStep} = require("@cucumber/cucumber");
const {LoginPage} = require('../pages/login-page')

const loginPage = new LoginPage()


Given('I already logged in successfully', async function (){
    await loginPage.navigateToLoginPage()
    await loginPage.fillEmail()
    await loginPage.clickContinueButton()
    await loginPage.fillPassword()
    await loginPage.clickLoginButton({ timeout: 100000 })

})

