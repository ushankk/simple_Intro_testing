describe('alert handling' , () => {
    it('alert actiosn' , () =>{
  cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
  cy.contains('Click for JS Alert').click()
  cy.on('window:alert', (str) =>{

    expect(str).to.be.equals('I am a JS Alert')
  })
  cy.contains('Click for JS Confirm').click()
  cy.on('window:confirm',(str) => {
    expect(str).to.be.equals('I am a JS Confirm')
   // return false

  })

  cy.get('#result').should('contain','You clicked: Ok')
  //cy.get('#result').should('contain','You clicked: Cancel')
 })
})