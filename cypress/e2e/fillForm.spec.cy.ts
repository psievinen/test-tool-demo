describe('Form examples', () => {
  beforeEach(() => {
    cy.visitWebSite()
  })

  it('Fill form and submit', () => {
    cy.fillForm()
    cy.clickSubmitFormButton()
    cy.get('#cmsgSubmit').should('contain', 'Message Submitted!')
  });

  it('Clearing form data works', () =>  {
    cy.fillForm()
    cy.clickClearFormButton()
    cy.AssertClearedForm()
  });
})