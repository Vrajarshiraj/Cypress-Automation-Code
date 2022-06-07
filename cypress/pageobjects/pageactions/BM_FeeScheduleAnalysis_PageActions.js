/// <reference types="cypress" />

import BM_FeeScheduleAnalysis_PageElements from "../pageelements/BM_FeeScheduleAnalysis_PageElements";
import BM_RevenueAnalysis_PageElements from '../pageelements/BM_RevenueAnalysis_PageElements';


export default class BM_FeeScheduleAnalysis_PageActions
{
    constructor()
    {
        globalThis.add_BM_FeeScheduleAnalysis_Element=new BM_FeeScheduleAnalysis_PageElements();
        globalThis.add_BM_RevenueAnalysis_Element=new BM_RevenueAnalysis_PageElements();
    }

    GetTo_FeeScheduleAnalysisPage()
    {
        add_BM_RevenueAnalysis_Element.Get_POGO_BM_MenuIcon_Tab().click();
        add_BM_RevenueAnalysis_Element.Get_POGO_BM_Menu_Analysis_Tab().click();
        add_BM_FeeScheduleAnalysis_Element.POGO_BM_Login_FeeScheduleAnalysis().click();   
    }

    BM_FeeScheduleAnalysis_SelectPracticeOrGroup_All()
    {
        add_BM_FeeScheduleAnalysis_Element.POGO_BM_SelectPractice_btn().click();
        add_BM_FeeScheduleAnalysis_Element.POGO_BM_SelectGroup_Tab().click();
        add_BM_FeeScheduleAnalysis_Element.POGO_BM_SelectGroup_All().click();
        add_BM_FeeScheduleAnalysis_Element.POGO_BM_GO_btn().click();
        cy.wait(10000);
    }

    BM_FeeScheduleAnalysis_VerifyContent()
    {
        add_BM_FeeScheduleAnalysis_Element.POGO_BM_FeeScheduleAnalysis_Header().contains('Fee Schedule Analysis');
        add_BM_FeeScheduleAnalysis_Element.POGO_BM_PracticeViewFeeSchedule_Label().contains('Tap on a practice to view fee schedules');
        add_BM_FeeScheduleAnalysis_Element.POGO_BM_CompareFeeSchedule_Label().contains('Compare Fee Schedules');
    }

    BM_FeeScheduleAnalysis_ProceduresCategory()
    {
        var drpdown_items=["D0100-D0999 DIAGNOSTIC","D1000-D1999 PREVENTIVE","D2000-D2999 RESTORATIVE","D3000-D3999 ENDODONTICS","D4000-D4999 PERIODONTICS","D5000-D5899 PROSTHODONTICS","D6000-D6199 IMPLANT SERVICES","D6200-D6999 PROSTHODONTICS FIXED","D7000-D7999 ORAL & MAXILLOFACIAL SURGERY","D8000-D8999 ORTHODONTICS","D5900-D5999 MAXILLOFACIAL PROSTHETICS","MISCELLANEOUS"]
        // add_BM_FeeScheduleAnalysis_Element.POGO_BM_ProceduresCategory_DropDown().contains('D0100-D0999 DIAGNOSTIC');
        // add_BM_FeeScheduleAnalysis_Element.(POGO_BM_ProceduresCategory_DropDown().contains('D1000-D1999 PREVENTIVE');
        // add_BM_FeeScheduleAnalysis_Element.POGO_BM_ProceduresCategory_DropDown().contains('D2000-D2999 RESTORATIVE');
        // add_BM_FeeScheduleAnalysis_Element.POGO_BM_ProceduresCategory_DropDown().contains('D3000-D3999 ENDODONTICS');
        // add_BM_FeeScheduleAnalysis_Element.POGO_BM_ProceduresCategory_DropDown().contains('D4000-D4999 PERIODONTICS');
        // add_BM_FeeScheduleAnalysis_Element.POGO_BM_ProceduresCategory_DropDown().contains('D5000-D5899 PROSTHODONTICS');
        // add_BM_FeeScheduleAnalysis_Element.POGO_BM_ProceduresCategory_DropDown().contains('D6000-D6199 IMPLANT SERVICES');
        // add_BM_FeeScheduleAnalysis_Element.POGO_BM_ProceduresCategory_DropDown().contains('D6200-D6999 PROSTHODONTICS FIXED');
        // add_BM_FeeScheduleAnalysis_Element.POGO_BM_ProceduresCategory_DropDown().contains('D7000-D7999 ORAL & MAXILLOFACIAL SURGERY');
        // add_BM_FeeScheduleAnalysis_Element.POGO_BM_ProceduresCategory_DropDown().contains('D8000-D8999 ORTHODONTICS');
        // add_BM_FeeScheduleAnalysis_Element.POGO_BM_ProceduresCategory_DropDown().contains('D5900-D5999 MAXILLOFACIAL PROSTHETICS');

        


    }

    BM_FeeScheduleAnalysis_ClickAll()
    {
        add_BM_FeeScheduleAnalysis_Element.POGO_BM_MasterStandardFee_Chkbox().check().should('be.checked');
        add_BM_FeeScheduleAnalysis_Element.POGO_BM_FeeScheduleAnalysis_ClearAll().click()
    }

    BM_FeeScheduleAnalysis_VerifyClearAll()
    {
        add_BM_FeeScheduleAnalysis_Element.POGO_BM_MasterStandardFee_Chkbox().should('not.be.checked');
        
        add_BM_FeeScheduleAnalysis_Element.POGO_BM_ClearedGraph_RowRange1_1().contains('$1').should('be.visible');
        add_BM_FeeScheduleAnalysis_Element.POGO_BM_ClearedGraph_RowRange2_1().contains('$1').should('be.visible');
        add_BM_FeeScheduleAnalysis_Element.POGO_BM_ClearedGraph_RowRange3_1().contains('$1').should('be.visible');
        add_BM_FeeScheduleAnalysis_Element.POGO_BM_ClearedGraph_RowRange4_0().contains('$0').should('be.visible');
        add_BM_FeeScheduleAnalysis_Element.POGO_BM_ClearedGraph_RowRange5_0().contains('$0').should('be.visible');
    }

    BM_VerifyFeeScheduleTableData()
    {
        add_BM_FeeScheduleAnalysis_Element.POGO_BM_MasterStandardFee_Leftdropdown().select('Master Standard Fee').should('have.text','Master Standard Fee');
        add_BM_FeeScheduleAnalysis_Element.POGO_BM_MasterStandardFee_Rightdropdown().select('Master Standard Fee').should('have.text','Master Standard Fee');

        //Verifing Toggle functionality in first Row of the Table
        add_BM_FeeScheduleAnalysis_Element.POGO_BM_Category_FirstRow_Toggle().click();
        add_BM_FeeScheduleAnalysis_Element.POGO_BM_Category_FirstRow_Toggle().click({force:false});
        add_BM_FeeScheduleAnalysis_Element.POGO_BM_Category_SecondRow_Toggle().click();
        add_BM_FeeScheduleAnalysis_Element.POGO_BM_Category_SecondRow_Toggle().click({force:false});

        add_BM_FeeScheduleAnalysis_Element.POGO_BM_Category_FeeScheduleLeftColumn();

        add_BM_FeeScheduleAnalysis_Element.POGO_BM_Category_FeeScheduleLeftColumn().each(($e,index,$list) =>{

            const text=$e.text()

           if(text.includes("$"))
           {
               add_BM_FeeScheduleAnalysis_Element.POGO_BM_Category_DifferenceAbsoluteColumn().eq(index).then(function(extText)
               {
                   const visibleText=extText.text()
                   expect(visibleText).to.contains("$")
               })     
            }
        })

        add_BM_FeeScheduleAnalysis_Element.POGO_BM_Category_FeeScheduleLeftColumn().each(($e,index,$list) =>{

            const text=$e.text()

           if(text.includes("Not Defined In PMS"))
           {
               add_BM_FeeScheduleAnalysis_Element.POGO_BM_Category_DifferenceAbsoluteColumn().eq(index).then(function(extText)
               {
                   const visibleText=extText.text()
                   expect(visibleText).to.contains("N/A")
               })     
            }
        })
    }

    BM_VerifyPractice_AffinityDental()
    { 
        // Affinity Dental Practice
        add_BM_FeeScheduleAnalysis_Element.POGO_BM_Category_AffinityDental_Practice().trigger('mouseover');
        add_BM_FeeScheduleAnalysis_Element.POGO_BM_Category_AffinityDental_Tooltip().contains('Affinity Dental').then(message=>
            {
                let verifytext_Affinity=message;
                cy.wrap(verifytext_Affinity).as('verifytext_Affinity');
            }
        );

        add_BM_FeeScheduleAnalysis_Element.POGO_BM_Practice_AffinityDental_label().then(verifytext_Affinity=>
            {
                expect(verifytext_Affinity).to.contain('Affinity Dental');
            }
        );
    }


    BM_VerifyPractice_DentaBright()
    {
        // add_BM_FeeScheduleAnalysis_Element.POGO_BM_Category_DentaBrightClinic_Practice().click();
        // cy.get('#provider-productivity-page > div:nth-child(2) > div:nth-child(2) > div > svg > g:nth-child(2) > g:nth-child(13)').trigger('mouseover');
        add_BM_FeeScheduleAnalysis_Element.POGO_BM_Category_DentaBrightClinic_Practice().trigger('mouseover');
        cy.wait(100);
        
        add_BM_FeeScheduleAnalysis_Element.POGO_BM_Category_DentaBrightClinic_Tooltip().invoke('text').then(message_d=>
            {
                cy.wait(500);
                add_BM_FeeScheduleAnalysis_Element.POGO_BM_Category_DentaBrightClinic_Practice().click();
                cy.wait(100);
                add_BM_FeeScheduleAnalysis_Element.POGO_BM_Practice_DentaBrightClinic_label().invoke('text').should(verifytext_dentaBrightlabel=>
                    {
                        expect(message_d).contains(verifytext_dentaBrightlabel);
                    })
                       
            }
        );

        
        cy.wait(500);
        
        
        

        // cy.get('#provider-productivity-page > div:nth-child(3)').invoke('text').then(verifytext_dentaBrightlabel=>
        //     {
        //         expect(verifytext_dentaBright).to.contain(verifytext_dentaBrightlabel);
        //     })
    }

    // BM_VerifyPractice_CareSourceDental()
    // {
    //     cy.get("div[class='VictoryContainer'] svg g:nth-child(2) g:nth-child(12)").click();
        
    // }


}