const MainPage = require('../pageobjects/main.page');

describe('Homepage test cases', async () => {

    it('add product to cart at homepage', async () => {
        await MainPage.open();
        await MainPage.selectSortingOption('Sort by popularity');
        await MainPage.clickAddToCart(0);
        await expect(MainPage.cartItemsText).toHaveTextContaining('1');
    })

    it('click on product', async () => {
        await MainPage.open();
        await MainPage.clickOnProduct(1);
        await expect(browser).toHaveUrlContaining("https://demos.bellatrix.solutions/product/");
    })
    
    it('click on read more button', async () => {
        await MainPage.open();
        await MainPage.clickReadMore();
        await expect(browser).toHaveUrlContaining("https://demos.bellatrix.solutions/product/");
    })

    it('sort by price low to high at homepage',async () => {
        await MainPage.open();
        await MainPage.selectSortingOption('Sort by price: low to high');
        await MainPage.checkPriceAscending();
    })

    it('sort by price high to low at homepage',async () => {
        await MainPage.open();
        await MainPage.selectSortingOption('Sort by price: high to low');
        await MainPage.checkPriceDescending();
    })
});