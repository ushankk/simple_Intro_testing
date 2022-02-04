/// <reference types='cypress'/>

//const { contains } = require("cypress/types/jquery")

describe('my first element script', () => {
  it('locate element ', () => {

    cy.visit('http://localhost:4200/pages')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()
    cy.get('[data-name="menu-2"]').click()
    cy.contains('Sign in')
    cy.contains('[status="warning"]', 'Sign in')

    //find elememt
    cy.get('#inputEmail3').parents('form').find('button').should('contain', 'Sign in').parents('form')
      .find('nb-checkbox ').click()

    //parent and child
    cy.contains('nb-card', 'Horizontal form').find('[type="email"]')

  })

  it('locate the element and then() and wrap()', () => {
    cy.visit('http://localhost:4200/pages')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()
    cy.get('[data-name="menu-2"]').click()
    //cy.contains('nb-card','Horizontal form').find('#inputEmail3').should('contain','Email')  not returning any value thats should operation cannot be perfomened 

    // cy.contains('nb-card','Horizontal form').find('#password').should('contain','Password')

    // as per selenium  we cannot store and use it
    //const horiForm =cy.contains('nb-card','Horizontal form')
    //horiForm.find('[type="email"]').should('contain','Email')
    //horiForm.find('[type="password"]').should('contain','Password')

    //cypress command 
    cy.contains('nb-card', 'Horizontal form').then(firstform => {
      const firstEmaillbl = firstform.find('[for="inputEmail3"]').text();
      const firstPasswordlbl = firstform.find('[for="inputPassword3"]').text();

      expect(firstEmaillbl).to.be.equals('Email')
      expect(firstPasswordlbl).to.be.equals('Password')

      cy.get('[for="inputEmail3"]').invoke('text').then(text => {

        expect(text).to.be.equals('Email')
      })

      // To verify checkbox attribute 
      cy.contains('nb-card', 'Basic form').find('nb-checkbox').click()
        .find('.custom-checkbox').invoke('attr', 'class').should('contain', 'checked')
      // to handle radio button 

      //cy.contains('Option 1').click()
      cy.contains('nb-card', 'Using the Grid')
        .find('[type="radio"]').then(radiobtns => {

          cy.wrap(radiobtns)
            .first()
            //eq(0)
            .check({ force: true })
            .should('be.checked')

          cy.wrap(radiobtns)
            .last()
            //eq(1)
            //.check({force:true})   // uncommented will uncheck previous button
            .should('be.disabled')

        })

    })
  

  })

})





