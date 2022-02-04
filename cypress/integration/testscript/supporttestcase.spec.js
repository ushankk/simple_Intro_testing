describe('ad',()=>{

    it.only('support ', ()=>{


        cy.visit('https://the-internet.herokuapp.com/login')
    
        cy.login('tomsmith' ,'SuperSecretPassword')
     
     })

})