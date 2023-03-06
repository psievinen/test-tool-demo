import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    chromeWebSecurity: false,
  },
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'cypress/reports/report-[hash].xml',
    toConsole: true,
  },
});
