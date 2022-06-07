/// <reference types="cypress" />

describe('Fixtures Demo',function()
{
    before(function()
    {
        cy.fixture('example').then(function(data)
        {
            this.data=data
        })
    })

    it('FixturesDemoTest',function()
    {
        cy.visit('https://pogalaxy.sikkasoft.com/login')
        cy.get(".form-control[placeholder='Username']").type(this.data.Username)
        cy.get(".form-control[placeholder='Password']").type(this.data.Password)  
        cy.get(".btn[type='submit']").click() 
        cy.title().should('eq','Optimizer Galaxy')
    })
})