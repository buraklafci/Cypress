/// <reference types="cypress" />

describe ('Post',()=>{
    const requestUrl='https://jsonplaceholder.cypress.io/comments'
    const body={ userId:500,
        title:'Cypress cok guzel',
        body:'JavaScript daha da guzel'}


    it('Test',()=>{
cy.request('Post',requestUrl,{
    userId:500,
    title:'Cypress cok guzel',
    body:'JavaScript daha da guzel'
}).should((responce)=>{//should ile de dogrulama yapılabılır
    assert.equal(responce.status,201)//assert ile de dogrulama yapılabılınır
    expect(responce.status).to.eq(201)//expect ile de dogrulama yapılabılınır
}).then((responce)=>{//then ile de dogrulama yapılabılınır
    assert.equal(responce.status,201)//assert ile de dogrulama yapılabılınır
    expect(responce.status).to.eq(201)//expect ile de dogrulama yapılabılınır
    expect(responce.body.userId).to.eq(500)
    expect(responce.body.title).to.eq('Cypress cok guzel')
    expect(responce.body.body).to.eq('JavaScript daha da guzel')
    
})

    })  
    it('Test 2',()=>{
        cy.request({
              url:requestUrl,
              method:'Post',
              body:body
          }).then((responce)=>{//then ile de dogrulama yapılabılınır
          assert.equal(responce.status,201)//assert ile de dogrulama yapılabılınır
          expect(responce.status).to.eq(201)//expect ile de dogrulama yapılabılınır
          expect(responce.body.userId).to.eq(500)
          expect(responce.body.title).to.eq('Cypress cok guzel')
          expect(responce.body.body).to.eq('JavaScript daha da guzel')
      })
   })
})