import {test , expect} from "../fixtures/baseTest";

import * as userData from "../data/userCredentials.json";

test.describe("Authentication Flow", () => {
    test("Valid Login @smoke", async ({loginPage , page}) => {

        test.info().annotations.push({type:'owner', description: "Valid Login"});
        await loginPage.navigate();
        await loginPage.login(userData.validUser.username , userData.validUser.password);

        await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
        
    })

    test("Invalid Login @smoke", async ({loginPage , page}) => {
        
        test.info().annotations.push({type: "owner", description: "Invalid Login"});

        await loginPage.navigate();
        await loginPage.login(userData.invalidUser.username,userData.invalidUser.password);

        await expect(loginPage.getErrorMessageLocator()).toBeVisible();
    })
})

