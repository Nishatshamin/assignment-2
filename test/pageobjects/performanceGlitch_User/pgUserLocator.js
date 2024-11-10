class pgUserLocator {
    get pgUserNameField() {
        return $("//input[@name='user-name']");
    }
    get pgUserPasswordField() {
        return $("//input[@name='password']");
    }
    get pgUserloginButtonField() {
        return $("//input[@name='login-button']");
    }
    get pgUserhamburgerOpenMenuField() {
        return $("//button[@id='react-burger-menu-btn']");
    }

    get pgUserResetAppStateLink() {
        return $("//a[@id='reset_sidebar_link']");
    }

    get pgUserhamburgerCloseLink() {
        return $("//button[@id='react-burger-cross-btn']");
    }

    get pgUserOpenNameFilterField() {
        return $("//select[@class='product_sort_container']");
    }

    get pgUserSelectNameFromFilter() {
        return $("//option[contains(text(),'Name (Z to A)')]");
    }

    // Add to cart  from the List
    get pgUserAddToCartFromList() {
        return $$("//button[contains(@id,'add-to-cart')]");
    }
    
    get pgUserAddtoCartLink() {
        return $("//a[@class='shopping_cart_link']");
    }

    get pgUserCheckoutbutton() {
        return $("//button[@id='checkout']");
    }

    get pgUserCheckOutFirstName() {
        return $("//input[@id='first-name']");
    }

    get pgUserCheckOutLastName() {
        return $("//input[@id='last-name']");
    }

    get pgUserCheckOutPostalCode() {
        return $("//input[@id='postal-code']");
    }

    get pgUserCheckOutToContinueLink() {
        return $("//input[@id='continue']");
    }
    
    get pgUsergetProductNamefromInventory() {   // Get Product Name and Price from Inventory Cart
        return $$("//div[contains(@class, 'inventory_item_name')]");
    }
    get pgUsergetProductPricefromInventory() {
        return $$("//div[contains(@class, 'inventory_item_price')]");
    }

    get pgUseritemTotalPriceCheckout() {
        return $("//div[contains(@class,'summary_subtotal_label')]");
    }
    get pgUseritemTotalPriceWithTax() {
        return $("//div[@class='summary_total_label']");
    }

    get pgUserFinishLink() {
        return $("//button[@id='finish']");
    }

    get successfulMessage() {
        return $("//h2[@class='complete-header']");
    }

    get successfulmessageDetails(){
        return $("//div[@class='complete-text']");
    }

    get pgUserLogoutLink() {
        return $("//a[@id='logout_sidebar_link']");
    }


}
module.exports = new pgUserLocator();