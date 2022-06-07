/// <reference types="cypress" />

describe('CustomCommandsDemo',function()
{   
    //Before Hook
    beforeEach(function()
    {
        cy.fixture('example').then(function(data)
        {
            this.data=data
        })
    })

    // login test case is integrated with fixtures and customized commands
    it('Login-Test Case',function()
    {
        cy.Login(this.data.Username,this.data.Password)
        cy.title().should('eq','Optimizer Galaxy')
    })

    it('Add Customer',function()
    {
        cy.wait(10000)
        cy.Login(this.data.Username,this.data.Password)
        cy.log('Add Customer Functionality')
    })
    
    it('Edit Customer',function()
    {
        cy.wait(10000)
        cy.Login(this.data.Username,this.data.Password)
        cy.log('Edit Customer Functionality')
    })

    it('Delete Customer',function()
    {
        cy.wait(10000)

        cy.Login(this.data.Username,this.data.Password)
        cy.log('Delete Customer Functionality')
    })

})