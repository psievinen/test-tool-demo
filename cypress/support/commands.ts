/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add('login', (username: string, password: string) => {
  cy.get('username').clear().type(username)
  cy.get('password').clear().type(password)
  cy.get('login-button').submit()
})

Cypress.Commands.add('assertFailedLogin', (errorMsg: string) => {
  cy.get('error').should('be.visible')
  cy.get('error').should('contain', errorMsg)
})

Cypress.Commands.add('assertAscendingAlphabetOrder', () => {

})

Cypress.Commands.add('assertDescendingAlphabetOrder', () => {

})

Cypress.Commands.add('assertAscendingPriceOrder', () => {

})

Cypress.Commands.add('assertDescendingPriceOrder', () => {

})

Cypress.Commands.add('clickSubmitFormButton', () => {
  return cy.get('#submit').click();
})

Cypress.Commands.add('clickClearFormButton', () => {
  cy.get('#clear').click();
})

Cypress.Commands.add('fillForm', () => {
  cy.get('#cname').clear().type('Pauli Sievinen')
  cy.get('#cemail').clear().type('fake@email.com')
  cy.get('#cphone').clear().type('0600000000')
  cy.get('#cphone-mobile').check()
  cy.get('#cmessage').clear().type('this is a message box filler text')
  cy.get('#cselect').select('Universe')
  cy.get('#csuccess').check()
})

Cypress.Commands.add('AssertClearedForm', () => {
  cy.get('#cname').should('contain.value', '')
  cy.get('#cemail').should('contain.value', '')
  cy.get('#cphone').should('contain.value', '')
  cy.get('#cphone-home').should('be.checked')
  cy.get('#cmessage').should('contain.value', '')
  cy.get('#csuccess').should('not.be.checked')
})

Cypress.Commands.add('visitWebSite', () => {
  cy.visit('https://aquabottesting.com/')
})

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }