/// <reference types="cypress" />

describe ('Scroll',()=>{
    it('ScrollIntoView',()=>{
    cy.visit('https://www.koalaresorthotels.com/')
    cy.wait(4000)
    cy.get('.col-md-7 > .mb-4').scrollIntoView()
    //locate ettigimiz yerin altina sayfayi kaydirir
    cy.wait(4000)
    cy.get('.testimony-section > .container > .row.justify-content-center').
    scrollIntoView({duration:5000})
    //{duration:5000} 5 sn'de belirtilen yere iner

    //scroll(x,y)
    cy.scrollTo(0,0)
    cy.wait(4000)
    cy.scrollTo(0,500)
    cy.wait(4000)
    cy.scrollTo(0,-400)
    cy.wait(4000)
    })

    it('',()=>{

    })
})