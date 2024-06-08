class LoginPage {
    constructor(page) {
        this.page = page;
        this.signInLocator = page.locator("a[href='/login']");
        this.userNameLocator = page.locator("#id_username");
        this.passWordLocator = page.locator("#id_password");
        this.loginButtonLocator = page.locator("input[value='Login']");
        this.successLoginMsgLocator = page.locator("div[role='alert']");
        //this.errorMsgLocator = page.locator("div[role='alert']");
    }

    async goto() {
        await this.page.goto("https://dsportalapp.herokuapp.com/home");
    }

    async login(username, password) {
        await this.signInLocator.click();
        if (username) {
            await this.userNameLocator.fill(username);
        }
        if (password) {
            await this.passWordLocator.fill(password);
        }
        await this.loginButtonLocator.click();
    }

    async getSuccessMessage() {
        await this.successLoginMsgLocator.click();
        const message = await this.successLoginMsgLocator.textContent();
        return message.trim();
    }

    
    async getErrorMessage() {
        await this.successLoginMsgLocator.waitFor({ state: 'visible' }); // Wait for the error message locator to be visible
        const message = await this.successLoginMsgLocator.textContent();
        return message.trim();
    }
    
    
}

module.exports = { LoginPage };
