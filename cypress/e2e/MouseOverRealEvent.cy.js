describe('Mouse Over Real Event',()=>{
    it('Mouse Over Real Event using package',()=>{
    //plugins-community plugins-real-event-cy.get().realMouseUp/Down()
    //package install
    //npm install cypress-real-events
    //commands.js-import "cypress-real-events";   
    cy.visit('https://www.sharesansar.com/').wait(2000)
    cy.get('#cssmenu > :nth-child(3) > :nth-child(3) > [href="#"]')
     .realHover();
    })   
})