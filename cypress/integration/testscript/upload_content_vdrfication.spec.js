/// <reference types ='cypress'/>

describe('des',()=>{
it.only('dqwe',()=>{

cy.visit('https://demo.seleniumeasy.com/table-sort-search-demo.html')
cy.document().its('contentType').should('eq' ,'text/html')
cy.document().should('have.property','charset').and('eq','UTF-8')

})

it.only('upload' , ()=>{
    cy.visit('https://the-internet.herokuapp.com/upload')
    cy.get('#file-upload').selectFile('Sample.txt')
    cy.get('#file-submit').click()
    })
})

