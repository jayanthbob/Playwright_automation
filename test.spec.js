import { expect, test } from '@playwright/test';

test.beforeEach('Navigating to Customize Notification Settings', async ({ page }) => {
  await page.goto(process.env.DASHCLIENT, {waitUntil:'load'})
  await page.waitForURL(process.env.DASHCLIENT, {waitUntil: 'load'})
  await page.locator('#mat-dialog-0').waitFor()
  await page.locator('button').filter({ hasText: 'close' }).click()
  console.log('Opening Customize Notification Settings...');
  await page.locator('user-menu').getByRole('button').click()
  await page.getByRole('menuitem', { name: 'Settings' }).click()
  await page.waitForURL(process.env.DASHSETTINGS, {waitUntil:'load'})
  await expect(page).toHaveURL(process.env.DASHSETTINGS);
  console.log('Clicking on Customize Notification Settings')
  await page.getByRole('link', { name: 'System Alerts Manage your system alerts' }).click()
  await page.waitForURL(process.env.DASHCUSTOM, {waitUntil:'load'})
});

test.describe('Adding a User', ()=> {
    test.setTimeout(120000)
  
//   test('Checking if No User has been added', async ({ page }) => {
//     await expect(page.locator('app-customize-notifications').getByText('Customize Notifications')).toBeVisible()
//     await expect(page.getByRole('button', { name: 'Add Recipient' })).toBeVisible()
//     console.log('Checking for No users..')
//     await expect(page.getByText('No Users Detected')).toBeVisible()
//   });

  test('Adding a User', async ({page}) => {
    console.log('Adding a user....')
    await page.waitForTimeout(20000)
    await page.getByRole('button', { name: 'Add Recipient' }).click() 
    await expect(page.locator('app-customize-notifications div').filter({ hasText: 'Name *Email *Phone *NotificationsCancelSave' }).nth(1)).toBeVisible()
    await page.getByLabel('Name *').click()
    await expect(page.getByPlaceholder('Enter Name')).toBeVisible()
    console.log('Entering Name')
    await page.getByPlaceholder('Enter Name').fill(process.env.USERNAME1);
    await page.getByLabel('Email *').click()
    await expect(page.getByPlaceholder('Enter Email address')).toBeVisible()
    console.log('Entering Email')
    await page.getByPlaceholder('Enter Email address').fill(process.env.USEREMAIL1);
    await page.getByLabel('Phone *').click()
    await expect(page.getByPlaceholder('Enter phone number')).toBeVisible()
    console.log('Entering Phone Number')
    await page.getByPlaceholder('Enter phone number').fill(process.env.USERPHONE1);
    await page.getByLabel('Notifications').click()
    console.log('Opting for Payments Notification...')
    await page.getByRole('option', { name: 'Payments Receive timely updates about the pending due payments.' }).click()
    await expect(page.getByLabel('Notification selection').locator('div').filter({ hasText: 'Payments' })).toBeVisible()
    await page.getByRole('button', { name: 'Save' }).click()
    await expect(page.getByText(`Name ${process.env.USERNAME1} Email ${process.env.USEREMAIL1} Phone ${process.env.USERPHONE1}`)).toBeVisible()

  })

  test('Skipping Name Field', async({page}) => {
    await page.waitForTimeout(20000)
    await page.getByRole('button', { name: 'Add Recipient' }).click()
    await expect(page.locator('app-customize-notifications div').filter({ hasText: 'Name *Email *Phone *NotificationsCancelSave' }).nth(1)).toBeVisible()
    await page.getByLabel('Name *').click()
    console.log('Skipping name field')
    await page.getByLabel('Name *').press('Tab')
    await page.waitForTimeout(3000)
    await expect(page.getByText('*Name is required.')).toBeVisible()
  })

  test('Skipping Email Field', async({page}) => {
    await page.waitForTimeout(20000)
    await page.getByRole('button', { name: 'Add Recipient' }).click()
    await expect(page.locator('app-customize-notifications div').filter({ hasText: 'Name *Email *Phone *NotificationsCancelSave' }).nth(1)).toBeVisible()
    await page.getByLabel('Email *').click()
    console.log('Skipping email field')
    await page.getByLabel('Email *').press('Tab')
    await page.waitForTimeout(3000)
    await expect(page.getByText('*Email address is required')).toBeVisible()
  })

  test('Skipping Phone Field', async({page}) => {
    await page.waitForTimeout(20000)
    await page.getByRole('button', { name: 'Add Recipient' }).click()
    await expect(page.locator('app-customize-notifications div').filter({ hasText: 'Name *Email *Phone *NotificationsCancelSave' }).nth(1)).toBeVisible()
    await page.getByLabel('Phone *').click()
    console.log('Skipping phone field')
    await page.getByLabel('Phone *').press('Tab')
    await page.waitForTimeout(3000)
    await expect(page.getByText('*Phone number is required.')).toBeVisible()
  })

  test('Skipping Notification Field', async({page}) => {
    await page.waitForTimeout(20000)
    await page.getByRole('button', { name: 'Add Recipient' }).click()
    await expect(page.locator('app-customize-notifications div').filter({ hasText: 'Name *Email *Phone *NotificationsCancelSave' }).nth(1)).toBeVisible()
    console.log('Entering Name')
    await page.getByLabel('Name *').click()
    await page.getByPlaceholder('Enter Name').fill(Math.random().toString(36).slice(2, 20));
    console.log('Entering email')
    await page.getByLabel('Email *').click()
    await page.getByPlaceholder('Enter Email address').fill(Math.random().toString(36).substring(2,11) + '@gmail.com')
    console.log('Entering phone')
    await page.getByLabel('Phone *').click()
    await page.getByPlaceholder('Enter phone number').fill(Math.random().toString().slice(2,12));
    await page.getByRole('combobox', { name: 'Notifications' }).press('Tab')
    await page.getByRole('button', { name: 'Save' }).press('Tab')
    await expect(page.getByText('*Select atleast one notification.')).toBeVisible()

  })

  test('Checking Number fields with 9 digits', async ({page}) => {
    await page.waitForTimeout(20000)
    await page.getByRole('button', { name: 'Add Recipient' }).click()
    await expect(page.locator('app-customize-notifications div').filter({ hasText: 'Name *Email *Phone *NotificationsCancelSave' }).nth(1)).toBeVisible()
    console.log('Entering Name')
    await page.getByLabel('Name *').click()
    await page.getByPlaceholder('Enter Name').fill(Math.random().toString(36).slice(2, 20));
    console.log('Entering email')
    await page.getByLabel('Email *').click()
    await page.getByPlaceholder('Enter Email address').fill(Math.random().toString(36).substring(2,11) + '@gmail.com')
    console.log('Entering phone')
    console.log('Entering 9 digit phone number')
    await page.getByLabel('Phone *').click()
    await page.getByPlaceholder('Enter phone number').fill(Math.random().toString().slice(2,11));
    await page.getByText('CancelSave').click()
    await expect(page.getByText('*Please enter a valid 10-digit phone number.')).toBeVisible()

  })

  test('Checking Number fields with 11 digits', async ({page}) => {
    await page.waitForTimeout(20000)
    await page.getByRole('button', { name: 'Add Recipient' }).click()
    await expect(page.locator('app-customize-notifications div').filter({ hasText: 'Name *Email *Phone *NotificationsCancelSave' }).nth(1)).toBeVisible()
    console.log('Entering Name')
    await page.getByLabel('Name *').click()
    await page.getByPlaceholder('Enter Name').fill(Math.random().toString(36).slice(2, 20));
    console.log('Entering email')
    await page.getByLabel('Email *').click()
    await page.getByPlaceholder('Enter Email address').fill(Math.random().toString(36).substring(2,11) + '@gmail.com')
    console.log('Entering phone')
    console.log('Entering 11 digit phone number')
    await page.getByLabel('Phone *').click()
    await page.getByPlaceholder('Enter phone number').fill(Math.random().toString().slice(2,14));
    await page.getByText('CancelSave').click()
    await expect(page.getByText('*Please enter a valid 10-digit phone number.')).toBeVisible()
  })

  test('Adding a number that starts with +91', async ({page}) => {
    await page.waitForTimeout(20000)
    await page.getByRole('button', { name: 'Add Recipient' }).click()
    await expect(page.locator('app-customize-notifications div').filter({ hasText: 'Name *Email *Phone *NotificationsCancelSave' }).nth(1)).toBeVisible()
    console.log('Entering Name')
    await page.getByLabel('Name *').click()
    await page.getByPlaceholder('Enter Name').fill(Math.random().toString(36).slice(2, 20));
    console.log('Entering email')
    await page.getByLabel('Email *').click()
    await page.getByPlaceholder('Enter Email address').fill(Math.random().toString(36).substring(2,11) + '@gmail.com')
    console.log('Entering phone')
    console.log('Entering +91 digit phone number')
    await page.getByLabel('Phone *').click()
    await page.getByPlaceholder('Enter phone number').fill('+91' + Math.random().toString().slice(2,12));
    await page.getByText('CancelSave').click()
    await expect(page.getByText('*Please enter a valid 10-digit phone number.')).toBeVisible()
  })


})