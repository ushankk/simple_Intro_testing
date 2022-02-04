describe('read and write' , () =>{
it('hii' , () => {


    cy.writeFile('Sample.txt' , 'hello worlds')
    cy.writeFile('Sample.txt' , 'worlds' ,{flag: 'a+'})
    cy.writeFile('Sample.txt' , '\n ushank' ,{flag: 'a+'})
})
it('af' ,()=> {

 cy.readFile('Sample.txt').should('contain','hello')

})

it.only('json file' , () => {
  cy.readFile('userdata.json').its('username').should('eq','tomsmith')

})

               it.only('sd' ,() =>{

    cy.writeFile('empdata.json' , {name:'test' , email:'ushank@gmail.com'})
             })
})