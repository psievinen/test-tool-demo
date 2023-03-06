import {login} from "../model/pages/loginPage";
import {resetAppState} from "../model/utils/utils";
import {
    addBikeLightToCart,
    removeBikeLightFromCart,
    toBikeLightDetailPage,
    toShoppingCart
} from "../model/pages/inventoryPage";
import {backlightIsInTheCart, continueShopping, shoppingCartIsEmpty} from "../model/pages/cartPage";

fixture('Shopping cart tests for saucedemo.com')
  .page('https://www.saucedemo.com/').beforeEach(async () => {
    // Here is a good place to use test cafe Role instead of this
    const username = 'standard_user'
    const password = 'secret_sauce'
    await login(username, password)
    await resetAppState()
});

test('Add bike light to shopping cart and remove it using main page', async () => {
    await addBikeLightToCart()
    await toShoppingCart()
    await backlightIsInTheCart()
    await continueShopping()
    await removeBikeLightFromCart()
    await toShoppingCart()
    await shoppingCartIsEmpty()
})

test('Add bike light to shopping cart and remove it using bike light detail page', async () => {
    await toBikeLightDetailPage()
    await addBikeLightToCart()
    await toShoppingCart()
    await backlightIsInTheCart()
    await continueShopping()
    await toBikeLightDetailPage()
    await removeBikeLightFromCart()
    await toShoppingCart()
    await shoppingCartIsEmpty()
})

