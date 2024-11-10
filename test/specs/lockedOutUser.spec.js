const lockedOutuserActions = require ("../pageobjects/lockedOutUser/lockedOutUserAction")

var loUsername = "locked_out_user";
var password = "secret_sauce";

describe("Locked Out User journey", () => {
    it("should locked out user verify error message", async () => {
        await lockedOutuserActions.clickOnUserName(loUsername);
        await lockedOutuserActions.clickOnUserpassword(password);
        await browser.pause(2000);
        await lockedOutuserActions.clickOnLoginButton();
        await browser.pause(2000);
        const initialErrorMessage = "Epic sadface: Sorry, this user has been locked out.";
        const actualerrorMessge = await lockedOutuserActions.geterrorMessage();
        expect(actualerrorMessge).toEqual(initialErrorMessage);
        await browser.pause(2000);
        await browser.refresh();
})
})
