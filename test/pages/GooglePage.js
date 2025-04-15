const CommonPage = require("./CommonPage");

class GooglePage extends CommonPage{
  
  constructor(page) {
    super(page);
    this.page = page;
    this.searchInput = 'textarea[name="q"]';
  }

  async navigate() {
    await this.page.goto('https://www.google.com');
  }

  async search(text) {
    await this.page.fill(this.searchInput, text);
    await this.page.keyboard.press('Enter');
  }
}

module.exports = {GooglePage};