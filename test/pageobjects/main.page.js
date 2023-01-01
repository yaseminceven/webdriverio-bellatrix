const Page = require('./page');

class MainPage extends Page {
    get dropdown () {
        return $('.storefront-sorting .orderby');
    }

    get cartItemsText () {
        return $('.cart-contents .count');
    }

    addToCartButton (productIndex) {
        return $('.products.columns-4').$$('li')[`${productIndex}`].$('a[href*=add-to-cart]');
    }

    async selectSortingOption (text) {
        await this.dropdown.waitForDisplayed();
        await this.dropdown.selectByVisibleText(text);
    }

    async clickAddToCart (productIndex) {
        await this.addToCartButton(productIndex).click();
    }

    open () {
        return super.open('/');
    }
}

module.exports = new MainPage();