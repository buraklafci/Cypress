/// <reference types="cypress" />



describe ('HotelMyCamp',()=>{

    before(function(){
        cy.fixture("HotelMyCamp").then(function(data){
            this.data=data
        })
    })
    it('Login',function(){
        //cy.visit('https://www.hotelmycamp.com/')
        cy.visit(this.data.url)
        cy.get('#navLogon > .nav-link').click()
        //cy.get('#UserName').type('manager')
        cy.get('#UserName').type(this.data.userName)
        //cy.get('#Password').type('Manager1!')
        cy.get('#Password').type(this.data.password)
        cy.get('#btnSubmit').click()
        cy.get('.username').should('include.text',this.data.userName)
    })

   
})