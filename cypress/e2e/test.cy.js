/// <reference types="cypress"/>

it('Google test', () => {
    cy.visit("https://www.google.com/")
    // cy.contains('Google Search').click()
    cy.get('.gLFyf').type('Step by step automation {enter}')
   // cy.get(':nth-child(3) > .g > .kvH3mc > .jGGQ5e > .yuRUbf > a > .LC20lb').click()
  // cy.get('.dmenKe > .cIkxbf > .usJj9c > h3').click()
  cy.wait(20000)
  cy.contains('Videos').click()
})