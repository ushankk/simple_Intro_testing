describe("select kt",()=>{
    it.only('select tag', () => {
        cy.visit("http://localhost:4200/pages")
        //method 1
        cy.get('nav nb-select').click()
        cy.get('.options-list').contains('Dark').click()
        cy.get('nav nb-select').should('contain', "Dark")
        // method 2
    
    
        cy.get('nav nb-select').then(dropdown => {
          cy.wrap(dropdown).click()
          cy.get('.options-list nb-option').each((listitem, index) =>{
    
            const itemText=listitem.text().trim()
            cy.wrap(listitem).click()
            cy.wrap(dropdown).should('contain',itemText)
            if(index<3){
              cy.wrap(dropdown).click()
            }
    
          })
    
        })
    
    
      })


})

 