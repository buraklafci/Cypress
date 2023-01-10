/// <reference types="cypress" />

describe ('Login Test',()=>{
    it('Negative Test',()=>{
const username='Manager'
const password='Manager1!'

        cy.visit("https://www.koalaresorthotels.com/")
        cy.contains('Log in').click()
        cy.get('#UserName').type(username)
        cy.get('#Password').type(password)
        cy.get('#btnSubmit').click()
        cy.get('.validation-summary-errors > span').should('include.text','Try again please')
        cy.contains('.validation-summary-errors > span','Try again please')

        })

    it.skip('Positive Test',()=>{
        cy.visit("https://www.koalaresorthotels.com/")
        })
        })  



    
