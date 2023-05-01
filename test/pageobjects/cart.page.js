const Page = require('./page');

class CartPage extends Page {
    get productTitle () {
        return $('tbody .product-name');
    }

    open () {
        return super.open('/cart');
    }
}

module.exports = new CartPage();