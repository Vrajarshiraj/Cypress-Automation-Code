/// <reference types="cypress" />


const or = require("../../locators.json");

export default class BM_LoginPageElements{


    Get_POGO_BM_UserName(){

        cy.wait(500);
        return cy.xpath(or.POGO_BM_Loginpage.POGO_BM_Username);
    }

    Get_POGO_BM_Password(){

        cy.wait(100);
        return cy.xpath(or.POGO_BM_Loginpage.POGO_BM_Password);
    }


    POGO_BM_Login_Btn(){
        cy.wait(100);
        return cy.xpath(or.POGO_BM_Loginpage.POGO_BM_Login_btn);

    }

    POGO_BM_LoginSuccess_Header(){
        cy.wait(1000);
        return cy.xpath(or.POGO_BM_Loginpage.POGO_BM_Login_Success_Header,{timeout:10000});
    }

    POGO_BM_LoginUnsuccess_Text(){
        cy.wait(200);
        return cy.xpath(or.POGO_BM_Loginpage.POGO_BM_Login_Unsuccess_Text);
    }

    POGO_BM_Welcome_Text()
    {
        cy.wait(200);
        return cy.xpath(or.POGO_BM_Loginpage.POGO_BM_Login_Welcome_Text);
    }

    POGO_BM_Login_RememberMe_Text()
    {
        cy.wait(100);
        return cy.xpath(or.POGO_BM_Loginpage.POGO_BM_Login_RememberMe_Text);
    }

    POGO_BM_Login_RememberMe_Checkbox()
    {
        cy.wait(200);
        return cy.xpath(or.POGO_BM_Loginpage.POGO_BM_Login_RememberMe_Chkbox);
    }

    POGO_BM_Login_ForgotPassword()
    {
        cy.wait(300);
        return cy.xpath(or.POGO_BM_Loginpage.POGO_BM_ForgotPassword_link);
    }

    POGO_BM_ForgotPassword_Header()
    {
        cy.wait(150);
        return cy.xpath(or.POGO_BM_Loginpage.POGO_BM_ForgetPassword_Header);
    }

    POGO_BM_Login_Support()
    {
        cy.wait(250);
        return cy.xpath(or.POGO_BM_Loginpage.POGO_BM_Login_Support);
    }
    
    POGO_BM_Login_SikkaImage()
    {
        cy.wait(100);
        return cy.xpath(or.POGO_BM_Loginpage.POGO_BM_Login_SikkaImage);
    }

    POGO_BM_Login_EyeImage()
    {
        cy.wait(150);
        return cy.xpath(or.POGO_BM_Loginpage.POGO_BM_Login_EyeImage);
    }

    POGO_BM_Login_AccountSetup_link()
    {
        cy.wait(100);
        return cy.xpath(or.POGO_BM_Loginpage.POGO_BM_Login_AccountSetup);
    }

    POGO_BM_UserName_label()
    {
        cy.wait(100);
        return cy.xpath(or.POGO_BM_Loginpage.POGO_BM_UserName_label);
    }

    POGO_BM_Password_label()
    {
        cy.wait(100);
        return cy.xpath(or.POGO_BM_Loginpage.POGO_BM_Password_label);
    }

    POGO_BM_2factor_1()
    {
        return cy.xpath(or.POGO_BM_Loginpage.POGO_BM_Login_2factor1)
    }
    POGO_BM_2factor_2()
    {
        return cy.xpath(or.POGO_BM_Loginpage.POGO_BM_Login_2factor2)
    }
    POGO_BM_2factor_3()
    {
        return cy.xpath(or.POGO_BM_Loginpage.POGO_BM_Login_2factor3)
    }
    POGO_BM_2factor_4()
    {
        return cy.xpath(or.POGO_BM_Loginpage.POGO_BM_Login_2factor4)
    }
    POGO_BM_2factor_5()
    {
        return cy.xpath(or.POGO_BM_Loginpage.POGO_BM_Login_2factor5)
    }
    POGO_BM_2factor_6()
    {
        return cy.xpath(or.POGO_BM_Loginpage.POGO_BM_Login_2factor6)
    }
    POGO_BM_Login_Btn2(){
        cy.wait(100);
        return cy.xpath(or.POGO_BM_Loginpage.POGO_BM_Login_btn2);
    }


}
