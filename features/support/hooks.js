const { Before, After, BeforeStep, AfterStep, Status } = require("@cucumber/cucumber");
const { chromium } = require('playwright'); // Change 'playwright' to 'playwright-firefox'
const {POManager}= require('../../pageobjects/POManager');
//const { LoginPage } = require('../../pageobjects/LoginPage');


Before(async function () {
    const browser = await chromium.launch({  // Change 'playwright.firefox' to 'firefox.launch'
        headless: true
    });
    const context = await browser.newContext(); // Define 'context' using 'const'
    this.page = await context.newPage();
    this.POManager = new POManager(this.page);
});
BeforeStep(function (){

});
AfterStep(async function({result}){
    if(result.status === Status.FAILED){
        await this.page.screenshot({path: 'screenshot.png'});
    }
});

After(async function(){
    console.log("successfully executed");
});
