/// <reference types="cypress" />

describe ('DropDown',()=>{
    it('Test Case',()=>{

    cy.visit('https://the-internet.herokuapp.com/dropdown')
    
    cy.get('#dropdown').select('Option 1')
    cy.get('#dropdown').should('have.value',1)

    cy.get('#dropdown').select('Option 2').should('have.value',2)


    cy.get('#dropdown').should('contain','Option 2')
    cy.get('#dropdown').contains('Option 2')
    cy.contains('Option 2')
   
    })

    it.only('Test Case2',()=>{
        cy.visit('https://testcenter.techproeducation.com/index.php?page=dropdown')
        cy.get('#dropdown').select('Option 1',{force: true})//{force: true} yazilmazsa hata veriyor
        cy.get('#year').select('1991',{force: true})
        cy.get('#month').select('February',{force:true})
        cy.get('#day').select('2',{force:true})
        cy.get('#state').select('Alabama',{force:true})
        cy.get('[value="java"]').click({force: true})
        
    })

})