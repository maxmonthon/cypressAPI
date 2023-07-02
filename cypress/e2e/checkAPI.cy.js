describe('RestAPI', () => {
  it('Open Supplier pages', () => {
    cy.intercept({ method: "GET", url: "**/suppliers**" }).as("suppliers")
    cy.visit('http://localhost:3000/')
    cy.get("#root > div > div > a:nth-child(1) > h1").click();
    cy.wait("@suppliers").should((result) => {
      expect(result.response.statusCode).to.eq(304);
    });
  });
  it('Open Supplier Edit ', () => {
    cy.intercept({ method: "PUT", url: "**/supplierupdate**" }).as("supplierupdate")
    cy.visit('http://localhost:3000/supplierupdate')
    cy.get("#root > div:nth-child(1) > div > table > tbody > tr:nth-child(3) > td:nth-child(6) > button.button.is-warning.is-small").click();
    cy.get("#root > div:nth-child(2) > div > form > div:nth-child(4) > div > input").clear({ force: true }).type(1000, { force: true });
    cy.get("#root > div:nth-child(2) > div > form > div.field.is-grouped > div:nth-child(1) > button").click();
    cy.get("#root > div:nth-child(2) > div > form > div.field.is-grouped > div:nth-child(2) > a > button").click();
  });
  it('Open Supplier Create ', () => {
    cy.intercept({ method: "POST", url: "**/suppliercreate**" }).as("suppliercreate")
    cy.visit('http://localhost:3000/suppliercreate')
    cy.get("#root > div > div > form > div:nth-child(1) > div > input").click();
    cy.get("#root > div > div > form > div:nth-child(1) > div > input").clear({ force: true }).type("Your name ", { force: true });
    cy.get("#root > div > div > form > div:nth-child(2) > div > input").click();
    cy.get("#root > div > div > form > div:nth-child(2) > div > input").clear({ force: true }).type("Your contack ", { force: true });
    cy.get("#root > div > div > form > div:nth-child(3) > div > input").click();
    cy.get("#root > div > div > form > div:nth-child(3) > div > input").clear({ force: true }).type("188/88", { force: true });
    cy.get("#root > div > div > form > div:nth-child(4) > div > input").click();
    cy.get("#root > div > div > form > div:nth-child(4) > div > input").clear({ force: true }).type("09999999", { force: true });
    cy.get("#root > div > div > button").click();
  });
  it('Open Supplier Edit ', () => {
    cy.intercept({ method: "DELETE", url: "**/supplierdelete**" }).as("supplierdelete")
    cy.visit('http://localhost:3000')
    cy.get("#root > div > div > table > tbody > tr:nth-child(4) > td:nth-child(6) > button.button.is-danger.is-small").click();
  });

});



