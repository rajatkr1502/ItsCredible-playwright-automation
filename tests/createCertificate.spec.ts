import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
require('dotenv').config();

test('Create and Send Certificate', async ({ page })=> {
    test.setTimeout(120000);
    await page.goto('/');
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    await loginPage.login(process.env.user, process.env.pass);
    await dashboardPage.createNewCertificate();
    await dashboardPage.sendEmail();
})

test('Upload and Send Certificate', async ({page})=> {
    test.setTimeout(120000);
    await page.goto('/');
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    await loginPage.login(process.env.user, process.env.pass);
    await dashboardPage.uploadAndSendCertificate();
})