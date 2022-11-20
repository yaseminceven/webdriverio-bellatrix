const Page = require('./page');
const fakeData = require("../../utils/random-data");

class FormPage extends Page {
    get inputFirstName () {
        return $('#wpforms-3347-field_1');
    }

    get inputLastName () {
        return $('#wpforms-3347-field_1-last');
    } 

    get inputEmail () {
        return $('#wpforms-3347-field_2');
    } 

    optionButtons (index) {
        return $(`(//label[@class="wpforms-field-label-inline"])[${index}]`);
    } 

    get inputTextArea () {
        return $('textarea[class="wpforms-field-medium"]');
    }

    get boxReCAPTCHA () {
        return $('#recaptcha-anchor');
    }

    get buttonSubmit () {
        return $('button[class="wpforms-submit"]');
    }

    get iframe () {
        return $('.g-recaptcha iframe[title="reCAPTCHA"]');
    } 

    async enterFirstName(){
        await this.inputFirstName.waitForDisplayed();
        await this.inputFirstName.click();
        await this.inputFirstName.keys(fakeData.fakeFirstName());
    }

    async enterLastName(){
        await this.inputLastName.waitForDisplayed();
        await this.inputLastName.click();
        await this.inputLastName.keys(fakeData.fakeLastName());
    }

    async enterEmail(){
        await this.inputEmail.waitForDisplayed();
        await this.inputEmail.click();
        await this.inputEmail.keys(fakeData.fakeEmail());
    }

    async enterOptionsRandomly(){
        await this.optionButtons(fakeData.fakeRandomNum(1,3)).click();
        await this.optionButtons(fakeData.fakeRandomNum(4,8)).click();
        await this.optionButtons(fakeData.fakeRandomNum(9,10)).click();
    }

    async enterComment(){
        await this.inputTextArea.click();
        await this.inputTextArea.keys(fakeData.fakeText());
    }

    async clickCaptchaAndSubmit(){
        await browser.switchToFrame(this.iframe);
        await this.boxReCAPTCHA.click();
        await browser.switchToParentFrame();
        await this.buttonSubmit.click();
    }

    open(){
        return super.open('contact-form');
    }
}
module.exports = new FormPage();