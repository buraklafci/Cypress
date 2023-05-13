/// <reference types="cypress" />

describe ('Custom Command2',()=>{
    it('Amazon Search',()=>{
    cy.amazonSearch('nutella')
   // cy.get('.a-color-state').should('include.text','nutella')
   cy.get('#twotabsearchtextbox').should('have.value','nutella') //arama kutusunda yazilani attribute olarak value'ya deger 
   //atadigi icin have.value dan assert ettik
   cy.screenshot()
    })

    it('',()=>{

    })
})