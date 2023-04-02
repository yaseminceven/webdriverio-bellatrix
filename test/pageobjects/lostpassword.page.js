const Page = require('./page');
const fakeData = require("../../utils/random-data");

class LostPasswordPage extends Page {
    get pageHeader() {
        return $('h1[class="entry-title"]');
    }

    get inputUsernameEmail() {
        return $('#user_login');
    }

    get resetPasswordButton() {
        return $('button[value="Reset password"]');
    }

    get invalidMailMessage() {
        return $('//ul[@role="alert"]/li');
    }

    async enterEmail(){
        await this.inputUsernameEmail.setValue(fakeData.fakeEmail());
    }

    async clickResetPassword() {
        await this.resetPasswordButton.click();
    }

    open(){
        return super.open('my-account/lost-password');
    }
}

module.exports = new LostPasswordPage();