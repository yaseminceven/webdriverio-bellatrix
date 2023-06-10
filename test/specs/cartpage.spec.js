const MainPage = require('../pageobjects/main.page');
const CartPage = require('../pageobjects/cart.page');
const assert = require('assert');

describe('Cart page test cases',  async () => {
    it('open cart page', async () => {
        await MainPage.open();
        await MainPage.clickTab('Cart');
        await expect(browser).toHaveUrlContaining("https://demos.bellatrix.solutions/cart/");
    })

    it('clear cart',async () => {
        await MainPage.open();
        await MainPage.clickTab('Cart');
        await CartPage.removeItem();
        await expect(CartPage.emptyCartText).toBeDisplayed();
    })

    it('check return the shop button functionality', async () => {
        await CartPage.open();
        await CartPage.returnShop();
        await expect(browser).toHaveUrl("https://demos.bellatrix.solutions/");
    })

    it('check added product at cart page', async () => {
        await MainPage.open();
        const productTitle = await MainPage.getProductTitle(0);
        await MainPage.clickAddToCart(0);
        await MainPage.clickViewCart();
        const productTitleCartPage = await CartPage.productTitle.getText();
        assert.equal(productTitleCartPage,productTitle);
    })

    it('check proceed to checkout button functionality', async () => {
        await CartPage.open();
        await CartPage.proceedCheckout();
        await expect(browser).toHaveUrl("https://demos.bellatrix.solutions/checkout/");
    })
});