/// <reference types="cypress" />



describe('Test Suite of Alias',()=>
{
    it('as() alias',()=>
    {
        cy.visit('https://codenboxautomationlab.com/wp-login.php');
        cy.get('input[type="text"]').as('username');
        cy.get('input[type="password"]').as('password');
        cy.get('@username').clear().type('username',{delay:200});
        cy.get('@password').clear().type('password',{delay:200});
    })
})