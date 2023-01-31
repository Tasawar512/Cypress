it('Assertion Test', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('get').click()
    //Shouls assertion
    // cy.get('#query-btn')
    // .should('contain','Button')
    // .should('have.class','query-btn')
    // cy.get('#query-btn').should('be.visible')
    // .should('be.selected')


    //And Assertion implicit
    cy.get('#query-btn')
    .and('contain','Button')
    .and('have.class','query-btn')
    cy.get('#query-btn').and('be.visible')
    .and('be.enabled')
  //Explicit Assertion
    expect(true).to.be.true
    assert.equal(4,4,'NOT EQUAL')
    assert.strictEqual(4,'4','NOT EQUAL')
  })