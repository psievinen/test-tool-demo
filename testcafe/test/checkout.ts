import {login} from "../model/pages/loginPage";
import {resetAppState} from "../model/utils/utils";
import {
  addBikeLightToCart,
  sortAtoZ,
  sortByPriceHighToLow,
  sortByPriceLowToHigh,
  sortZtoA,
  toShoppingCart
} from "../model/pages/inventoryPage";
import {t} from 'testcafe';
import {
  assertNoFirstName,
  assertNoLastName,
  assertNoPersonalInformationGiven,
  assertNoZipCode, assertPrice, assertQty,
  fillInformation
} from "../model/pages/checkoutPage";
import {continueToCheckout} from "../model/pages/cartPage";

fixture('Checkout tests for saucedemo.com')
  .page('https://www.saucedemo.com/').beforeEach(async () => {
  // Here is a good place to use test cafe Role instead of this
  const username = 'standard_user'
  const password = 'secret_sauce'
  await login(username, password)
  await resetAppState()
  await addBikeLightToCart()
  await toShoppingCart()
  await continueToCheckout()
});

test('No customer information provided', async () => {
  await assertNoPersonalInformationGiven()
})

test('No first name information provided', async () => {
  await assertNoFirstName()
})

test('No last name information provided', async () => {
  await assertNoLastName()
})

test('No postal code information provided', async () => {
  await assertNoZipCode()
})

test('Valid customer information is provided', async () => {
  await fillInformation()
})

test('Validate price and quantity on checkout page 2', async () => {
  await fillInformation()
  await assertQty()
  await assertPrice()
})