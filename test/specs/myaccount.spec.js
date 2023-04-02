const LoginPage = require('../pageobjects/login.page');
const LostPasswordPage = require('../pageobjects/lostpassword.page');

describe('Login cases from my account page', async () => {

    it('should not login with invalid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login();
        await expect(LoginPage.errorMessage).toBeExisting();
        await expect(LoginPage.errorMessage).toHaveTextContaining(
            ['You have exceeded maximum login retries','is not registered on this site']);
    });

    it('lost your password button should open reset password page', async () => {
        await LoginPage.open();
        await LoginPage.clickForgotPassword();
        await expect(browser).toHaveUrl('https://demos.bellatrix.solutions/my-account/lost-password/');
    });

    it('reset password for unregistered email should see error message', async ()=> {
        await LoginPage.open();
        await LoginPage.clickForgotPassword();
        await LostPasswordPage.enterEmail();
        await LostPasswordPage.clickResetPassword();
        await expect(LostPasswordPage.invalidMailMessage).toBeExisting();
        await expect(LostPasswordPage.invalidMailMessage).toHaveTextContaining(
            'Invalid username or email'); 
    });

});