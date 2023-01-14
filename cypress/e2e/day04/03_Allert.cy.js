/// <reference types="cypress" />

describe ('Allerts',()=>{
    it('Allert Test',()=>{
   cy.visit('the-internet.herokuapp.com/javascript_alerts')
   cy.wait(3000)
cy.get(':nth-child(1) > button').click()

   //Cypress otomatik olarak Allert Tamam butonuna tiklar
   cy.get('#result').should('have.text','You succesfully clicked an alert')
    })

    it('Accept Alert Test',()=>{
        cy.visit('the-internet.herokuapp.com/javascript_alerts')
        cy.wait(3000)
     cy.get(':nth-child(2) > button').click()
     //2 secenek oldugunda tamam ve iptal
     //Cypress otomatik olarak tamam butonuna tiklayacak

     cy.get('#result').should('have.text','You clicked: Ok')
     //
    })

    it('Dismiss Allert',()=>{
        cy.visit('the-internet.herokuapp.com/javascript_alerts')
        cy.wait(3000)
        cy.get(':nth-child(2) > button').click()
        //Cypress otomatik olarak tamam butonuna tiklayacak

        //on() =>jQuerry bir fonksiyondur
        //browserlarda acilan pencerelerin kontrolu icin kullanilir

        cy.on('window:confirm',()=>{
            return false
            //return true default olarak tikla demek
         })
        cy.get('#result').should('have.text','You clicked: Cancel')
    })
    it('Allert Text',()=>{
        cy.visit('the-internet.herokuapp.com/javascript_alerts')
        cy.window()//pop up pencerelerini kontrol ediyoruz
        .then($windowElement=>{
            //$windowElement->prompt'a bilgi girer
            cy.stub($windowElement,'prompt').returns('Cypress')
            cy.wait(3000)
            cy.get(':nth-child(3) > button').click()

        })
        cy.get('#result').should('have.text','You entered: Cypress')

       
    })
})