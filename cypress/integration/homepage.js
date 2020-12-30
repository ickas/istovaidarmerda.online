/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

const SKIPLINK_ITEM = ".skip-link";

describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.injectAxe();
  });

  it("Has no detectable a11y violations on load", () => {
    // Test the page at initial load
    cy.checkA11y(null, {
      includedImpacts: ["critical"],
    });
  });

  describe("Skip Links", () => {
    it("should show the first skip link", () => {
      cy.get("body").focus().tab();
      cy.get(SKIPLINK_ITEM).first().should("have.focus").and("have.text", "Ir para a secção Agenda");
    });

    it("should scroll to the where section", () => {
      cy.get(SKIPLINK_ITEM).eq(1).focus().click({ force: true });
      cy.url().should("include", "#where");
    });
  });

  describe("Hero", () => {
    it("should scroll to the schedule when clicking on the button", () => {
      cy.findByLabelText("Consulta a Agenda").click();
      cy.url().should("include", "#schedule");
    });

    it("should scroll to the hein section when clicking on the button", () => {
      cy.findByLabelText("Sabe mais sobre o evento").click();
      cy.url().should("include", "#hein");
    });
  });

  describe("Schedule", () => {
    beforeEach(() => {
      cy.get("#schedule").scrollIntoView();
    });

    it("should scroll to section and start animation", () => {
      cy.get(".schedule").first().should("have.class", "is-visible").and("have.attr", "style", "--ivdm-event-delay:0");
    });

    it("should show events on scroll", () => {
      cy.findByText("21 Jan")
        .scrollIntoView({ offset: { top: -150, left: 0 }, duration: 16 })
        .parent("li")
        .should("have.class", "is-visible")
        .and("have.attr", "style", "--ivdm-event-delay:3");
    });

    it("should have the social link of a persona on an event", () => {
      cy.findByText("26 Jan")
        .scrollIntoView({ offset: { top: -150, left: 0 }, duration: 16 })
        .parent("li")
        .within(() => {
          cy.get(".persona")
            .eq(2)
            .should("have.attr", "href", "https://twitter.com/pedromorgado")
            .and("have.attr", "target", "_blank")
            .and("have.attr", "rel", "noopener noreferrer");
        });
    });
  });

  describe("Where", () => {
    beforeEach(() => {
      cy.get("#where").scrollIntoView();
    });

    it("should have the twitter link", () => {
      cy.findByLabelText("A nossa página no Twitter")
        .should("have.attr", "href", "https://twitter.com/IstoVai")
        .and("have.attr", "target", "_blank")
        .and("have.attr", "rel", "noopener noreferrer")
        .and("have.text", "Twitter");
    });

    it("should have the youtube link", () => {
      cy.findByLabelText("O nosso canal no Youtube")
        .should("have.attr", "href", "https://www.youtube.com/channel/UC-M0MHRa0CNewKhjCz4c2Qg")
        .and("have.attr", "target", "_blank")
        .and("have.attr", "rel", "noopener noreferrer")
        .and("have.text", "YouTube");
    });
  });

  describe("Hein", () => {
    it("should show on scroll", () => {
      cy.get("#hein").scrollIntoView().should("have.class", "is-visible");
    });
  });

  describe("Apoios", () => {
    it("should feature 4 sponsors", () => {
      cy.findByText("Apoios")
        .scrollIntoView()
        .parent("section")
        .within(() => {
          cy.get(".partner").its("length").should("eq", 4);
        });
    });
  });

  describe("Easter Eggs", () => {
    it("should unlock the easter egg by typing the konami code", () => {
      cy.findByTestId("konami-code-trigger").should("have.attr", "data-unlocked", "false");
      cy.get("body")
        .focus()
        .type("{upArrow}{upArrow}{downArrow}{downArrow}{leftArrow}{rightArrow}{leftArrow}{rightArrow}ba");
      cy.findByTestId("konami-code-trigger").should("have.attr", "data-unlocked", "true");
    });

    it("should NOT unlock the easter egg if there's no correct konami code", () => {
      cy.findByTestId("konami-code-trigger").should("have.attr", "data-unlocked", "false");
      cy.get("body")
        .focus()
        .type("{upArrow}{upArrow}{downArrow}{downArrow}{leftArrow}{rightArrow}{leftArrow}{rightArrow}cb");
      cy.findByTestId("konami-code-trigger").should("have.attr", "data-unlocked", "false");
    });
  });
});
