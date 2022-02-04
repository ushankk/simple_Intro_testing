describe('my first element script', ()=>{
    it('locate element ' ,()=>{
    
   cy.visit('http://localhost:4200/pages')
   cy.contains('Tables & Data').click()
   cy.contains('Smart Table').click()
   cy.get('[data-name="menu-2"]').click()
   cy.get('tbody').contains('tr','John').then(tableRow=>{
    cy.wrap(tableRow).find('.nb-edit').click()
    cy.wrap(tableRow).find('[placeholder="Age"]').clear()
    cy.wrap(tableRow).find('[placeholder="Age"]').type('30')
    cy.wrap(tableRow).find('.nb-checkmark').click()
    cy.wrap(tableRow).find('td',{timeout:5000}).eq(6).should('contain','30')
   })
    })


    it('add user' , () => {

        cy.visit('http://localhost:4200/pages')
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()
        cy.get('[data-name="menu-2"]').click()
        cy.get('thead').find('.nb-plus').click()
        cy.get('thead').find('tr').eq(2).then(tableRow => {
            cy.wrap(tableRow).find('[placeholder="First Name"]').type("Test")
            cy.wrap(tableRow).find('[placeholder="Last Name"]').type("Traning")
            cy.wrap(tableRow).find('.nb-checkmark').click()

        })
           cy.get('tbody tr').first().find('td').then(tableCol =>{
               cy.wrap(tableCol).eq(2).should('contain','Test')
               cy.wrap(tableCol).eq(3).should('contain','Traning')
           })
    })


    it.only('tooltip ', () => {

        cy.visit('http://localhost:4200/pages')
        cy.contains('Modal & Overlays').click()
        cy.contains('Tooltip').click()
        cy.get('[data-name="menu-2"]').click()
        cy.contains('nb-card' ,'Colored Tooltips').contains('Default').click()
        cy.get('nb-tooltip').should('contain','This is a tooltip')

    })

   




})