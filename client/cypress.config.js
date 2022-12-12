const { defineConfig } = require("cypress");

require("dotenv").config();

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    specPattern: "cypress/intergration/*.spec.ts",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    "cypress-react-selector": {
      root: "#root",
    },
    testToken: process.env.TEST_TOKEN,
  },
});
