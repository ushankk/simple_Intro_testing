describe('screenshot', () =>{
it('screenshots ' , () =>{

    cy.visit('http://www.example.com/')
    cy.screenshot({capture:"fullPage" })
    cy.get('h1').screenshot()
})

it('web element ' , () =>{

    cy.visit('http://www.example.com/')
    //cy.screenshot({capture:"fullPage" })
    cy.get('h1').screenshot("hi tag screenshot")
})
})