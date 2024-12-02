describe('Checkbox Functionality', ()=>{
    it('Checkbox Demo',()=>{
        cy.visit('https://formy-project.herokuapp.com/',{headers:{"Accept-Encoding":"gzip, deflate"}})
        cy.get('body > div:nth-child(1) > div:nth-child(2) > li:nth-child(7) > a:nth-child(1)').click()
        cy.get('#checkbox-2').click()
        cy.get('input[type="checkbox"]').click({ multiple: true })

    })
} )