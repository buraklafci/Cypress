/// <reference types="cypress" />

describe ('Post With Auth',()=>{
    it('Test',()=>{
cy.request({
url:'https://restful-booker.herokuapp.com/booking',
method:'Post',
auth:{
    "username" : "admin",
    "password" : "password123"
},
body:{
    "firstname": "BERK",
    "lastname": "KARANFİL",
    "totalprice": 222,
    "depositpaid": true,
    "bookingdates": {
        "checkin": "2013-02-02",
        "checkout": "2014-02-02"
    },
    "additionalneeds": "additionalneeds"
},

    "token": "abc123"

}).then((Response)=>{
    console.log(Response)
    expect(Response.status).to.eq(200)
    expect(Response.body.booking.firstname).to.eq("BERK")
    expect(Response.body.booking.lastname).to.eq("KARANFİL")
    expect(Response.body.booking.totalprice).to.eq(222)
    expect(Response.body.booking.depositpaid).to.eq(true)
    expect(Response.body.booking.bookingdates.checkin).to.eq("2013-02-02")
    expect(Response.body.booking.bookingdates.checkout).to.eq("2014-02-02")
    expect(Response.body.booking.additionalneeds).to.eq('additionalneeds')
   

})
})

})


    

