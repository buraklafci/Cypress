/// <reference types="cypress" />

describe ('İntercept',()=>{
    it('Test',()=>{
cy.visit('https://example.cypress.io/commands/waiting')
//cy.intercept('GET','https://jsonplaceholder.cypress.io/comments/1')
cy.intercept('GET','**/comments/**').as('getComment') //Networku dinle
//AS daha sonra kullanmak uzere değişken atıyo (dinlemeyle ilgili) @ işaretini kullanmak üzere
//@getComment
cy.get('.network-btn').click()

cy.wait('@getComment').its('response').then((response)=>{
    console.log(response)

    assert.equal(response.statusCode,200,'Status Code Controlled')
})
    })

})