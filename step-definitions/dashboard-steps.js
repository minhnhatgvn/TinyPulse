const {Given, When, Then, defineStep} = require("@cucumber/cucumber");
const {Dashboard} = require('../pages/dashboard-page')

const dashboard = new Dashboard()


When('I add a new employee', {timeout: 600 * 1000}, async function (){
    await dashboard.clickOnSettingMenu()
    await dashboard.clickOnAddPeopleMenu()
    await dashboard.fillFirstName()
    await dashboard.fillLastName()
    await dashboard.fillEmail()
    await dashboard.fillStartDate()
    await dashboard.fillManager()
    await dashboard.clickAddPeopleButton()
})

Then('The new employee is added succesfully', {timeout: 900 * 1000}, async function (){
    await dashboard.assertNewEmployeeIsAdded()
})