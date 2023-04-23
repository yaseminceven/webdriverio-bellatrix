const MainPage = require('../pageobjects/main.page');

describe('Blog page test cases',  async () => {
    it('open blog page', async () => {
        await MainPage.open();
        await MainPage.clickTab('Blog');
        await expect(browser).toHaveUrlContaining("https://demos.bellatrix.solutions/blog/");
    })

});