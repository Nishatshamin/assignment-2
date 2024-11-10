const stUserLocator = require ("./stUserLocator.js");

class stUserActions {
    async clickOnstuUserName(stUsername) {
        await stUserLocator.stUserNameField.setValue(stUsername);
    }

    async clickOnstuUserPassword(password) {
        await stUserLocator.stUserpasswordField.setValue(password);
    }

    async clickOnstuloginButton() {
        await stUserLocator.stUserloginButtonField.click();

    }

    async clickHamburgerOpenMenu() {
        await stUserLocator.stUserhamburgerOpenMenuField.click();
    }

    async clickOnResetAppState() {
        await stUserLocator.stUserResetAppStateLink.click();
    }

    async clickOnHamburgerCloseMenu() {
        await stUserLocator.stUserhamburgerCloseLink.click();
    }
    // Click Product Add to cart from list with loop
    async clickAddToCartFromList(count) {
        const addToCartButtons = stUserLocator.stUserAddToCartFromList;
        
        for (let i = 0; i < count; i++) {
            await addToCartButtons[i].click();
        }
    }

    async clickOnAddToCart() {
        await stUserLocator.stUserAddToCartLink.click();
    }

    async getproductNameFromInventory(count){
        var productNamefromList = stUserLocator.stUsergetProductNamefromList;
        const itemNames = [];
        for (let i = 0; i < count; i++) {
            var productName = await productNamefromList[i].getText();
            itemNames.push(productName);             
        }
        return itemNames;
    }
    
    async getproductPriceFromInventory(count){
        var productPricefromList = stUserLocator.stUsergetProductPricefromList;
        const itemPrices = [];
        for (let i = 0; i < count; i++) {
            var productPrice = await productPricefromList[i].getText();
            const price = parseFloat(productPrice.replace('$', ''));
            itemPrices.push(price);        
        }
        return itemPrices;
    }

    async clickOnCheckout() {
        await stUserLocator.stUserCheckoutbutton.click();
    }

    async checkOutfirstname(firstName) {
        await stUserLocator.stUserCheckOutFirstName.setValue(firstName);
    }

    async checkOutlastname(lastName) {
        await stUserLocator.stUserCheckOutLastName.setValue(lastName);
    }

    async checkOutpostalcode(postalCode) {
        await stUserLocator.stUserCheckOutPostalCode.setValue(postalCode);
    }
    async clickContinueLink() {
        await stUserLocator.stUserCheckOutToContinueLink.click();
    }

    async getItemTotalPrice(){
       // await browser.pause(2000);
        const itemTotalText = await stUserLocator.itemTotalPriceCheckout.getText();
        const itemTotalprice = await parseFloat(itemTotalText.replace('Item total: $', ''));
        await browser.pause(2000);
        return itemTotalprice;
    }
    async getItemTotalPriceWithTax(){
      //  await browser.pause(2000);
        const itemTotalTax = await stUserLocator.itemTotalPriceWithTax.getText();
        console.log(`ItemTotalTaxText ${itemTotalTax}`);
        const itemTotalwithTax = await parseFloat(itemTotalTax.replace('Total: $', ''));
        await browser.pause(2000);
        console.log(`ItemTotalTaxAmount ${itemTotalwithTax}`);
        return itemTotalwithTax;
    }
    

    async clickFinishLink() {
        await stUserLocator.stUserFinishLink.click();
    }
    async getSuccessfulMessage() {
        return await stUserLocator.successfulMessage.getText();
    }
    async getSuccessfulMessageDetails() {
        return await stUserLocator.successfulmessageDetails.getText();
    }

    async clickOnLogoutButton() {
        await stUserLocator.stUserLogoutLink.click();
    }


}

module.exports = new stUserActions();