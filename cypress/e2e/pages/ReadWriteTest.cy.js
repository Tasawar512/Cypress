


it('Reasd File from fixture',() =>{
  
        cy.fixture('example.json').then((data) =>{
            cy.log(data.name)
            cy.log(data.email)
        })

})

it('Reasd File from Readfilefunction',() =>{
  
    cy.readFile('./cypress/fixtures/example.json').then((data) =>{
        cy.log(data.name)
        cy.log(data.email)
    })

})

it('Write File from Writefilefunction',() =>{
  
    cy.writeFile('sample.txt','Hello I am Tasawar\n')
    cy.writeFile('sample.txt','I am Learning Cypress',{flag:'a+'})
    

})