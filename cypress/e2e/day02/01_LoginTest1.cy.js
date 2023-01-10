/// <reference types="cypress" />

describe ('Koala Resort Hotel',()=>{
    it('Log in Testi',()=>{
     cy.visit("https://www.koalaresorthotels.com/")
     //Seleniumdaki get()

     //1.yol
     //cy.get('#navLogon > .nav-link').click()

     //2.yol
     cy.contains('Log in').click()
     //contains('Log in'):DOM'da Log in textini bul.Metni text olarak arar.
     cy.url().should('include','Account/Logon')
     //assertion url de varmi


     //username:Manager
     cy.get('#UserName').type('Manager')
     //Selenium
     //driver.findElement(BycssLocator('#UserName')).sendKeys('Manager')

     //password:Manager1!
     //1.yol
    // cy.get('#Password').type('Manager1!')
    // cy.get('#btnSubmit').click()
    //2.yol
    cy.get('#Password').type('Manager1!{enter}')

        })

    
})