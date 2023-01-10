/// <reference types="cypress" />

context ('My Second Test',()=>{
    //describe yerine context kullanilabilinir
    beforeEach('Her testten once calisacak',()=>{
        cy.visit('/')//cypress.config.js ten baseurl'den geldi adres

    })
    it('URL Test',()=>{
        cy.url().should('include','google')
        cy.url().should('eq','https://www.google.com/')

    })

    it('Title Test',()=>{
       cy.title().should('include','Google')
       cy.title().should('equal','Google')
    })

    it('Search Test',()=>{
        cy.get('[name="q"]').type('Cypress.io{enter}')

        //get():locate aliyoruz
        //type():metin gonderiyoruz
        //{enter}:Enter tusuna bas


    })

    it('Search Test',()=>{
        cy.get('.gLFyf', {timeout: 10000}).type('Cypress.io{enter}')

    })

    it.skip('Skip',()=>{
      //bu testi atla
    })
/*
    it.only('Only',()=>{
        //only sadece bu testu calistir
      })
*/
    it('Click',()=>{
        cy.get('#gbwa').click()
        //click tiklam yapar
    })
    
})