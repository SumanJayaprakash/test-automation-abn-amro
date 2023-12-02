import { test, expect } from "@playwright/test";
import LoginPage from "../pages/Login.page";
import {HomePage} from "../pages/Home.page";
import * as users from "../data/credentials.json";

test.describe("Home Feature @login", async () => {

    let homepage: HomePage;

    test.beforeEach(async ({ page, baseURL }) => {
        homepage = new HomePage(page);
        await page.goto('file://C:/Users/Gebruiker/TEST-AUTOMATION-ABN-AMRO/test-automation-abn-amro/src/index.html');
        //await page.goto(`${baseURL}`);
    })

    test("Positive: Home Page - Expected titles Home Product Contact and Signout", async ({ page }) => {

        await homepage.enterUsername(users.admin.username);
        await homepage.enterPassword(users.admin.password);

        await homepage.clickLoginButon();

        //await page.getByText('Home').click();
        //await page.getByText('Products').click();
        //await page.getByText('Contact').click();
        //await page.locator('#content').click();
        await expect(page.getByText('Home')).toHaveText('Home')
        expect(page.getByText('Home Products Contact Sign Out')).toBeTruthy()
    });
    test("Negative: Home Page - UnExpected and missing one title", async ({ page }) => {

        await homepage.enterUsername(users.admin.username);
        await homepage.enterPassword(users.admin.password);

        await homepage.clickLoginButon();

        //await page.getByText('Home').click();
        //await page.getByText('Products').click();
        //await page.getByText('Contact').click();
        //await page.locator('#content').click();
        await expect(page.getByText('Home')).toHaveText('Home')
        await expect(page.getByText('Home Products Contact Sign Out')).toHaveText('Home Products Contact')
     
    });

})