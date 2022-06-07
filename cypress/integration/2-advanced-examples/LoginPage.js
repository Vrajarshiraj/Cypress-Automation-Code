/// <reference types="cypress" />

import LoginPage from '../2-advanced-examples/PageObjects/LoginPage'

describe('Login Module',function()
{
   beforeEach(function()
   {
       cy.fixture('example').then(function(data)
       {
           this.data=data
       })
   })

   it('Login with Valid Username and Valid Password',function()
   {
      // Open the URL
      const login=new LoginPage()
      login.visit()
      login.fillEmail(this.data.Username)
      login.fillPassword(this.data.Password)
      login.submitButton()   
   })

   it('Login with InValid Username and Valid Password',function()
   {
      // Open the URL
      cy.visit('https://pogalaxy.sikkasoft.com/login')
      cy.get(".form-control[placeholder='Username']").type("InCorrectUserName")
      cy.get(".form-control[placeholder='Password']").type("BoringAI@1")
      cy.get(".btn[type='submit']").click() 
      cy.get(':nth-child(2) > .input-group').should('be.visible').click()   //Verify Security Testing
   })

   it('Login with Valid Username and Invalid Password',function()
   {
      // Open the URL
      cy.visit('https://pogalaxy.sikkasoft.com/login')
      cy.get(".form-control[placeholder='Username']").type("BMdemo")
      cy.get(".form-control[placeholder='Password']").type("IncorrectPassword")
      cy.get(".btn[type='submit']").click() 
      cy.get(':nth-child(2) > .input-group').should('be.visible').click()
   })

   it('Login with Invalid Username and Invalid Password',function()
   {
      // Open the URL
      cy.visit('https://pogalaxy.sikkasoft.com/login')
      cy.get(".form-control[placeholder='Username']").type("IncorrectUserName")
      cy.get(".form-control[placeholder='Password']").type("IncorrectPassword") 
      cy.get(".btn[type='submit']").click() 
      cy.get(':nth-child(2) > .input-group').should('be.visible').click()
    })
})