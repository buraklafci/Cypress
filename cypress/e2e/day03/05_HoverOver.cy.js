/// <reference types="cypress" />

describe ('Hover',()=>{
    it('Test Case',()=>{
cy.visit('www.amazon.com')
cy.get('.icp-nav-link-inner > .nav-line-2').trigger('mouseover')
//trigger('mouseover') mouse'u gosterilen yere gotur bekle

cy.contains('Change country/region.').click()

cy.get('#icp-dropdown').select('France',{force: true})

    })
})