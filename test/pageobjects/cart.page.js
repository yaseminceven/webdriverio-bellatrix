const Page = require('./page');

class CartPage extends Page {
    get productTitle () {
        return $('tbody .product-name');
    }

    get emptyCartText () {
        return $("p[class*='cart-empty']"); 
    }

    get removeButton () {
        return $('.remove');
    }

    get returnShopButton () {
        return $('.button.wc-backward');
    }

    get proceedCheckoutButton () {
        return $('.checkout-button.button.alt.wc-forward');
    }

    async removeItem () {
        await this.removeButton.waitForDisplayed();
        await this.removeButton.click();
    }

    async returnShop () {
        await this.returnShopButton.waitForDisplayed();
        await this.returnShopButton.click();
    }

    async proceedCheckout () {
        await this.proceedCheckoutButton.waitForDisplayed();
        await this.proceedCheckoutButton.click();
    }

    open () {
        return super.open('/cart');
    }
}

module.exports = new CartPage();