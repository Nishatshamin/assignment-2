const pgUserActions = require ("../pageobjects/performanceGlitch_User/pgUserAction")

const pgUsername = "performance_glitch_user";
var password = "secret_sauce";
const count = 1;
var firstName = "nishat";
var lastName = "sharmin";
var postalCode = "1205";
var TaxPercentage = 0.08;
var productArray = ['Test.allTheThings() T-Shirt (Red)'];

describe("Performance glitch User journey", () => {
    it("Performance glitch User sucessfully Login", async () => {
        await pgUserActions.clickOnpgUserName(pgUsername);
        await pgUserActions.clickOnpgUserPassword(password);
        await browser.pause(2000);
        await pgUserActions.clickOnpgUserLoginButton();
    }) 

    it("Performance Glitch User Menubar open close", async () => {
        await pgUserActions.clickHambrgerOpenMenu();
        await pgUserActions.clickOnResetAppState();
        await browser.pause(2000);
        await pgUserActions.clickOnHamburgerCloseMenu();
        await browser.pause(2000);
        await browser.refresh();      
    })

    it("Performance Glitch User Add to cart Journey", async () => {
      
        await pgUserActions.clicktoOpenNameFilter();
        await browser.pause(2000);
        await pgUserActions.selectNamefromFilter();
       // await browser.pause(2000);
        await pgUserActions.clickAddtoCartFromList(count);
        await browser.pause(2000);
        await pgUserActions.clickOnAddtoCartButton();
        await browser.pause(2000);
    })

    it("Performance Glitch User Checkout Info Journey", async () => {
        await pgUserActions.clickOnCheckout();
        await pgUserActions.checkOutfirstname(firstName);
        await pgUserActions.checkOutlastname(lastName);
        await pgUserActions.checkOutpostalcode(postalCode);       
        await browser.pause(2000);
        await pgUserActions.clickContinueLink();
    })

    it("Performance Glitch User Total Price and With Tax verify Journey", async () => {
        var name = await pgUserActions.getProductNameFromInventory(count);
        expect(name).toEqual(productArray);
        var price = await pgUserActions.getProductPriceFromInventory(count);
        let calculatedTotal = 0;
        for (let i = 0; i < price.length; i++) {
            calculatedTotal += price[i];
        }
        
        const itemPrice = await pgUserActions.getItemTotalPrice();
        expect(calculatedTotal).toEqual(itemPrice);
        const expectedTotal = calculatedTotal + (calculatedTotal * TaxPercentage);
        const totalPricewithTax = await pgUserActions.getItemTotalPriceWithTax();
        expect(expectedTotal).toBeCloseTo(totalPricewithTax);  
        await pgUserActions.clickFinishLink();
        await browser.pause(2000);
    })

    it("Performance Glitch User Successful message Verify Journey", async () => {
        const initiaiSuccessfulMessage = "Thank you for your order!";
        const actualSuccessfulMessge = await pgUserActions.getSuccessfulMessage();
        expect(actualSuccessfulMessge).toEqual(initiaiSuccessfulMessage);

        const initialSuccessfulMesageDetails = "Your order has been dispatched, and will arrive just as fast as the pony can get there!";
        const actualSuccessfulMesageDetails = await pgUserActions.getSuccessfulMessageDetails();
        expect(initialSuccessfulMesageDetails).toEqual(actualSuccessfulMesageDetails);
    })

    it("Performance Glitch User Menubar open,Close and Logout", async () => {
        await pgUserActions.clickHambrgerOpenMenu();
        await pgUserActions.clickOnResetAppState();
        await browser.pause(2000);
        await pgUserActions.clickOnLogoutButton();   
    })
})