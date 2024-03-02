const { Given, When, Then } = require('@wdio/cucumber-framework');
const { default: loginPage } = require('../pageobjects/pageFunctions/loginPage');
const { default: productsPage } = require('../pageobjects/pageFunctions/productsPage');
const { swagLabsValidations } = require('../Validations/swagLabsValidations');
const { SwagLabsTestData } = require('../resources/swagLabsTestdata');

Given(/^user is on login page$/, async () => {
	await browser.url('https://www.saucedemo.com/v1/');
});

When(/^user login with username and password$/, async () => {
    await loginPage.login(username, password);	
});

Then(/^user should navigate to products page$/, async () => {
	const pageHeading = await productsPage.getPageHeading();
    await swagLabsValidations.validatePageHeading(SwagLabsTestData.productsPageHeading,pageHeading);
});
