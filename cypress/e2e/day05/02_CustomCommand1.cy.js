/// <reference types="cypress" />

describe ('Custom Command1',()=>{
    it('Positive Login',()=>{
    cy.visit('https://automationexercise.com/login')
    cy.get('.login-form > form > [type="email"]').type('berkkk@gmail.com')
    cy.get('[type="password"]').type('berkkk')
    cy.get('.login-form > form > .btn').click()
    cy.get('.shop-menu > .nav > :nth-child(4) > a').should('contain.text','Logout')

    })

    it('Positive Login with Custom',()=>{
    cy.ap_login('berkkk@gmail.com','berkkk')
    //ap_login -> command.js dosyasinda olusturdugumuz fonksiyon
    cy.get('.shop-menu > .nav > :nth-child(4) > a').should('contain.text','Logout')
    })

    it.only('Negative Login',()=>{
    cy.ap_login('berkkk@gmail.com','berkkkk')

    cy.get('.login-form > form > p').should('contain.text','Your email or password is incorrect!')
    //cy.contains('.login-form > form > p','Your email or password is incorrect!')
    cy.get('.login-form > form > p').should('be.visible','Your email or password is incorrect!')
    cy.get('.login-form > form > p').should('include.text','incorrect')
    })

})