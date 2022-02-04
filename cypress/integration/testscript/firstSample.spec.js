/// <reference types ='cypress'/>

describe('my first sample sample', () =>{
    it('first testc ase ', ()=>{
    expect(true).to.be.equals(true)
})
it('sum no', ()=>{
    expect(2+2).to.be.equals(4)
})

})
describe('second' ,() =>{
    it('false test' ,() => {
        expect(false).to.be.equals(false)
    })
    
})