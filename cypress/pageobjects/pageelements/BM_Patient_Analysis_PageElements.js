/// <reference types="cypress" />


const or = require("../../locators.json");

export default class BM_Patient_Analysis_PageElements{


    Get_POGO_BM_Login_MenuIcon(){

        cy.wait(500);
        return cy.get(or.POGO_BM_PatientAnalysis.POGO_BM_Login_MenuIcon);
    }

    Get_POGO_BM_Login_Analysis_Tab(){

        cy.wait(100);
        return cy.get(or.POGO_BM_PatientAnalysis.POGO_BM_Login_Menu_Analysis_Tab);

    }

    /*
    POGO_BM_Login_Btn(){
        cy.wait(100);
        return cy.get(or.POGO_BM_Loginpage.POGO_BM_Login_btn);

    }
    */
    

}
