describe('scroll ' , () =>{
    it('scrolling ', () =>{
  cy.visit('https://demo.opencart.com/')
  //cy.screenshot({capture:"fullPage"})
  cy.get('.form-control').type('phone')

  cy.get('.input-group-btn').trigger('click')
  cy.get('.image').scrollIntoView()
  cy.get('.image').screenshot()
  cy.get('[placeholder="Search"]').scrollIntoView()
  cy.get('[placeholder="Search"]').screenshot()
  cy.get('[placeholder="Search"]').clear()

  
  
    })
  })