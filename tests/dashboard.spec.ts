//LETS SEE IT LATER

import {test , expect } from "../fixtures/baseTest";
import * as userData from "../data/userCredentials.json";

test.describe("Dashboard API Interaction", () => {
    test("Should mock the user profile name on dashboard", async({loginPage , page}) => {

        await page.route("**/employees/action-summary", async(route) => {
            const json = {
                data: {
                    userName: "Senior SDET",
                    role : "Admin"
                }
            };

            await route.fulfill({
                status: 200,
                contentType : "application/json",
                body: JSON.stringify(json)
            });
        });

        await loginPage.navigate();
        await loginPage.login(userData.validUser.username,userData.validUser.password);

        const profileName = await page.locator(".oxd-userdropdown-name");
        await expect(profileName).toHaveText("Senior SDET");

    });
});