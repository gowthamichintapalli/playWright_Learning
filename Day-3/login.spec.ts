// import { test, expect } from '@playwright/test';

// test('Verify EZROI navigation flow', async ({ page }) => {
//  
//   await page.goto('https://qa.ezroi.net/sign-in');
//   // Login
//   await page.getByPlaceholder('Email').fill('excelr@yopmail.com');
//   await page.getByPlaceholder('Password').fill('Test@123');
//  
//   await page.getByRole('button', { name: 'Login' }).click();
//  
//   await expect(page).toHaveURL(/dashboard/);
// 
//   await page.getByText('Workflow').click();
//  
//   await expect(page).toHaveURL(/workflow/);
// });

//npx playwright codegen --browser=chromium https://www.ezroi.net/sign-in  

import { test, expect } from '@playwright/test';

test('Send Invoice Flow', async ({ page }) => {

await page.goto('https://qa.ezroi.net/admin/document-requests/New');

await expect(page).toHaveURL(/document-requests/i);

await expect(page).toHaveTitle(/Release Information System/i);

const customerDropdown = page.locator('#customer');

const invoiceNumberInput = page.locator('#invoiceNumber');

const amountInput = page.locator('#invoiceAmount');

const uploadInvoiceInput = page.locator('input[type="file"]');

const sendInvoiceButton = page.getByRole('button', {name: /send invoice/i,});

const successMessage = page.locator('.alert-success');

await customerDropdown.selectOption({ label: 'ABC Client' });

await invoiceNumberInput.fill('INV-10001');

await amountInput.fill('5000');
await uploadInvoiceInput.setInputFiles('test-data/invoice.pdf');

await Promise.all([page.waitForResponse(response =>response.url().includes('sendInvoice') && response.status() === 200),sendInvoiceButton.click(),]);

await expect(successMessage).toBeVisible();

await expect(successMessage).toContainText('Invoice sent successfully');

await expect(page).toHaveURL(/success/i);});