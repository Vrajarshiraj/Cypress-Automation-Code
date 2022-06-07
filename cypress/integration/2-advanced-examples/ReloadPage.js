/// <reference types='cypress' />

describe('Refresh Page Tutorial',function()
{
    it('Demo Refresh',function()
    {
        cy.visit('https://www.freshworks.com/');

        cy.contains('Company').click();

        cy.reload();

        cy.contains('Company').should('be.visible');

        cy.reload();

        cy.contains('Platform').should('be.visible');
    })
})