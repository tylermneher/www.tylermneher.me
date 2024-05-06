describe("404", function () {
  beforeEach(function () {
    cy.visit("/404.html");
  });
  it("Visits the 404 Page", () => {
    context("Testing the Body Portfolio link", function () {
      cy.get('[data-cy="404-body-portfolio"]').should("be.visible");
      cy.get('[data-cy="404-body-portfolio"]').should("have.attr", "href", "portfolio.html");
      cy.get('[data-cy="404-body-portfolio"]').should("have.text", "Portfolio");
    });
    context("Testing the Body Contact link", function () {
      cy.get('[data-cy="404-body-contact"]').should("be.visible");
      cy.get('[data-cy="404-body-contact"]').should("have.attr", "href", "contact.html");
      cy.get('[data-cy="404-body-contact"]').should("have.text", "Contact");
    });
    context("Testing the Footer Contact link", function () {
      cy.get('[data-cy="404-footer-contact"]').should("be.visible");
      cy.get('[data-cy="404-footer-contact"]').should("have.attr", "href", "contact.html");
      cy.get('[data-cy="404-footer-contact"]').should("have.text", "Contact Me");
    });
    context("Testing the Footer PGP link", function () {
      cy.get('[data-cy="404-footer-pgpkey"]').should("be.visible");
      cy.get('[data-cy="404-footer-pgpkey"]').should("have.attr", "href", "tyler.pubkey.asc");
      cy.get('[data-cy="404-footer-pgpkey"]').should("have.text", "PGP Key");
    });
  });
});
