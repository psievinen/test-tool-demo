# Test Tool Demo

This demo repository targets [Sauce Labs demo site](https://www.saucedemo.com/).

## Requirements

To use this repository you need to have following installed 
1. [Node.js](https://nodejs.org/) 
2. [Chrome](https://www.google.com/chrome/)

## Installation

To install all dependencies use command `npm ci` or `npm install`.

## How To run the tests

Apparently Cypress has some difficulties with this site, 
see: https://github.com/cypress-io/cypress/issues/21213. 
This caused me to not be able to tweak out the issues I 
have in my Cypress implementation. From this follows that the 
Cypress tests will fail, so I recommend to use TestCafé tests 
instead.

1. Cypress CLI: use command `npm run cypress:run`.
2. Cypress GUI: use command `npm run cypress:open`. and follow the E2E test instructions
3. TestCafé in Headless Chrome: `npm run testcafe:headless`
4. TestCafé in Chrome: `npm run testcafe:chrome`