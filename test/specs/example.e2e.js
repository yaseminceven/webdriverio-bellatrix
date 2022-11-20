const LoginPage = require('../pageobjects/login.page');
const FormPage = require('../pageobjects/form.page')

describe('My Login application', () => {
    it.skip('should login with invalid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login();
        await expect(LoginPage.errorMessage).toBeExisting();
        await expect(LoginPage.errorMessage).toHaveTextContaining(
            'Error');
    });

    it('submit contact form', async () => {
        await FormPage.open();
        await FormPage.enterFirstName();
        await FormPage.enterLastName();
        await FormPage.enterEmail();
        await FormPage.enterOptionsRandomly();
        await FormPage.enterComment();
        await browser.pause(5000);
        await FormPage.clickCaptchaAndSubmit();
    })
});


