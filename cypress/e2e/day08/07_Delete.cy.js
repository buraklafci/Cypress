
/// <reference types="cypress" />

describe ('Delete',()=>{
    it('Test 1',()=>{
const urlRequest='https://dummy.restapiexample.com/api/v1/delete/2'

   cy.request({
    url:'https://dummy.restapiexample.com/api/v1/delete/2',
    method:'delete',

}).then((responce)=>{
    expect(responce.status).to.eq(200)
    expect(responce.body.status).to.eq('success')
    expect(responce.body.message).to.eq("Successfully! Record has been deleted")
    expect(responce.body.data).to.eq("2")
    
   
    
   })
    })

   
})