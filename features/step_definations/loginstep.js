const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const ExcelUtilities = require('../../utils/excelreader');


 filepath="C:\\Users\\anoop\\Documents\\NumpyNinja\\Playwright_JS_Projects\\playwright_project\\Testdata\\play.xlsx";
 sheetName="Sheet1";

Given('user is on the login page', async function () {
    this.LoginPage = this.POManager.getLoginPage();

    
    await this.LoginPage.goto();
});

When('enter invalid username And password', { timeout: 30000}, async function () {
    //this.LoginPage = this.poManger.getLoginPage();
    const excelUtilities = await new ExcelUtilities (); // Instantiate the class
    const data = await excelUtilities.readExcel(filepath,sheetName); // Call the method on the instance
        if (data.length === 0) {
            throw new Error('No user data found in the Excel file');
        }
    
        const user = data[0];
        const user1 = data[1];
        // Use the first row
    await this.LoginPage.login(user.username,user.password);
    await this.LoginPage.login(user1.username,user1.password);
    
 });
   

Then('Unsuccessful login', { timeout: 60000 }, async function () { // Increased timeout to 60 seconds
    console.log("Checking for username and password...");
    const errorMessage = await this.LoginPage.getErrorMessage();
    console.log(`Error Message: ${errorMessage}`);
    expect(errorMessage).toContain('Invalid');
});




When('enter valid username and password',  {timeout:50000},async function () {
    const excelUtilities  = await new ExcelUtilities (); // Instantiate the class
    const data = await excelUtilities.readExcel(filepath,sheetName); // Call the method on the instance
        if (data.length === 0) {
            throw new Error('No user data found in the Excel file');
        }
    
        // const user = data[0];
        // const user1 = data[1];
        const user2 = data[2]; 
    
    await this.LoginPage.login(user2.username,user2.password);
    console.log(`Attempting to login with username: ${user2.username} and password: ${user2.password}`);
    
});

Then('successful login', { timeout: 60000 }, async function () { // Increased timeout to 60 seconds
    const successMessage = await this.LoginPage.getSuccessMessage();
    console.log(`Success Message: ${successMessage}`);
    expect(successMessage).toContain('You are logged in');
});
