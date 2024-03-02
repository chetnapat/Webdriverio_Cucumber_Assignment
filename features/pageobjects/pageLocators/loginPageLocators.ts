export class loginPageLocators {
    /**
     * this page has locators of login page of swag labs website
     */
    get username () {
        return $('#user-name');
    }

    get password () {
        return $('#password');
    }

    get loginButton () {
        return $('input[type="submit"]');
    }
}