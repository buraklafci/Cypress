/// <reference types="cypress" />

describe ('Hover',()=>{
    it('Test Case',()=>{
cy.visit('www.amazon.com')
cy.get('.icp-nav-link-inner > .nav-line-2').trigger('mouseover')
cy.wait(3000)
//trigger('mouseover') mouse'u gosterilen yere gotur bekle

cy.contains('Change country/region.').click()

cy.get('#icp-dropdown').select('France',{force: true})

    })
    it.only('Test Case2',()=>{
        cy.visit('https://testcenter.techproeducation.com/index.php?page=hovers')
        cy.get(':nth-child(3) > img').trigger('mouseover')
        cy.get(':nth-child(3) > .figcaption > h5').should('contain','name: user1')
    })
})