describe('wdqw', ()=>{
it('fsdf', ()=>{

    cy.viewport(1280,720)
    cy.visit('http://www.example.com/')
    cy.wait(200)
})
it('new resolution', ()=>{

    cy.viewport(1980,1080)
    cy.visit('http://www.example.com/')
    cy.wait(200)
})
it('new resolution', ()=>{

    cy.viewport('ipad-2')
    cy.visit('http://www.example.com/')
    cy.wait(200)
})

it('new resolution', ()=>{

    cy.viewport('iphone-4', 'landscape')
    cy.visit('http://www.example.com/')
    cy.wait(200)
})

})

