/// <reference types="cypress" />

describe ('Multiple Windows',()=>{
    it.skip('Removing Attribute',()=>{//yeni pencere acildiginda cypress onun testini yapamadigi icin attribute'u kaldirip
        //yeni pencere acilmadigi icin attribute silip islemimizi yapariz
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example > a').invoke('removeAttr','target').click()//target attribute'u kaldirdik ve ayni pencere acildi
        cy.get('h3').should('have.text','New Window')
    })

    it.only('New URL',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example > a').then((element)=>{
            const newUrl=element.prop('href')
        //prop() -> href degerini aldik
        cy.visit(newUrl)    
        })

        })
    })
