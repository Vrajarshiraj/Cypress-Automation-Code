/// <reference types="cypress" />


import FD_LoginPageActions from '../../pageobjects/pageactions/FD_LoginPageActions';



describe("Front Desk office Login to Galaxy",()=>{

    const FD_loginPage = new FD_LoginPageActions();
    

    before(()=>{

        cy.fixture('testdata').then((data)=>{

            globalThis.data = data;

        })


    })

    beforeEach(()=>{

        FD_loginPage.navigateToURL();


    })

    it("Validate Title of the Page",()=>{


        FD_loginPage.validateTitle().should('eq','Optimizer Galaxy');
        
    })

    it("Add Front Desk username and password and click on login buttton",()=>{

               
        FD_loginPage.FDLogintoPOGO(data.Sales_Demo_FD_Login, data.Sales_Demo_FD_Password);
        

    })



})