/// <reference types="cypress" />

import BM_LoginPageActions from '../../pageobjects/pageactions/BM_LoginPageActions'
import BM_FeeScheduleAnalysis_PageActions from '../../pageobjects/pageactions/BM_FeeScheduleAnalysis_PageActions';

describe("Business Manager Login to Galaxy",()=>
{
    const BM_loginPage= new BM_LoginPageActions();

    beforeEach(()=>{

        cy.fixture('testdata').then((data)=>{

            globalThis.data = data;
        })


    })

    beforeEach(()=>{

        BM_loginPage.navigateToURL();
    })

    it("Add Business Manager username and password and click on login buttton",()=>{ 
        BM_loginPage.BM_Login_to_POGO(data.Sales_Demo_BM_Login, data.Sales_Demo_BM_Password);
        BM_loginPage.BM_Login_to_POGO_auth(data.sales_Demo_2factor1,data.sales_Demo_2factor2,data.sales_Demo_2factor3,data.sales_Demo_2factor4,data.sales_Demo_2factor5,data.sales_Demo_2factor6);
    })
})

describe("Fee-Schedule Analysis Test Cases",()=>{
    
    const BM_FeeScheduleAnalysisPage=new BM_FeeScheduleAnalysis_PageActions();
    const BM_loginPage = new BM_LoginPageActions();

    it('Goto the Fee-Schedule Analysis Page 1',()=>
    {
        BM_FeeScheduleAnalysisPage.GetTo_FeeScheduleAnalysisPage();
        BM_loginPage.validateTitle().should('eq','Optimizer Galaxy');
    })

    it('Verify for Select a Group All ',()=>
    {
        BM_FeeScheduleAnalysisPage.BM_FeeScheduleAnalysis_SelectPracticeOrGroup_All();
    })

    it('Verify Label Content of the Fee-Schedule Analysis',()=>
    {
        BM_FeeScheduleAnalysisPage.BM_FeeScheduleAnalysis_VerifyContent();
    })

    it('Verify Drop Down Items of Procedures Category',()=>
    {
        BM_FeeScheduleAnalysisPage.BM_FeeScheduleAnalysis_ProceduresCategory();
    })

    it('Check Master Standard Fee and Clear All Functionality',()=>
    {
        BM_FeeScheduleAnalysisPage.BM_FeeScheduleAnalysis_ClickAll();
        BM_FeeScheduleAnalysisPage.BM_FeeScheduleAnalysis_VerifyClearAll();
    })

    it('Verify Table Data of Procedure Fee by Fee Schedule',()=>
    {
        BM_FeeScheduleAnalysisPage.BM_VerifyFeeScheduleTableData();
    })

    it('Check and Verify Each Practice in Fee-Schedule Analysis',()=>
    {
        BM_FeeScheduleAnalysisPage.BM_VerifyPractice_AffinityDental();
        BM_FeeScheduleAnalysisPage.BM_VerifyPractice_DentaBright();
    })    
})



