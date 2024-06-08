const { Given, When, Then } = require("@cucumber/cucumber");
//const { Datastructure } = require('../../pageobjects/Datastructure');
const { expect } = require('@playwright/test');
const { playwright } = require('@playwright/test');





Given('select get started button',{timeout:100*5000},async function () {
  this.DatastructurePage= this.POManager.getDatastructurePage();
  await this.DatastructurePage.dataststart();
  });
  When('click on time complexity and try here button',async function () { 
    //this.DatastructurePage= this.POManager.getDatastructurePage();     
    await this.DatastructurePage.gettime();
   await this.DatastructurePage.gettry();

  });
  Then('write in text editor box And successfully got message',async function () {
    await this.DatastructurePage.gettryeditor();
    //this.DatastructurePage.runbutton();
    
    

      

  });  