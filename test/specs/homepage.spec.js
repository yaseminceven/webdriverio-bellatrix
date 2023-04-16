const MainPage = require('../pageobjects/main.page');


describe('Homepage test cases', async () => {

    it('add product to cart at homepage', async () => {
        await MainPage.open();
        await MainPage.selectSortingOption('Sort by popularity');
        await MainPage.clickAddToCart(0);
        await expect(MainPage.cartItemsText).toHaveTextContaining('1');
    })

    it('sort by price low to high at homepage',async () => {
        await MainPage.open();
        await MainPage.selectSortingOption('Sort by price: low to high');
        await MainPage.checkPriceAscending();
    })
});