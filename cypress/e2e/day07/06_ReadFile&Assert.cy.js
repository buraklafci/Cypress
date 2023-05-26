/// <reference types="cypress" />

describe ('Read File Assert',()=>{
    it('Asssert',()=>{

cy.readFile('./cypress/fixtures/userDataa.json').then((userData)=>{
    expect(userData[1].firstName).to.equal('durak')
    expect(userData[0].lastName).to.equal('lara')
    expect(userData[2].address.city).to.equal('Ahemdabad')
    
})
})

    
})