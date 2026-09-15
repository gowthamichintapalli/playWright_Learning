import { test, expect } from '@playwright/test';

//fixture-global variable
test("verify page title",async({page})=>{
  
   await page.goto("https://www.facebook.com/");
let url:string=await page.url();
console.log("url:", url);

await expect(page).toHaveURL("/facebook.com/");

let pagetitle: string = page.title();
   await expect(page).toHaveTitle("Facebook");
console.log("Title of Pge:" , pagetitle);
})
