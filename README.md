## E2E Test Cases With WebdriverIO
This project contains end-to-end test cases with WebdriverIO for https://demos.bellatrix.solutions/ page.

For each page of this website a seperate pageobject file was created. And under specs tests are divided according to website pages.

- Homepage includes add to cart cases
- Contact Form page includes cases to fill out a form and checking a reCAPTCHA box
- My Account page includes login cases and lost your password cases

Workflows folder contains ci.yaml file to run the test cases after each commit.