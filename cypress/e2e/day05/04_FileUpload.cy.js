/// <reference types="cypress" />
/*
1)https://www.npmjs.com/package/cypress-file-upload
2)npm install --save-dev cypress-file-upload
3)e2e dosyassına import 'cypress-file-upload'; ekleme

fotograflar fixture dosyası içinde olması gerekıyot
*/
describe ('File Upload',()=>{
    it('Single File Upload',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
       const path1="bir.png"
        cy.get('#filesToUpload').attachFile(path1)
        cy.get('#fileList > li').should('contain.text','bir')
        cy.get('#fileList > li').should('include.text','bir')
        cy.get('#fileList > li').should('have.text','bir.png')
        
    })

    
    it('Multiple File Upload',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        const path1="bir.png"
        const path2="iki.png"
         cy.get('#filesToUpload').attachFile(path1).wait(2000).attachFile(path2)
       
       

    })
    it('Multiple File Upload 2',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        const path1="bir.png"
        const path2="iki.png"
         cy.get('#filesToUpload').attachFile([path1,path2]) //aynı anda butun resımlerı yukleme
         cy.get('#fileList > :nth-child(1)').should('contain.text','bir')
         cy.get('#fileList > :nth-child(2)').should('contain.text','iki')

    })
    it.only('Owerwrite File Name',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        const path1="bir.png"
        cy.get('#filesToUpload').attachFile({filePath:path1,fileName:"image01.png"})
        cy.get('#fileList > li').should('contain.text','image01')
    })
})

