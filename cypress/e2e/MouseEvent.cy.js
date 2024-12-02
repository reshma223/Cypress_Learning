describe('Mouse Event',()=>{
    it('Mouse Event using trigger and invoke',()=>{
        //.trigger('mousedown/mouseup/mouseover')
        //change event(slider)
        //drag and drop
        //it doesnt work for all type
        
        //invoke use previously yeild subject .its()
        //invoke-correct locator-dropdown parent
        //show child element use parent invoke doesnt work
        //use immediate parent, not the main
        //cy.get('#cssmenu > :nth-child(3) > :nth-child(3) > [href="#"]').invoke('show')
        cy.visit('https://www.sharesansar.com/')
        cy.get('#cssmenu > :nth-child(3) > :nth-child(4) > :nth-child(2)').invoke('show')
        cy.get("a[href='/inflation']").click({force: true})

    })   
})