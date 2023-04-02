const FormPage = require('../pageobjects/form.page');

describe('Contact form page test cases', async () => {

    it('submit contact form', async () => {
        await FormPage.open();
        await FormPage.enterFirstName();
        await FormPage.enterLastName();
        await FormPage.enterEmail();
        await FormPage.enterOptionsRandomly();
        await FormPage.enterComment();
        await FormPage.switchToRecaptchaFrame();
        await FormPage.clickCaptcha();
        await FormPage.switchToMainPageAndSubmit();
    })

});