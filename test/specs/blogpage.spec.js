const MainPage = require('../pageobjects/main.page');
const BlogPage = require('../pageobjects/blog.page');

describe('Blog page test cases',  async () => {
    it('open blog page', async () => {
        await MainPage.open();
        await MainPage.clickTab('Blog');
        await expect(browser).toHaveUrlContaining("https://demos.bellatrix.solutions/blog/");
    })

    it('check leaving comment page opens', async () => {
        await BlogPage.open();
        await BlogPage.clickLeaveComment();
        await expect(browser).toHaveUrlContaining("#respond");
    })

    it('check leaving comment', async () => {
        await BlogPage.open();
        await BlogPage.clickLeaveComment();
        await BlogPage.enterRandomInfo();
        await BlogPage.clickSubmitButton();
        await expect(browser).toHaveUrlContaining("#comment");
    })

    it('check blog post date exists', async () => {
        await BlogPage.open();
        await expect(await BlogPage.getBlogDateText()).toContain('Posted on');
    })

});