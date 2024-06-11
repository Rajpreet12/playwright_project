const {Given,When,Then} = require('@cucumber/cucumber');
const {expect} = require('@playwright/test');
const {stacksPage} = require('../../pageobjects/stacksPage');


  //Implementation in Stack page
  Given('The user select stack from Getstarted icon', async function () {
      this.stacksPage = this.POManager.getStackPage();
      await this.stacksPage.getStartStack_fn();

    });

    Then('The user is directed to Stack Page', async function () {
      await expect(this.page).toHaveTitle(/Stack/);
    });


  When('The user clicks on the {string} in Stack link', async function (subtitles) {
       //this.stacksPage = this.poManger.getStackPage();
       
        await this.stacksPage.subTitles_stack_fn(subtitles);
  });

  Then('The user is directed to {string} in Stack Page', async function (subtitles) {

            await expect(this.page).toHaveTitle(subtitles);
        
  });

  When('The user clicks Try Here in stack', async function () {
     // this.stacksPage = this.POManager.getStackPage();
        await this.stacksPage.tryhere_stack_fn();
  });

  Then('The tryEditor box appears in stack',async  function () {
        
        await expect(this.page).toHaveTitle(/Assessment/);
        console.log('Stack Assessment title** -', await this.stacksPage.get_title_stack());
  });

  When('User type code {string} in the tryEditor', async function (phythonCode) {
      //this.stacksPage = this.POManager.getStackPage();
        await this.stacksPage.codeTryArea_stack_fn(phythonCode);
    
  });

  Then('User clicks Run button and Result is printed below', async function () {

        
        expect(await this.stacksPage.run_result_fn()).toContain("Hello");
      
  });

  Then('User clicks Run button and Error alert message is displayed and accepted', async function () {
        
        await this.stacksPage.alert_fn();
       
  });
