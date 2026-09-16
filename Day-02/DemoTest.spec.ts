import {test, expect} from '@playwright/test';

test("sign in",async({page})=>{
await page.goto('https://qa.ezroi.net/sign-in');
await page.getByPlaceholder("Enter your username").fill("excelr@yopmail.com");
await page.getByPlaceholder("Enter your password").fill("Test@123");
await page.getByRole("button", { name: "Sign In" }).click();
await page.getByRole("button", { name: "Skip" }).click();
//await page.getByRole("button", { name: "Close" }).click();
await page.getByRole("button", { name: "Close" }).first().click();
await page.getByText("Work Flow").click();

});