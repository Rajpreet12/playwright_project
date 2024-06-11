class treePage{

    constructor(page){
        this.page = page;
        this.tree_getStart = page.locator("a[href='tree']");
        this.overview_tree = page.getByRole('link', { name: 'Overview of Trees' });
        this.tryHere_tree = page.locator('.btn.btn-info');
        this.codeEditor = page.locator(".CodeMirror.cm-s-default");
        this.runBtn_tree = page.getByRole('button', { name: 'Run' });
        this.run_result = page.locator("[id='output']");
        
    }
    async getStartTree_fn(){
        await this.tree_getStart.click();
    }

    async overview_tree_fn(){
        this.overview_tree.click();
    }
    async tryhere_tree_fn(){
        this.tryHere_tree.click();
    }
    
    async codeTryArea_tree_fn(phythonCode){

          // Wait for the CodeMirror editor to be visible
            await this.codeEditor.waitFor({ state: 'visible' });
            await this.codeEditor.click();
            await this.page.keyboard.type(phythonCode);
            
        // // Set the content of the CodeMirror editor using JavaScript
        //     await this.page.evaluate((codeEditor) => {
        //         const editor = document.querySelector('.CodeMirror').CodeMirror;
        //         editor.setValue(phythonCode);
        //     },phythonCode);

            
    }
  
    async run_result_fn(){
        
        await this.runBtn_tree.click();
        const runMsg = await this.run_result.textContent();
        console.log("printed result -> ", runMsg);
       return runMsg;
    }

    async alert_fn() {
        
        // Initialize your alert function
         this.page.on("dialog", async (dialog) => {
            const text = dialog.message();
            console.log("Alert message is:", text);
            await dialog.accept();
         });
        // Trigger an action that causes an alert
         await this.runBtn_tree.click();
    }

}
module.exports = {treePage};