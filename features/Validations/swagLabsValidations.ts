import { expect } from 'chai';

export class swagLabsValidations {
   /**
   * This Function validate whether the products page heading
   * @param expectedPageHeading
   * @param actualPageHeading
   * @param errorMessage
   */
  async validatePageHeading(
    expectedPageHeading: any,
    actualPageHeading: any,
    errorMessage: any,
  ): Promise<any> {
    expect(expectedPageHeading).to.be.equal(actualPageHeading, errorMessage);
  }
}
export default new swagLabsValidations();
