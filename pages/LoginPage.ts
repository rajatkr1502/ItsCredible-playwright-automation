import { Page, expect } from "@playwright/test";

export class LoginPage {
    constructor(private page: Page) {
        this.page = page;
        
    }

    async login(username: string, password: string) {   
        await this.page.getByRole('textbox', { name: 'Email Address' }).click();
        await this.page.getByRole('textbox', { name: 'Email Address' }).fill(username);
        await this.page.getByRole('textbox', { name: 'Password' }).click();
        await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
        await this.page.getByRole('button', { name: 'Login' }).click();
    }    
    
}