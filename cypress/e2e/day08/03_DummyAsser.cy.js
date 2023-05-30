/// <reference types="cypress" />


describe ('Dummy API',()=>{
    it('dummy api',()=>{
cy.request('https://www.dummy.restapiexample.com/api/v1/employees').should((responce)=>{
/*
{
      "id": 10,
      "employee_name": "Sonya Frost",
      "employee_salary": 103600,
      "employee_age": 23,
      "profile_image": ""
    }
*/
   assert.equal(responce.status,200)
   assert.equal(responce.body.data[9].id,10)
   assert.equal(responce.body.data[9].employee_name,"Sonya Frost")
})


    })

   
})