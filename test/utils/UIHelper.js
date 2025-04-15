const { chromium } = require('playwright');

class UIHelper {
  
  constructor(page) {
    this.page = page;
  }

  // Navigate to a URL
  async navigateTo(url) {
    await this.page.goto(url);
  }

  // Enter data into an input field
  async enterData(selector, value) {
    await this.page.fill(selector, value);
  }

  // Click an element
  async clickElement(selector) {
    await this.page.click(selector);
  }

  // Select a value from a dropdown
  async selectDropdown(selector, value) {
    await this.page.selectOption(selector, value);
  }

  // Upload a file
  async uploadFile(selector, filePath) {
    const input = await this.page.$(selector);
    await input.setInputFiles(filePath);
  }

  // Hover over an element
  async hoverElement(selector) {
    await this.page.hover(selector);
  }

  // Perform keyboard actions
  async pressKey(key) {
    await this.page.keyboard.press(key);
  }

  // Perform mouse actions
  async mouseClick(x, y) {
    await this.page.mouse.click(x, y);
  }

  async mouseMove(x, y) {
    await this.page.mouse.move(x, y);
  }

  // Wait for an element to be visible
  async waitForElement(selector, timeout = 5000) {
    await this.page.waitForSelector(selector, { timeout });
  }

  // Wait for a specific URL
  async waitForURL(url, timeout = 5000) {
    await this.page.waitForURL(url, { timeout });
  }

  // Handle JavaScript alerts
  async handleAlert(action = 'accept', promptText = '') {
    this.page.on('dialog', async (dialog) => {
      if (action === 'accept') {
        await dialog.accept(promptText);
      } else if (action === 'dismiss') {
        await dialog.dismiss();
      }
    });
  }

  // Switch to an iframe
  async switchToIframe(iframeSelector) {
    const iframeElement = await this.page.frameLocator(iframeSelector);
    return iframeElement;
  }

  // Open a new browser context
  async openNewContext() {
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  }

  // Handle new tabs
  async handleNewTab(callback) {
    this.context.on('page', async (newPage) => {
      await callback(newPage);
    });
  }

  // Take a screenshot
  async takeScreenshot(path = 'screenshot.png') {
    await this.page.screenshot({ path });
  }

  // Get text content of an element
  async getTextContent(selector) {
    return await this.page.textContent(selector);
  }

  // Get attribute value of an element
  async getAttribute(selector, attribute) {
    const element = await this.page.$(selector);
    return await element.getAttribute(attribute);
  }

  // Check if an element is visible
  async isElementVisible(selector) {
    const element = await this.page.$(selector);
    return element !== null && await element.isVisible();
  }

  // Check if an element is enabled
  async isElementEnabled(selector) {
    const element = await this.page.$(selector);
    return element !== null && await element.isEnabled();
  }

  // Handle network requests
  async interceptRequest(urlPattern, callback) {
    await this.page.route(urlPattern, callback);
  }

  // Wait for a network response
  async waitForResponse(urlPattern, timeout = 5000) {
    return await this.page.waitForResponse(urlPattern, { timeout });
  }

  // Set cookies
  async setCookies(cookies) {
    await this.context.addCookies(cookies);
  }

  // Get cookies
  async getCookies() {
    return await this.context.cookies();
  }

  // Clear cookies
  async clearCookies() {
    await this.context.clearCookies();
  }

  // Scroll to an element
  async scrollToElement(selector) {
    await this.page.$eval(selector, (element) => element.scrollIntoView());
  }

  // Drag and drop
  async dragAndDrop(sourceSelector, targetSelector) {
    const source = await this.page.$(sourceSelector);
    const target = await this.page.$(targetSelector);
    const sourceBox = await source.boundingBox();
    const targetBox = await target.boundingBox();

    await this.page.mouse.move(sourceBox.x + sourceBox.width / 2, sourceBox.y + sourceBox.height / 2);
    await this.page.mouse.down();
    await this.page.mouse.move(targetBox.x + targetBox.width / 2, targetBox.y + targetBox.height / 2);
    await this.page.mouse.up();
  }

  // Close the current page
  async closePage() {
    if (this.page) {
      await this.page.close();
    }
  }
}

module.exports = UIHelper;