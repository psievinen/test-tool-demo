import { t} from "testcafe";
import {assertFailedInput, assertSuccessfulLogin, login, loginPage, logoutAndAssert} from '../model/pages/loginPage'

fixture('Login tests for saucedemo.com site')
  .page('https://www.saucedemo.com/');

test('Login successfully', async () => {
  const username = 'standard_user'
  const password = 'secret_sauce'
  await login(username, password)
  await assertSuccessfulLogin()
})

test('Login with invalid username', async () => {
  const username = 'invalid'
  const password = 'secret_sauce'
  await login(username, password)
  const expectedErrorMsg = 'Epic sadface: Username and password do not match any user in this service'
  await assertFailedInput(expectedErrorMsg)
})

test('Login with invalid password', async () => {
  const username = 'standard_user'
  const password = 'invalid'
  await login(username, password)
  const expectedErrorMsg = 'Epic sadface: Username and password do not match any user in this service'
  await assertFailedInput(expectedErrorMsg)
})

test('Login with empty username', async () => {
  const password = 'secret_sauce'
  await t.typeText(loginPage.password, password)
  await t.click(loginPage.loginButton)
  const expectedErrorMsg = 'Epic sadface: Username is required'
  await assertFailedInput(expectedErrorMsg)
})

test('Login with empty password', async () => {
  const username = 'standard_user'
  await t.typeText(loginPage.username, username)
  await t.click(loginPage.loginButton)
  const expectedErrorMsg = 'Epic sadface: Password is required'
  await assertFailedInput(expectedErrorMsg)
})

test('Login with locked out user', async () => {
  const username = 'locked_out_user'
  const password = 'secret_sauce'
  await login(username, password)
  const expectedErrorMsg = 'Epic sadface: Sorry, this user has been locked out.'
  await assertFailedInput(expectedErrorMsg)
})

test('Logout is successful', async () => {
  const username = 'standard_user'
  const password = 'secret_sauce'
  await login(username, password)
  await logoutAndAssert()
})