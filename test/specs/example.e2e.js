const LoginPage = require('../pageobjects/login.page');
const FormPage = require('../pageobjects/form.page');
const MainPage = require('../pageobjects/main.page');

describe('My Login application', async () => {
    beforeEach(async () => {
        await browser.url('https://demos.bellatrix.solutions');
    });

    it('should login with invalid credentials', async () => {
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
        await FormPage.switchToRecaptchaFrame();
        await FormPage.clickCaptcha();
        await FormPage.switchToMainPageAndSubmit();
    })

    it('add product to cart at homepage', async () => {
        await MainPage.open();
        await MainPage.selectSortingOption('Sort by popularity');
        await MainPage.clickAddToCart(0);
        await expect(MainPage.cartItemsText).toHaveTextContaining('1');
    })
});


