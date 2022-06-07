describe('MyTestSuite',function()
{
   it('Class identify',function()
   {
      cy.visit('https://demo.nopcommerce.com/')                    //Open URL
      cy.get('#small-searchterms').type('Apple MacBook')           //Type Text in TextBox
      cy.get("[type='submit']").click()                            //click on button
      cy.get(".product-box-add-to-cart-button").click()            //click on 'Add to Cart'
      cy.get("#product_enteredQuantity_4").clear().type('3')       //Clear Previous Value and type 3
      cy.get("#add-to-cart-button-4").click()                      //click on 'Add to Cart
   })
  

})
