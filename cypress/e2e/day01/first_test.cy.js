/// <reference types="cypress" />

describe ('My First Test',()=>{
    //describe : Testi tanimliyorum
    //describe ve it mocha kutuphanesinden geliyor
    it('URL Test',()=>{

        cy.visit('https://www.google.com')
        //visit(URL) urle'e git
 
        cy.url().should('include','google')
        //should assertion icin kullaniliyor
        //include:icermek demek
        //should('include','google'):google icerir mi
    })

    it('Title Test',()=>{
        cy.visit('https://www.google.com')
        cy.title().should('include','Google')
        //title(): sayfanin title'ini alir

        cy.title().should('equal','Google')
        //equal title yazilana esitmi 

    })
})