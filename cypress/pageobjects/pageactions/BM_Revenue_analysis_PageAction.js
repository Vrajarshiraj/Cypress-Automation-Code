
/// <reference types="cypress" />

import BM_RevenueAnalysis_PageElements from '../pageelements/BM_RevenueAnalysis_PageElements';

export default class BM_Revenue_analysis_PageAction{

    constructor()
    {
        globalThis.add_BM_RevenueAnalysis_element = new BM_RevenueAnalysis_PageElements();
    }
    
    /* Revenue Analysis Tab */
    BM_Login_Clickto_RevenueAnalysis(){   
        add_BM_RevenueAnalysis_element.Get_POGO_BM_MenuIcon_Tab().click();
        add_BM_RevenueAnalysis_element.Get_POGO_BM_Menu_Analysis_Tab().click();
        cy.contains('Revenue Analysis').click();
        add_BM_RevenueAnalysis_element.Get_POGO_BM_Revenue_Analysis_Heading().should('have.text', 'Revenue Analysis');
        cy.wait(500);
        cy.contains('Production/Collections').scrollIntoView();
    }
    BM_RevenueAnalysis_SelectGroup(){
        cy.wait(1000);
        add_BM_RevenueAnalysis_element.Get_POGO_BM_RevenueAnalysis_SelectPractice_Btn().click();
        cy.wait(500);
        cy.get(".titleText").should('be.visible');
        add_BM_RevenueAnalysis_element.Get_POGO_BM_RevenueAnalysis_SelectaGroup_tab().should('have.text', 'Select a Group').click();
        add_BM_RevenueAnalysis_element.Get_POGO_BM_RevenueAnalysis_SelectGroupALL().click();
        add_BM_RevenueAnalysis_element.Get_POGO_BM_RevenueAnalysis_Go_Btn().contains('Go').click();
    }
    
      /*Select Timerange of 12 Months */
    BM_SelectTimeRange(){
        cy.wait(500);
        add_BM_RevenueAnalysis_element.Get_POGO_BM_TimeRange_Btn().click();
        add_BM_RevenueAnalysis_element.Get_POGO_BM_TimeRange_Month().contains('Months').click();
        add_BM_RevenueAnalysis_element.Get_POGO_BM_DateRange_Btn().click();
        add_BM_RevenueAnalysis_element.Get_POGO_BM_DateRange_1Jan2021().contains('Jan').click();
        add_BM_RevenueAnalysis_element.Get_POGO_BM_DateRange_31Dec2021().contains('Dec').click();
        add_BM_RevenueAnalysis_element.Get_POGO_BM_DateRange_Apply().contains('APPLY').click();
    } 
    

    
    


    /*Production Collection*/
    BM_RevenueAnalysis_Production_Collection_VerifyContent(){
        cy.contains('DDS');
        cy.contains('Hygienist');
        cy.contains('Year on Year Analysis');
        cy.contains('Patients Seen');
       
        cy.contains('Patients Seen');
        cy.contains('No Of Patients');
        cy.get('#chart-axis-4-axisLabel-0 > tspan').contains('Percentile');  
        cy.get("#chart-axis-3-axisLabel-0 > tspan").contains('Net Production');
        cy.wait(1000);
       
        cy.get('#chart-axis-9-axisLabel-0 > tspan').contains('Dollars');
        //cy.get('#chart-axis-9-tickLabels-1 > tspan').contains('$');
        
        cy.get('#chart-legend-10-labels-2').contains('Total Collections');
        cy.get('#chart-legend-10-labels-1').contains('Net Production');
        cy.get('#chart-legend-10-labels-0').contains('Total Production');
        cy.get('#chart-legend-10-labels-3').contains('Net Collections');



    }
    BM_RevenueAnalysis_Production_Collection_Verify_$_sign(){

    cy.get('#chart-axis-3-tickLabels-0 > tspan').contains('$');
    cy.get('#chart-axis-5-tickLabels-1 > tspan').should('not.contain', '$');
    cy.get('#chart-axis-9-tickLabels-2 > tspan').contains('$');
    cy.get('#chart-axis-9-tickLabels-1 > tspan').contains('$');
    
    }


   BM_RevenueAnalysis_Production_collection_ClickDentistBtn(){
    add_BM_RevenueAnalysis_element.Get_POGO_BM_RevenueAnalysis_Dentist_Btn().should('contain', 'DDS').click();
   }
   BM_RevenueAnalysis_Fee_Optimizer_NetProduction(){
    add_BM_RevenueAnalysis_element.Get_POGO_BM_RevenueAnalysis_Netproduction_Dropdown().select('Net Production');     
    cy.get("#chart-axis-3-axisLabel-0 > tspan").contains('Net Production');
    cy.get('#chart-axis-3-tickLabels-0 > tspan').contains('$');
}
BM_RevenueAnalysis_Fee_Optimizer_TotalProduction(){
    add_BM_RevenueAnalysis_element.Get_POGO_BM_RevenueAnalysis_Totalproduction_Dropdown().select('Total Production');     
    cy.get("#chart-axis-3-axisLabel-0 > tspan").contains('Total Production');
    cy.get('#chart-axis-3-tickLabels-0 > tspan').contains('$');
}

BM_RevenueAnalysis_Fee_Optimizer_NetCollection(){


    add_BM_RevenueAnalysis_element.Get_POGO_BM_RevenueAnalysis_NetCollection_Dropdown().select('Net Collection');     
    cy.get("#chart-axis-3-axisLabel-0 > tspan").contains('Net Collection');
    cy.get('#chart-axis-3-tickLabels-0 > tspan').contains('$');
}


BM_RevenueAnalysis_Fee_Optimizer_TotalCollection(){
    add_BM_RevenueAnalysis_element.Get_POGO_BM_RevenueAnalysis_Totalcollection_Dropdown().select('Total Collection');     
    cy.get("#chart-axis-3-axisLabel-0 > tspan").contains('Total Collection');
    cy.get('#chart-axis-3-tickLabels-0 > tspan').contains('$');
}

   BM_RevenueAnalysis_Production_Collection_ClickHygienistBtn(){
    add_BM_RevenueAnalysis_element.Get_POGO_BM_RevenueAnalysis_Hygienist_Btn().should('contain', 'Hygienist').click();
   }
  
   BM_RevenueAnalysis_Fee_Optimizer_NetProduction(){
    add_BM_RevenueAnalysis_element.Get_POGO_BM_RevenueAnalysis_Netproduction_Dropdown().select('Net Production');     
    cy.get("#chart-axis-3-axisLabel-0 > tspan").contains('Net Production');
    cy.get('#chart-axis-3-tickLabels-0 > tspan').contains('$');
}
BM_RevenueAnalysis_Fee_Optimizer_TotalProduction(){
    add_BM_RevenueAnalysis_element.Get_POGO_BM_RevenueAnalysis_Totalproduction_Dropdown().select('Total Production');
    cy.wait(500);     
    cy.get("#chart-axis-3-axisLabel-0 > tspan").contains('Total Production');
    cy.get('#chart-axis-3-tickLabels-0 > tspan').contains('$');
}
BM_RevenueAnalysis_Fee_Optimizer_NetCollection(){
    

    add_BM_RevenueAnalysis_element.Get_POGO_BM_RevenueAnalysis_NetCollection_Dropdown().select('Net Collection');     
    cy.get("#chart-axis-3-axisLabel-0 > tspan").contains('Net Collection');
    cy.get('#chart-axis-3-tickLabels-0 > tspan').contains('$');
}




BM_RevenueAnalysis_Fee_Optimizer_TotalCollection(){
    add_BM_RevenueAnalysis_element.Get_POGO_BM_RevenueAnalysis_Totalcollection_Dropdown().select('Total Collection');     
    cy.get("#chart-axis-3-axisLabel-0 > tspan").contains('Total Collection');
    cy.get('#chart-axis-3-tickLabels-0 > tspan').contains('$');
}



   Click_to_Fee_optimizer()
   {
    add_BM_RevenueAnalysis_element.Get_POGO_BM_RevenueAnalysis_Fee_Optimizer_Tab().should('contain', 'Fee Optimizer').click();

   }
   BM_RevenueAnalysis_Fee_optimizer_VerifyContent(){
   
    cy.contains('Tap on a practice whose fees you want to optimize');
    cy.contains('Ranking by');
    cy.get("#chart-axis-4-axisLabel-0 > tspan").should('have.text', 'Percentile');  
    cy.get("#chart-axis-3-axisLabel-0 > tspan").should('have.text', 'Net Production');
    cy.wait(500);
    cy.get('#chart-axis-0-axisLabel-0 > tspan').contains('Total Procedures');
    cy.contains('Total Net Production');
    cy.contains('Quadrant Analysis');
    cy.contains('Current');
    cy.contains('Recommended');
    cy.contains('Fee Analysis');
    cy.contains('Current Gross Production');
    cy.contains('New Gross Production:');
    cy.contains('Based on:Actual fees');
    cy.contains('Increase:');
    


   }
   BM_RevenueAnalysis_Fee_Optimizer_Verify_all_sign(){

    cy.get('#chart-axis-3-tickLabels-0 > tspan').contains('$');
    cy.get('#chart-axis-1-tickLabels-3 > tspan').should('contain', '$');
    cy.wait(500);
    cy.get('#analysis-card > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)').contains('$');
    cy.get('#analysis-card > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(2)').contains('$');

    cy.get('#analysis-card > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(3) > div:nth-child(2) > div.trend-block > div > span').contains('%');
    cy.get('#analysis-card > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(3) > div:nth-child(2) > div:nth-child(1)').contains('$');
    }

    BM_RevenueAnalysis_Fee_Optimizer_Highest_NetProduction_Dropdown()
    {
        add_BM_RevenueAnalysis_element.Get_POGO_BM_RevenueAnalysis_Fee_Optimizer_Highest_NetProduction_Dropdown().select("Procedure with Highest Net Production");
        //cy.get('#chart-axis-2-tickLabels-0 > tspan').contains('$')
        cy.get('#chart-axis-3-axisLabel-0 > tspan').should('have.text', 'Net Production');
    }
    BM_RevenueAnalysis_Fee_Optimizer_Highest_Fee_Dropdown()
    {
        add_BM_RevenueAnalysis_element.Get_POGO_BM_RevenueAnalysis_Fee_Optimizer_Highest_NetProduction_Dropdown().select("Procedure with Highest Fee");
        //cy.get('#chart-axis-2-tickLabels-0 > tspan').contains('$')
        cy.get('#chart-axis-3-axisLabel-0 > tspan').should('have.text', 'Fee Amount');
    }
    BM_RevenueAnalysis_Fee_Optimizer_Current_Button()
    {
        add_BM_RevenueAnalysis_element.Get_POGO_BM_RevenueAnalysis_Fee_Optimizer_currrent_Btn().should('contain', 'Current').click(); 
        cy.get('#chart-axis-0-axisLabel-0 > tspan').contains('Total Procedures');
        cy.contains('Total Net Production');
        cy.get('#chart-axis-1-tickLabels-3 > tspan').should('contain', '$');
    }
    BM_RevenueAnalysis_Fee_Optimizer_Recommended_Button()
    {
        add_BM_RevenueAnalysis_element.Get_POGO_BM_RevenueAnalysis_Fee_Optimizer_Recommended_Btn().should('contain', 'Recommended').click(); 
        cy.get('#chart-axis-0-axisLabel-0 > tspan').contains('Total Procedures');
        cy.contains('Total Net Production');
        cy.get('#chart-axis-1-tickLabels-3 > tspan').should('contain', '$');
    }
    BM_RevenueAnalysis_Fee_Optimizer_Select_Percentile()
    {
        add_BM_RevenueAnalysis_element.Get_POGO_BM_RevenueAnalysis_Fee_Optimizer_select_90thPercentile().should('contain', '90th Percentile').click();
        add_BM_RevenueAnalysis_element.Get_POGO_BM_RevenueAnalysis_Fee_Optimizer_select_80thPercentile().should('contain', '80th Percentile').click(); 
        add_BM_RevenueAnalysis_element.Get_POGO_BM_RevenueAnalysis_Fee_Optimizer_select_70thPercentile().should('contain', '70th Percentile').click();  
    }
    

}