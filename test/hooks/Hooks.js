const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const fs = require('fs'); // Import fs module
require('../../config'); // Load environment variables
const { createPageObjects } = require('../fixtures/fixture'); // Ensure correct casing

let browser;
let context;

// Set the timeout to 30 seconds (30000 milliseconds)
setDefaultTimeout(30000);

Before(async function () {
  browser = await chromium.launch({ headless: false }); // Launch the browser
  const context = await browser.newContext(); // Create a new browser context
  const page = await context.newPage(); // Assign the page object to the custom world
    // Assign the page and page objects to the context (this)
    this.page = page;
    Object.assign(this, createPageObjects(page));
});

After(async function (scenario) {
  const customMessage = `Scenario: ${scenario.pickle.name} finished with status: ${scenario.result.status}`;
  this.attach(customMessage); // Attach a custom message to the report

  if (scenario.result.status === 'FAILED') {
    const screenshotPath = `./reports/screenshots/${scenario.pickle.name.replace(/\s+/g, '_')}.png`;
    await this.page.screenshot({ path: screenshotPath, fullPage: true }); // Take a screenshot
    this.attach(fs.readFileSync(screenshotPath), 'image/png'); // Attach the screenshot to the report
  }

  //await context.close(); // Close the browser context
  await browser.close(); // Close the browser
});