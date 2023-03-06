describe('Sorting tests', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.login('standard_user','secret_sauce')
  })

  it('Sort: price is from low to high', () => {
    cy.assertLoHiPriceSort()
  })

  it('Sort: price is from high to low', () => {
    cy.assertHiLoPriceSort()
  })

  it('Sort: names are from A to Z', () => {
    cy.assertAtoZSort()
  })

  it('Sort: names are from Z to A', () => {
    cy.assertZtoASort()
  })
})

describe('Add products to cart', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.login('standard_user','secret_sauce')
  })

  it('Add product to cart from main page', () => {
    cy.addBikeLightToCart()
    cy.toShoppingCart()
    cy.assertBikeLightIsInCart()
  });

  it('Add product to cart from product page', () => {
    // go to bike light detail page
    cy.get('#item_0_title_link').click()
    cy.addBikeLightToCart()
    cy.toShoppingCart()
    cy.assertBikeLightIsInCart()
  });
})

describe('Remove products from cart', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.login('standard_user','secret_sauce')
    cy.addBikeLightToCart()
    cy.toShoppingCart()
    cy.assertBikeLightIsInCart()
    cy.get('[data-test="continue-shopping"]').click()
    cy.url().should('contain', 'inventory.html')
  })

  it('Remove product from cart from main page', () => {
    cy.get('#remove-sauce-labs-bike-light').click()
    cy.assertCartIsEmpty()
  });

  it('Remove product from cart from product page', () => {
    // go to bike light detail page
    cy.get('#item_0_title_link').click()
    cy.get('#remove-sauce-labs-bike-light').click()
    cy.assertCartIsEmpty()
  });

  it('Remove product from cart when in cart page', () => {
    cy.toShoppingCart()
    cy.get('#remove-sauce-labs-bike-light').click()
    cy.get('.inventory_item_name').should('not.exist')
  });
})