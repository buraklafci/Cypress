/// <reference types="cypress" />

describe ('Suggested Elements',()=>{
    it('Test Case',()=>{
        cy.visit("https://amazon.com/")
        cy.get('#twotabsearchtextbox').type('dress')
        cy.get(':nth-child(4) > .s-suggestion-container > .s-suggestion').contains('dress').click()
        cy.wait(3000)
        cy.get('[data-asin="B09NF6C17V"] > .sg-col-inner > .s-widget-container > .s-card-container > .a-spacing-base > .a-spacing-small > .a-spacing-top-small > .a-size-mini > .a-link-normal > .a-size-base-plus').click()
        cy.wait(3000)
        cy.get('#productTitle').should('be.visible')
    })

})