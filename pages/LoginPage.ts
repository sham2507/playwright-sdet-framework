import {Page, Locator} from "@playwright/test";


export class LoginPage{
    readonly page : Page;
    readonly usernameInput : Locator;
    readonly passwordInput : Locator;
    readonly loginButton : Locator;


    constructor(page : Page){
        this.page = page;
        this.usernameInput = page.getByPlaceholder("Username");
        this.passwordInput = page.getByPlaceholder("Password");
        this.loginButton = page.getByRole("button" , {name: " Login "});        
    }

    async navigate(){
        await this.page.goto('/');
    }

    async login(user : string, password: string){
        await this.usernameInput.fill(user);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    getErrorMessageLocator() : Locator{
        const errorLocator = this.page.getByText("Invalid Credentials");
        return errorLocator;
    }


}