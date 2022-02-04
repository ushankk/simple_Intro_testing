describe('select method', () =>{
  it('select method ', ()=>{

  cy.visit("http://demo.automationtesting.in/Register.html")

  cy.get('[placeholder="First Name"]').type("ushank")
  cy.get('[placeholder="Last Name"]').type("Kumar")
  cy.get('textarea ,rows').type("adress of home")
  cy.get('#eid').type("ushank@gmail.com")
  cy.get('input[type="tel"]').type("9876543213")
  cy.get('input[value="Male"]').click()
  cy.get('#checkbox2').click()
  cy.get('#msdd').click()
  cy.contains('Bulgarian').click()
  cy.get('#basicBootstrapForm').click()
  cy.get('#Skills').select('Android')
  cy.get('#Skills').should('have.value','Android')
  cy.get('span[role="combobox"]').click()
  cy.get('.select2-search__field').type('Ind')
  cy.get('.select2-search__field').type('{enter}')
  cy.get('span[role="combobox"]').should('have.text','India')

  cy.get('#yearbox').select('1922')
  cy.get('select[placeholder="Month"]').select('January')

  cy.get('#daybox').select('16')
  cy.get('#firstpassword').type('ushank')
  cy.get('#secondpassword').type('ushank')
  
  
  })
})