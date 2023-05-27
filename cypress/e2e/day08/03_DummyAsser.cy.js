/// <reference types="cypress" />

describe ('Dummy API',()=>{
    it('dummy api',()=>{
cy.request('https://www.dummy.restapiexample.com/api/v1/employees')
    })

   
})