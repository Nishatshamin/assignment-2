const pgUserLocator = require("./pgUserLocator");

class pgUserActions {
    async clickOnpgUserName(pgUsername) {
        await pgUserLocator.pgUserNameField.setValue(pgUsername);
    }
    async clickOnpgUserPassword(password) {
        await pgUserLocator.pgUserPasswordField.setValue(password);
    }
    async clickOnpgUserLoginButton() {
        await pgUserLocator.pgUserloginButtonField.click();
    }
    async clickHambrgerOpenMenu() {
        await pgUserLocator.pgUserhamburgerOpenMenuField.click();
    }

    async clickOnResetAppState() {
        await pgUserLocator.pgUserResetAppStateLink.click();
    }

    async clickOnHamburgerCloseMenu() {
        await pgUserLocator.pgUserhamburgerCloseLink.click();
    }

    async clicktoOpenNameFilter() {
        await pgUserLocator.pgUserOpenNameFilterField.click();
    }
    async selectNamefromFilter() {
        await pgUserLocator.pgUserSelectNameFromFilter.click();
    }

    // Product Add to cart from the list

    async clickAddtoCartFromList(count) {
        const addToCartButtons = pgUserLocator.pgUserAddToCartFromList;

        for (let i = 0; i < count; i++) {
            await addToCartButtons[i].click();
        }
    }
    
    async clickOnAddtoCartButton() {
        await pgUserLocator.pgUserAddtoCartLink.click();
    }

    async clickOnCheckout() {
        await pgUserLocator.pgUserCheckoutbutton.click();
    }

    async checkOutfirstname(firstName) {
        await pgUserLocator.pgUserCheckOutFirstName.setValue(firstName);
    }

    async checkOutlastname(lastName) {
        await pgUserLocator.pgUserCheckOutLastName.setValue(lastName);
    }

    async checkOutpostalcode(postalCode) {
        await pgUserLocator.pgUserCheckOutPostalCode.setValue(postalCode);
    }

    async clickContinueLink() {
        await pgUserLocator.pgUserCheckOutToContinueLink.click();
    }

    //Get product Name From the Inventory Cart
    async getProductNameFromInventory(count) {
        var productNamefromList = pgUserLocator.pgUsergetProductNamefromInventory;
        const itemNames = [];
        for (let i = 0; i < count; i++) {
            var productName = await productNamefromList[i].getText();
            itemNames.push(productName);

        }
        return itemNames;
    }
    // Get product Price From the Inventory Cart
    async getProductPriceFromInventory(count) {
        var productPricefromList = pgUserLocator.pgUsergetProductPricefromInventory;
        const itemPrices = [];
        for (let i = 0; i < count; i++) {
            var productPrice = await productPricefromList[i].getText();
            const price = parseFloat(productPrice.replace('$', ''));
            itemPrices.push(price);         
        }
        return itemPrices;
    }

    async getItemTotalPrice() {
        await browser.pause(2000);
        const itemTotalText = await pgUserLocator.pgUseritemTotalPriceCheckout.getText();
        const itemTotalprice = await parseFloat(itemTotalText.replace('Item total: $', ''));
        await browser.pause(2000);
        return itemTotalprice;
    }
    async getItemTotalPriceWithTax() {
        await browser.pause(2000);
        const itemTotalTax = await pgUserLocator.pgUseritemTotalPriceWithTax.getText();
        console.log(`TotalPriceTaxText ${itemTotalTax}`);
        const itemTotalwithTax = parseFloat(itemTotalTax.replace('Total: $', ''));
        console.log(`TotalPricewith_Amount ${itemTotalwithTax}`);
        await browser.pause(2000);
        return itemTotalwithTax;
    }

    async clickFinishLink() {
        await pgUserLocator.pgUserFinishLink.click();
    }
    async getSuccessfulMessage() {
        return await pgUserLocator.successfulMessage.getText();
    }

    async getSuccessfulMessageDetails() {
        return await pgUserLocator.successfulmessageDetails.getText();
    }

    async clickOnLogoutButton() {
        await pgUserLocator.pgUserLogoutLink.click();
    }


}
module.exports = new pgUserActions();