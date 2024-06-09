// POManager.js
const {LoginPage} = require('./LoginPage'); // Assuming login.js exports the LoginPage class
const {Datastructure} = require('./Datastructure'); // Assuming Datastructure.js exports the Datastructure class
const {Arraypage} = require('./Arraypage');
const {linkpage}= require('./linkpage');
const {stacksPage} = require('./stacksPage');
const {queuePage} = require('./queuePage');

class POManager {
    constructor(page) {
        this.page = page;
        this.LoginPage = new LoginPage(page); // Use the imported class directly
        this.Datastructure = new Datastructure(page);
        this.Arraypage= new Arraypage(page); 
        this.linkpage=new linkpage(page);
       // this.signinPage = new signinPage(page);
        this.stacksPage = new stacksPage(page);
        this.queuePage = new queuePage(page);
    }

    getLoginPage() {
        return this.LoginPage;
    }

    getDatastructurePage() {
        return this.Datastructure;
    }
    getArraypage() {
        return this.Arraypage;
    }
    getlinkpage() {
        return this.linkpage;
    }

    
    getStackPage(){
        return this.stacksPage;
    }
    getQueuePage(){
        return this.queuePage;
    }
}

module.exports = { POManager };
