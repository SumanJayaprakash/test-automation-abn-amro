import { test, expect } from "@playwright/test";
import LoginPage from "../pages/Login.page";
import * as users from "../data/credentials.json";

/** * Playwright Automation Script *
Description: This script demonstrates basic automation using Playwright. It navigates to a application path, interacts with the page and performs some actions. 
Author: Suman Jayaprakash 
Date: December 2, 2023 */

test.describe("Login Feature @login", async () => {

    let loginPage: LoginPage;

    test.beforeEach(async ({ page, baseURL }) => {
        loginPage = new LoginPage(page);
        await page.goto('file://C:/Users/Gebruiker/TEST-AUTOMATION-ABN-AMRO/test-automation-abn-amro/src/index.html');
        //await page.goto(`${baseURL}`);
    })

    test("Positive: Admin user tries to login with correct credentials.", async ({ page }) => {

        await loginPage.enterUsername(users.admin.username);
        await loginPage.enterPassword(users.admin.password);

        await loginPage.clickLoginButon();

        //await page.getByText('Home').click();
        //await page.getByText('Products').click();
        //await page.getByText('Contact').click();
        //await page.locator('#content').click();
        await expect(page.getByText('Home')).toHaveText('Home')
    });

    test("Positive: Dev user tries to login with correct credentials.", async ({ page }) => {

        await loginPage.enterUsername(users.Dev.username);
        await loginPage.enterPassword(users.Dev.password);

        await loginPage.clickLoginButon();

        await expect(page.getByText('Home')).toHaveText('Home')
    });

    test("Positive: Simple user tries to login with correct credentials.", async ({ page }) => {

        await loginPage.enterUsername(users.Simple.username);
        await loginPage.enterPassword(users.Simple.password);

        await loginPage.clickLoginButon();

        await expect(page.getByText('Home')).toHaveText('Home')
    });
    test("Negative: User tries to login without credentials.", async ({ page }) => {

        await loginPage.enterUsername("");
        await loginPage.enterPassword("");

        await loginPage.clickLoginButon();
        expect(page.getByRole('heading', { name: 'Automation doesn\'t stop at testing, it\'s just a beginning!' }))

        
    });

    test("Negative: User tries to login without password.", async ({ page }) => {

        await loginPage.enterUsername(users.admin.username);
        await loginPage.enterPassword("");

        await loginPage.clickLoginButon();
        expect(page.getByRole('heading', { name: 'Automation doesn\'t stop at testing, it\'s just a beginning!' }))

    });

    test("Negative: User tries to login without username.", async ({ page }) => {

        await loginPage.enterUsername("");
        await loginPage.enterPassword(users.admin.password);

        await loginPage.clickLoginButon();
        expect(page.getByRole('heading', { name: 'Automation doesn\'t stop at testing, it\'s just a beginning!' }))
    });
})