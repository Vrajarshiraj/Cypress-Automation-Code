/// <reference types="cypress" />

describe('GUI Automation',function()
{
    it('Check Boxes and Radio Button',function()
    {
        cy.visit('http://demo.automationtesting.in/Register.html')

        // Verification of Checked Check Box
        cy.get('#checkbox1').check().should('be.checked').and('have.value','Cricket')
        cy.get('#checkbox2').check().should('be.checked').and('have.value','Movies')
        cy.get('#checkbox3').check().should('be.checked').and('have.value','Hockey')

        // Verification of checkbox is Unchecked
        cy.get('#checkbox1').uncheck().should('not.be.checked')
        cy.get('#checkbox2').uncheck().should('not.be.checked')
        cy.get('#checkbox3').uncheck().should('not.be.checked')

        cy.get('input[type=checkbox]').check(['Cricket','Hockey'])

    })

    it('Skills Drop-Down',function()
    {
        cy.get('#Skills').select('Android').should('have.value','Android')
    })

    it('Languages Multi-Select',function()
    {
        cy.get('#msdd').click()
        cy.get('.ui-corner-all').contains('English').click()
        cy.get('.ui-corner-all').contains('Japanese').click()
        
    })

    it('Selectable Drop-Down',function()
    {
        cy.get("[role='combobox']").click({force:true})
        cy.get(".select2-search__field[type='search']").type('India')
        cy.get(".select2-search__field[type='search']").type('{enter}')
    })
})

describe('GUI Automation',function()
{
    it('Alert Automation',function()
    {
        cy.visit('http://testautomationpractice.blogspot.com/')

        cy.get('#HTML9 > div.widget-content > button').click()

        cy.on('window:confirm',(str) =>
        {
            expect(str).to.equal("Press a button!")
        })
    })

    it('Navigation Automation',function()
    {
        cy.visit('https://demo.nopcommerce.com/')
        cy.title().should('eq','nopCommerce demo store')
        cy.get('.ico-register').click()
        cy.title().should('eq','nopCommerce demo store. Register')

        //Backward Navigation Automation
        cy.go('back')
        cy.title().should('eq','nopCommerce demo store')

        //Forward Navigation Automation
        cy.go('forward')
        cy.title().should('eq','nopCommerce demo store. Register')


        
    })
})

