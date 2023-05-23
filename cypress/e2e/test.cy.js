/// <reference types="cypress" />

describe ('',()=>{
    it('',()=>{

    })

    it('',()=>{

    })
})
//npx cypress open ile browseri acmaliyiz

//ilk basta kurarken 1 kereligine asagidakileri ypmamiz gerekir
//npm init -y 
//npm install cypress
//npx cypress open

//https://docs.cypress.io/guides/overview/why-cypress ayrintili bilgi bulabilirsin

//https://www.npmjs.com/ plugin indirilebilir

//npx cypress run: yazdıgımızda butun testlerı calıstırabılırız ve hatalarda ss alır ve butun testlerın vıdeosunu alırız
//(browserı acmadan)hata alınan goruntulerı screenshot klasorune koyar
//butun testlerın cıdeo kayıtlarını vıdeos klasorune koyar

//npx cypress info: ile browserlar gorulebılınır ve hangı browserla calısmak ıstersek
//npx cypress run --browser chrome: komutunu yazarız(browserı acmadan calıstırır)
//aynı zamanda browser bılgılerını,cypress versıyonunu,ısletım sıstemını,
//hafıza bılgılerı gıbı verılerı gosterır

//npx cypress run --browser chrome --headed:browserı acarak testlerı calıstırır

//npx cypress verıfy: cypress ın yuklu oldugunu onaylar

//npx cypress run --spec 'cypress/e2e/day02' --browser chrome
//day02 klasorundekı butun testlerı chrrome headless ıle calıstırır

//npx cypress run --spec 'cypress/e2e/day02' --browser chrome --headed
//browserı acarak calıstırır

//Tek bır testı calıstırmak ıcın ıse;
//npx cypress run --spec 'cypress/e2e/day02/01_LoginTest1.cy.js' --browser chrome
//default olarak elektron ıle calıstırır


//Calıstırmak ıcın kod tanımlama
//package.json dosyası ıcersıındekı scrıpt bölümüne kendimizin belirlediği çalıştırma komutları 
//"mycode" :"npx cypress run --spec 'cypress/e2e/day02/01_LoginTesti1.cy.js"
//mycode dıye komut tanımlamış olduk
//oluşturdugumuz komutu termınalde**** npm run mycode *****ile direkt çalıştırabılırız

