/// <reference types="cypress" />

describe ('Before After',()=>{
before(()=>{
    cy.log('Testler baslamadan once 1 kere calisir')
})
after(()=>{
    cy.log('Testler bittikten sonra 1 kere calisir')
})
beforeEach(()=>{
    cy.log('Her testten once 1 kere calisir')
})
afterEach(()=>{
    cy.log('Her testten sonra 1 kere calisir')
})


    it('Test Case 1',()=>{
       cy.log('Test Case 1') 
    })

    it('Test Case 2',()=>{
        cy.log('Test Case 2')
    })
})