import {Selector, t, ClientFunction} from 'testcafe';

export const cartPage = {
  cartItem: Selector('#cart_contents_container > div > div.cart_list > div.cart_item > div.cart_item_label > a > div'),
  continueShoppingButton: Selector('#continue-shopping'),
  checkoutButton: Selector('#checkout')
}

export async function backlightIsInTheCart() {
  await t.expect(cartPage.cartItem.textContent).eql('Sauce Labs Bike Light')
}

export async function shoppingCartIsEmpty() {
  await t.expect(cartPage.cartItem.exists).notOk()
}

export async function continueShopping() {
  await t.click(cartPage.continueShoppingButton)
  const getLocation = ClientFunction(() => document.location.href);
  await t.expect(getLocation()).contains('inventory.html');
}

export async function continueToCheckout() {
  await t.click(cartPage.checkoutButton)
  const getLocation = ClientFunction(() => document.location.href);
  await t.expect(getLocation()).contains('checkout-step-one.html');
}