/// <reference types="cypress" />

describe ('Selector Examples',()=>{
    it.skip('Css Selectors',()=>{
cy.visit('www.amazon.com')
//1)By Tag Name
cy.get('input')
//2)By Id
cy.get('#twotabsearchtextbox')
//3)By Class
cy.get('.nav-search-field')
//4)By Attributename and Value
cy.get('[type="text"]')
//5)By 2 Attribute
cy.get('[type="text"][id=twotabsearchtextbox]')


    })

    it('XPath',()=>{
cy.visit('www.google.com')
//By XPath
cy.xpath('//a[@class="gb_m"]').should('contain','Gmail')
cy.xpath('//a[@class="gb_m"]').should('include.text','Gmail')
// /// <reference types="cypress" /> xpath() algilanmaz ise 1. satira ustteki kodu yazabilirsiniz

//require('@cypress/xpath');
//yukardaki kodu e2e.cy.js dosyasina ekleyecegiz
//cy.xpath('//a[@class="gb_m"]').click({ multiple: true }) tikladgi halde hata veriyor 
//////BU YUZDEN CSS KULLANMAK DAHA IYI  

    })
})