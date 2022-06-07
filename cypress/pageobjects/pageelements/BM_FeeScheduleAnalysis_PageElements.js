/// <reference types="cypress" />

const or = require("../../locators.json");

export default class BM_FeeScheduleAnalysis_PageElements
{
    POGO_BM_Login_FeeScheduleAnalysis()
    {
        cy.wait(250);
        return cy.get(or.POGO_BM_FeeScheduleAnalysis.POGO_BM_Login_FeeScheduleAnalysis);
    }

    POGO_BM_FeeScheduleAnalysis_Header()
    {
        cy.wait(250);
        return cy.get(or.POGO_BM_FeeScheduleAnalysis.POGO_BM_FeeScheduleAnalysis_Header);
    }

    POGO_BM_PracticeViewFeeSchedule_Label()
    {
        cy.wait(150);
        return cy.get(or.POGO_BM_FeeScheduleAnalysis.POGO_BM_PracticeViewFeeSchedule_Text);
    }

    POGO_BM_CompareFeeSchedule_Label()
    {
        cy.wait(150);
        return cy.get(or.POGO_BM_FeeScheduleAnalysis.POGO_BM_CompareFeeSchedule_Label);
    }

    POGO_BM_ProceduresCategory_DropDown()
    {
        cy.wait(150);
        return cy.get(or.POGO_BM_FeeScheduleAnalysis.POGO_BM_ProceduresCategory_Dropdown);
    }

    POGO_BM_MasterStandardFee_Chkbox()
    {
        cy.wait(200);
        return cy.get(or.POGO_BM_FeeScheduleAnalysis.POGO_BM_MasterStandardFee_Chkbox);
    }

    POGO_BM_FeeScheduleAnalysis_ClearAll()
    {
        cy.wait(200);
        return cy.get(or.POGO_BM_FeeScheduleAnalysis.POGO_BM_ClearAll);
    }

    POGO_BM_ClearedGraph_RowRange1_1()
    {
        cy.wait(100);
        return cy.get(or.POGO_BM_FeeScheduleAnalysis.POGO_BM_ClearedGraph_RowRange1_$1);
    }

    POGO_BM_ClearedGraph_RowRange2_1()
    {
        cy.wait(100);
        return cy.get(or.POGO_BM_FeeScheduleAnalysis.POGO_BM_ClearedGraph_RowRange2_$1)
    }

    POGO_BM_ClearedGraph_RowRange3_1()
    {
        cy.wait(100);
        return cy.get(or.POGO_BM_FeeScheduleAnalysis.POGO_BM_ClearedGraph_RowRange3_$1);
    }

    POGO_BM_ClearedGraph_RowRange4_0()
    {
        cy.wait(100);
        return cy.get(or.POGO_BM_FeeScheduleAnalysis.POGO_BM_ClearedGraph_RowRange4_$0);
    }

    POGO_BM_ClearedGraph_RowRange5_0()
    {
        cy.wait(100);
        return cy.get(or.POGO_BM_FeeScheduleAnalysis.POGO_BM_ClearedGraph_Rowrange5_$0);
    }

    POGO_BM_MasterStandardFee_Leftdropdown()
    {
        cy.wait(200);
        return cy.get(or.POGO_BM_FeeScheduleAnalysis.POGO_BM_MasterStandardFee_Rightdropdown);
    }

    POGO_BM_MasterStandardFee_Rightdropdown()
    {
        cy.wait(200);
        return cy.get(or.POGO_BM_FeeScheduleAnalysis.POGO_BM_MasterStandardFee_Rightdropdown);
    }

    POGO_BM_Category_FirstRow_Toggle()
    {
        cy.wait(100);
        return cy.get(or.POGO_BM_FeeScheduleAnalysis.POGO_BM_Category_FirstRow_Toggle);
    }
    
    POGO_BM_Category_SecondRow_Toggle()
    {
        cy.wait(200);
        return cy.get(or.POGO_BM_FeeScheduleAnalysis.POGO_BM_Category_SecondRow_Toggle);
    }

    POGO_BM_Category_FeeScheduleLeftColumn()
    {
        cy.wait(150);
        return cy.get(or.POGO_BM_FeeScheduleAnalysis.POGO_BM_Category_FeeScheduleLeftColumn);
    }

    POGO_BM_Category_DifferenceAbsoluteColumn()
    {
        cy.wait(150);
        return cy.get(or.POGO_BM_FeeScheduleAnalysis.POGO_BM_Category_DifferenceAbsoluteColumn);
    }

    POGO_BM_Category_AffinityDental_Tooltip()
    {
        cy.wait(150);
        return cy.get(or.POGO_BM_FeeScheduleAnalysis.POGO_BM_Category_AffinityDental_Tooltip);
    }

    POGO_BM_Category_AffinityDental_Practice()
    {
        cy.wait(150);
        return cy.get(or.POGO_BM_FeeScheduleAnalysis.POGO_BM_Category_AffinityDental_Practice);
    }

    POGO_BM_Practice_AffinityDental_label()
    {
        cy.wait(150);
        return cy.get(or.POGO_BM_FeeScheduleAnalysis.POGO_BM_Practice_AffinityDental_label);
    }

    POGO_BM_Category_DentaBrightClinic_Practice()
    {
        cy.wait(100);
        return cy.get(or.POGO_BM_FeeScheduleAnalysis.POGO_BM_Category_DentaBrightClinic_Practice);
    }

    POGO_BM_Category_DentaBrightClinic_Tooltip()
    {
        return cy.get(or.POGO_BM_FeeScheduleAnalysis.POGO_BM_Category_DentaBrightClinic_Tooltip);
    }

    POGO_BM_Practice_DentaBrightClinic_label()
    {
        cy.wait(150);
        return cy.get(or.POGO_BM_FeeScheduleAnalysis.POGO_BM_Practice_DentaBrightClinic_label);
    }

    POGO_BM_SelectPractice_btn()
    {
        cy.wait(100);
        return cy.get(or.POGO_BM_FeeScheduleAnalysis.POGO_BM_SelectPractice_btn);
    }

    POGO_BM_SelectGroup_Tab()
    {
        cy.wait(100);
        return cy.get(or.POGO_BM_FeeScheduleAnalysis.POGO_BM_SelectGroup_Tab);
    }

    POGO_BM_SelectGroup_All()
    {
        cy.wait(100);
        return cy.get(or.POGO_BM_FeeScheduleAnalysis.POGO_BM_SelectGroup_All);
    }

    POGO_BM_GO_btn()
    {
        cy.wait(100);
        return cy.get(or.POGO_BM_FeeScheduleAnalysis.POGO_BM_GO_btn);
    }

    
}