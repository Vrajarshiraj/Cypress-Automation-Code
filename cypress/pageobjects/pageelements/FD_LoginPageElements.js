/// <reference types="cypress" />


const or = require("../../locators.json");

export default class FD_LoginPageElements{


    Get_POGO_FD_UserName(){

        cy.wait(500);
        return cy.get(or.POGO_FD_Loginpage.POGO_FD_Username);
    }

    Get_POGO_FD_Password(){

        cy.wait(100);
        return cy.get(or.POGO_FD_Loginpage.POGO_FD_Password);
    }
    
    
    POGO_FD_Login_Btn(){
        cy.wait(100);
        return cy.get(or.POGO_FD_Loginpage.POGO_FD_Login_btn);

    }
    
}
