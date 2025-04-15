const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { expect }  = require('@playwright/test');


// 1. Missing step definition for "ecomlogin.feature:8:3"
Given('I navigate to {string}', async function(url) {
  await this.ecomLoginPage.navigateToUrl(url);
});

// 2. Missing step definition for "ecomlogin.feature:9:3"
Given('I click on My account', async function(){
  await this.ecomLoginPage.clickOnMyAccount();
});
// 3. Missing step definition for "ecomlogin.feature:10:3"
Given('I enter E-Mail Address {string}', async function(emailAddress ) {
   await this.ecomLoginPage.enterEmailAddress(emailAddress);
});

// 4. Missing step definition for "ecomlogin.feature:11:3"
Given('I enter password {string}', async function(password) {
  await this.ecomLoginPage.enterPassword(password);
  
});

// 5. Missing step definition for "ecomlogin.feature:12:6"
When('I click on submit button', async function() {
    await this.ecomLoginPage.clickOnSubmit();
  });

// 5. Missing step definition for "ecomlogin.feature:12:3"
Then('I should verify url contains {string}', async function(logged_url) {
    await expect(this.page).toHaveURL(new RegExp(logged_url))
});


// 1. Missing step definition for "tests\ecomlogin.feature:21:3"
Then('I should verify user is not able to login and url contains {string}', async function(login_url) {
  await expect(this.page).toHaveURL(new RegExp(login_url));
});
