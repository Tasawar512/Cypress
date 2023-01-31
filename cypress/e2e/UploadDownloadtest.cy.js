/// <reference types="cypress"/>

it('Upload file',()=>{
cy.visit('https://trytestingthis.netlify.app/')
//cy.get('#myfile').attachFile('example.json')
cy.get('#myfile').attachFile('Tasawar.png')

})

it('Download file',()=>{
    
    cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')
    
    })