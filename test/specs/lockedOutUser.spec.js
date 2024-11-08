const lockedOutuserActions = require ("../pageobjects/lockedOutUser/lockedOutUserAction")

var louname = "locked_out_user";
var password = "secret_sauce";

describe("Locked Out User journey", () => {
    it("should locked out user verify error message", async () => {
        await lockedOutuserActions.clickOnUserName(louname);
        await lockedOutuserActions.clickOnUserpassword(password);
        await browser.pause(2000);
        await lockedOutuserActions.clickOnLoginButton();
        await browser.pause(2000);
})
})
