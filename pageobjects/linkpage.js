class linkpage{
    constructor(page){
        this.page = page;
        this.linkpage=page.locator("a[href='linked-list']");
        this.introduction=page.locator("a[href='introduction']");
        this.linktry=page.locator(".btn.btn-info");
        this.linkcodeEditor = page.locator(".CodeMirror.cm-s-default");
        this.linkrunBtn = page.locator("button[type='button']");
        this.linkhello = page.locator("[id='output']");

    }
    async linkstartbutton(){
      await  this.linkpage.click();
    }
    async linkintro(){
        await  this.introduction.click();
      }
      async tryherebutton(){
        await  this.linktry.click();
      }
      async gettryedit() {
        await this.linkcodeEditor.waitFor();
        await this.linkcodeEditor.click();
        //await this.linkhello.waitfor();
        // await this.page.keyboard.fill("print('Hello')");
        await this.linkrunBtn.click();
        await this.page.waitForTimeout(2000); // Adjust the timeout as needed
        const helloText = await this.linkhello.textContent();
        console.log("Hello text:", helloText);
        return helloText;
    }
}
module.exports = { linkpage };