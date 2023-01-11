/// <reference types="cypress" />

describe ('Login Menu Test',()=>{
    it('Test Case1',()=>{
     cy.visit("https://automationexercise.com/")//sayfaya git

     cy.get(':nth-child(4) > a > .fa').click()//logine tikla

     cy.contains('.login-form > h2','Login to your account')//assert et
     cy.contains('.signup-form > h2','New User Signup!')

        })

    it.only('Test Case2',()=>{
        cy.visit("https://automationexercise.com/")//sayfaya git
        cy.get(':nth-child(4) > a > .fa').click()//logine tikla

        //1.yol
        cy.get('.signup-form > h2').should('contain','New User Signup!')
        cy.contains('.signup-form > h2','New User Signup!')
        //2.yol
        cy.get('.signup-form > h2').then(emailText=>{
            expect(emailText.text()).to.eq('New User Signup!')
        //3.yol   
        cy.get('.signup-form > h2').invoke('text').then((emailtext2)=>{
          expect(emailtext2).to.equal('New User Signup!')
        })
        })  


    })
    
})