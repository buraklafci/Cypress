/// <reference types="cypress" />

describe ('Navigation',()=>{
    it('Back, Forward, Refresh',()=>{
        cy.visit("https://www.koalaresorthotels.com/")

        cy.wait(3000) //gorebilmek icin attik normalde atmaya gerek yok otomatik kendisi atiyor

        cy.get('#navLogon > .nav-link').click()

        cy.wait(3000)
        cy.go('back')
        //onceki sayfaya git

        cy.wait(3000)
        cy.go('forward')
       //sonraki sayfaya git

        cy.wait(3000)
        cy.go(-1)
        //-1 bir onceki sayfaya git

        cy.wait(3000)
        cy.go(1) 
        //1 sonraki sayfaya git

        cy.wait(3000)
        cy.reload()
        //sayfayi yenile
    })

    it.only('Ching Navigation',()=>{
        cy.visit("https://www.koalaresorthotels.com/")

        cy.wait(3000)
        cy.get('#navLogon > .nav-link').click()

        cy.wait(3000)
        cy.go('back').go('forward').go(-1).go(1).reload(true)
        //.reload(true) :sayfayi hafizadan degil(cash'ten yapmaz),yeniden yukler

    })
})