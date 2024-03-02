import { loginPageLocators } from "../pageLocators/loginPageLocators";
import { productsPageLocators } from "../pageLocators/productsPageLocators";


class productsPage extends productsPageLocators {

    async getPageHeading(): Promise<string> {
        (await this.pageHeading).waitForDisplayed({
            timeoutMsg: 'Products page heading is not displayed',
          });
        return (await this.pageHeading).getText();
    }
}
export default new productsPage();
