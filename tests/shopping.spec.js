const { test, expect } = require('@playwright/test');

test('Login and add iPhone X to cart', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

  // Fill in the login credentials
  await page.fill('#username', 'rahulshettyacademy');
  await page.fill('#password', 'learning');

  // Click the sign-in button
  await page.click('#signInBtn');

  // Wait for navigation after login
  await page.waitForNavigation();

  // Find and click on iPhone X card
  const cards = await page.locator('.card-title');
  const titles = await cards.allTextContents();
  
  // Find the index of iPhone X
  const iphoneIndex = titles.findIndex(title => title.includes('iphone X'));
  
  // Get all add to cart buttons
  const addButtons = await page.$$('.card-footer button');
  
  // Click the add to cart button for iPhone X
  if (iphoneIndex !== -1) {
    await addButtons[iphoneIndex].click();
  }

  // Verify item was added to cart (the cart badge should show "1")
  await expect(page.locator('#navbarResponsive li a')).toContainText('1');
});