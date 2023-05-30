/// <reference types="cypress" />

describe ('Json Place Holder',()=>{
    const requestUrl='https://jsonplaceholder.cypress.io/comments'
    it('Test 01',()=>{
cy.request(requestUrl).should((responce)=>{
/*
{
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  }
*/
assert.equal(responce.status,200)
assert.equal(responce.body[0].postId,1)
assert.equal(responce.body[0].id,1)
assert.equal(responce.body[0].name,"id labore ex et quam laborum")
assert.equal(responce.body[0].email,"Eliseo@gardner.biz")
assert.equal(responce.body[0].body,"laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium")
})
    })

    it('Test 02',()=>{
        cy.request(requestUrl).should((responce)=>{
            expect(responce.status).to.eq(200)
            expect(responce.body[0].postId).to.eq(1)
            expect(responce.body[0].id).to.eq(1)
            expect(responce.body[0].name).to.eq("id labore ex et quam laborum")
            expect(responce.body[0].email).to.eq("Eliseo@gardner.biz")
            expect(responce.body[0].body).to.eq("laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium")
        })
    })
    it('Test 03',()=>{

    })
})