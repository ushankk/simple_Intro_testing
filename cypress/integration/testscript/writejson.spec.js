describe('json' , () =>{
    it.only('json file', () => {
        cy.readFile('userdata.json').its('username').should('eq','tomsmith')
      
      })
it.only('sd',() =>{
      
          cy.writeFile('empdata.json' , {name:'test' , email:'ushank@gmail.com'})
                   })
   
})