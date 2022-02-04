/// <reference types ='cypress'/>
describe('my tst case', { 

    "retries": {
        "openMode":2,
        "runMode":3
    }

},() => {
    it('luanch ur' , () => {
        cy.visit("https://books.toscrape.com/index.html")
        cy.contains('Travel').click()
        cy.url().should('includes','travel')
        console.log("before xecution")
        cy.get("h1").should('be.visible').then(() =>{
            console.log("After execution")
        })
    // to check count of web elements
        cy.get('.image_container').its('length').should('eq',10).debug()
        
    })
    })