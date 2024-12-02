describe('Upload files from device',()=>{
    it('Upload files',()=>{
        cy.visit('https://demoqa.com/')
        //to upload u need input[type='file']
        cy.get("div[class='category-cards'] div:nth-child(1) div:nth-child(1) div:nth-child(2)").click()
        cy.get("div[class='element-list collapse show'] li[id='item-7'] span[class='text']").click()
        cy.get("input[type='file']").scrollIntoView()
        cy.get("input[type='file']").selectFile('c:\\Users\\Reshma Shrestha\\Desktop\\Photo\\blue.png')
        //for multiple file pass in array
        cy.get("input[type='file']").selectFile(['c:\\Users\\Reshma Shrestha\\Desktop\\Photo\\blue.png'],
            ['c:\Users\Reshma Shrestha\Desktop\Photo\Holden Ute truck.png'])


    })   
})