import { loginPageLocators } from "../pageLocators/loginPageLocators";


class loginPage extends loginPageLocators {

    async login (username: any, password: any): Promise<void> {
        await this.username.setValue(username);
        await this.password.setValue(password);
        await this.loginButton.click();
    }
}
export default new loginPage();
