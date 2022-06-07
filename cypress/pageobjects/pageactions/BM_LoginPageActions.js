/// <reference types="cypress" />

import BM_LoginPageElements from '../pageelements/BM_LoginPageElements';

export default class BM_LoginPageActions{


    constructor(){

        globalThis.add_BM_login_element = new BM_LoginPageElements();
    }


    navigateToURL(){

        cy.visit('https://pogalaxy.sikkasoft.com/login');

    }

    validateTitle(){

        return cy.title();
    }


    BM_Login_to_POGO(BM_username, BM_password){

        //Enter UserName and Password
        add_BM_login_element.Get_POGO_BM_UserName().should('be.visible').should('be.enabled').type(BM_username);
        add_BM_login_element.Get_POGO_BM_Password().should('be.visible').should('be.enabled').type(BM_password);

        //CheckBox Verification
        add_BM_login_element.POGO_BM_Login_RememberMe_Text().should('be.visible').contains('Remember Me');
        add_BM_login_element.POGO_BM_Login_RememberMe_Checkbox().should('be.visible').check().should('be.checked');
      
        add_BM_login_element.POGO_BM_Login_Btn().should('be.visible').click()

    }

    BM_Login_to_POGO_auth(BM_fact1, BM_fact2,BM_fact3,BM_fact4, BM_fact5, BM_fact6){

        add_BM_login_element.POGO_BM_2factor_1().type(BM_fact1);
        add_BM_login_element.POGO_BM_2factor_2().type(BM_fact2);
        add_BM_login_element.POGO_BM_2factor_3().type(BM_fact3);
        add_BM_login_element.POGO_BM_2factor_4().type(BM_fact4);
        add_BM_login_element.POGO_BM_2factor_5().type(BM_fact5);
        add_BM_login_element.POGO_BM_2factor_6().type(BM_fact6);

        add_BM_login_element.POGO_BM_Login_Btn2().click();
        
    }


    

    BM_Login_Verify_Success()
    {
        add_BM_login_element.POGO_BM_LoginSuccess_Header().should('be.visible').should('contain.text','Optimizer Galaxy');
    }

    BM_Login_Verify_UnSuccess()
    {
        add_BM_login_element.POGO_BM_LoginUnsuccess_Text().should('be.visible').contains('Wrong username or password. Try again or click Forgot password to reset it.');
    }

    BM_Login_Welcome_Text()
    {
        add_BM_login_element.POGO_BM_Welcome_Text().should('be.visible').contains('Welcome Back!');
    }

    BM_Login_ForgotPassword()
    {
        add_BM_login_element.POGO_BM_Login_ForgotPassword().click();
        add_BM_login_element.POGO_BM_ForgotPassword_Header().should('be.visible').contains('Forgot Password');
    }

    BM_Login_Support()
    {
        add_BM_login_element.POGO_BM_Login_Support().contains('Support');
        add_BM_login_element.POGO_BM_Login_Support().should('have.attr', 'href').and('include', 'https://sikkasoftware.freshdesk.com/support/home')
        add_BM_login_element.POGO_BM_Login_Support().click();
    }

    BM_Login_SikkaImage()
    {
        add_BM_login_element.POGO_BM_Login_SikkaImage()
        .should('be.visible');
    }

    BM_Login_EyeImageFunctionality()
    {
        add_BM_login_element.POGO_BM_Login_EyeImage().click({force:true});
        add_BM_login_element.Get_POGO_BM_Password().invoke('attr', 'type').should('contain', 'text');
        add_BM_login_element.POGO_BM_Login_EyeImage().click({force:false});
        add_BM_login_element.Get_POGO_BM_Password().invoke('attr','type').should('contain','password');
    }

    BM_Login_AccountSetUp()
    {
        add_BM_login_element.POGO_BM_Login_AccountSetup_link().contains('Complete Account Setup');
        add_BM_login_element.POGO_BM_Login_AccountSetup_link().invoke('attr','href').should('contain','/create-username');
        add_BM_login_element.POGO_BM_Login_AccountSetup_link().should('be.visible');
        add_BM_login_element.POGO_BM_Login_AccountSetup_link().click();
    }

    BM_Login_ValidateUI()
    {
        add_BM_login_element.POGO_BM_UserName_label().should('be.visible').contains('User Name');
        add_BM_login_element.POGO_BM_Password_label().should('be.visible').contains('Password');
        add_BM_login_element.Get_POGO_BM_UserName().invoke('attr','placeholder').should('contain','Username');
        add_BM_login_element.Get_POGO_BM_Password().invoke('attr','placeholder').should('contain','Password');
    }

}
