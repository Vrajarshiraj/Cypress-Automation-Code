/// <reference types="cypress" />
describe('Table Data Automation',function()
{
    it('Table Test',function()
    {
        cy.visit('http://testautomationpractice.blogspot.com/')

        //1)Check Value Presence Anywhere in the Table
        cy.get("table[name='BookTable']").contains('td','Master').should('be.visible')

        //2)Check Value Presence in Specific Row and Column
        cy.get("table[name='BookTable'] > tbody > tr:nth-child(2) > td:nth-child(3)").contains('Selenium').should('be.visible')

        //3)Check Value Presence by Iterating Rows

        //for Defining Columns
        cy.get("table[name='BookTable'] > tbody > tr td:nth-child(2)").each(($e,index,$list) =>{

            const text=$e.text()

           if(text.includes("Amod"))
           {
               cy.get("table[name='BookTable'] > tbody > tr td:nth-child(1)").eq(index).then(function(bname)
               {
                   const bookname=bname.text()
                   expect(bookname).to.equal("Master In Java")
               })
           }
        })

    })
})