const { test, expect } = require('@playwright/test');

test('Login to website and verify page title', async ({ page }) => {
    // Navigate to the login page
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    // Fill in the login credentials
    await page.fill('#username', 'rahulshettyacademy');
    await page.fill('#password', 'learning');

    // Click the sign-in button
    await page.click('#signInBtn');

    // Wait for navigation after login
    await page.waitForNavigation();

    // Verify the page title after successful login
    await expect(page).toHaveTitle('ProtoCommerce');
});