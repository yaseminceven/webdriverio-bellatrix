const Page = require('./page');
const assert = require('assert');

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

    productPrice (){
        return $$("span > ins:nth-child(2) > span:nth-child(1) > bdi");
    } 

    async selectSortingOption (text) {
        await this.dropdown.waitForDisplayed();
        await this.dropdown.selectByVisibleText(text);
    }

    async clickAddToCart (productIndex) {
        await this.addToCartButton(productIndex).click();
    }

    async checkPriceAscending() {
        const priceList = await this.productPrice();
        const newPriceValues = await Promise.all(priceList.map(async price => {
            const priceText = await price.getText();
            if (priceText) {
              return parseFloat(priceText.replace(/[^0-9.-]+/g,""));
            } else {
              return null;
            }
          }));  
        const newValidPriceValues = newPriceValues.filter(price => price !== null);  
        const sortedValues = newValidPriceValues.slice().sort(function(a, b){return a - b});
        assert.deepEqual(sortedValues,newPriceValues);
    }

    open () {
        return super.open('/');
    }
}

module.exports = new MainPage();