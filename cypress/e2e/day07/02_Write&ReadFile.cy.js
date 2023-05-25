/// <reference types="cypress" />

describe ('Write Read File',()=>{
    it('Write File',()=>{
cy.writeFile('./cypress/e2e/day07/03_NotDefteri.txt', 'Cypress\n')

cy.writeFile('./cypress/e2e/day07/03_NotDefteri.txt', '1)Cypress Install\n',{flag:'a+'})

cy.writeFile('./cypress/e2e/day07/03_NotDefteri.txt', '2)Plugin\n',{flag:'a+'})
})

    it('Read File',()=>{
cy.readFile('./cypress/e2e/day07/03_NotDefteri.txt').should('contain','Plugin')
    })
})