const stUserActions = require("../pageobjects/sandardUser/stUserAction");

const stUsername = "standard_user";
var password = "secret_sauce";
const count = 3;
var firstName = "nishat";
var lastName = "sharmin";
var postalCode = "1205";
var TaxPercentage = 0.08;

var productArray = [
    'Sauce Labs Backpack',
    'Sauce Labs Bike Light',
    'Sauce Labs Bolt T-Shirt' ];

describe("Standard User journey", () => {
    it("should standard user successfully login", async () => {
        await stUserActions.clickOnstuUserName(stUsername);
        await stUserActions.clickOnstuUserPassword(password);
        await browser.pause(2000);
        await stUserActions.clickOnstuloginButton();
    });

    it("standard user Menubar open close", async () => {
        await stUserActions.clickHamburgerOpenMenu();
        await stUserActions.clickOnResetAppState();
        await browser.pause(2000);
        await stUserActions.clickOnHamburgerCloseMenu();
        await browser.pause(2000);
    });

    it("standard user Add to cart", async () => {
        await stUserActions.clickAddToCartFromList(count);
        await browser.pause(2000);
        await stUserActions.clickOnAddToCart();
        await browser.pause(2000);
        await stUserActions.clickOnCheckout();
        await browser.pause(2000);
    });

    it("standard user Checkout Information", async () => {
        await stUserActions.checkOutfirstname(firstName);
        await stUserActions.checkOutlastname(lastName);
        await stUserActions.checkOutpostalcode(postalCode);
        await browser.pause(2000);
        await stUserActions.clickContinueLink();
        await browser.pause(2000);
    });

    it("standard user Total price and Tax Verify", async () => {
        var name = await stUserActions.getproductNameFromInventory(count);
        expect(name).toEqual(productArray);
        var price = await stUserActions.getproductPriceFromInventory(count)
        
        let calculatedTotal = 0;
        for (let i = 0; i < price.length; i++) {
            calculatedTotal += price[i];
        }
        
        const itemPrice = await stUserActions.getItemTotalPrice();
        console.log(`Item Price ${typeof itemPrice}`);
        expect(calculatedTotal).toEqual(itemPrice);
        
        const expectedTotal = calculatedTotal + (calculatedTotal * TaxPercentage);
        const totalPricewithTax = await stUserActions.getItemTotalPriceWithTax();
        expect(expectedTotal).toBeCloseTo(totalPricewithTax);  //

        await stUserActions.clickFinishLink();
        await browser.pause(2000);
    });

    it("standard user Item Order Successful message Verify", async () => {
        const initiaiSuccessfulMessage = "Thank you for your order!";
        const actualSuccessfulMessge = await stUserActions.getSuccessfulMessage();
        expect(actualSuccessfulMessge).toEqual(initiaiSuccessfulMessage);

        const initialSuccessfulMesageDetails = "Your order has been dispatched, and will arrive just as fast as the pony can get there!";
        const actualSuccessfulMesageDetails = await stUserActions.getSuccessfulMessageDetails();
        expect(initialSuccessfulMesageDetails).toEqual(actualSuccessfulMesageDetails);
    });

    it("standard user Menubar open,Close and Logout", async () => {
        await stUserActions.clickHamburgerOpenMenu();
        await stUserActions.clickOnResetAppState();
        await browser.pause(2000);
        await stUserActions.clickOnLogoutButton();
    })
})