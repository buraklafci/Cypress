/// <reference types="cypress" />

describe ('CheckBoxes',()=>{
    it.only('Single CheckBox',()=>{
cy.visit('https://www.amazon.com')

//cy.get('[class="nav-a  "]').first().click()
//first() : Birden fazla web elementi var ise birinciyi sec demek

cy.get('[class="nav-a  "]').eq(0).click()
//first()=eq(0) index olarak belirlendigi icin 0'dan baslar

cy.get(':nth-child(1) > label > .CheckboxFilter-module__gridFilterCheckbox_9gZBKxneWNZMc30ac9ue7')
.should('not.be.checked')
//.should('not.be.checked') secili olmadigini teyit eder

cy.get(':nth-child(1) > label > .CheckboxFilter-module__gridFilterCheckbox_9gZBKxneWNZMc30ac9ue7')
.check()
//tiklama yapar

cy.get(':nth-child(1) > label > .CheckboxFilter-module__gridFilterCheckbox_9gZBKxneWNZMc30ac9ue7')
.should('be.checked')
//.should('be.checked') secili oldugunu teyit eder

cy.get(':nth-child(1) > label > .CheckboxFilter-module__gridFilterCheckbox_9gZBKxneWNZMc30ac9ue7')
.uncheck()
//tiklamayi kaldirir

cy.get(':nth-child(1) > label > .CheckboxFilter-module__gridFilterCheckbox_9gZBKxneWNZMc30ac9ue7')
.should('not.be.checked')


    })

    it('All CheckBoxes 1',()=>{
        cy.visit('https://www.amazon.com')
        cy.get('[class="nav-a  "]').eq(0).click()
        //butun checkboxlara tikla
        cy.get('input[type="checkbox"]').check()
        cy.wait(3000)
        //butun checkboxlari kaldir
        cy.get('input[type="checkbox"]').uncheck()
    })

    it('Some CheckBoxes',()=>{
        cy.visit('https://www.amazon.com')
        cy.get('[class="nav-a  "]').eq(0).click()
        //1.kutuya tikla
        cy.get('input[type="checkbox"]').eq(0).check().should('be.checked')
        //5.kutuya tikla
        cy.get('input[type="checkbox"]').eq(4).check().should('be.checked')
        //10.kutuya tikla
        cy.get('input[type="checkbox"]').eq(9).check().should('be.checked')

        //cy.get('input[type="checkbox"]').eq(9).parent().should('have.class','checked')
        //check edildiginde parent tag'inda ekstra checked diye birsey cikarsa bu sekilde de assert edilebilinir

        //1.tiklamasini kaldir
        cy.get('input[type="checkbox"]').eq(0).uncheck().should('not.be.checked')
        //.uncheck() :tiklamayi kaldirir
        //.should('not.be.checked'):tiklamanin kaldirildigni assert eder
    })

    it.skip('All CheckBoxes 2',()=>{
        cy.visit('https://www.amazon.com')
        cy.get('[class="nav-a  "]').eq(0).click()
        //hepsine tiklayabilmek icin click()->tek bir web elemente tiklar ama
        //click({multiple:true}) ile butun web elementlere tiklariz
        //YUKARDA CHECKBOX ILE YAPARKEN ATLAMA OLDU AMA BUNDA HEPSINE TIKLADI
        cy.get('input[type="checkbox"]').click({multiple:true})
    })

    
})