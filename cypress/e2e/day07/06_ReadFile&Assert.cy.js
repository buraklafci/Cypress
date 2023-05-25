/// <reference types="cypress" />

describe ('Write Read File',()=>{
    it('Write File',()=>{
cy.writeFile('./cypress/e2e/day07/05_UserData.json',{ name:'Burak', email:'burak@gmail.com'})

cy.readFile('./cypress/e2e/day07/05_UserData.json').then((user)=>{
    expect(user.name).eq('Burak')
    expect(user.email).eq('burak@gmail.com')
})
})

    
})