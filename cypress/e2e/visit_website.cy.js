// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

// describe('My First Test', () => {
//   it('Does not do much!', () => {
//     expect(true).to.equal(true)
//   })
// })

// describe('My First Test', () => {
//   it('Visits the Kitchen Sink', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

//failing
// describe('My First Test', () => {
//   it('Does not do much!', () => {
//     expect(true).to.equal(false)
//   })
// })

// describe('My First Test',function(){
//   it('find the content "type"',function () {
//     cy.visit('https://example.cypress.io')
//     cy.contains('type')
//   })
// })

describe('my first test',()=>{
  it('Gets,type and assert', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click({force:true})
    cy.url().should('include','/commands/actions')
    cy.get('.action-email').type('fake@email.com')
    cy.get('.action-email').should('have.value','fake@email.com')

  });
})