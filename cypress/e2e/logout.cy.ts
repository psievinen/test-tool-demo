/*
 * Logout
 */

describe('', () => {
  beforeEach(() => {
    cy.login('standard_user','secret_sauce')
  })

  it('Logout succeeds', () => {
    cy.get('react-burger-menu-btn').click()
    cy.get('logout_sidebar_link').click()
    cy.url().should('be', 'https://www.saucedemo.com/')
  });
})