describe('Login functionality',()=>{
    it('Login Register User',()=>{
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get("input[name='username']").type('haha')
        cy.get("input[name='username']").type('haha').type('{selectall}{del}')  //type data clear
        
    })   
})