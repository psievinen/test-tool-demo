# Test Tool Demo

This demo repository targets [Sauce Labs demo site](https://www.saucedemo.com/)

Apparently Cypress has some difficulties with this site see: https://github.com/cypress-io/cypress/issues/21213 

## Requirements

To use this repository you need to have [Node.js](https://nodejs.org/) installed

## Installation

To install all dependencies use `npm ci` or `npm install`.

## How To run the tests

1. Cypress CLI: use command `npm run cypress:run`.
2. Cypress GUI: use command `npm run cypress:open`. and follow the E2E test instructions
3. TestCafé in Headless Chrome: `npm run testcafe:headless`
4. TestCafé in Chrome: `npm run testcafe:chrome`