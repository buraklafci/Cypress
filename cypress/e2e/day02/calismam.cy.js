/// <reference types="cypress" />



describe('calismam',()=>{
    it('google',()=>{
        cy.visit('https://google.com')
       
        cy.get('#APjFqb').type('Java{enter}')
        cy.contains('bulundu',{timeout:9000})
        cy.get('#result-stats',{timeout:9000}).contains('bulundu')
       cy.get('#result-stats',{timeout:9000}).should('contain','bulundu')
       cy.url().should('include','google')
       cy.title().should('include','Ara')

      
      
       
    })
})