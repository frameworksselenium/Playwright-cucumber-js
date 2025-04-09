
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const GooglePage = require('../pages/GooglePage');
const { chromium } = require('playwright');
const fs = require('fs'); // Import fs module

let browser;

const { setDefaultTimeout } = require('@cucumber/cucumber');

// Set the timeout to 30 seconds (30000 milliseconds)
setDefaultTimeout(30000);
Before(async function () {
  browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  this.page = await context.newPage(); // Assign to this.page
});

After(async function (scenario) {
  const customMessage = `Scenario: ${scenario.pickle.name} finished with status: ${scenario.result.status}`;
  this.attach(customMessage);
  if (scenario.result.status === 'FAILED') {
    const screenshotPath = `./reports/screenshots/${scenario.pickle.name.replace(/\s+/g, '_')}.png`;
    await this.page.screenshot({ path: screenshotPath, fullPage: true });
    this.attach(fs.readFileSync(screenshotPath), 'image/png');
  }
  await browser.close();
});
