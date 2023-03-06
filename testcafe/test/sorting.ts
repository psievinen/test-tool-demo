import {login} from "../model/pages/loginPage";
import {resetAppState} from "../model/utils/utils";
import {sortAtoZ, sortByPriceHighToLow, sortByPriceLowToHigh, sortZtoA} from "../model/pages/inventoryPage";
import {t} from 'testcafe';

fixture('Sorting tests for saucedemo.com/invetory.html')
  .page('https://www.saucedemo.com/').beforeEach(async () => {
    // Here is a good place to use test cafe Role instead of this
    const username = 'standard_user'
    const password = 'secret_sauce'
    await login(username, password)
    await resetAppState()
});

test('Sort', async () => {
  // sort high to low, price
  await sortByPriceHighToLow()
  // sort low to high, price
  await sortByPriceLowToHigh()
  // sort Z to A, alphabetically
  await sortZtoA()
  // sort A to Z, alphabetically
  await sortAtoZ()
})
