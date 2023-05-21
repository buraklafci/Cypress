/// <reference types="cypress" />

describe ('Wiev Ports',()=>{
    it('İphone 8',()=>{
cy.visit('https://amazon.com')
cy.viewport("iphone-8")
    })

    it('Samsung-s10',()=>{
        cy.visit('https://amazon.com')
        cy.viewport("samsung-s10")
    })
    it('Custom Screen',()=>{
        cy.visit('https://amazon.com')
        cy.viewport(1000,500)
    })
})