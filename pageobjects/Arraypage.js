class Arraypage {
    constructor(page) {
        this.page = page;
        this.arraystartbutton = page.locator("a[href='array']");
        this.arraypython = page.locator("a[href='arrays-in-python']");
        this.arraytryhere = page.locator(".btn.btn-info");
        this.arrcodeEditor = page.locator(".CodeMirror.cm-s-default");
        this.arrrunBtn = page.locator("button[type='button']");
        this.arrhello = page.locator("[id='output']");
    }

    async Arraystart() {
        await this.arraystartbutton.click();
    }

    async Arraypythonclick() {
        await this.arraypython.click();
    }

    async Arraytryhereclick() {
        await this.arraytryhere.click();
    }

    async gettryedito() {
        await this.arrcodeEditor.waitFor();
        await this.arrcodeEditor.click();
        
        await this.page.keyboard.type("print('Hello')");
        await this.arrrunBtn.click();
        await this.page.waitForTimeout(2000); // Adjust the timeout as needed
        const helloText = await this.arrhello.textContent();
        console.log("Hello text:", helloText);
        return helloText;
    }
}

module.exports = { Arraypage };
