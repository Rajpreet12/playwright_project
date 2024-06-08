const { Given, When, Then } = require("@cucumber/cucumber");
const { Arraypage } = require('../../pageobjects/Arraypage');
const { expect } = require('@playwright/test');

Given('user selected Arrayfrom dropdown',async function () {
  
  this.Arraypage = this.POManager.getArraypage();
    await this.Arraypage.Arraystart();
});

When('select the option Array in python', async function () {
    await this.Arraypage.Arraypythonclick();  // Added await here
});
Then('select the try here button nd run',async  function () {
   await this.Arraypage.Arraytryhereclick();  // Added await here
    const helloText = await this.Arraypage.gettryedito();  // Added await here
    expect(helloText).toContain('Hello'); 
});
