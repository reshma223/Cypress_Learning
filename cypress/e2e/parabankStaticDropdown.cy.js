describe('Login functionality',()=>{
    it('Login Register User',()=>{
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get("body > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(6) > a:nth-child(1)").click();
        cy.get('#loanProvider').select(0).wait(2000)
        cy.get('#loanProvider').select("local").wait(2000)
        cy.get('#loanProvider').select("Web Service")
        
    })   
})