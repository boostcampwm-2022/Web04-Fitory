const { defineConfig } = require("cypress");

require("dotenv").config();

module.exports = defineConfig({
  video: false,
  screenshotOnRunFailure: false,
  e2e: {
    baseUrl: "http://localhost:3000",
    specPattern: "cypress/integration/*.spec.ts",
  },
  env: {
    "cypress-react-selector": {
      root: "#root",
    },
    testToken: process.env.TEST_TOKEN,
  },
});
