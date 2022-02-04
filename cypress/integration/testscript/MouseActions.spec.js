describe('iframe handle ' , () =>{
    it('iframe handling ', () =>{
  cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')
   cy.contains('right click me').rightclick()
   cy.get('.context-menu-icon-copy').click()
   cy.on('window:alert' , (str) => {
       expect(str).to.equals('clicked: copy')
   })
    })
  

    it.only('af' , () =>{
    cy.visit('http://testautomationpractice.blogspot.com/')
    cy.contains('Copy Text').dblclick()
    })


  })