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

    it('',()=>{

    })
})