/// <reference types="cypress" />

describe ('Calısmalarım',()=>{

    it('Some checkBox',()=>{
cy.visit('https://amazon.com')
cy.get('[href="/gp/goldbox?ref_=nav_cs_gb"]').click()

cy.get('[data-testid="grid-filter-PRIME"] > :nth-child(2) > label > .CheckboxFilter-module__gridFilterCheckbox_9gZBKxneWNZMc30ac9ue7')
.eq(0).click().
should('be.checked')

cy.get('[data-testid="grid-filter-PRIME"] > :nth-child(3) > label > .CheckboxFilter-module__gridFilterCheckbox_9gZBKxneWNZMc30ac9ue7').
should('not.be.checked')

cy.get('[data-testid="grid-filter-PRIME"] > :nth-child(3) > label > .CheckboxFilter-module__gridFilterCheckbox_9gZBKxneWNZMc30ac9ue7').
check().
should('be.checked')

cy.get('[data-testid="grid-filter-PRIME"] > :nth-child(3) > label > .CheckboxFilter-module__gridFilterCheckbox_9gZBKxneWNZMc30ac9ue7').
uncheck().should('not.be.checked')
//check() tiklar  uncheck() tiklamayi kaldirir
    })

    it('All checkBox',()=>{
        cy.visit('https://amazon.com')
        cy.get('[href="/gp/goldbox?ref_=nav_cs_gb"]').click()
        cy.get('input[type=checkbox').
        click({multiple:true})//{multiple:true}  hepsine tiklar
    })
    
        it("Allert Ok",()=>{
            cy.visit('https://testcenter.techproeducation.com/index.php?page=javascript-alerts')
            cy.get('[onclick="jsAlert()"]').click({force: true}) // {force: true} tıklamazsa kullanılabılınır
            cy.get('#result').should('contain','You successfully clicked an alert') //default olarak otomatıkmen OK tıklar
        })
        it("Allert Dismiss",()=>{
            cy.visit('https://testcenter.techproeducation.com/index.php?page=javascript-alerts')
            cy.contains('Click for JS Confirm').click({return: false })//tıklamıyo
            cy.on("dismiss",()=>{
                 return false 
                })
                
        })
        it("Allert Text",()=>{
            cy.visit('https://testcenter.techproeducation.com/index.php?page=javascript-alerts')
            
            cy.window().then(AllertText=>{
                cy.stub(AllertText,'prompt').returns('Cypress')

                cy.get('[onclick="jsPrompt()"]').click({force: true})
            })
            cy.get('#result').should('contain','You entered: Cypress')
        })

        it('IFrame Test',()=>{
            cy.visit('https://testcenter.techproeducation.com/index.php?page=iframe')
           // cy.frameLoaded('iframe[src="/index.php"]')  yer tanımlanıyor yazılmasada çalışıyor
            cy.iframe().find('a[class="btn btn-primary btn-lg"]').click({force: true})
          })

          it.only('multiple window',()=>{
           cy.visit('https://testcenter.techproeducation.com/index.php?page=multiple-windows')
         })

})