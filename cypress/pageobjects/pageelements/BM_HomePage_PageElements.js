/// <reference types="cypress" />

const or = require("../../locators.json");

export default class BM_HomePage_PageElements{

    /* Select Group */
    
    Get_POGO_BM_Homepage_SelectPractice_Btn(){
        return cy.get(or.POGO_BM_HomePage.POGO_BM_SelectPractice_Btn);
    }

    Get_POGO_BM_Homepage_SelectaGroup_tab(){
        return cy.get(or.POGO_BM_HomePage.POGO_BM_SelectGroup_Tab);
    }

    Get_POGO_BM_Homepage_SelectGroupALL(){
        return cy.get(or.POGO_BM_HomePage.POGO_BM_SelectGroupALL_Btn);
    }

    Get_POGO_BM_Homepage_Go_Btn(){
        return cy.get(or.POGO_BM_HomePage.POGO_BM_Go_Btn);
    }

     /*Select Timerange of 12 Months*/
    Get_POGO_BM_TimeRange_Btn(){
        return cy.get(or.POGO_BM_HomePage.POGO_BM_TimeRange_Btn);
    }

    Get_POGO_BM_TimeRange_Month(){
        return cy.get(or.POGO_BM_HomePage.POGO_BM_TimeRange_Month);
    }

    Get_POGO_BM_DateRange_Btn(){
        return cy.get(or.POGO_BM_HomePage.POGO_BM_DateRange_Btn);
    }

    Get_POGO_BM_DateRange_1Jan2021(){
        return cy.get(or.POGO_BM_HomePage.POGO_BM_DateRange_1Jan2021);
    }

    Get_POGO_BM_DateRange_31Dec2021(){
        return cy.get(or.POGO_BM_HomePage.POGO_BM_DateRange_31Dec2021);
    }
    
    Get_POGO_BM_DateRange_Apply(){
        return cy.get(or.POGO_BM_HomePage.POGO_BM_DateRange_Apply);
    }

    /* HomePage > Practice Profile Test Cases */
    Get_POGO_BM_Homepage_GetQuadrant_SelectPractice(){
        cy.wait(500);
        return cy.get(or.POGO_BM_HomePage.POGO_BM_PracticeProfile_QuadrantChart_SelectPractice);
    }
    Get_POGO_BM_Homepage_GetQuadrant_Apply(){
        cy.wait(500);
        return cy.get(or.POGO_BM_HomePage.POGO_BM_PracticeProfile_Apply);
    }
    Get_POGO_BM_Homepage_PracticeProfile_Xaxis_LeftDropdown(){
        cy.wait(500);
        return cy.get(or.POGO_BM_HomePage.POGO_BM_PracticeProfile_Xaxis_LeftDropdown);
    }
    Get_POGO_BM_Homepage_PracticeProfile_Xaxis_RightDropdown(){
        return cy.get(or.POGO_BM_HomePage.POGO_BM_PracticeProfile_Xaxis_RightDropdown);
    }
    Get_POGO_BM_Homepage_PracticeProfile_Yaxis_LeftDropdown(){
        cy.wait(500);
        return cy.get(or.POGO_BM_HomePage.POGO_BM_PracticeProfile_Yaxis_LeftDropdown);
    }
    Get_POGO_BM_Homepage_PracticeProfile_Yaxis_RightDropdown(){
        return cy.get(or.POGO_BM_HomePage.POGO_BM_PracticeProfile_Yaxis_RightDropdown);
    }

    /* HomePage > Provider Productivity Test Cases */
    Get_POGO_BM_Homepage_ProviderProductivity_Dropdown(){
        return cy.get(or.POGO_BM_HomePage.POGO_BM_ProviderProductivity_Dropdown);
    }

     /* HomePage > Insurance Analysis Test Cases */
    Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown(){
        return cy.get(or.POGO_BM_HomePage.POGO_BM_InsuranceAnalysis_Claims_LeftDropdown);
    }

    Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_TotalOutstanding(){
        return cy.get(or.POGO_BM_HomePage.POGO_BM_InsuranceAnalysis_Claims_LeftDropdown_TotalOutstanding);
    }

    Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_daysoutstanding0to30(){
        return cy.get(or.POGO_BM_HomePage.POGO_BM_InsuranceAnalysis_Claims_LeftDropdown_daysoutstanding0to30);
    }

    Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_daysoutstanding30to60(){
        return cy.get(or.POGO_BM_HomePage.POGO_BM_InsuranceAnalysis_Claims_LeftDropdown_daysoutstanding30to60);
    }

    Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_daysoutstanding60to90(){
        return cy.get(or.POGO_BM_HomePage.POGO_BM_InsuranceAnalysis_Claims_LeftDropdown_daysoutstanding60to90);
    }

    Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_daysoutstanding90(){
        return cy.get(or.POGO_BM_HomePage.POGO_BM_InsuranceAnalysis_Claims_LeftDropdown_daysoutstanding90);
    }

    Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_RightDropdown(){
        return cy.get(or.POGO_BM_HomePage.POGO_BM_InsuranceAnalysis_Claims_RightDropdown);
    }

    Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply(){
        return cy.get(or.POGO_BM_HomePage.POGO_BM_InsuranceAnalysis_Claims_Apply);
    }

    Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Xaxis(){
        return cy.get(or.POGO_BM_HomePage.POGO_BM_InsuranceAnalysis_Claims_Xaxis);
    }

    /* HomePage > QuickStat Test Cases */
    Get_POGO_BM_Homepage_QuickStat_NetProduction_LeftDropdown(){
        return cy.get(or.POGO_BM_HomePage.POGO_BM_QuickStat_NetProduction_LeftDropdown);
    }

    Get_POGO_BM_Homepage_QuickStat_NetProduction_RightDropdown(){
        return cy.get(or.POGO_BM_HomePage.POGO_BM_QuickStat_NetProduction_RightDropdown);
    }

    Get_POGO_BM_Homepage_QuickStat_PatientSeen_LeftDropdown(){
        return cy.get(or.POGO_BM_HomePage.POGO_BM_QuickStat_PatientSeen_LeftDropdown);
    }

    Get_POGO_BM_Homepage_QuickStat_PatientSeen_RightDropdown(){
        return cy.get(or.POGO_BM_HomePage.POGO_BM_QuickStat_PatientSeen_RightDropdown);
    }

    Get_POGO_BM_Homepage_QuickStat_Collections_LeftDropdown(){
        return cy.get(or.POGO_BM_HomePage.POGO_BM_QuickStat_Collections_LeftDropdown);
    }

    Get_POGO_BM_Homepage_QuickStat_Collections_RightDropdown(){
        return cy.get(or.POGO_BM_HomePage.POGO_BM_QuickStat_Collections_RightDropdown);
    }


}

