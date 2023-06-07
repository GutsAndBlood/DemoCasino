const { test, browser, expect } = require("@playwright/test");
import { MainFrame } from "../pages/mainFrame.page";
import { Login } from "../pages/Login.page";


let modalwindowExpectedTitle = "Welcome";
let modalwindowExpectedBody = "Hope you'll enjoy our casino. Please make sure you know everything about the safe gaming. Find all the information in our articles.";
let password = "Angel1!";



test('Registration Automated Script test_01', async ({page}) => {

    let mainFrame = new MainFrame(page);
    let loginPage = new Login(page);

    let randomNumber = mainFrame.getRandomInt();
    const email = "angel.javier.fake"+ randomNumber +"@hotmail.com";

    //MainPage

    await mainFrame.goToCasinoPage();

    await mainFrame.waitForStartAppLoader();
    await mainFrame.waitForMainLoaderSpinning();
    await mainFrame.waitForModalWindowInMainPage();

    await expect(page.locator("xpath=//div[@class='modal__content']//h3"))?.toHaveText(modalwindowExpectedTitle);
    await expect(page.locator("xpath=//div[@class='modal__content']//p"))?.toHaveText(modalwindowExpectedBody);

    await mainFrame.clickOnmodalWindowGotItButton();

    await expect(page).toHaveTitle(/DemoBSA/);

    await mainFrame.clickOnSignUpButton();
    await mainFrame.waitForMainLoaderSpinning();

    //Login Page

    await expect(page.locator("css=.page__title")).toHaveText("Sign up");
    await expect(page.locator("(//label[@class='label-input'])[2]")).toHaveText("Email");
    
    await loginPage.clickOnPhoneOption();
    await expect(page.locator("xpath=(//label[@class='label-input'])[3]")).toHaveText("Phone number");

    await loginPage.clickOnEmailOption();
    await loginPage.emailAndPhoneInputSendKeys(email);

    await loginPage.clickOnAcceptTermsAndConditions();
    await loginPage.passwordSendKeys(password);
    await loginPage.reEnterPasswordSendKeys(password);

    await loginPage.clickOnNoBonus();

    await loginPage.clickOnCreateAccount();

    //Registration Success Can't be Verified because there is a Recaptcha

    /*
    await mainFrame.waitForMainLoaderSpinning();
    await expect(page.locator("//h1[@class='notification__title']")).toHaveText(" Congratulations! ")
    */
}) 


