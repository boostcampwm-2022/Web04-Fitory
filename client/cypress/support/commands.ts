// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  interface Chainable {
    login(): void;
  }
}

Cypress.Commands.add("login", () => {
  Cypress.Cookies.debug(true);
  cy.setCookie("access_token", Cypress.env("testToken"));
  window.localStorage.setItem("fitory_auth", "5121");
});
