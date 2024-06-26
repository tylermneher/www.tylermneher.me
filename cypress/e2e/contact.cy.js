describe("Contact", function () {
    beforeEach(function () {
        cy.visit("/contact.html");
    });
    it("Visits the Contact Page", () => {
        // Body Links Tests
        context("Testing the Body Portfolio Link", function () {
            cy.get('[data-cy="contact-body-portfolio"]').should("be.visible");
            cy.get('[data-cy="contact-body-portfolio"]').should("have.attr", "href", "portfolio.html");
            cy.get('[data-cy="contact-body-portfolio"]').should("have.text", "Portfolio");
        });
        context("Testing the Body Home Link", function () {
            cy.get('[data-cy="contact-body-index"]').should("be.visible");
            cy.get('[data-cy="contact-body-index"]').should("have.attr", "href", "index.html");
            cy.get('[data-cy="contact-body-index"]').should("have.text", "Home");
        });

        // Table Links Tests
        context("Testing the Body Table PGP Links", function () {
            cy.get('[data-cy="contact-body-table-pgpkey"]').should("be.visible");
            cy.get('[data-cy="contact-body-table-pgpkey"]').should("have.attr", "href", "tyler.pubkey.asc");
            cy.get('[data-cy="contact-body-table-pgpkey"]').should("have.text", "PGP");
            cy.get('[data-cy="contact-body-table-keybasepgpkey"]').should("be.visible");
            cy.get('[data-cy="contact-body-table-keybasepgpkey"]').should("have.attr", "href", "https://keybase.io/tylermneher/pgp_keys.asc");
            cy.get('[data-cy="contact-body-table-keybasepgpkey"]').should("have.text", "Keybase");
        });
        context("Testing the Body Table Resume Link", function () {
            cy.get('[data-cy="contact-body-table-resume"]').should("be.visible");
            cy.get('[data-cy="contact-body-table-resume"]').should("have.attr", "href", "https://resume.tylermneher.me");
            cy.get('[data-cy="contact-body-table-resume"]').should("have.text", "Resume");
        });
        context("Testing the Body Table GitHub Link", function () {
            cy.get('[data-cy="contact-body-table-github"]').should("be.visible");
            cy.get('[data-cy="contact-body-table-github"]').should("have.attr", "href", "https://www.github.com/tylermneher");
            cy.get('[data-cy="contact-body-table-github"]').should("have.text", "@tylermneher");
        });
        context("Testing the Body Table GitLab Link", function () {
            cy.get('[data-cy="contact-body-table-gitlab"]').should("be.visible");
            cy.get('[data-cy="contact-body-table-gitlab"]').should("have.attr", "href", "https://www.gitlab.com/tylermneher");
            cy.get('[data-cy="contact-body-table-gitlab"]').should("have.text", "@tylermneher");
        });
        context("Testing the Body Table LinkedIn Link", function () {
            cy.get('[data-cy="contact-body-table-linkedin"]').should("be.visible");
            cy.get('[data-cy="contact-body-table-linkedin"]').should("have.attr", "href", "https://www.linkedin.com/in/tylermneher");
            cy.get('[data-cy="contact-body-table-linkedin"]').should("have.text", "@tylermneher");
        });
        context("Testing the Body Table ORCID Link", function () {
            cy.get('[data-cy="contact-body-table-orcid"]').should("be.visible");
            cy.get('[data-cy="contact-body-table-orcid"]').should("have.attr", "href", "https://orcid.org/0000-0003-1288-730X");
            cy.get('[data-cy="contact-body-table-orcid"]').should("have.text", "0000-0003-1288-730X");
        });
        context("Testing the Body Table Keybase Links", function () {
            cy.get('[data-cy="contact-body-table-keybase"]').should("be.visible");
            cy.get('[data-cy="contact-body-table-keybase"]').should("have.attr", "href", "https://keybase.io/tylermneher");
            cy.get('[data-cy="contact-body-table-keybase"]').should("have.text", "@tylermneher");
        });
        context("Testing the Body Table Instagram Link", function () {
            cy.get('[data-cy="contact-body-table-instagram"]').should("be.visible");
            cy.get('[data-cy="contact-body-table-instagram"]').should("have.attr", "href", "https://www.instagram.com/tylermneher");
            cy.get('[data-cy="contact-body-table-instagram"]').should("have.text", "@tylermneher");
        });
        context("Testing the Body Table Facebook Link", function () {
            cy.get('[data-cy="contact-body-table-facebook"]').should("be.visible");
            cy.get('[data-cy="contact-body-table-facebook"]').should("have.attr", "href", "https://www.facebook.com/tylermneher");
            cy.get('[data-cy="contact-body-table-facebook"]').should("have.text", "@tylermneher");
        });
        context("Testing the Body Table Threads Link", function () {
            cy.get('[data-cy="contact-body-table-threads"]').should("be.visible");
            cy.get('[data-cy="contact-body-table-threads"]').should("have.attr", "href", "https://www.threads.net/tylermneher");
            cy.get('[data-cy="contact-body-table-threads"]').should("have.text", "@tylermneher");
        });
        context("Testing the Body Table X Link", function () {
            cy.get('[data-cy="contact-body-table-x"]').should("be.visible");
            cy.get('[data-cy="contact-body-table-x"]').should("have.attr", "href", "https://www.twitter.com/tylermneher");
            cy.get('[data-cy="contact-body-table-x"]').should("have.text", "@tylermneher");
        });
        context("Testing the Body Table Medium Link", function () {
            cy.get('[data-cy="contact-body-table-medium"]').should("be.visible");
            cy.get('[data-cy="contact-body-table-medium"]').should("have.attr", "href", "https://medium.com/@tylermneher");
            cy.get('[data-cy="contact-body-table-medium"]').should("have.text", "@tylermneher");
        });
        context("Testing the Body Table Stack Overflow Link", function () {
            cy.get('[data-cy="contact-body-table-stackoverflow"]').should("be.visible");
            cy.get('[data-cy="contact-body-table-stackoverflow"]').should("have.attr", "href", "https://stackoverflow.com/users/12592276/tyler-m-neher");
            cy.get('[data-cy="contact-body-table-stackoverflow"]').should("have.text", "@12592276");
        });
        context("Testing the Body Table YouTube Link", function () {
            cy.get('[data-cy="contact-body-table-youtube"]').should("be.visible");
            cy.get('[data-cy="contact-body-table-youtube"]').should("have.attr", "href", "https://www.youtube.com/@tylermneher");
            cy.get('[data-cy="contact-body-table-youtube"]').should("have.text", "@tylermneher");
        });
        context("Testing the Body Table Hacker News Link", function () {
            cy.get('[data-cy="contact-body-table-hackernews"]').should("be.visible");
            cy.get('[data-cy="contact-body-table-hackernews"]').should("have.attr", "href", "https://news.ycombinator.com/user?id=tylermneher");
            cy.get('[data-cy="contact-body-table-hackernews"]').should("have.text", "@tylermneher");
        });

        // Footer Links Tests
        context("Testing the Footer Contact Link", function () {
            cy.get('[data-cy="contact-footer-contact"]').should("be.visible");
            cy.get('[data-cy="contact-footer-contact"]').should("have.attr", "href", "contact.html");
            cy.get('[data-cy="contact-footer-contact"]').should("have.text", "Contact Me");
        });
        context("Testing the Footer PGP Link", function () {
            cy.get('[data-cy="contact-footer-pgpkey"]').should("be.visible");
            cy.get('[data-cy="contact-footer-pgpkey"]').should("have.attr", "href", "tyler.pubkey.asc");
            cy.get('[data-cy="contact-footer-pgpkey"]').should("have.text", "PGP Key");
        });
    });
});
