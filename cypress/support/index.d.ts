declare namespace Cypress {
  interface Chainable<Subject = any> {
    clickSubmitFormButton(): Chainable<any>;
    clickClearFormButton(): Chainable<any>;
    fillForm(): Chainable<any>;
    AssertClearedForm(): Chainable<any>;
    visitWebSite(): Chainable<any>;
  }
}