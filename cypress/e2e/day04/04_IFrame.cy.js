/// <reference types="cypress" />

describe ('IFrame',()=>{
    it('IFrame Test',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
        /*
        1)Plugin Indir

        https://www.npmjs.com/package/cypress-iframe

        npm install -D cypress-iframe

        2)Import Plugin
          import 'cypress-iframe';
          // or
          require('cypress-iframe');

          support dosyasindaki e2e.js dosyasina yazilacak

        3)Bu islemlerden sonra cy.frameLoaded() ve cy.iframe()
         komutlarini kullanabilecegiz   

        */
         cy.frameLoaded('#mce_0_ifr')
         //frameLoaded() ->iframe'in yerini tanimliyoruz
         //driver.switchto.frame('#mce_0_ifr') ->selenium

         cy.iframe().find('p').clear()
         //iframe() - >iframe'e git
         //find('p') - > p tagini bul
         //clear() - > metni temizle
         cy.iframe().find('p').type('Cypress')//frame icine text yazdik
        
         cy.get('.large-4 > div > a').should('contain.text','Elemental Selenium')
       
    })

    it('',()=>{
       
    })
})