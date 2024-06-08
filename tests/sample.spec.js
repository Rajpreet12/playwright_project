const{test,expect}= require('@playwright/test');
const { text } = require('stream/consumers');

test("my first test",async ({browser}) =>
 {
   const context=await browser.newContext();
   const page=await context.newPage();

    const userName=page.locator('#username');
    const signIn=page.locator("#signInBtn");
    const cardtitles=page.locator(".card-body a");
    
page.goto("https://rahulshettyacademy.com/loginpagePractise/");
console.log(await page.title());
//css ,2 method to enter data in filed=type,fill
await userName.type('#username');//wrong username password
await page.locator("[type='password']").type("learning");
await page.locator("#signInBtn").click();
//in selenium=webdriver
console.log(await page.locator("[style*='block']").textContent());
await expect(page.locator("[style*='block']")).toContainText('Incorrect');

//type-fill
await userName.fill("");
await userName.fill("rahulshettyacademy");
await signIn.click();

// console.log(await cardtitles.first().textContent());
// console.log(await cardtitles.first().nth(1).textContent());
await page.waitForLoadState('networkidle');
await cardtitles.first().waitFor();
const allTitles=await cardtitles.allTextContents;
console.log(allTitles);

});
test("UI controls",async ({page}) =>
    {
       
   
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  const userName=page.locator('#username');
    const signIn=page.locator("#signInBtn");
    const dropdown=page.locator("select.form-control");
    const blinkingtext=page.locator("[href*='documents-request']");
    await dropdown.selectOption("consult");
    
    await page.locator(".radiotextsty").last().click();
    await page.locator("#okayBtn").click();
   
   console.log(await page.locator(".radiotextsty").last().isChecked());
   await expect(page.locator(".radiotextsty").last()).toBeChecked();
   
   await page.locator("#terms").click();
   await expect(await page.locator('#terms')).toBeChecked();

   await page.locator('#terms').uncheck();
   await expect(await page.locator('#terms').isChecked()).toBeFalsy();

   await expect(blinkingtext).toHaveAttribute("class","blinkingText");
    });

   //child window
   test("child window",async ({browser}) =>
      {
         const context=await browser.newContext();
         const page=await context.newPage();
         const userName=page.locator('#username');
         await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
         const blinkingtext=page.locator("[href*='documents-request']");
         const [newPage]=await Promise.all(
      [
      context.waitForEvent('page'),
      blinkingtext.click(),
   ])
    const text = await newPage.locator(".red").textContent();
    const arraytext= text.split("@")
    const domain= arraytext[1].split(" ")[0]
    console.log(domain);
    await page.locator('#username').type(domain);
      await page.pause();
console.log(await page.locator('#username').textContent());

   console.log(text);
      });
    


  
    
   
   
   
  
  
   
