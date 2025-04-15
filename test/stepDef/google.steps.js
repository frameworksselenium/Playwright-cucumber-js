
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const fs = require('fs'); // Import fs module


Given('I open the Google homepage', async function () {

  await this.googlePage.navigate();
  this.attach("Google home page opened successfully");
  const screenshotPath = './reports/screenshots/googlehomepage.png';
  await this.page.screenshot({ path: screenshotPath, fullPage: true });
  this.attach(fs.readFileSync(screenshotPath), 'image/png');
});

When('I search for {string}', async function (searchTerm) {
  await this.googlePage.search(searchTerm);
});

