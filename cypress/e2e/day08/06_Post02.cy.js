/// <reference types="cypress" />

describe ('Post 2',()=>{
    it('Test 1',()=>{
const urlRequest='https://dummy.restapiexample.com/api/v1/create'
const bodyRequest=	{"name":"Cypress","salary":"123","age":"23"}
   cy.request({
    url:urlRequest,
    method:'post',
    body:bodyRequest
   }).then((responce)=>{
    expect(responce.status).to.eq(200)
    expect(responce.body.status).to.eq('success')
    expect(responce.body.message).to.eq("Successfully! Record has been added.")
    expect(responce.body.data.name).to.eq('Cypress')
    expect(responce.body.data.salary).to.eq('123')
    expect(responce.body.data.age).to.eq('23')
    
   
    
   })
    })

   
})