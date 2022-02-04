describe('shadow', () => {
it('shadoww' ,() => {

cy.visit('https://radogado.github.io/shadow-dom-demo/')
 cy.get('#app').shadow().find('#container')
 cy.get('#app').shadow().find('#container').then((label) => {

    const strvalue=label.text()
    cy.log('Dom-' +strvalue)
   //method 2
  cy.get('#app').shadow().find('#container').invoke('text').as('textVal')
  cy.get('@textVal').then(str =>{
   cy.log('ushani alias'+ str)

  })


 })
})


})