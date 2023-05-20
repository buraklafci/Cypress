/// <reference types="cypress" />
/*
1)https://www.npmjs.com/package/cypress-file-upload
2)npm install --save-dev cypress-file-upload

*/
describe ('File Upload',()=>{
    it('Single File Upload',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
       const path="bir.png"
        cy.get('#filesToUpload').attachFile(path)
        cy.get('#fileList > li').should('contain.text','bir')
        cy.get('#fileList > li').should('include.text','bir')
        cy.get('#fileList > li').should('have.text','bir.png')
    })

    
    it('',()=>{

    })
})

