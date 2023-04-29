/// <reference types="cypress" />

describe ('Suggested Elements',()=>{
    it('Test Case',()=>{
        cy.visit("https://amazon.com/")
        cy.get('#twotabsearchtextbox').type('dress')
        cy.get(':nth-child(4) > .s-suggestion-container > .s-suggestion').contains('dress').click()
        cy.wait(3000)
        cy.get('[data-asin="B08LL9CPXD"] > .sg-col-inner > .s-widget-container > .s-card-container > .a-spacing-base > .s-product-image-container > .rush-component > .a-link-normal > .a-section > .s-image').click()
        cy.wait(3000)
        cy.get('#productTitle').should('be.visible')
    })

})