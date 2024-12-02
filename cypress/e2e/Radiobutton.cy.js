describe('RadioButton Functionality', ()=>{
    it('RadioButton Demo',()=>{
        cy.visit('https://formy-project.herokuapp.com/',{headers:{"Accept-Encoding":"gzip, deflate"}})
        cy.get('body > div:nth-child(1) > div:nth-child(2) > li:nth-child(16) > a:nth-child(1)').click()
        cy.get('#radio-button-1').click()
        cy.get('input[type="radio"]').check({ multiple: true }).wait(2000)
        cy.get('input[type="radio"]').check(['option1','option2'])  //on type,based on value passed on array


    })
} )