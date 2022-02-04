describe('arqr' ,() => {

it('weqwe' ,()=>{

cy.visit('/login')
//cy.xpath("//input[@id='username']").type('tomsmith')
cy.get('#username').type(Cypress.env('username'))

})
})