/// <reference types="cypress" />

describe ('HotelMyCamp',()=>{
    it('Login',()=>{
cy.visit('https://www.hotelmycamp.com/')
cy.get('#navLogon > .nav-link').click()
cy.get('#UserName').type('manager')
cy.get('#Password').type('Manager1!')
cy.get('#btnSubmit').click()
cy.get('.username').should('include.text','manager')
    })

    
})