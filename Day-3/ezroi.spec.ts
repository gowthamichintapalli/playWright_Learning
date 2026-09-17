import { test, expect } from '@playwright/test';

test('EZROI - Ready for Payment to Invoice Finalization', async ({ page }) => {

  await page.goto(
    'https://qa.ezroi.net/sign-in?redirectUrl=/orders/readyforpayment'
  );


  await expect(page).toHaveURL(/sign-in.*redirectUrl/);


  await page.getByRole('textbox', { name: 'Enter your username' }).fill('excelr@yopmail.com');

  await page.getByRole('textbox', { name: 'Enter your password' }).fill('Test@123');

  await page.getByRole('button', { name: 'Sign In' }) .click();

  await expect(page).toHaveURL(/orders\/readyforpayment/);


  await page .getByRole('button', { name: 'Skip' }) .click();


  await page.getByText('Close').click();

  // Navigate through UI to Request to Review
  await page .getByRole('link', { name: 'Request to Review' }).click();

  await expect(page).toHaveURL(/request/i);


  await page.getByRole('cell', { name: 'ORD-517' }).getByRole('paragraph').click();


  await page.locator('.ant-select-selection-search').first().click();

  await page.getByText('Retrieve Records').nth(1).click();


  await page.getByRole('button', { name: 'Yes, Sure' }).click();

  await page.getByRole('button', { name: 'browse files' }).click();

  await page.getByRole('button', {name: 'Upload Only I\'ll create the'}).click();

  await page.getByRole('img', { name: 'Refresh' }).click();

  await page.locator('.cursor-pointer.h-7 > path').click();



  await page.getByRole('button', { name: 'Finalize & Send' }).nth(1).click();

  await page.getByRole('tab', { name: 'Invoice' }).click();


  await page.getByRole('table').getByText('Billing').click();

  await page.getByRole('table').getByText('INV-702').click();


  await page.getByRole('button', { name: 'Finalize' }).click();

  await page.getByRole('button', { name: 'Finalize Invoice' }).click();

  await expect(page.getByRole('button', { name: 'Send Email' })).toBeVisible();

  await page.getByRole('button', { name: 'Send Email' }).click();

  await expect(page.getByRole('dialog')).toBeVisible();

  await page.getByRole('dialog').click();

  await page.getByRole('table').getByText('INV-702').click();

  await page.locator('.close-btn').click();

});