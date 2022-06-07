/// <reference types="cypress" />


// import { data } from 'cypress/types/jquery';
import BM_LoginPageActions from '../../pageobjects/pageactions/BM_LoginPageActions';



describe("Business Manager Login to Galaxy",()=>{

    const BM_loginPage = new BM_LoginPageActions();
    

    beforeEach(()=>{

        cy.fixture('testdata').then((data)=>{

            globalThis.data = data;

        })


    })

    beforeEach(()=>{

        BM_loginPage.navigateToURL();

    })

    it("Validate Title of the Page",()=>
    {
        BM_loginPage.validateTitle().should('eq','Optimizer Galaxy');
    })

    it("Verify Login With Valid UserName and Valid Password",()=>
    {
        BM_loginPage.BM_Login_to_POGO(data.Sales_Demo_BM_Login, data.Sales_Demo_BM_Password);
        BM_loginPage.BM_Login_to_POGO_auth(data.sales_Demo_2factor1,data.sales_Demo_2factor2,data.sales_Demo_2factor3,data.sales_Demo_2factor4,data.sales_Demo_2factor5,data.sales_Demo_2factor6);
        BM_loginPage.BM_Login_Verify_Success();
    })


    it("Verify Login With Valid UserName and InValid Password",()=>
    {

        BM_loginPage.BM_Login_to_POGO(data.Sales_Demo_BM_Login, data.BM_Demo_Login_Invalid_Password);
        BM_loginPage.BM_Login_Verify_UnSuccess();
    })

    it("Verify Login With Invalid UserName and Valid Passsword",()=>
    {
        BM_loginPage.BM_Login_to_POGO(data.BM_Demo_Login_Invalid_Username,data.Sales_Demo_BM_Password);
        BM_loginPage.BM_Login_Verify_UnSuccess();
    })

    it("Verify Login with Invalid UserName and Invalid Password",()=>
    {
        BM_loginPage.BM_Login_to_POGO(data.BM_Demo_Login_Invalid_Username,data.BM_Demo_Login_Invalid_Password);
        BM_loginPage.BM_Login_Verify_UnSuccess();
    })

    it("Verify Welcome Back Header on Login Page",()=>
    {
        BM_loginPage.BM_Login_Welcome_Text();
    })

    it("Verify the Support link",()=>
    {
        BM_loginPage.BM_Login_Support();
    })

    it("Verify the Forgot Password Functionality",()=>
    {
        BM_loginPage.BM_Login_ForgotPassword();

    })

    it("Verify the Password Eye Functionality", ()=>
    {
        BM_loginPage.BM_Login_EyeImageFunctionality();
    })

    it("Verify Sikka Image on Page",()=>
    {
        BM_loginPage.BM_Login_SikkaImage();
    })

    it("Verify Account-Setup Link",function()
    {
        BM_loginPage.BM_Login_AccountSetUp();
    })

    it("Verify UI and Placeholder for Login",function()
    { 
        BM_loginPage.BM_Login_ValidateUI();
    });
})