describe('Customer information validation', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.login('standard_user','secret_sauce')
    // cy.resetAppState()
    cy.toShoppingCart()
    cy.get('[data-test="checkout"]').click()
  })

  it('No customer information provided', () => {
    cy.get('#continue').click()
    cy.assertFormErrors('Error: First Name is required')
  })

  it('No first name information provided', () => {
    cy.get('#last-name').type('engineer')
    cy.get('#postal-code').type('postal')
    cy.get('#continue').click()
    cy.assertFormErrors('Error: First Name is required')
  })

  it('No last name information provided', () => {
    cy.get('#first-name').type('test')
    cy.get('#postal-code').type('postal')
    cy.get('#continue').click()
    cy.assertFormErrors('Error: Last Name is required')
  })

  it('No postal code information provided', () => {
    cy.get('#first-name').type('test')
    cy.get('#last-name').type('engineer')
    cy.get('#continue').click()
    cy.assertFormErrors('Error: Postal Code is required')
  })

  it('Valid customer information is provided', () => {
    cy.fillCustomerInformation('test', 'engineer', 'postal')
    cy.url().should('contain', 'checkout-step-two.html')
  })
})

describe('Checkout Page validation', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.login('standard_user','secret_sauce')
    // cy.resetAppState()
    cy.addBikeLightToCart()
    cy.toShoppingCart()
    cy.get('#checkout').click()
    cy.fillCustomerInformation('test', 'engineer', 'postal')
  })

  it('Validate item total', () => {
    cy.get('.cart_quantity').eq(0).should('have.text', '1')
    cy.get('.cart_quantity').eq(1).should('not.exist')
  })

  it('Validate price calculations', () => {
    cy.get('.summary_subtotal_label').eq(0).should('contain.text', '9.99')
    cy.get('.summary_tax_label').eq(0).should('contain.text', '0.80')
    cy.get('.summary_total_label').eq(0).should('contain.text', '10.79')
  })
})