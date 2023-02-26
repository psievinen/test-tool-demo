import {
  fillForm,
  assertSubmitSuccess,
  submit,
  assertEmptyFields,
  clearFields,
  visitWebSite
} from "../support/page_objects/form_objects";

describe('', () => {
  beforeEach(() => {
    visitWebSite()
  });

  it('POM: Fill form and submit', () => {
    fillForm()
    submit()
    assertSubmitSuccess()
  });

  it('POM: Clearing form data works', () => {
    fillForm()
    clearFields()
    assertEmptyFields()
  });
});