import {Selector, t, ClientFunction} from 'testcafe';
import {assertFailedInput} from "./loginPage";

export const checkoutPage = {
  fname: Selector('#first-name'),
  lname: Selector('#last-name'),
  zip: Selector('#postal-code'),
  continueButton: Selector('#continue'),
}

export const checkoutOverviewPage = {
  qty: Selector('#checkout_summary_container > div > div.cart_list > div.cart_item > div.cart_quantity'),
  itemPrice: Selector('#checkout_summary_container > div > div.summary_info > div.summary_subtotal_label'),
  tax: Selector('#checkout_summary_container > div > div.summary_info > div.summary_tax_label'),
  totalPrice: Selector('#checkout_summary_container > div > div.summary_info > div.summary_info_label.summary_total_label'),
}

export async function fillInformation() {
  await t.typeText(checkoutPage.fname, 'test')
  await t.typeText(checkoutPage.lname, 'engineer')
  await t.typeText(checkoutPage.zip, 'postal')
  await t.click(checkoutPage.continueButton)
  const getLocation = ClientFunction(() => document.location.href);
  await t.expect(getLocation()).contains('checkout-step-two.html');
}

export async function assertNoFirstName() {
  await t.typeText(checkoutPage.lname, 'engineer')
  await t.typeText(checkoutPage.zip, 'postal')
  await t.click(checkoutPage.continueButton)
  await assertFailedInput('Error: First Name is required')
}

export async function assertNoLastName() {
  await t.typeText(checkoutPage.fname, 'test')
  await t.typeText(checkoutPage.zip, 'postal')
  await t.click(checkoutPage.continueButton)
  await assertFailedInput('Error: Last Name is required')
}

export async function assertNoZipCode() {
  await t.typeText(checkoutPage.fname, 'test')
  await t.typeText(checkoutPage.lname, 'engineer')
  await t.click(checkoutPage.continueButton)
  await assertFailedInput('Error: Postal Code is required')
}

export async function assertNoPersonalInformationGiven() {
  await t.click(checkoutPage.continueButton)
  await assertFailedInput('Error: First Name is required')
}

export async function assertQty() {
  await t.expect(checkoutOverviewPage.qty.textContent).eql('1')
}

export async function assertPrice() {
  await t.expect(checkoutOverviewPage.itemPrice.textContent).contains('9.99')
  await t.expect(checkoutOverviewPage.tax.textContent).contains('0.80')
  await t.expect(checkoutOverviewPage.totalPrice.textContent).contains('10.79')
}