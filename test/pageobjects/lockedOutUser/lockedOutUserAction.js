const lockedOutuserLocator = require("./lockedOutUserLocator");

class louLoginActions{
    
    async clickOnUserName(loUsername){
        await lockedOutuserLocator.usernameField.setValue(loUsername);
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