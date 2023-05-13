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

    async removeItem () {
        await this.removeButton.waitForDisplayed();
        await this.removeButton.click();
    }

    open () {
        return super.open('/cart');
    }
}

module.exports = new CartPage();