/// <reference types ='cypress'/>

describe('windows and tab' , () => {
    it('windows and tab handling' , () => {
    cy.visit('https://stqatools.com/demo/Windows.php')
 
  cy.contains('new Window').invoke('removeAttr', 'target').click()
  cy.url().should('include','Windows')
  cy.get('.navbar-brand').should('contain','Demo Test')
    })


    it('windows and tab handling' , () => {
        cy.visit('https://the-internet.herokuapp.com/windows')
       cy.get('.example > a').invoke('removeAttr', 'target').click()
      cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
      cy.go('back');
        })



        it.only('tab handling' , () => {
            cy.visit('https://stqatools.com/demo/Windows.php')
         
          cy.contains('new Tab').invoke('removeAttr', 'target').click()
         // cy.go('back')
         cy.contains('Java').should('contain','Java')
            })
        



  })