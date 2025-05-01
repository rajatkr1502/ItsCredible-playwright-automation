import { Page, expect } from "@playwright/test";

export class DashboardPage {
    constructor(private page: Page) {
        this.page = this.page;
    }

    async createNewCertificate() {
        await this.page.getByRole('button', { name: 'New' }).click();
        await this.page.waitForTimeout(5000);
        await this.page.locator('div:nth-child(1) > .MuiStack-root > .MuiPaper-root > img').first().click();
        await this.page.getByRole('button', { name: 'Choose date' }).click();
        await this.page.getByRole('gridcell', { name: '31' }).click();
        await this.page.locator("div[class='ql-container ql-snow']").click();
        await this.page.locator('div').filter({ hasText: /^Labels$/ }).getByRole('button').click();
        await this.page.getByRole('textbox', { name: 'Label Name' }).click();
        await this.page.getByRole('textbox', { name: 'Label Name' }).fill('Test_Automation');
        await this.page.getByRole('button', { name: 'Add' }).click();
        await this.page.getByRole('button', { name: 'Next' }).click();
        await this.page.locator('.dsg-container > div > div:nth-child(2) > div:nth-child(2)').click();
        await this.page.locator('.dsg-input').first().fill('Shivam Verma');
        await this.page.locator('div:nth-child(2) > div:nth-child(3)').first().click();
        await this.page.locator('div:nth-child(3) > .dsg-input').first().fill('shivamverma@rtctek.com');
        await this.page.locator('div:nth-child(2) > div:nth-child(4)').first().click();
        await this.page.locator('div:nth-child(4) > .dsg-input').first().fill('1st Position');
        await this.page.locator('div:nth-child(2) > div:nth-child(5)').click();
        await this.page.locator('div:nth-child(5) > .dsg-input').first().fill('1-May-2025');

    }

    async sendEmail() {
        await this.page.locator('//button[@data-tut="AddRecipientsNextBtn"]').click();
        await this.page.locator('//button[text()="Send"]').click();
        await expect(this.page.locator("//h2[text()='Success!']")).toBeVisible();
        await this.page.getByRole('tab', { name: 'Sent' }).click();
        
    }

    async uploadAndSendCertificate(){
        await this.page.getByRole('button', { name: 'New' }).click();
        await this.page.locator('div').filter({ hasText: /^Create New Certificate Template$/ }).nth(2).click();
        const fileInput = await this.page.$('input#backgroundInput');
        await this.page.waitForTimeout(3000);
        await fileInput.setInputFiles('./testdata/Certificate.jpg');
        await this.page.waitForTimeout(5000);
        const timestamp = new Date().toISOString();
        const textWithTimestamp = `UploadedCertificate_${timestamp}`;
        await this.page.getByRole('textbox').fill(textWithTimestamp);
        await this.page.getByRole('button', { name: 'Save' }).click();
        await this.page.getByRole('button', { name: 'Save & Use This' }).click();
        await this.page.getByRole('button', { name: 'Next' }).click();
        await this.page.locator('.dsg-container > div > div:nth-child(2) > div:nth-child(2)').click();
        await this.page.locator('.dsg-input').first().fill('Shivam Verma');
        await this.page.locator('div:nth-child(2) > div:nth-child(3)').first().click();
        await this.page.locator('div:nth-child(3) > .dsg-input').first().fill('shivamverma@rtctek.com');
        await this.page.locator('//button[@data-tut="AddRecipientsNextBtn"]').click();
        await this.page.locator('//button[text()="Send"]').click();
        await expect(this.page.locator("//h2[text()='Success!']")).toBeVisible();
    }
}