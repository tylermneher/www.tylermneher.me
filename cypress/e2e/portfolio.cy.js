describe("Portfolio", function () {
  beforeEach(function () {
    cy.visit("/portfolio.html");
  });
  it("Visits the portfolio Page", () => {
    // Body Links Tests
    context("Testing the Body Home link", function () {
      cy.get('[data-cy="portfolio-body-index"]').should("be.visible");
      cy.get('[data-cy="portfolio-body-index"]').should("have.attr", "href", "index.html");
      cy.get('[data-cy="portfolio-body-index"]').should("have.text", "Home");
    });
    context("Testing the Body Resume link", function () {
      cy.get('[data-cy="portfolio-body-resume"]').should("be.visible");
      cy.get('[data-cy="portfolio-body-resume"]').should("have.attr", "href", "https://resume.tylermneher.me");
      cy.get('[data-cy="portfolio-body-resume"]').should("have.text", "Resume");
    });
    context("Testing the Body Contact link", function () {
      cy.get('[data-cy="portfolio-body-contact"]').should("be.visible");
      cy.get('[data-cy="portfolio-body-contact"]').should("have.attr", "href", "contact.html");
      cy.get('[data-cy="portfolio-body-contact"]').should("have.text", "Contact");
    });

    // Table Links Tests
    context("Testing the Body Table Resume link", function () {
      cy.get('[data-cy="portfolio-body-table-resume"]').should("be.visible");
      cy.get('[data-cy="portfolio-body-table-resume"]').should("have.attr", "href", "https://resume.tylermneher.me");
      cy.get('[data-cy="portfolio-body-table-resume"]').should("have.text", "resume.tylermneher.me");
    });
    context("Testing the Body Table Contact Card link", function () {
      cy.get('[data-cy="portfolio-body-table-contactcard"]').should("be.visible");
      cy.get('[data-cy="portfolio-body-table-contactcard"]').should("have.attr", "href", "https://card.tylermneher.life");
      cy.get('[data-cy="portfolio-body-table-contactcard"]').should("have.text", "card.tylermneher.life");
    });
    context("Testing the Body Table Maps link", function () {
      cy.get('[data-cy="portfolio-body-table-maps"]').should("be.visible");
      cy.get('[data-cy="portfolio-body-table-maps"]').should("have.attr", "href", "https://maps.neherdata.com");
      cy.get('[data-cy="portfolio-body-table-maps"]').should("have.text", "maps.neherdata.com");
    });
    context("Testing the Body Table Ghost Hunter link", function () {
      cy.get('[data-cy="portfolio-body-table-ghosthunter"]').should("be.visible");
      cy.get('[data-cy="portfolio-body-table-ghosthunter"]').should("have.attr", "href", "https://ghosthunter.neherdata.com");
      cy.get('[data-cy="portfolio-body-table-ghosthunter"]').should("have.text", "ghosthunter.neherdata.com");
    });
    context("Testing the Body Table PiggyPasser links", function () {
      cy.get('[data-cy="portfolio-body-table-piggypasser"]').should("be.visible");
      cy.get('[data-cy="portfolio-body-table-piggypasser"]').should("have.attr", "href", "https://www.piggypasser.org");
      cy.get('[data-cy="portfolio-body-table-piggypasser"]').should("have.text", "www.piggypasser.org");
    });
    context("Testing the Body Table AI-900 link", function () {
      cy.get('[data-cy="portfolio-body-table-ai900"]').should("be.visible");
      cy.get('[data-cy="portfolio-body-table-ai900"]').should("have.attr", "href", "https://ai-900.tylermneher.me");
      cy.get('[data-cy="portfolio-body-table-ai900"]').should("have.text", "ai-900.tylermneher.me");
    });
    context("Testing the Body Table AZ-900 link", function () {
      cy.get('[data-cy="portfolio-body-table-az900"]').should("be.visible");
      cy.get('[data-cy="portfolio-body-table-az900"]').should("have.attr", "href", "https://az-900.tylermneher.me");
      cy.get('[data-cy="portfolio-body-table-az900"]').should("have.text", "az-900.tylermneher.me");
    });
    context("Testing the Body Table SKN United Nations link", function () {
      cy.get('[data-cy="portfolio-body-table-sknun"]').should("be.visible");
      cy.get('[data-cy="portfolio-body-table-sknun"]').should("have.attr", "href", "https://skn-un.tylermneher.me");
      cy.get('[data-cy="portfolio-body-table-sknun"]').should("have.text", "skn-un.tylermneher.me");
    });
    context("Testing the Body Table Green Team link", function () {
      cy.get('[data-cy="portfolio-body-table-greenteam"]').should("be.visible");
      cy.get('[data-cy="portfolio-body-table-greenteam"]').should("have.attr", "href", "https://green-team.tylermneher.me");
      cy.get('[data-cy="portfolio-body-table-greenteam"]').should("have.text", "green-team.tylermneher.me");
    });
    context("Testing the Body Table IMS link", function () {
      cy.get('[data-cy="portfolio-body-table-ims"]').should("be.visible");
      cy.get('[data-cy="portfolio-body-table-ims"]').should("have.attr", "href", "https://ims.tylermneher.me");
      cy.get('[data-cy="portfolio-body-table-ims"]').should("have.text", "ims.tylermneher.me");
    });
    context("Testing the Body Table Weight Date Chart link", function () {
      cy.get('[data-cy="portfolio-body-table-weightdate"]').should("be.visible");
      cy.get('[data-cy="portfolio-body-table-weightdate"]').should("have.attr", "href", "https://weight-date.tylermneher.me");
      cy.get('[data-cy="portfolio-body-table-weightdate"]').should("have.text", "weight-date.tylermneher.me");
    });
    context("Testing the Body Table Mites! link", function () {
      cy.get('[data-cy="portfolio-body-table-mites"]').should("be.visible");
      cy.get('[data-cy="portfolio-body-table-mites"]').should("have.attr", "href", "https://mites.tylermneher.me");
      cy.get('[data-cy="portfolio-body-table-mites"]').should("have.text", "mites.tylermneher.me");
    });

    // Footer Links Tests
    context("Testing the Footer contact link", function () {
      cy.get('[data-cy="portfolio-footer-contact"]').should("be.visible");
      cy.get('[data-cy="portfolio-footer-contact"]').should("have.attr", "href", "contact.html");
      cy.get('[data-cy="portfolio-footer-contact"]').should("have.text", "Contact Me");
    });
    context("Testing the Footer PGP link", function () {
      cy.get('[data-cy="portfolio-footer-pgpkey"]').should("be.visible");
      cy.get('[data-cy="portfolio-footer-pgpkey"]').should("have.attr", "href", "tyler.pubkey.asc");
      cy.get('[data-cy="portfolio-footer-pgpkey"]').should("have.text", "PGP Key");
    });
  });
});
