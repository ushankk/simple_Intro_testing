describe('Hooks' , () => {
before('Before All test' , () =>{
   cy.log('Before All test')

})
beforeEach('Before Each test ', () => {

    cy.log('before each test')
})

it('Test1' , () => {

    cy.log('Executions test1 ')
})
it('Test2' , () => {

    cy.log('Executions test2')
})
after('after All test' , () =>{
    cy.log('after All test')
 
 })
 afterEach('after Each test ', () => {
 
     cy.log('after each test')
 })




})