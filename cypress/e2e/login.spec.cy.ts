describe('Login tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Login with correct credentials', () => {
    cy.login('standard_user','secret_sauce')
    cy.url().should('include', 'inventory.html')
  })

  it('Login with invalid username', () => {
    cy.login('invalid', 'secret_sauce')
    cy.assertFailedLogin('Epic sadface: Username and password do not match any user in this service')
  });

  it('Login with invalid password', () => {
    cy.login('standard_user', 'invalid')
    cy.assertFailedLogin('Epic sadface: Username and password do not match any user in this service')
  });

  it('Login with invalid credentials', () => {
    cy.login('invalid', 'invalid')
    cy.assertFailedLogin('Epic sadface: Username and password do not match any user in this service')
  });

  it('Login with empty username', () => {
    // cy.get('[data-test="username"]').clear().type('standard_user')
    cy.get('[data-test="password"]').clear().type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.assertFailedLogin('Epic sadface: Username is required')
  });

  it('Login with empty password', () => {
    cy.get('[data-test="username"]').clear().type('standard_user')
    // cy.get('[data-test="password"]').clear().type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.assertFailedLogin('Epic sadface: Password is required')
  });

  it('Login with blocked user', () => {
    cy.login('locked_out_user', 'secret_sauce')
    cy.assertFailedLogin('Epic sadface: Sorry, this user has been locked out.')
  });
})