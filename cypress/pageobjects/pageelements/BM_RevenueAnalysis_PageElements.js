/// <reference types="cypress" />

const or = require("../../locators.json");

export default class BM_RevenueAnalysis_PageElements{
    
    Get_POGO_BM_MenuIcon_Tab(){
        return cy.get(or.POGO_BM_RevenueAnalysis.POGO_BM_Login_MenuIcon);
    }

    Get_POGO_BM_Menu_Analysis_Tab(){
        return cy.get(or.POGO_BM_RevenueAnalysis.POGO_BM_Login_Menu_Analysis_Tab);
    }

    Get_POGO_BM_Revenue_Analysis_Heading(){
        return cy.get(or.POGO_BM_RevenueAnalysis.POGO_BM_RevenueAnalysis_Heading);

    }
    Get_POGO_BM_RevenueAnalysis_SelectPractice_Btn(){
        return cy.get(or.POGO_BM_RevenueAnalysis.POGO_BM_SelectPractice_Btn);
    }

    Get_POGO_BM_RevenueAnalysis_SelectaGroup_tab(){
        return cy.get(or.POGO_BM_RevenueAnalysis.POGO_BM_SelectGroup_Tab);
    }

    Get_POGO_BM_RevenueAnalysis_SelectGroupALL(){
        return cy.get(or.POGO_BM_RevenueAnalysis.POGO_BM_SelectGroupALL_Btn);
    }

    Get_POGO_BM_RevenueAnalysis_Go_Btn(){
        return cy.get(or.POGO_BM_RevenueAnalysis.POGO_BM_Go_Btn);
    }

     /*Select Timerange of 12 Months*/
    Get_POGO_BM_TimeRange_Btn(){
        return cy.get(or.POGO_BM_RevenueAnalysis.POGO_BM_TimeRange_Btn);
    }

    Get_POGO_BM_TimeRange_Month(){
        return cy.get(or.POGO_BM_RevenueAnalysis.POGO_BM_TimeRange_Month);
    }

    Get_POGO_BM_DateRange_Btn(){
        return cy.get(or.POGO_BM_RevenueAnalysis.POGO_BM_DateRange_Btn);
    }

    Get_POGO_BM_DateRange_1Jan2021(){
        return cy.get(or.POGO_BM_RevenueAnalysis.POGO_BM_DateRange_1Jan2021);
    }

    Get_POGO_BM_DateRange_31Dec2021(){
        return cy.get(or.POGO_BM_RevenueAnalysis.POGO_BM_DateRange_31Dec2021);
    }
    
    Get_POGO_BM_DateRange_Apply(){
        return cy.get(or.POGO_BM_RevenueAnalysis.POGO_BM_DateRange_Apply);
    }
   

    /* Common Btn */
    

    Get_POGO_BM_RevenueAnalysis_Dentist_Btn(){
        return cy.get(or.POGO_BM_RevenueAnalysis.POGO_BM_RevenueAnalysis_Dentist_Btn);
    }

    Get_POGO_BM_RevenueAnalysis_Hygienist_Btn(){
        return cy.get(or.POGO_BM_RevenueAnalysis.POGO_BM_RevenueAnalysis_Hygienist_Btn);
    }
    Get_POGO_BM_RevenueAnalysis_Totalcollection_Dropdown()
    {
        return cy.get(or.POGO_BM_RevenueAnalysis.POGO_BM_Production_Collection); 
    }
    Get_POGO_BM_RevenueAnalysis_Netproduction_Dropdown()
    {
        return cy.get(or.POGO_BM_RevenueAnalysis.POGO_BM_Production_Collection); 
    }

    Get_POGO_BM_RevenueAnalysis_Totalproduction_Dropdown()
    {
        return cy.get(or.POGO_BM_RevenueAnalysis.POGO_BM_Production_Collection); 
    }

    Get_POGO_BM_RevenueAnalysis_NetCollection_Dropdown()
    {
        return cy.get(or.POGO_BM_RevenueAnalysis.POGO_BM_Production_Collection); 
    }

   

    /*Test Cases for Revenue Analysis > Fee- Optimizer > Tab */
    Get_POGO_BM_RevenueAnalysis_Fee_Optimizer_Tab(){
        return cy.get(or.POGO_BM_RevenueAnalysis.POGO_BM_Revenue_Analysis_feeoptimizer_Tab);
    }

    Get_POGO_BM_Fee_Optimizer_Table(){
        return cy.get(or.POGO_BM_RevenueAnalysis.POGO_BM_Revenue_Analysis_feeoptimizer_Tab);
    }
    Get_POGO_BM_RevenueAnalysis_Fee_Optimizer_Highest_NetProduction_Dropdown(){
        cy.wait(500);
        return cy.get(or.POGO_BM_RevenueAnalysis.POGO_BM_Rankby_Dropdown);
    }
    Get_POGO_BM_RevenueAnalysis_Fee_Optimizer_Highest_Fee_Dropdown(){
        
        return cy.get(or.POGO_BM_RevenueAnalysis.POGO_BM_Rankby_Dropdown);
    }
    Get_POGO_BM_RevenueAnalysis_Fee_Optimizer_currrent_Btn()
    {
        return cy.get(or.POGO_BM_RevenueAnalysis.POGO_BM_Quardrant_analysis_current_btn);
    }
    Get_POGO_BM_RevenueAnalysis_Fee_Optimizer_Recommended_Btn()   {
        return cy.get(or.POGO_BM_RevenueAnalysis.POGO_BM_Quardrant_analysis_Recommended_btn);
    }

    Get_POGO_BM_RevenueAnalysis_Fee_Optimizer_select_90thPercentile()
    {
        return cy.get(or.POGO_BM_RevenueAnalysis.POGO_BM_Select_90thPercentile_Dropdown);
    }
    Get_POGO_BM_RevenueAnalysis_Fee_Optimizer_select_80thPercentile()
    {
        return cy.get(or.POGO_BM_RevenueAnalysis.POGO_BM_Select_80thPercentile_Dropdown);
    }
    Get_POGO_BM_RevenueAnalysis_Fee_Optimizer_select_70thPercentile()
    {
        return cy.get(or.POGO_BM_RevenueAnalysis.POGO_BM_Select_70thPercentile_Dropdown);
    }





    
}