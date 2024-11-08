class lockedOutuserLocator{
    get usernameField(){
        return $("//input[@name='user-name']");
    }

    get passwordField(){
        return $("//input[@name='password']");
    }

    get loginButtonField(){
        return $("//input[@name='login-button']");
    }

    get errorMessage(){
        return $("//h3[@data-test='error']");
    }
}

module.exports = new lockedOutuserLocator();