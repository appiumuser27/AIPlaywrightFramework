const { test, expect } = require('@playwright/test');
const loginData = require('../testData/loginData.json');

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

test('Login to ParaBank website', async ({ page }) => {
    // Navigate to ParaBank website
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    
    // Get login credentials from test data
    const { username, password } = loginData.validLogin;
    
    // Fill in the login credentials
    await page.fill('input[name="username"]', username);
    await page.fill('input[name="password"]', password);
    
    // Click the login button
    await page.click('input[value="Log In"]');
    
    // Verify the page title after login
    await expect(page).toHaveTitle('ParaBank | Accounts Overview');
});