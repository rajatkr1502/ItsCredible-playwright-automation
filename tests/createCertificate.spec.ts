import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
require('dotenv').config();

// let username = process.env.username as string;
// let password = process.env.password as string;
// let url = process.env.url;



test('Create and Send Certificate', async ({ page })=> {

    // Login 
    test.setTimeout(120000);
    await page.goto('/');
    const loginPage = new LoginPage(page);
    await loginPage.login(process.env.user, process.env.pass);
    await loginPage.createNewCertificate();
    await loginPage.sendEmail();

})