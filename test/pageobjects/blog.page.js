const Page = require('./page');
const fakeData = require("../../utils/random-data");

class BlogPage extends Page {

    get leaveCommentLink () {
        return $('#main .post-comments a');
    }

    get commentInput () {
        return $('.comment-form-comment #comment');
    }

    get nameInput () {
        return $('#author');
    }

    get emailInput () {
        return $('#email');
    }

    get submitButton () {
        return $('#submit');
    }

    async clickLeaveComment () {
        await this.leaveCommentLink.click();
    }

    async enterRandomInfo () {
        await this.commentInput.waitForDisplayed();
        await this.commentInput.click();
        await this.commentInput.keys(fakeData.fakeText());
        await this.nameInput.click();
        await this.nameInput.keys(fakeData.fakeFirstName());
        await this.emailInput.click();
        await this.emailInput.keys(fakeData.fakeEmail());
    }

    async clickSubmitButton () {
        await this.submitButton.waitForDisplayed();
        await this.submitButton.click();
    }

    open(){
        return super.open('blog');
    }
}

module.exports = new BlogPage();