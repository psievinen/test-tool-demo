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

Cypress.Commands.add('assertFormErrors', (errorMsg: string) => {
  cy.get('error').should('be.visible')
  cy.get('error').should('contain', errorMsg)
})

Cypress.Commands.add('fillCustomerInformation', (fname: string, lname: string, zip: string) => {
  cy.get('firstName').type('test')
  cy.get('lastName').type('engineer')
  cy.get('postalCode').type('postal')
  cy.get('continue').submit()
})

Cypress.Commands.add('assertZtoASort', () => {
  cy.get('product_sort_container').select('za').should('have.text', 'Name (Z to A)')
  // TODO: all sorting checks should be put into a function which takes as inputs the length of the list
  //  and values in a array which is ordered correctly
  cy.get('.inventory_item_name').eq(0).should('contain.text', 'Test.allTheThings() T-Shirt (Red)')
  cy.get('.inventory_item_name').eq(1).should('contain.text', 'Sauce Labs Onesie')
  cy.get('.inventory_item_name').eq(2).should('contain.text', 'Sauce Labs Fleece Jacket')
  cy.get('.inventory_item_name').eq(3).should('contain.text', 'Sauce Labs Bolt T-Shirt')
  cy.get('.inventory_item_name').eq(4).should('contain.text', 'Sauce Labs Bike Light')
  cy.get('.inventory_item_name').eq(5).should('contain.text', 'Sauce Labs Backpack')
})

Cypress.Commands.add('assertAtoZSort', () => {
  cy.get('product_sort_container').select('az').should('have.text', 'Name (A to Z')
  // See comment on `assertZtoASort`
  cy.get('.inventory_item_name').eq(0).should('contain.text', 'Sauce Labs Backpack')
  cy.get('.inventory_item_name').eq(1).should('contain.text', 'Sauce Labs Bike Light')
  cy.get('.inventory_item_name').eq(2).should('contain.text', 'Sauce Labs Bolt T-Shirt')
  cy.get('.inventory_item_name').eq(3).should('contain.text', 'Sauce Labs Fleece Jacket')
  cy.get('.inventory_item_name').eq(4).should('contain.text', 'Sauce Labs Onesie')
  cy.get('.inventory_item_name').eq(5).should('contain.text', 'Test.allTheThings() T-Shirt (Red)')
})

Cypress.Commands.add('assertLoHiPriceSort', () => {
  cy.get('product_sort_container').select('lohi').should('have.text', 'Price (low to high)')
  // See comment on `assertZtoASort
  cy.get('.inventory_item_name').eq(0).should('contain.text', 'Sauce Labs Onesie')
  cy.get('.inventory_item_name').eq(1).should('contain.text', 'Sauce Labs Bike Light')
  cy.get('.inventory_item_name').eq(2).should('contain.text', 'Sauce Labs Bolt T-Shirt')
  cy.get('.inventory_item_name').eq(3).should('contain.text', 'Test.allTheThings() T-Shirt (Red)')
  cy.get('.inventory_item_name').eq(4).should('contain.text', 'Sauce Labs Backpack')
  cy.get('.inventory_item_name').eq(5).should('contain.text', 'Sauce Labs Fleece Jacket')
})

Cypress.Commands.add('assertHiLoPriceSort', () => {
  cy.get('product_sort_container').select('hilo').should('have.text', 'Price (high to low)')
  // See comment on `assertZtoASort
  cy.get('.inventory_item_name').eq(5).should('contain.text', 'Sauce Labs Onesie')
  cy.get('.inventory_item_name').eq(4).should('contain.text', 'Sauce Labs Bike Light')
  cy.get('.inventory_item_name').eq(3).should('contain.text', 'Test.allTheThings() T-Shirt (Red)')
  cy.get('.inventory_item_name').eq(2).should('contain.text', 'Sauce Labs Bolt T-Shirt')
  cy.get('.inventory_item_name').eq(1).should('contain.text', 'Sauce Labs Backpack')
  cy.get('.inventory_item_name').eq(0).should('contain.text', 'Sauce Labs Fleece Jacket')
})

Cypress.Commands.add('toShoppingCart', () => {
  cy.get('shopping_cart_container').click()
  cy.url().should('contain', 'cart.html')
})

Cypress.Commands.add('resetAppState', () => {
  cy.get('react-burger-menu-btn').click()
  cy.get('reset_sidebar_link').click()
  // reload page to circumvent possible obstacles
  document.location.reload()
})

Cypress.Commands.add('addBikeLightToCart', () => {
  cy.get('add-to-cart-sauce-labs-bike-light').click()
  cy.get('remove-sauce-labs-bike-light').should('have.text', 'Remove')
  cy.get('span.shopping_cart_badge').should('have.text', '1')
})

Cypress.Commands.add('assertBikeLightIsInCart', () => {
  cy.get('.inventory_item_name').eq(0).should('have.text', 'Sauce Labs Bike Light')
})

Cypress.Commands.add('assertCartIsEmpty', () => {
  cy.toShoppingCart()
  cy.get('.inventory_item_name').should('not.exist')
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