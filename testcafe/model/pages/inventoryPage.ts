import {Selector, t, ClientFunction} from 'testcafe';

export const inventoryPage = {
  inventoryItemTitle: (itemNo: number): Selector => {
    return Selector(
      `#inventory_container > div > div:nth-child(${itemNo}) > div.inventory_item_description > div.inventory_item_label > a > div`
    );
  },
  inventoryItemLabel: (labelNo: number): Selector => {
    return Selector(`#inventory_container > div > div:nth-child(${labelNo}) > div.inventory_item_description > div.inventory_item_label`)
  },
  inventoryList: Selector('#inventory_container > div')
    .withAttribute('class', 'inventory_list'),
  hamburgerMenu: Selector('#react-burger-menu-btn'),
  resetAppState: Selector('#reset_sidebar_link'),
  logoutButton: Selector('#logout_sidebar_link'),
  sortDropdown: Selector('#header_container > div.header_secondary_container > div > span > select'),
  bikeLightAddToCartButton: Selector('#add-to-cart-sauce-labs-bike-light'),
  bikeLightRemoveFromCartButton: Selector('#remove-sauce-labs-bike-light'),
  bikeLightPageLink: Selector('#item_0_title_link'),
  shoppingCart: Selector('#shopping_cart_container'),
  shoppingCardBadge: Selector('#shopping_cart_container > a > span'),
}

export async function sortZtoA() {
  const itemOrder = ['Test.allTheThings() T-Shirt (Red)',
    'Sauce Labs Onesie', 'Sauce Labs Fleece Jacket', 'Sauce Labs Bolt T-Shirt',
    'Sauce Labs Bike Light', 'Sauce Labs Backpack']
  const itemCount = await inventoryPage.inventoryList.childElementCount
  const sortOption = inventoryPage.sortDropdown.find('option')
  await t.click(inventoryPage.sortDropdown).click(sortOption.withText('Name (Z to A)'))
  for (let i = 1; i <= itemCount; i++) {
    const title = await inventoryPage.inventoryItemTitle(i).textContent
    await t.expect(itemOrder[i-1]).eql(title)
  }
}

export async function sortAtoZ() {
  const itemOrder = ['Test.allTheThings() T-Shirt (Red)',
    'Sauce Labs Onesie', 'Sauce Labs Fleece Jacket', 'Sauce Labs Bolt T-Shirt',
    'Sauce Labs Bike Light', 'Sauce Labs Backpack']
  const itemCount = await inventoryPage.inventoryList.childElementCount
  const sortOption = inventoryPage.sortDropdown.find('option')
  await t.click(inventoryPage.sortDropdown).click(sortOption.withText('Name (A to Z)'))
  for (let i = 1; i <= itemCount; i++) {
    const title = await inventoryPage.inventoryItemTitle(i).textContent
    await t.expect(itemOrder[itemCount-i]).eql(title)
  }
}

export async function sortByPriceHighToLow() {
  const itemOrder = ['Sauce Labs Fleece Jacket', 'Sauce Labs Backpack',
    'Sauce Labs Bolt T-Shirt', 'Test.allTheThings() T-Shirt (Red)', 'Sauce Labs Bike Light',
    'Sauce Labs Onesie']
  const itemCount = await inventoryPage.inventoryList.childElementCount
  const sortOption = inventoryPage.sortDropdown.find('option')
  await t.click(inventoryPage.sortDropdown).click(sortOption.withText('Price (high to low)'))
  for (let i = 1; i <= itemCount; i++) {
    const title = await inventoryPage.inventoryItemTitle(i).textContent
    await t.expect(itemOrder[i-1]).eql(title)
  }
}

export async function sortByPriceLowToHigh() {
  const itemOrder = ['Sauce Labs Onesie', 'Sauce Labs Bike Light',
    'Sauce Labs Bolt T-Shirt', 'Test.allTheThings() T-Shirt (Red)',
    'Sauce Labs Backpack', 'Sauce Labs Fleece Jacket']
  const itemCount = await inventoryPage.inventoryList.childElementCount
  const sortOption = inventoryPage.sortDropdown.find('option')
  await t.click(inventoryPage.sortDropdown).click(sortOption.withText('Price (low to high)'))
  for (let i = 1; i <= itemCount; i++) {
    const title = await inventoryPage.inventoryItemTitle(i).textContent
    await t.expect(itemOrder[i-1]).eql(title)
  }
}

export async function addBikeLightToCart() {
  await t.click(inventoryPage.bikeLightAddToCartButton)
  await t.expect(inventoryPage.shoppingCardBadge.textContent).eql('1')
}

export async function removeBikeLightFromCart() {
  await t.click(inventoryPage.bikeLightRemoveFromCartButton)
  await t.expect(inventoryPage.shoppingCardBadge.exists).notOk()
}

export async function toShoppingCart() {
  await t.click(inventoryPage.shoppingCart)
  const getLocation = ClientFunction(() => document.location.href);
  await t.expect(getLocation()).contains('cart.html');
}

export async function toBikeLightDetailPage() {
  await t.click(inventoryPage.bikeLightPageLink)
  const getLocation = ClientFunction(() => document.location.href);
  await t.expect(getLocation()).contains('inventory-item.html?id=0');
}