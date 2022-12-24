const Page = require('./page');

class MainPage extends Page {
    get dropdown () {
        return $('.storefront-sorting .orderby');
    }

    get cartItemsText () {
        return $('.cart-contents .count');
    }

    get addToCartButtons () {
        return $("//a[text()='Add to cart']");
    }

    async selectSortingOption (text) {
        await this.dropdown.waitForDisplayed();
        await this.dropdown.selectByVisibleText(text);
    }

    async clickAddToCart (productIndex) {
        await this.addToCartButtons.waitForDisplayed();
        let addToCartElements = this.addToCartButtons;
        await addToCartElements[productIndex].click(); 
    }

    open () {
        return super.open('/');
    }
}

module.exports = new MainPage();