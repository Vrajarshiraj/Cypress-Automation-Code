/// <reference types="cypress" />

describe('XPATH demo',function()
{
    it('Login demo',function()
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login');

        cy.xpath('//*[@id="txtUsername"]').type('admin');

        cy.xpath('//*[@id="txtPassword"]').type('admin123');

        cy.xpath("//a[text()='Forgot your password?']").click();
    })

})