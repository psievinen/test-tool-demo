declare namespace Cypress {
  interface Chainable<Subject = any> {
    login(username: string, password: string): Chainable<any>;
    assertFailedLogin(errorMsg: string): Chainable<any>;
    assertFormErrors(errorMsg: string): Chainable<any>;
    fillCustomerInformation(fname: string, lname: string, zip: string): Chainable<any>;
    assertZtoASort(): Chainable<any>;
    assertAtoZSort(): Chainable<any>;
    assertLoHiPriceSort(): Chainable<any>;
    assertHiLoPriceSort(): Chainable<any>;
    toShoppingCart(): Chainable<any>;
    resetAppState(): Chainable<any>;
    addBikeLightToCart(): Chainable<any>;
    assertBikeLightIsInCart(): Chainable<any>;
    assertCartIsEmpty(): Chainable<any>;
  }
}