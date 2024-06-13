const {Given,When,Then} = require('@cucumber/cucumber');
const {expect} = require('@playwright/test');
const {treePage} = require('../../pageobjects/treePage');

Given('The user select Tree from Getstarted icon', async  function () {
        this.treePage = this.POManager.gettreePage();
      await this.treePage.getStartTree_fn();
  });

  Then('The user is directed to Tree Page', async  function () {
    await expect(this.page).toHaveTitle(/Tree/);
  });

  When('The user clicks on the Overview of Trees', async function () {
    await this.treePage.overview_tree_fn();
  });

  Then('The user is directed to Overview of Trees', async function () {
    await expect(this.page).toHaveTitle(/Overview of Trees/);
  });

  When('The user clicks Try Here in Tree', async function () {
    await this.treePage.tryhere_tree_fn();
  });

  Then('The tryEditor box appears in Tree', async function () {
    await expect(this.page).toHaveTitle(/Assessment/);
  });

  When('User type code {string} in the tryEditor in Tree', async function (phythonCode) {
        
    await this.treePage.codeTryArea_tree_fn(phythonCode);

});
  Then('User clicks Run button and Result is printed below in Tree', async function () {

        
    expect(await this.treePage.run_result_fn()).toContain("Hello");
  
});


