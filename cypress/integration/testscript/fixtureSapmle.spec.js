describe('first', ()=> {
 it('ad', ()=>{


    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword')
    cy.get('.radius').click()
 })
 it('second with json', ()=>{


    cy.visit('https://the-internet.herokuapp.com/login')
    cy.fixture('user').then((user) =>{

        const stusr =user.username
        const strpwd =user.password
        cy.get('#username').type(stusr)
        cy.get('#password').type(strpwd)
        cy.get('.radius').click()
    })
})   
    it.only('support ', ()=>{
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.login('tomsmith' ,'SuperSecretPassword')
     
     })

     it.only('support using fixture ', ()=>{
        cy.visit('https://the-internet.herokuapp.com/login')

        cy.fixture('user').then((user) =>{

            const stusr =user.username
            const strpwd =user.password
            cy.login( stusr,strpwd)
            cy.get('.radius').click()
        })       
     })
})