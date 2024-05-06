describe("Homepage", function () {
  beforeEach(function () {
    cy.visit("/index.html");
  });
  it("Visits the Homepage", () => {
    context("Testing the Body Resume link", function () {
      cy.get('[data-cy="index-body-resume"]').should("be.visible");
      cy.get('[data-cy="index-body-resume"]').should("have.attr", "href", "https://resume.tylermneher.me");
      cy.get('[data-cy="index-body-resume"]').should("have.text", "Resume");
    });
    context("Testing the Body Portfolio link", function () {
      cy.get('[data-cy="index-body-portfolio"]').should("be.visible");
      cy.get('[data-cy="index-body-portfolio"]').should("have.attr", "href", "portfolio.html");
      cy.get('[data-cy="index-body-portfolio"]').should("have.text", "Portfolio");
    });
    context("Testing the Body Contact link", function () {
      cy.get('[data-cy="index-body-contact"]').should("be.visible");
      cy.get('[data-cy="index-body-contact"]').should("have.attr", "href", "contact.html");
      cy.get('[data-cy="index-body-contact"]').should("have.text", "Contact");
    });
    context("Testing the Footer Contact link", function () {
      cy.get('[data-cy="index-footer-contact"]').should("be.visible");
      cy.get('[data-cy="index-footer-contact"]').should("have.attr", "href", "contact.html");
      cy.get('[data-cy="index-footer-contact"]').should("have.text", "Contact Me");
    });
    context("Testing the Footer PGP link", function () {
      cy.get('[data-cy="index-footer-pgpkey"]').should("be.visible");
      cy.get('[data-cy="index-footer-pgpkey"]').should("have.attr", "href", "tyler.pubkey.asc");
      cy.get('[data-cy="index-footer-pgpkey"]').should("have.text", "PGP Key");
    });
  });
});
