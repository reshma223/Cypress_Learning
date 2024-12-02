describe('Registration Functionality',()=>{
    it('Register new user',()=>{
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get('#loginPanel > :nth-child(3) > a').click()
        cy.get("input[id='customer.firstName']").type('Reza')
        cy.get("input[id='customer.lastName']").type('Stha ')
        cy.get("input[id='customer.address.street']").type('4th ')
        cy.get("input[id='customer.address.city']").type('kathmandu ')
        cy.get("input[id='customer.address.state']").type('3 ')
        cy.get("input[id='customer.address.zipCode']").type('6600 ')
        cy.get("input[id='customer.phoneNumber']").type('99999999999')
        cy.get("input[id='customer.ssn']").type('12 ')
        cy.get("input[id='customer.username']").type('username')
        cy.get("input[id='customer.password']").type('password')
        cy.get("#repeatedPassword").type('password')
        cy.get("input[value='Register']").click()
        //cy.get("span[id='customer.username.errors']").contains('username already exists.')
        cy.get("span[id='customer.username.errors']").should('have.text','This username already exists.')



    })   
})