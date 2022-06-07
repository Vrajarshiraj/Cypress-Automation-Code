/// <reference types="cypress" />

import FD_LoginPageElements from '../pageelements/FD_LoginPageElements';

export default class FD_LoginPageActions{



    constructor(){

        globalThis.add_FD_login_element = new FD_LoginPageElements();
    }


    navigateToURL(){

        cy.visit('/');

    }

    validateTitle(){

        return cy.title();
    }


    FDLogintoPOGO(FD_username, FD_lastName){

        
        add_FD_login_element.Get_POGO_FD_UserName().type(FD_username);
        add_FD_login_element.Get_POGO_FD_Password().type(FD_lastName);
      
        add_FD_login_element.POGO_FD_Login_Btn().click();
    }

}
