describe('Scroll Demo',()=>{
    it('Scroll Demo',()=>{
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        //cy.scrollTo('bottom').wait(2000)
        //cy.scrollTo('top')
        //cy.get('#footerPanel > :nth-child(1) > :nth-child(2) > a').scrollIntoView()
        //cy.scrollTo(0,100)
        cy.scrollTo('center')



        
    })   
})