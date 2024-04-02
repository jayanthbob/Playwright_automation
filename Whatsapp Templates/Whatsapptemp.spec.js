import { test, expect } from '@playwright/test';
test('Whatsapptemp', async({page})=>{
  await page.goto("https://deepthought.mybusinessonbot.com")
  await page.locator('#email').fill("admin@deepthought42.myshopify.com")
  await page.locator('#password').fill("Test@1234")
  await page.click('button:has-text("Sign in")')
  await page.getByRole('button', {name: "AD"}).click();
  await page.getByRole('menuitem',{name: 'Settings'}).click();
  await page.getByRole('link',{name: 'Whatsapp Templates Create/'}).click();
  await page.getByRole('button', {name: 'Create Template'}, test.setTimeout(120000)).click();

  //Marketing Scenario
  await page.getByText('Marketing').click();
  await page.getByPlaceholder('Message Template Name').fill('Jayanth'+ (Date.now())) 
  await page.getByRole('button', {name: 'Continue'}).click();
  await page.locator('div').filter({ hasText:'None'}).nth(1).click();
  await page.getByText('None').click();
  await page.getByText('Text', { exact: true }).click();
  await page.locator('#mat-input-7').click();
  await page.locator('#mat-input-7').fill('test');
  await page.locator('#mat-input-6').click();
  await page.locator('#mat-input-6').fill('Random Header 😱 *Bold* _Italics_ ~Hash~ ```Code```');
  await page.getByPlaceholder('Message Footer').click();
  await page.getByPlaceholder('Message Footer').fill('Random Footer');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.locator('#mat-dialog-0').click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.waitForTimeout(2000)




  //Authentication Scenario
  await page.getByRole('button', {name: 'Create Template'}, test.setTimeout(120000)).click();
  await page.getByText('Authentication').click();
  await page.getByPlaceholder('Message Template Name').fill('Jayanth'+ (Date.now())) 
  await page.getByRole('button', {name: 'Continue'}).click();
  await page.locator('div').filter({ hasText:'None'}).nth(1).click();
  await page.getByText('None').click();
  await page.getByText('Text', { exact: true }).click();
  await page.pause();
  await page.locator('#mat-input-7').click();
  await page.locator('#mat-input-7').fill('test');
  await page.locator('#mat-input-6').click();
  await page.locator('#mat-input-6').fill('Random Header 😱 *Bold* _Italics_ ~Hash~ ```Code```');
  await page.getByPlaceholder('Message Footer').click();
  await page.getByPlaceholder('Message Footer').fill('Random Footer');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.locator('#mat-dialog-0').click();
  await page.getByRole('button', { name: 'OK' }).click();


  //Utility Scenario
  await page.getByRole('button', {name: 'Create Template'}, test.setTimeout(120000)).click();
  await page.getByText('Utility').click();
  await page.getByPlaceholder('Message Template Name').fill('Jayanth'+ (Date.now()))
  await page.getByRole('button', {name: 'Continue'}).click();
  await page.locator('div').filter({ hasText:'None'}).nth(1).click();
  await page.getByText('None').click();
  await page.getByText('Text', { exact: true }).click();
  await page.locator('#mat-input-7').click();
  await page.locator('#mat-input-7').fill('test');
  await page.locator('#mat-input-6').click();
  await page.locator('#mat-input-6').fill('Random Header 😱 *Bold* _Italics_ ~Hash~ ```Code```');
  await page.getByPlaceholder('Message Footer').click();
  await page.getByPlaceholder('Message Footer').fill('Random Footer');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.locator('#mat-dialog-0').click();
  await page.getByRole('button', { name: 'OK' }).click();


//Adding optional buttons Scenario- Quick reply
await page.getByText('Authentication').click();
await page.getByPlaceholder('Message Template Name').fill('Jayanth_test_221323') // Change this value everytime you run the test
await page.getByRole('button', {name: 'Continue'}).click();
await page.pause();
await page.locator('div').filter({ hasText:'None'}).nth(1).click();
await page.getByText('Text').click();
await page.locator("xpath=//input[@id='mat-input-6']").fill('Random Text')
await page.locator("xpath=//textarea[@id='mat-input-4']").fill('Random Header 😱 *Bold* _Italics_ ~Hash~ ```Code```{{1}}')
await page.locator("xpath=//input[@id='mat-input-3']").fill('Random Footer')
await page.locator('div').filter({ hasText:'None'}).nth(1).click();
await page.getByText('Quick reply').click();
await page.locator("xpath=//input[@id='mat-input-9']").fill('Random Text 123')
await page.locator("xpath=//span[normalize-space()='Submit']").click()

//Inserting Media 
await page.getByText('Authentication').click();
await page.getByPlaceholder('Message Template Name').fill('Jayanth_test_221323') // Change this value everytime you run the test
await page.getByRole('button', {name: 'Continue'}).click();
await page.pause();
await page.locator('#mat-select-value-5').click();
await page.getByText('Media', { exact: true }).click();
await page.locator('.mt-4 > .text-center').first().click();
await page.getByRole('button', { name: 'Add Sample' }).click();
await page.getByText('Choose PDF file').click();
await page.getByLabel('Add Sample Content').setInputFiles('Vignesh_resume_1706682936.pdf');
await page.getByRole('button', { name: 'Done' }).click();
await page.locator("xpath=//input[@id='mat-input-6']").fill('Random Text')
await page.locator("xpath=//textarea[@id='mat-input-4']").fill('Random Header 😱 *Bold* _Italics_ ~Hash~ ```Code```{{1}}')
await page.locator("xpath=//input[@id='mat-input-3']").fill('Random Footer')
await page.locator('div').filter({ hasText:'None'}).nth(1).click();
await page.getByText('Quick reply').click();
await page.locator("xpath=//input[@id='mat-input-9']").fill('Random Text 123')
await page.locator("xpath=//span[normalize-space()='Submit']").click()

//Adding optional buttons Scenario- Call phone number
await page.getByText('Authentication').click();
await page.getByPlaceholder('Message Template Name').fill('Jayanth_test_221323') // Change this value everytime you run the test
await page.getByRole('button', {name: 'Continue'}).click();
await page.pause();
await page.locator('div').filter({ hasText:'None'}).nth(1).click();
await page.getByText('Text').click();
await page.locator("xpath=//input[@id='mat-input-6']").fill('Random Text')
await page.locator("xpath=//textarea[@id='mat-input-4']").fill('Random Header 😱 *Bold* _Italics_ ~Hash~ ```Code```{{1}}')
await page.locator("xpath=//input[@id='mat-input-3']").fill('Random Footer')
await page.locator('div').filter({ hasText:'None'}).nth(1).click();
await page.getByText('Quick reply').click();
await page.locator("xpath=//input[@id='mat-input-9']").fill('Random Text 123')
await page.locator("xpath=//span[normalize-space()='Submit']").click()

})
