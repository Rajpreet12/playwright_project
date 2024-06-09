const { Given, When, Then } = require("@cucumber/cucumber");
//const {  } = require('../../pageobjects/linkpage');
const { expect } = require('@playwright/test');

Given('user start get button', function () {
    this.linkpage = this.POManager.getlinkpage();
    this.linkpage.linkstartbutton();
  });
  When('user clicks on introduction and try here button', function () {
    this.linkpage. linkintro();
    this.linkpage. tryherebutton();
  });
  Then('write codde in text editor and run button', function () {
   this.linkpage.gettryedit();
  });