/// <reference types="cypress" />

describe ('DragAndDrop',()=>{
    it('DragAndDrop',()=>{
     cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
     //plugin indir https://www.npmjs.com/package/@4tw/cypress-drag-drop
     //yarn add --dev @4tw/cypress-drag-drop
     cy.get('#column-a')//suruklenecek webelementi
     .drag('#column-b')//suruklendigi yer
     
    })

    it('DragAndDrop 2',()=>{
        cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
        const dataTransfer=new DataTransfer();
        cy.get('#column-a').trigger('dragstart',{
            dataTransfer
        })
        cy.get('#column-b').trigger('drop',{
            dataTransfer
        })
    })
})