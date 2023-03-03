declare namespace Cypress {
  interface Chainable<Subject = any> {
    clickSubmitFormButton(): Chainable<any>;
    clickClearFormButton(): Chainable<any>;
    fillForm(): Chainable<any>;
    AssertClearedForm(): Chainable<any>;
    visitWebSite(): Chainable<any>;
    login(username: string, password: string): Chainable<any>;
    assertFailedLogin(errorMsg: string): Chainable<any>;
    assertAscendingAlphabetOrder(): Chainable<any>;
    assertDescendingAlphabetOrder(): Chainable<any>;
    assertAscendingPriceOrder(): Chainable<any>;
    assertDescendingPriceOrder(): Chainable<any>;
  }
}