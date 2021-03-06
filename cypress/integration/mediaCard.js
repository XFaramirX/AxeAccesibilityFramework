const sizes = require('../fixtures/viewports.json');
const MEDIA_CARD = require('../fixtures/components/mediaCard.json');
const A11Y_OPTIONS = require('../fixtures/w3practices.json');

context('MEDIA CARD', () => {
  MEDIA_CARD.variations.map((variation) => {
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
          cy.wait(1000);
          cy.scrollTo('bottom');
          cy.checkA11y(`${variation.selector}`, A11Y_OPTIONS);
        });
      });
    });
  });
});
