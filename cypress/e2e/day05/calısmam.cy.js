/// <reference types="cypress" />

describe ('Calısmalarım',()=>{
    it('Drag and Drop Circle',()=>{
     cy.visit('https://testcenter.techproeducation.com/index.php?page=drag-and-drop-circles')
     cy.get('#draggable').drag('#droptarget', {force: true})
    })

    it('Drag and Drop2 Circle',()=>{
        cy.visit('https://testcenter.techproeducation.com/index.php?page=drag-and-drop-circles')
        const dataTransfer=new DataTransfer();
        cy.get('#draggable').trigger('dragstart',{force: true},{
            dataTransfer
        })
        cy.get('#droptarget').trigger('drop',{
            dataTransfer 
        })
    })
    it.only('Drag and Drop',()=>{
        cy.visit('https://testcenter.techproeducation.com/index.php?page=drag-and-drop')
        cy.get('#column-a').drag('#column-b')
    })

    it.only('Drag and Drop2',()=>{
        cy.visit('https://testcenter.techproeducation.com/index.php?page=drag-and-drop')
        const dataTransfer=new DataTransfer();
        cy.get('#column-a').trigger('dragstart',{
              dataTransfer
        })
        cy.get('#column-b').trigger('drop',{
            dataTransfer
        })
    })
})