/// <reference types="cypress" />

import BM_ProviderProductivity_PageElements from '../pageelements/BM_ProviderProductivity_PageElements';

export default class BM_ProviderProductivity_PageActions {

    constructor()
    {
        globalThis.add_BM_ProviderProductivity_element = new BM_ProviderProductivity_PageElements();
    }
    
    /* Provider Productivity Tab */
    BM_Login_Clickto_ProviderProductivity(){   
        add_BM_ProviderProductivity_element.Get_POGO_BM_MenuIcon_Tab().click();
        add_BM_ProviderProductivity_element.Get_POGO_BM_Menu_Analysis_Tab().click();
        cy.contains('Provider Productivity').click();
        add_BM_ProviderProductivity_element.Get_POGO_BM_ProviderProductivity_Heading().should('have.text', 'Provider Productivity');
        cy.wait(500);
        cy.contains('Net Production').scrollIntoView();
    }

    /* Select Group */
    BM_ProviderProductivity_SelectGroup(){
        cy.wait(500);
        add_BM_ProviderProductivity_element.Get_POGO_BM_ProviderProductivity_SelectPractice_Btn().click();
        cy.get(".titleText").should('be.visible');
        add_BM_ProviderProductivity_element.Get_POGO_BM_ProviderProductivity_SelectaGroup_tab().should('have.text', 'Select a Group').click();
        add_BM_ProviderProductivity_element.Get_POGO_BM_ProviderProductivity_SelectGroupALL().click();
        cy.wait(500);
        add_BM_ProviderProductivity_element.Get_POGO_BM_ProviderProductivity_Go_Btn().contains('Go').click();
    }

    /*Select Timerange of 12 Months */
    BM_SelectTimeRange(){
        cy.wait(500);
        add_BM_ProviderProductivity_element.Get_POGO_BM_TimeRange_Btn().click();
        add_BM_ProviderProductivity_element.Get_POGO_BM_TimeRange_Month().contains('Months').click();
        add_BM_ProviderProductivity_element.Get_POGO_BM_DateRange_Btn().click();
        add_BM_ProviderProductivity_element.Get_POGO_BM_DateRange_1Jan2021().contains('Jan').click();
        add_BM_ProviderProductivity_element.Get_POGO_BM_DateRange_31Dec2021().contains('Dec').click();
        add_BM_ProviderProductivity_element.Get_POGO_BM_DateRange_Apply().contains('APPLY').click();
    } 

    /*Net Production*/
    BM_ProviderProductivity_NetProduction_VerifyContent(){
        cy.contains('Dentist');
        cy.contains('Hygienist');
        cy.contains('Ranking by Net Production');
        cy.get("#chart-axis-3-axisLabel-0 > tspan").should('have.text', 'Percentile');  
        cy.get("#chart-axis-2-axisLabel-0 > tspan").should('have.text', 'Net Production');
        cy.get('#chart-axis-2-tickLabels-0 > tspan').contains('$');
        cy.contains('Net Production Trends');
        cy.contains('Net Production');
    }

    BM_ProviderProductivity_Trends(){
        cy.get('input[type="checkbox"]').each(($ele, index, collection) => 
        {
        if ($ele.is(':checked')) {
        cy.wrap(collection).check();
        return false;             }        
        })
        cy.get("#provider-productivity-page > div:nth-child(5) > div:nth-child(2) > div.col-lg-3.col-xl-3 > div > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > input[type=checkbox]").should('be.checked');
        cy.get("#provider-productivity-page > div:nth-child(5) > div:nth-child(2) > div.col-lg-3.col-xl-3 > div > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(9) > input[type=checkbox]").should('not.be.checked');  
    }

    BM_ProviderProductivity_NetProductionTrends_Visible(){
        cy.get("#chart-axis-1-axisLabel-0 > tspan").should('have.text', 'Net Production');
        cy.get("#chart-axis-1-tickLabels-0 > tspan").contains('$');
        cy.get("#provider-productivity-page > div:nth-child(5) > div:nth-child(2) > div.col-lg-9.col-xl-9 > div > div > div > svg > g:nth-child(11)").should('be.visible'); 
   }

   BM_ProviderProductivity_ClearSelectedTrends(){
    add_BM_ProviderProductivity_element.Get_POGO_BM_ProviderProductivity_ClearAll_Btn().click();
    add_BM_ProviderProductivity_element.Get_POGO_BM_ProviderProductivity_ClearAll_Pleaseselectatleastone().contains('Please select at least one');
    }
 
   BM_ProviderProductivity_NetProduction_Table_ProviderColumn(){
    add_BM_ProviderProductivity_element.Get_POGO_BM_ProviderProductivity_Table();
    cy.contains('Provider');
    cy.get("#expandable-table > tbody > tr:nth-child(2) > td:nth-child(1)").should('not.contain', '$'); 
   }

   BM_ProviderProductivity_NetProduction_Table_RoleColumn(){
    cy.contains('Role');
    cy.get("#expandable-table > tbody > tr:nth-child(2) > td:nth-child(2)").should('not.contain', '$'); 
   }

   BM_ProviderProductivity_NetProduction_Table_ProductionColumn(){
    cy.contains('Production') ; 
    cy.get("#expandable-table > tbody > tr:nth-child(2) > td:nth-child(3)").contains('$'); 
   }

   BM_ProviderProductivity_NetProduction_Table_ProductionAdjustmentsColumn(){
    cy.contains('Production Adjustments');
    cy.get("#expandable-table > tbody > tr:nth-child(2) > td:nth-child(4)").contains('$');
   }

   BM_ProviderProductivity_NetProduction_Table_NetProductionColumn(){
    cy.contains('Net Production');
    cy.get("#expandable-table > tbody > tr:nth-child(2) > td:nth-child(5)").contains('$');
   }

   BM_ProviderProductivity_NetProduction_ClickDentistBtn(){
    add_BM_ProviderProductivity_element.Get_POGO_BM_ProviderProductivity_Dentist_Btn().should('contain', 'Dentist').click();
   }

   BM_ProviderProductivity_NetProduction_ClickHygienistBtn(){
    add_BM_ProviderProductivity_element.Get_POGO_BM_ProviderProductivity_Hygienist_Btn().should('contain', 'Hygienist').click();
   }

   /*Net Collection*/
   BM_ProviderProductivity_NetCollection_VerifyContent(){
    add_BM_ProviderProductivity_element.Get_POGO_BM_ProviderProductivity_Dentist_Btn().should('contain', 'Dentist').click();
    add_BM_ProviderProductivity_element.Get_POGO_BM_ProviderProductivity_NetCollection_Tab().should('contain', 'Net Collection').click();
    cy.contains('Dentist');
    cy.contains('Hygienist');
    cy.contains('Ranking by Net Collection');
    cy.get("#chart-axis-3-axisLabel-0 > tspan").should('have.text', 'Percentile');  
    cy.get("#chart-axis-2-axisLabel-0 > tspan").should('have.text', 'Net Collection');
    cy.get('#chart-axis-2-tickLabels-0 > tspan').contains('$');
    cy.contains('Net Collection Trends');
    cy.contains('Net Collection');
   }

   BM_ProviderProductivity_NetCollectionTrends_Visible(){
    cy.get("#chart-axis-1-axisLabel-0 > tspan").should('have.text', 'Net Collection');
    cy.get("#chart-axis-1-tickLabels-0 > tspan").contains('$');
    cy.get("#provider-productivity-page > div:nth-child(5) > div:nth-child(2) > div.col-lg-9.col-xl-9 > div > div > div > svg > g:nth-child(11)").should('be.visible'); 
}

   BM_ProviderProductivity_NetCollection_Table_CollectionsColumn(){
    cy.contains('Collections') ; 
    cy.get("#expandable-table > tbody > tr:nth-child(2) > td:nth-child(3)").contains('$'); 
   }

   BM_ProviderProductivity_NetCollection_Table_CollectionsperHourColumn(){
    cy.contains('Collections (per Hour)') ; 
    cy.get("#expandable-table > tbody > tr:nth-child(2) > td:nth-child(4)").contains('$'); 
   }

   BM_ProviderProductivity_NetCollection_Table_CollectionAdjustmentsColumn(){
    cy.contains('Collection Adjustments') ; 
    cy.get("#expandable-table > tbody > tr:nth-child(2) > td:nth-child(5)").contains('$'); 
   }

   BM_ProviderProductivity_NetCollection_Table_NetCollectionColumn(){
    cy.contains('Net Collection') ; 
    cy.get("#expandable-table > tbody > tr:nth-child(2) > td:nth-child(6)").contains('$'); 
   }

   /* Patient Visits */
   BM_ProviderProductivity_PatientVisits_VerifyContent(){
    add_BM_ProviderProductivity_element.Get_POGO_BM_ProviderProductivity_PatientVisits_Tab().should('contain', 'Patient Visits').click();
    cy.contains('Dentist');
    cy.contains('Hygienist');
    cy.contains('Ranking by Patient Visits');
    cy.get("#chart-axis-3-axisLabel-0 > tspan").should('have.text', 'Percentile');  
    cy.get("#chart-axis-2-axisLabel-0 > tspan").should('have.text', 'Patient Visits');
    cy.get('#chart-axis-2-tickLabels-0 > tspan').should('not.contain', '$');
    cy.contains('Patient Visits Trends');
    cy.contains('Patient Visits');
   }

   BM_ProviderProductivity_PatientVisistTrends_Visible(){
    cy.get("#chart-axis-1-axisLabel-0 > tspan").should('have.text', 'Patient Visits');
    cy.get("#chart-axis-1-tickLabels-0 > tspan").should('not.contain', '$');
    cy.get("#provider-productivity-page > div:nth-child(5) > div:nth-child(2) > div.col-lg-9.col-xl-9 > div > div > div > svg > g:nth-child(11)").should('be.visible'); 
}

   BM_ProviderProductivity_PatientVisits_Table_patientVisitsColumn(){
    cy.contains('# patient Visits') ; 
    cy.get("#expandable-table > tbody > tr:nth-child(2) > td:nth-child(2)").should('not.contain', '$');
   }

   BM_ProviderProductivity_PatientVisits_Table_patientVisitsperhourColumn(){
    cy.contains('# patient Visits (per hour)') ; 
    cy.get("#expandable-table > tbody > tr:nth-child(2) > td:nth-child(3)").should('not.contain', '$');
   }

   BM_ProviderProductivity_PatientVisits_Table_proceduresperformedColumn(){
    cy.contains('# procedures performed') ; 
    cy.get("#expandable-table > tbody > tr:nth-child(2) > td:nth-child(4)").should('not.contain', '$');
   }

   BM_ProviderProductivity_PatientVisits_Table_proceduresperformedperhourColumn(){
    cy.contains('# procedures performed (per hour)') ; 
    cy.get("#expandable-table > tbody > tr:nth-child(2) > td:nth-child(4)").should('not.contain', '$');
   }

   /*Hygienist ROI*/
   BM_ProviderProductivity_HygienistROI_VerifyContent(){
    add_BM_ProviderProductivity_element.Get_POGO_BM_ProviderProductivity_HygienistROI_Tab().should('contain', 'Hygienist ROI').click();
    cy.contains('ROI Trends');
    cy.contains('Hygienist ROI Ranking');
    cy.get("#chart-axis-3-axisLabel-0 > tspan").should('have.text', 'Percentile');  
    cy.get("#chart-axis-2-axisLabel-0 > tspan").should('have.text', 'ROI');
    cy.get('#chart-axis-2-tickLabels-0 > tspan').contains('x');
   }

   BM_ProviderProductivity_HygienistROI_Visible(){
    cy.get("#chart-axis-1-axisLabel-0 > tspan").should('have.text', 'ROI');
    cy.get("#provider-productivity-page > div:nth-child(5) > div:nth-child(2) > div.col-lg-9.col-xl-9 > div > div > div > svg > g:nth-child(11)").should('be.visible'); 
}

}