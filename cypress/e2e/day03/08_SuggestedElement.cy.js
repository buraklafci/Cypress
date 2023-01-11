/// <reference types="cypress" />

describe ('Suggested Elements',()=>{
    it('Test Case 1',()=>{
        cy.visit('www.google.com')
        cy.get('.gLFyf').type('Yahoo')

        cy.get('.G43f7e > :nth-child(5) > .eIPGRd > .pcTkSc > .wM6W7d > span')
        .contains('yahoo search').click()
        cy.wait(3000)
    })

    it('Test Case 2',()=>{

    })
})