/// <reference types="cypress" />
import { fa, faker } from '@faker-js/faker';
//buraya da import edılebılır(e2e dosyasına eklenmesıne gerek yok)
/*
https://www.npmjs.com/
app.echr.coe.int/SOP/index.aspx?lg=tur sitesinden

npm install --save-dev @faker-js/faker terminalden plugını ındırıp

import { faker } from '@faker-js/faker'; import ettık

*/
describe ('Faker',()=>{
    it('Faker',()=>{
cy.visit('https://automationexercise.com/login')

let isim=faker.person.firstName('male')
cy.get('[type="text"]').type(isim)

let email=faker.internet.email()
cy.get('.signup-form > form > [type="email"]').type(email)

cy.get('.signup-form > form > .btn').click()

cy.get('#id_gender1').click()


let password=faker.internet.password()
cy.get('#password').type(password)

cy.get('#first_name').type(isim)

let lastName=faker.person.lastName()
cy.get('#last_name').type(lastName)

let address=faker.address.streetAddress()
cy.get('#address1').type(address)

cy.get('#country').select(2)

let state=faker.address.state()
cy.get('#state').type(state)

let city=faker.address.city()
cy.get('#city').type(city)

let zipcode=faker.address.zipCode()
cy.get('#zipcode').type(zipcode)

let phoneNumber=faker.phone.number()
cy.get('#mobile_number').type(phoneNumber)

cy.get('.login-form > form > .btn').click()

cy.get('b').should('contain.text','Account Created')
    })

   
})