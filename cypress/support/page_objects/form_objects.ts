export const formSelectors = {
  nameField: String('#cname'),
  emailField: String('#cemail'),
  phoneField: String('#cphone'),
  openTextField: String('#cmessage'),
  mobilePhoneRadio: String('#cphone-mobile'),
  homePhoneRadio: String('#cphone-home'),
  dropDownMenu: String('#cselect'),
  successMsgCheckBox: String('#csuccess'),
  submitButton: String('#submit'),
  clearButton: String('#clear'),
  successMsg: String('#cmsgSubmit')
}

export function visitWebSite() {
  cy.visit('https://aquabottesting.com/')
}

export function fillForm() {
  cy.get(formSelectors.nameField).clear().type('Pauli Sievinen')
  cy.get(formSelectors.emailField).clear().type('fake@email.com')
  cy.get(formSelectors.phoneField).clear().type('0600000000')
  cy.get(formSelectors.mobilePhoneRadio).check()
  cy.get(formSelectors.openTextField).clear().type('this is a message box filler text')
  cy.get(formSelectors.dropDownMenu).select('Universe')
  cy.get(formSelectors.successMsgCheckBox).check()
}

export function submit() {
  cy.get(formSelectors.submitButton).click()
}

export function clearFields() {
  cy.get(formSelectors.clearButton).click()
}

export function assertSubmitSuccess() {
  cy.get(formSelectors.successMsg).should('contain', 'Message Submitted!')
}

export function assertEmptyFields() {
  cy.get(formSelectors.nameField).should('contain.value', '')
  cy.get(formSelectors.emailField).should('contain.value', '')
  cy.get(formSelectors.phoneField).should('contain.value', '')
  cy.get(formSelectors.homePhoneRadio).should('be.checked')
  cy.get(formSelectors.openTextField).should('contain.value', '')
  cy.get(formSelectors.successMsgCheckBox).should('not.be.checked')
}