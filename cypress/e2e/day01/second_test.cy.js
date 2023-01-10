/// <reference types="cypress" />

context ('My Second Test',()=>{
    //describe yerine context kullanilabilinir
    beforeEach('Her testten once calisacak',()=>{
        cy.visit('https://www.google.com/')

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

    })

    it('Search Test',()=>{

    })
})