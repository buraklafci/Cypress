// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


//https://automationexercise.com/login sitesine login yapmak icin;
Cypress.Commands.add('ap_login',(email,password)=>{
    cy.visit('https://automationexercise.com/login')
    cy.get('.login-form > form > [type="email"]').type(email)
    cy.get('[type="password"]').type(password)
    cy.get('.login-form > form > .btn').click()
    
})


//Amazon arama:Girilen urun icin arama
Cypress.Commands.add('amazonSearch',(productName)=>{
cy.visit('www.amazon.com')
cy.get('#twotabsearchtextbox').type(productName)
cy.get('#nav-search-submit-button').click()



})