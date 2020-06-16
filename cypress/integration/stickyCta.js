const sizes = require('../fixtures/viewports.json');
const STICKY_CTA = require('../fixtures/components/stickyCta.json');
const A11Y_OPTIONS = require('../fixtures/w3practices.json');

context('STICKY CTA', () => {
  STICKY_CTA.variations.map((variation) => {
    sizes.forEach((size) => {
      // make assertions on the component fron an array of ifferent viewports
      describe(`${variation.name} ${size}`, () => {
        before(() => {
          if (Cypress._.isArray(size)) {
            cy.viewport(size[0], size[1]);
          } else {
            cy.viewport(size);
          }
          cy.visit(`${variation.url}`);
          cy.injectAxe();
        });
        it(`Accesibility Check`, () => {
          cy.scrollTo('bottom');
          cy.checkA11y('.m-sticky-ctas-header', A11Y_OPTIONS);
        });
      });
    });
  });
});
