const sizes = require('../fixtures/viewports.json');
const AUTHOR_CARD = require('../fixtures/components/authorCard.json');
const A11Y_OPTIONS = require('../fixtures/w3practices.json');

context('AUTHOR CARD', () => {
  AUTHOR_CARD.variations.map((variation) => {
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
          cy.checkA11y('.body', A11Y_OPTIONS);
        });
      });
    });
  });
});
