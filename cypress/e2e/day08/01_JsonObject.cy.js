/// <reference types="cypress" />

describe ('Json Object',()=>{
    it('Json Object',()=>{
cy.visit('https://www.google.com')
const simpleObject={"name":"burak","lastname":"berk","yas":35}
console.log(simpleObject.lastname)//berk
console.log(simpleObject.yas)//35

const ArrayOfValue=["eins","zwei","drei"]
console.log(ArrayOfValue[0])//eins

const ArrayObject=[{"name":"burak"},{"lastname":"berk"},{"yas":35}]
console.log(ArrayObject[2].yas)//35

const body=[{"name":"burak","lastname":"berk","yas":35},
            {"name":"ali","lastname":"terk","yas":25},
            {"name":"ahmet","lastname":"kert","yas":15}]

            console.log(body[2].yas)//15
            console.log(body[0].name)//burak
            console.log(body[0])//{"name":"burak","lastname":"berk","yas":35}
            console.log(body)//hepsi
    })

   
})