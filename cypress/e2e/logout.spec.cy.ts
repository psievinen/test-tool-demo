describe('', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.login('standard_user','secret_sauce')
  })

  it('Logout succeeds', () => {
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()
    cy.url().should('eql', 'https://www.saucedemo.com/')
  });
})