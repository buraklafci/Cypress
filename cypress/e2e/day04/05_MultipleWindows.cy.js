/// <reference types="cypress" />

describe ('Multiple Windows',()=>{
    it('Removing Attribute',()=>{
        cy.visit('the-internet.herokuapp.com/windows')
        cy.get('.example > a').invoke('removeAttr','target').click()
        cy.get('h3').should('have.text','New Window')
    })

    it('New URL',()=>{
        cy.visit('the-internet.herokuapp.com/windows')
        cy.get('.example > a').then((element)=>{
            const newUrl=element.prop('href')
        //prop() -> href degerini aldik
        cy.visit(newUrl)    
        })

        })
    })
