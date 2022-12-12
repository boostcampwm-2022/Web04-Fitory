describe("홈 페이지", () => {
  before(() => {
    cy.login();
    cy.intercept("GET", "/api/users/get?userId=5001", { fixture: "user.json" });
    cy.visit("");
    cy.waitForReact();
  });

  it("사용자 이름과 티어가 정상적으로 표시된다.", () => {
    cy.get("[data-testid=user-name").should("be.visible");
    cy.get("[data-testid=user-tier").should("be.visible");
  });
});
