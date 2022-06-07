/// <reference types="cypress" />

describe('My Test Suite',function()
{
 before(function()
 {
     cy.log('*** Setup ***')
 }) 

 beforeEach(function()
 {
     cy.log('*** Login ***')
 })

 afterEach(function()
 {
     cy.log('*** LogOut ***')
 })

 after(function()
 {
     cy.log('*** Tear-Down ***')
 })



    it('Test Case-Search',function()
    {
        cy.log('**** Test Case - Search ****')
    })

    it('Test Case- Advanced Search',function()
    {
        cy.log('**** Test Case - Advanced Search ****')
    })

    it('Test Case - Listing Products',function()
    {
        cy.log('**** Test Case - Listing Products ****')
    })

})