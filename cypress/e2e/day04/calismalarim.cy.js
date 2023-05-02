/// <reference types="cypress" />

describe ('calismam',()=>{
    it.only('checkBox',()=>{
cy.visit('https://amazon.com')
cy.get('[href="/gp/goldbox?ref_=nav_cs_gb"]').click()
cy.get('[data-testid="grid-filter-PRIME"] > :nth-child(2) > label > .CheckboxFilter-module__gridFilterCheckbox_9gZBKxneWNZMc30ac9ue7').eq(0).click().
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
})