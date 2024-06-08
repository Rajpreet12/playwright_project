class Datastructure {
    constructor(page) {
        this.page = page;
        //this.datastdrop=page.locator(".nav-link.dropdown-toggle")
        this.getstartbtn = page.locator("a[href='data-structures-introduction']");
        this.timecomplexity = page.locator("a[href='time-complexity']");
        this.tryhere = page.locator(".btn.btn-info");
        this.codeEditor = page.locator(".CodeMirror.cm-s-default");
        this.runBtn = page.locator("button[type='button']");
        this.hello = page.locator("[id='output']");
    }

    async dataststart() {
    await this.getstartbtn.click();
    }

    async gettime() {
    await this.timecomplexity.click();
    }

    async gettry() {
    await    this.tryhere.click();
    }

    async gettryeditor() {
        await this.codeEditor.click();
        //await this.page.waitForSelector(this.hello);
        await this.page.keyboard.type("print('Hello')");
        await this.runBtn.click();
        await this.page.waitForTimeout(2000); // Adjust the timeout as needed
        const helloText = await this.hello.textContent();
        console.log("Hello text:", helloText);
        return helloText;
    }
}

module.exports = { Datastructure };

                //    await this.page.keyboard.type('hello');
                //    await this.runBtn.click();
                //    await this.page.waitForSelector(this.hello);
                //    await this.page.locator(this.hello).textContent();
                //     return this.hello;
                
                //  async runbutton() {
                //     await this.runBtn.click();
                //     this.hello.waitFor();
                //     const message= this.hello.textContent();
                //     return message;

                //  }
                // }

    //                 wait this.runBtn_stack.click();
    //     await this.run_result.waitFor();
    //     const runMsg = this.run_result.textContent();
    //    return 
                
                
                
                
                        // this.page.keyboard.fill("print('Hello')"); 
                        // console.log("hello");
                        // const helloElement = await this.page.waitForSelector(this.hello);
                        // await helloElement.isVisible(); 
                        // const helloText = await helloElement.textContent();
                        // console.log("Hello text:", helloText);
                        // await this.runBtn.click();
                
            
        
    
                    
                    //

                    //console.log("python code is ->", phythonCode);

       // Wait for the CodeMirror editor to be visible
        //   await this.codeEditor.waitFor();

      // Set the content of the CodeMirror editor using JavaScript
        //   await this.page.evaluate((phythonCode) => {
        //       const editor = document.querySelector('.CodeMirror').CodeMirror;
        //       editor.setValue(phythonCode);
        //   },phythonCode);

           
                    

 module.exports = { Datastructure };