describe('mouse actions', () => {
 
  it('mouse actions ' , () =>{

  cy.visit('https://demo.opencart.com/')
  cy.get('.form-control').type('phone')
  cy.get('.input-group-btn').trigger('click')

  })  
  it.only('mouse actions ' , () =>{

    cy.visit('https://demo.opencart.com/')
  //  cy.get(':nth-child(3) > .dropdown-toggle').trigger('mouseover').click()
    cy.get(':nth-child(3) > .dropdown-toggle').invoke('show').should('be.visible').trigger('mouseover')
    cy.get('ul.nav li:nth-child(3) > div').invoke('show').should('be.visible')
    cy.get('ul.nav li:nth-child(3) > div ul li:nth-child(2)').click()

    }) 
})