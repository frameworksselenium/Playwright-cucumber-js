const { expect }  = require('@playwright/test');
const CommonPage = require("./CommonPage");

class EcomLoginPage extends CommonPage{


  constructor(page) {
    super(page);
    this.page = page;
    this.my_account_Btn = page.getByRole('button', { name: 'My account' });
    this.email_box = page.getByPlaceholder('E-Mail Address');
    this.password_box = page.getByPlaceholder('Password');
    this.submit_btn = page.locator("input[value='Login']");
  }

  async navigateToUrl(url) {
    await this.page.goto(url);
  }

  async clickOnMyAccount() {
    await this.my_account_Btn.click();
    
  }

  async enterEmailAddress(emailAddress) {
    await this.email_box.fill(emailAddress);
  }

  async enterPassword(password) {
    await this.password_box.fill(password);
  }

  async clickOnSubmit() {
    await this.submit_btn.click();
  }

  async verifyUserLandOnAccountPage(logged_url) {
    await expect(this.page).toHaveURL(new RegExp(logged_url));
  }

  async verifyUserIsNotAbleToLogin(login_url) {
    await expect(this.page).toHaveURL(new RegExp(login_url));
  }
};


module.exports = {EcomLoginPage};