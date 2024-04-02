import { test, expect } from '@playwright/test';

test('basictest', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByPlaceholder('Search').fill('Sam Chui');
  await page.getByPlaceholder('Search').press('Enter');
  await page.getByRole('link', { name: 'Sam Chui Sam Chui @SamChui•3.' }).click();
  await page.locator('#c4-player video').click();
  await page.getByText('19:18 Now playing Watch later').click();
  await page.getByText('Normal').click();
  await page.getByText('0.5').click();
  await page.getByRole('menuitem', { name: 'Quality Auto (480p)' }).locator('div').nth(2).click();
  await page.getByRole('menuitemradio', { name: '1080p HD' }).locator('div').nth(1).click();
  await page.getByRole('link', { name: 'YouTube Home' }).click();
});