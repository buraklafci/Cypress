/// <reference types="cypress" />

import HomePage from "../POM/HomePage.cy"
import LoginPage from "../POM/LoginPage.cy"

describe ('HotelMyCamp',()=>{

    before(function(){
        cy.fixture("HotelMyCamp").then(function(data){
            this.data=data
        })
    })
    it('Login',function(){
        const homePage=new HomePage()
        const loginPage=new LoginPage()

        //cy.visit('https://www.hotelmycamp.com/')
        //cy.visit(this.data.url)
        homePage.homePage()//pom'a uygun olarak HomePage classından aldık.Selenyumdakı Page sayfası gibi
        //locateler orada bukunuyor

        //cy.get('#navLogon > .nav-link').click()
        homePage.login()
       
        //cy.get('#UserName').type('manager')
        //cy.get('#UserName').type(this.data.userName)
        loginPage.userName().type(this.data.userName)//pom'a uygun olarak dataları fixture ıcerısındekı
        //HotelMyCamp.json dan aldık.Selenıum'dakı configuration gibi

        //cy.get('#Password').type('Manager1!')
        //cy.get('#Password').type(this.data.password)
        loginPage.password().type(this.data.password)

        //cy.get('#btnSubmit').click()
        loginPage.loginButton()

        //cy.get('.username').should('include.text',this.data.userName)
        loginPage.assert().should('include.text',this.data.userName)
    })

   
})