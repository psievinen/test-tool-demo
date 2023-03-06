import {ClientFunction, Selector, t} from 'testcafe';
import {inventoryPage} from "./inventoryPage";

export const loginPage = {
  username: Selector('#root').find('input').withAttribute('data-test', 'username'),
  password: Selector('#root').find('input').withAttribute('data-test', 'password'),
  loginButton: Selector('#root').find('input').withAttribute('data-test', 'login-button'),
  error: Selector('#root').find('h3').withAttribute('data-test', 'error')
}

export async function login(username: string, password: string) {
  await t.typeText(loginPage.username, username, {replace: true, paste: true})
  await t.typeText(loginPage.password, password, {replace: true, paste: true})
  await t.click(loginPage.loginButton)
}

export async function assertSuccessfulLogin() {
  const getLocation = ClientFunction(() => document.location.href);
  await t.expect(getLocation()).contains('inventory.html');
}

export async function assertFailedInput(errorMsg: string) {
  await t.expect(loginPage.error.textContent).eql(errorMsg)
}

export async function logoutAndAssert() {
  await t.click(inventoryPage.hamburgerMenu)
  await t.click(inventoryPage.logoutButton)
  const getLocation = ClientFunction(() => document.location.href);
  await t.expect(getLocation()).eql('https://www.saucedemo.com/');
}