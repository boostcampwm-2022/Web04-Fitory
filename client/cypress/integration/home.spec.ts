describe("홈 페이지", () => {
  before(() => {
    cy.login();
    cy.visit("/");
  });

  it("사용자 이름과 티어가 정상적으로 표시된다.", () => {
    const nameSelector = "[data-testid=home-name]";
    const tierSelector = "[data-testid=home-tier]";
    cy.get(nameSelector).should("be.visible");
    cy.get(tierSelector).should("be.visible");
    assert.isNotNull(cy.get(nameSelector));
    assert.isNotEmpty(cy.get(nameSelector));
    assert.isNotNull(cy.get(tierSelector));
    assert.isNotEmpty(cy.get(tierSelector));
  });

  it("사용자의 최고 3대 운동 합이 정상적으로 표시된다.", () => {
    const selector = "[data-testid=home-best-challenge-sum]";
    cy.get(selector).should("be.visible");
    assert.isNotNull(cy.get(selector));
    assert.isNotEmpty(cy.get(selector));
  });

  it("사용자의 누적중량과 운동 횟수가 정상적으로 표시된다.", () => {
    const weightSelector = "[data-testid=home-total-weight]";
    const exerciseCountSelector = "[data-testid=home-total-exercise-count]";
    cy.get(weightSelector).should("be.visible");
    cy.get(exerciseCountSelector).should("be.visible");
    assert.isNotNull(cy.get(weightSelector));
    assert.isNotEmpty(cy.get(weightSelector));
    assert.isNotNull(cy.get(exerciseCountSelector));
    assert.isNotEmpty(cy.get(exerciseCountSelector));
  });

  it("캘린더 히트맵(잔디)이 정상적으로 표시돤다.", () => {
    const selector = "[data-testid=calendar-heatmap]";
    cy.get(selector).should("be.visible");
  });

  it("캘린더가 정상적으로 표시돤다.", () => {
    const selector = "[data-testid=calendar]";
    cy.get(selector).should("be.visible");
  });
});
