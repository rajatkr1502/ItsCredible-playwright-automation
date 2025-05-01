import { test, expect } from '@playwright/test';

require('dotenv').config();

test('Create and Send Certificate', async ({ page })=> {

    // Login 
    await page.goto('/');
    await page.getByRole('textbox', { name: 'Email Address' }).click();
    await page.getByRole('textbox', { name: 'Email Address' }).fill(process.env.username);
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill(process.env.password);
    await page.getByRole('button', { name: 'Login' }).click();

    // Create New Certificate
    await page.locator('//h6[text()="New"]').click();
    await page.waitForTimeout(5000);
    await page.locator('div:nth-child(3) > .MuiStack-root > .MuiPaper-root > img').first().click();
    await page.getByRole('button', { name: 'Choose date' }).click();
    await page.getByRole('gridcell', { name: '31' }).click();
    await page.locator('div').filter({ hasText: /^Test Certificate$/ }).nth(2).click();
    await page.locator('div').filter({ hasText: /^Labels$/ }).getByRole('button').click();
    await page.getByRole('textbox', { name: 'Label Name' }).click();
    await page.getByRole('textbox', { name: 'Label Name' }).fill('Test_Automation');
    await page.getByRole('button', { name: 'Add' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.locator('.dsg-container > div > div:nth-child(2) > div:nth-child(2)').click();
    await page.locator('.dsg-input').first().fill('Shivam Verma');
    await page.locator('div:nth-child(2) > div:nth-child(3)').first().click();
    await page.locator('div:nth-child(3) > .dsg-input').first().fill('shivamverma@rtctek.com');
    await page.locator('div:nth-child(2) > div:nth-child(4)').first().click();
    await page.locator('div:nth-child(4) > .dsg-input').first().fill('1st Position');
    await page.locator('div:nth-child(2) > div:nth-child(5)').click();
    await page.locator('div:nth-child(5) > .dsg-input').first().fill('1-May-2025');

    // Send Email
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('group').getByRole('button', { name: 'Send' }).click();
    await page.getByRole('tab', { name: 'Sent' }).click();

})