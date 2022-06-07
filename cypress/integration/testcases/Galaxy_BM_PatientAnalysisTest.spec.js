/// <reference types="cypress" />

import BM_LoginPageActions from '../../pageobjects/pageactions/BM_LoginPageActions';
import BM_PatientAnalysis_PageActions from '../../pageobjects/pageactions/BM_PatientAnalysis_PageActions';



describe("Business Manager Login to Galaxy",()=>{

    const BM_loginPage = new BM_LoginPageActions();
    

    before(()=>{

        cy.fixture('testdata').then((data)=>{

            globalThis.data = data;

        })


    })

    beforeEach(()=>{

        BM_loginPage.navigateToURL();


    })


    it("Add Business Manager username and password and click on login buttton",()=>{

               
        BM_loginPage.BM_Login_to_POGO(data.Sales_Demo_BM_Login, data.Sales_Demo_BM_Password);
        

    })


})


describe("Click on Patient Analysis menu item from the Analysis tab of Main Menu",()=>{

    it("Click on Patient Analysis Menu Item",()=>{

        const BM_patientAnalysisPage = new BM_PatientAnalysis_PageActions();

        BM_patientAnalysisPage.BM_Login_Clickto_PatientAnalysis();
        
    })   

})