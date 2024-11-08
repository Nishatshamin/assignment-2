const lockedOutuserLocator = require("./lockedOutUserLocator");

class louLoginActions{
    
    async clickOnUserName(louname){
        await lockedOutuserLocator.usernameField.setValue(louname);
    }

    async clickOnUserpassword(password){
        await lockedOutuserLocator.passwordField.setValue(password);
    }

    async clickOnLoginButton(){
        await lockedOutuserLocator.loginButtonField.click();
    }

    async geterrorMessage(){
        return await lockedOutuserLocator.errorMessage.getText();   
    }
}

module.exports = new louLoginActions();