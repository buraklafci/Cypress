/// <reference types="cypress" />


describe ('Login Test',()=>{
    const username='Manager'
    const wrongPassword='Manager1!'
    const wrongUserName='Manager1'
    it('Negative Test',()=>{


        cy.visit("https://www.koalaresorthotels.com/")
        cy.contains('Log in').click()
        cy.get('#UserName').type(username)
        cy.get('#Password').type(wrongPassword)
        cy.get('#btnSubmit').click()
        cy.get('.validation-summary-errors > span').should('include.text','Try again please')
        cy.contains('.validation-summary-errors > span','Try again please')

        })

    it.only('Negative Test',()=>{
        cy.visit("https://www.koalaresorthotels.com/")
        cy.get('#navLogon > .nav-link').contains('log in',{matchCase:false})
        cy.get('#navLogon > .nav-link').click()
        cy.get('#UserName').type(wrongUserName)
        cy.get('#Password').type(wrongPassword)
        cy.get('#btnSubmit').click()
        cy.get('.validation-summary-errors > ul > li').should('have.text','Username or password is incorrect, please correct them and try again')
         //have.text'te metin tam yazilmali
        })

       
        })  



    
