describe('Login tests', () => {
  beforeEach(() => {
    cy.visit('http://www.saucedemo.com')
  })

  it.only('Login with correct credentials', () => {
    cy.login('standard_user','secret_sauce')
    cy.url().should('include', 'inventory.html')
    cy.get('react-burger-menu-btn').should('exist')
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
    cy.login('', 'secret_sauce')
    cy.assertFailedLogin('Epic sadface: Username is required')
  });

  it('Login with empty password', () => {
    cy.login('standard_user', '')
    cy.assertFailedLogin('Epic sadface: Password is required')
  });

  it('Login with blocked user', () => {
    cy.login('', 'secret_sauce')
    cy.assertFailedLogin('Epic sadface: Sorry, this user has been locked out.')
  });
})