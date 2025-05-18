const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('I am on the login page', async function () {
    await this.page.goto('https://your-app-url.com/login');
});

When('I enter username {string} and password {string}', async function (username, password) {
    await this.page.fill('#username', username);
    await this.page.fill('#password', password);
});

When('I click the login button', async function () {
    await this.page.click('#login-button');
});

Then('I should see the dashboard', async function () {
    await expect(this.page).toHaveURL(/.*dashboard/);
});