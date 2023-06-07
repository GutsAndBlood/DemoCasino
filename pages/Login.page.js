const { expect } = require('@playwright/test');

exports.Login =  class Login {

    constructor(page) {
        this.page = page;
        this.mainLoader = page.locator("css=.loader");
        this.selectPhone = page.locator('li', { hasText: 'Phone' })
        this.selectEmail = page.locator('li', { hasText: 'E-mail' })
        this.emailAndPhoneInput = page.getByPlaceholder("Email");
        this.termsAndConditions = page.locator("xpath=//label[@for='core__protected_modules_user_yiiForm_RegistrationForm_terms_and_conditions']");
        this.passwordInput = page.locator("//input[@id='core__protected_modules_user_yiiForm_RegistrationForm_password']");
        this.reEnterPasswordInput = page.locator("//input[@id='core__protected_modules_user_yiiForm_RegistrationForm_password_confirmation']");
        this.noBonusInput = page.locator("(//label[@class='special-radio__label'])[2]");
        this.submitButton = page.locator("//button[@data-test='control-submit']");
    }

    async waitForMainLoaderSpinning() {
        await this.mainLoader?.waitFor({state: "detached", timeout: 5_000});
    }

    async clickOnPhoneOption(){
        await this.selectPhone?.click();
    }

    async clickOnEmailOption(){
        await this.selectEmail?.click();
    }
    
    async emailAndPhoneInputSendKeys(text){
        await this.emailAndPhoneInput?.fill(text);
    }

    async clickOnAcceptTermsAndConditions() {
        await this.termsAndConditions?.click();
    }

    async passwordSendKeys(text) {
        await this.passwordInput?.fill(text);
    }

    async reEnterPasswordSendKeys(text) {
        await this.reEnterPasswordInput?.fill(text);
    }

    async clickOnNoBonus() {
        await this.noBonusInput?.click();
    }

    async clickOnCreateAccount() {
        await this.submitButton.click();
    }
}