/// <reference types="cypress" />

const or = require("../../locators.json");

export default class BM_ProviderProductivity_PageElements{
    /* Select Provider Productivity tab from MenuItem*/
    Get_POGO_BM_MenuIcon_Tab(){
        return cy.get(or.POGO_BM_ProviderProductivity.POGO_BM_MenuIcon_Tab);
    }

    Get_POGO_BM_Menu_Analysis_Tab(){
        return cy.get(or.POGO_BM_ProviderProductivity.POGO_BM_Menu_Analysis_Tab);
    }

    Get_POGO_BM_ProviderProductivity_Heading(){
        return cy.get(or.POGO_BM_ProviderProductivity.POGO_BM_ProviderProductivity_Heading);
    }

     /* Select Group */
     Get_POGO_BM_ProviderProductivity_SelectPractice_Btn(){
        return cy.get(or.POGO_BM_ProviderProductivity.POGO_BM_SelectPractice_Btn);
    }

    Get_POGO_BM_ProviderProductivity_SelectaGroup_tab(){
        return cy.get(or.POGO_BM_ProviderProductivity.POGO_BM_SelectGroup_Tab);
    }

    Get_POGO_BM_ProviderProductivity_SelectGroupALL(){
        return cy.get(or.POGO_BM_ProviderProductivity.POGO_BM_SelectGroupALL_Btn);
    }

    Get_POGO_BM_ProviderProductivity_Go_Btn(){
        return cy.get(or.POGO_BM_ProviderProductivity.POGO_BM_Go_Btn);
    }

    /*Select Timerange of 12 Months*/
    Get_POGO_BM_TimeRange_Btn(){
        return cy.get(or.POGO_BM_ProviderProductivity.POGO_BM_TimeRange_Btn);
    }

    Get_POGO_BM_TimeRange_Month(){
        return cy.get(or.POGO_BM_ProviderProductivity.POGO_BM_TimeRange_Month);
    }

    Get_POGO_BM_DateRange_Btn(){
        return cy.get(or.POGO_BM_ProviderProductivity.POGO_BM_DateRange_Btn);
    }

    Get_POGO_BM_DateRange_1Jan2021(){
        return cy.get(or.POGO_BM_ProviderProductivity.POGO_BM_DateRange_1Jan2021);
    }

    Get_POGO_BM_DateRange_31Dec2021(){
        return cy.get(or.POGO_BM_ProviderProductivity.POGO_BM_DateRange_31Dec2021);
    }
    
    Get_POGO_BM_DateRange_Apply(){
        return cy.get(or.POGO_BM_ProviderProductivity.POGO_BM_DateRange_Apply);
    }

    /* Common Btn */
    Get_POGO_BM_ProviderProductivity_ClearAll_Btn(){
        return cy.get(or.POGO_BM_ProviderProductivity.POGO_BM_ProviderProductivity_ClearAll_Btn);
    }

    Get_POGO_BM_ProviderProductivity_ClearAll_Pleaseselectatleastone(){
        return cy.get(or.POGO_BM_ProviderProductivity.POGO_BM_ProviderProductivity_Pleaseselectatleastone);
    }

    Get_POGO_BM_ProviderProductivity_Dentist_Btn(){
        return cy.get(or.POGO_BM_ProviderProductivity.POGO_BM_ProviderProductivity_Dentist_Btn);
    }

    Get_POGO_BM_ProviderProductivity_Hygienist_Btn(){
        return cy.get(or.POGO_BM_ProviderProductivity.POGO_BM_ProviderProductivity_Hygienist_Btn);
    }

    Get_POGO_BM_ProviderProductivity_Table(){
        return cy.get(or.POGO_BM_ProviderProductivity.POGO_BM_ProviderProductivity_Table);
    }

    /*Test Cases for Provider Productivity > NetCollection > Tab */
    Get_POGO_BM_ProviderProductivity_NetCollection_Tab(){
        return cy.get(or.POGO_BM_ProviderProductivity.POGO_BM_ProviderProductivity_NetCollection_Tab);
    }

     /*Test Cases for Provider Productivity > PatientVisits > Tab */
    Get_POGO_BM_ProviderProductivity_PatientVisits_Tab(){
        return cy.get(or.POGO_BM_ProviderProductivity.POGO_BM_ProviderProductivity_PatientVisits_Tab);
    }

    /*Test Cases for Provider Productivity > HygienistROI > Tab */
    Get_POGO_BM_ProviderProductivity_HygienistROI_Tab(){
        return cy.get(or.POGO_BM_ProviderProductivity.POGO_BM_ProviderProductivity_HygienistROI_Tab);
    }
}