import { defineConfig } from "cypress";
import spec = Mocha.reporters.spec;

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.saucedemo.com',
  },
});
