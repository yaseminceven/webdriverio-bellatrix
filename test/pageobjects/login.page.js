
const Page = require('./page');
const fakeData = require("../../utils/random-data");
 
class LoginPage extends Page {
    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('button[name="login"]');
    }

    get errorMessage() {
        return $('ul[role="alert"]');
    }

    get forgotPassword() {
        return $('//a[contains(., "Lost your password")]');
    }

    async login () {
        await this.inputUsername.setValue(fakeData.fakeFirstName());
        await this.inputPassword.setValue(fakeData.fakePassword());
        await this.btnSubmit.click();
    }

    async clickForgotPassword() {
        await this.forgotPassword.click();
    }

    open () {
        return super.open('my-account');
    }
}

module.exports = new LoginPage();
