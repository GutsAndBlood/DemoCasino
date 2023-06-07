const { expect } = require('@playwright/test');

export class MainFrame{

    constructor(page) {
        this.page = page;
        this.goto = page.goto("https://demo.casino/");
        this.startAppLoader = page.locator("xpath=//div[@class='lds-ellipsis']");
        this.mainLoader = page.locator("css=.loader");
        this.modalWindowInMainPage = page.locator("css=.modal__content");
        this.modalWindowGotItButton = page.locator("xpath=//button[@class='button button--s2 button--t1 ']");
        this.singUpButton = page.locator("(//a[@href='/user/registration'])[1]");
        this.randomNumber = Math.floor(Math.random() * 1000);
    }

    async goToCasinoPage() {
        await this.goto;
    }
    
    async waitForStartAppLoader() {
        await this.startAppLoader.waitFor({state: "hidden", timeout: 15_000});
    }

    async waitForMainLoaderSpinning() {
        await this.mainLoader.waitFor({state: "detached", timeout: 10_000});
    }

    async waitForModalWindowInMainPage() {
        await this.modalWindowInMainPage.waitFor({state: "attached"});   
    }

    async clickOnmodalWindowGotItButton() {
        await this.modalWindowGotItButton.click();
    }

    async clickOnSignUpButton() {
        await this.singUpButton.click();
    }

    async getRandomInt() {
        return this.randomNumber;
      }
}