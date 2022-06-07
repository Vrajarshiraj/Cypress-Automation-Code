/// <reference types="cypress" />
describe('Locating Elements',function()
{
   it('Open URL',function()
   {
      // Open the URL
      cy.visit('https://katalon-demo-cura.herokuapp.com/')   
   })

   it('Click on Make Appointment',function()
   {
      //click on Button "Make an Appointment"
      cy.get('#btn-make-appointment').click()
      
      //Define UserName and Password
      var UserName="John Doe";
      var Password="ThisIsNotAPassword";

      //type userid and password
      cy.get('#txt-username').type(UserName)
      cy.get('#txt-password').type(Password)

      //click on login
      cy.get('#btn-login').click()

   })

   it('Make Appointment',function()
   {
      //select combobox item
      cy.get('select').select('Hongkong CURA Healthcare Center')

      //select checkbox item
      cy.get('#chk_hospotal_readmission').click()
      
      //initialize date variable
      var Date="21/02/2022"

      //Type Date in Text Box
      cy.get('#txt_visit_date').type(Date)

      //Initialize Comment Variable 
      var Comments='Hello World'
      //Click and type on Comment
      cy.get('#txt_comment').click({force:true})
      cy.get('#txt_comment').type(Comments)

      //click on Submit Button
      cy.get('#btn-book-appointment').click()


   })

   it('Verify appointment',function()
   {
      //click on Confirmation
      cy.get('h2').contains('Appointment Confirmation')
      cy.get('#comment').contains('Hello World')
   })

   
   

   
   
})