describe('Dynamic Dropdown', ()=>{
    it('Dymanic Dropdown',()=>{
        cy.visit('https://booking.kayak.com',{headers:{"Accept-Encoding":"gzip, deflate"}})
        cy.get('.c_neb-item-icon').click()
        cy.get('input[aria-label="Flight origin input"]').click().clear().type("New York",{delay:200})
        cy.get('li[id="NYC_ap_All airports, New York, United States, (NYC)"] div[class="vPgG-name-row"]').click()

        // cy.get('ul.flight-origin-smarty-input-list div.vPgG-airport-code').each(($el,index,$list)=>{
        //     cy.log($el.text())
        //     if($el.text()==='JFK'){
        //         cy.click()
        //     }

        // })
        
    })
} )