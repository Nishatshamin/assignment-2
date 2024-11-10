class stUserLocator{
    get stUserNameField(){
        return $("//input[@name='user-name']");
    }

    get stUserpasswordField(){
        return $("//input[@name='password']");
    }

    get stUserloginButtonField(){
        return $("//input[@name='login-button']");
    }

    get stUserhamburgerOpenMenuField(){
        return $("//button[@id='react-burger-menu-btn']");
    }

    get stUserResetAppStateLink(){
        return $("//a[@id='reset_sidebar_link']");
    }

    get stUserhamburgerCloseLink(){
        return $("//button[@id='react-burger-cross-btn']");
    }

    // Click Add to cart button from List
    get stUserAddToCartFromList(){
        return $$("//button[contains(@id,'add-to-cart')]");
    }

    get stUserAddToCartLink(){
        return $("//a[@class='shopping_cart_link']");
    }

    get stUsergetProductNamefromList(){
        return $$("//div[contains(@class, 'inventory_item_name')]");
    }
    get stUsergetProductPricefromList(){
        return $$("//div[contains(@class, 'inventory_item_price')]");
    }
    

    get stUserCheckoutbutton(){
        return $("//button[@id='checkout']");
    }

    get stUserCheckOutFirstName(){
        return $("//input[@id='first-name']");
    }

    get stUserCheckOutLastName(){
        return $("//input[@id='last-name']");
    }

    get stUserCheckOutPostalCode(){
        return $("//input[@id='postal-code']");
    }

    get stUserCheckOutToContinueLink(){
        return $("//input[@id='continue']");
    }

    get itemTotalPriceCheckout(){
        return $("//div[contains(@class,'summary_subtotal_label')]");
    }
    get itemTotalPriceWithTax(){
        return $("//div[@class='summary_total_label']");
    }
    
    get stUserFinishLink(){
        return $("//button[@id='finish']");
    }
    get successfulMessage(){
        return $("//h2[@class='complete-header']");
    }

    get successfulmessageDetails(){
        return $("//div[@class='complete-text']");
    }

    get stUserLogoutLink(){
        return $("//a[@id='logout_sidebar_link']");
    }
}

module.exports = new stUserLocator();