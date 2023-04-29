/// <reference types="cypress" />

describe ('Suggested Elements',()=>{
    it('Test Case 1',()=>{
        cy.visit('www.google.com')
        cy.get('.gLFyf').type('Yahoo')
        cy.wait(3000)
        cy.get('#c7mM1c > .wM6W7d > span')
        .contains('yahoo search').click()
        cy.wait(3000)
    })


})