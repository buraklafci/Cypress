/// <reference types="cypress" />

describe ('SuperDomain',()=>{
    it('Test Case',()=>{
cy.visit('www.amazon.com')
cy.wait(3000)
//cy.visit('www.google.com') ayni test icerisinde farkli adrese gidemezsin 
//CYPRESS NEGATIVE YONU
cy.visit('https://www.amazon.com/deals/?_encoding=UTF8&ref_=nav_cs_gb&pf_rd_r=QHVKSPBGNZDZDJRF39NC&pf_rd_p=6c1cacd7-a1fe-4ee5-a9b4-aa796dcc0e74&pd_rd_r=df24c7b0-f581-470f-ad52-1901fe143a5a&pd_rd_w=gHzBF&pd_rd_wg=wpc1j')
//ayni domain icerisinde farkli sayfaya gidilebbilinir
    })
    it.only('Test Case 2',()=>{
        cy.visit('https://www.cypress.io/')
        cy.wait(3000)
        cy.visit('https://docs.cypress.io/')
        cy.wait(3000)
        //ayni sayfa ama farkli uzantili oluncada gitmez

        //NOT:YUKARDIDA ALINAN NOT GUNCELLENDIKTEN SONRA BU NEGATIF YONU GIDERILMISTIR
        
            })
})