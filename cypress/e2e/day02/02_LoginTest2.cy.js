/// <reference types="cypress" />

describe ('Koala Resort Hotel',()=>{
    it('Log in Testi',()=>{
        cy.visit("https://www.koalaresorthotels.com")
        //1.yol
       // cy.contains('Log in').click()

        //2.yol contains('locator','Text')
       // cy.contains('#navLogon > .nav-link','Log in').click()
      // cy.contains('li','Log in').click()

      //3.yol contains('text') buyuk kucuk harf duyarsiz
      cy.contains('log in',{matchCase:false}).click() 

      //Assertion
    //1.yol have.text
    cy.get('.row > .mb-4').should('have.text','Log in')
    //locate edilen yerdeki metinde 'Log in' yaziyor mu? Var mi? have.text'te text birebir ayni olmali

    //2.yol cy.url().should()
    cy.url().should('includes','Account/Logon')

    //3.yol be.visible
    cy.get('.row > .mb-4').should('be.visible')

    //4.yol  cy.title().should()
    cy.title().should('eq','KoalaResortHotels - Log in')

    //5.yol include.text  locate edilen yerdeki metin ... iceriyor mu?
    cy.get('.row > .mb-4').should('include.text','Log in')

    //Toplam Link sayisi
    cy.get('li a').should('have.length',29)

    //find(): Belirli bir html seciminin alt elemanlarini bulmak icin
    cy.get('li').find('a[href="/Rooms/320"]').should('have.text','Twin 1')
    //cy.find() seklinde kullanilmaz
    //cy.get().find() 


    //within()
    cy.get('.categories').within(()=>{
        cy.get('a[href="/Rooms/320"]').click()
    })
    //Parent:.categories   class isminden locate alindigi icin . ile yaptik
    //Child:a[href="/Rooms/320"]
    /*
    not:Web elementleri ilk olarak get() ile bulacagiz,bulunmazsa
    find() ile deneyecegiz,bulunmazsa
    within() ile buluruz
    */
    })

   
})