
const UIHelper = require("../utils/UIHelper");

class CommonPage extends UIHelper{

    constructor(page) {
        super(page);
        this.page = page;
    }
    // Navigate to a URL
    async navigateTo(url) {
        await this.page.goto(url);
    }
}

module.exports = CommonPage;