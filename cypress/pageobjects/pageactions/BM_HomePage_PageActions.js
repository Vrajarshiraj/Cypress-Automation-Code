/// <reference types="cypress" />

import BM_HomePage_PageElements from '../pageelements/BM_HomePage_PageElements';

export default class BM_HomePage_PageActions{

    constructor()
    {
        globalThis.add_BM_homepage_element = new BM_HomePage_PageElements();
    }

    /* Select Group */
    BM_HomePage_SelectGroup(){
        cy.wait(1000);
        add_BM_homepage_element.Get_POGO_BM_Homepage_SelectPractice_Btn().click();
        cy.wait(1000);
        add_BM_homepage_element.Get_POGO_BM_Homepage_SelectaGroup_tab().should('have.text', 'Select a Group').click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_SelectGroupALL().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_Go_Btn().contains('Go').click();
    }
    
      /*Select Timerange of 12 Months */
    BM_SelectTimeRange(){
        cy.wait(500);
        add_BM_homepage_element.Get_POGO_BM_TimeRange_Btn().click();
        add_BM_homepage_element.Get_POGO_BM_TimeRange_Month().contains('Months').click();
        add_BM_homepage_element.Get_POGO_BM_DateRange_Btn().click();
        add_BM_homepage_element.Get_POGO_BM_DateRange_1Jan2021().contains('Jan').click();
        add_BM_homepage_element.Get_POGO_BM_DateRange_31Dec2021().contains('Dec').click();
        add_BM_homepage_element.Get_POGO_BM_DateRange_Apply().contains('APPLY').click();
    } 

    /*Verify HomePage content*/
    BM_HomePage_VerifyContent(){
        cy.contains('Quadrant Chart')
        cy.contains('Provider Productivity')
        cy.contains('Insurance Analysis')
        cy.contains('Quick Stats')
    }   
     /* HomePage > Practice Profile Test Cases */  
    BM_HomePage_PracticeProfile_VerifyContent(){ 
        cy.contains('Specialities')
        cy.contains('Operatories')
        cy.contains('Patients w/ Treatment Plans')
        cy.contains('New Patients Per Month')
        cy.contains('Active Patients')
        cy.contains('Hygiene Overdue')
        cy.contains('Doctors')
        cy.contains('Hygienists')
        cy.contains('Providers')
    }  
    /*Test Cases for Xaxis Dropdown*/
    BM_HomePage_PracticeProfile_Xaxis_LeftDropDown_NetProduction(){
        add_BM_homepage_element.Get_POGO_BM_Homepage_PracticeProfile_Xaxis_LeftDropdown().click();
        cy.get('span > div > .cpu-container > .cpu-option-container:nth-child(1) > input').click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_GetQuadrant_Apply().click();
        var genArr = Array.from({length:1},(v,k)=>k+1)
        cy.wrap(genArr).each((index) => {
        for(let i = 2; i <= 11; i++){
        add_BM_homepage_element.Get_POGO_BM_Homepage_PracticeProfile_Xaxis_RightDropdown().click();
        cy.get("span > div > .cpu-container > .cpu-option-container:nth-child("+i+") > input").click();
       add_BM_homepage_element.Get_POGO_BM_Homepage_GetQuadrant_Apply().click();
        cy.wait(2000);
        cy.get('#chart-axis-7-tickLabels-0 > tspan').contains('$');
        cy.get('#chart-axis-7-axisLabel-0 > tspan').contains('Net Production'); 
        }
        })
    }
    
    BM_HomePage_PracticeProfile_Xaxis_LeftDropDown_PatientVisits(){
        add_BM_homepage_element.Get_POGO_BM_Homepage_PracticeProfile_Xaxis_LeftDropdown().click();
        cy.get('span > div > .cpu-container > .cpu-option-container:nth-child(2) > input').click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_GetQuadrant_Apply().click();
        var genArr = Array.from({length:1},(v,k)=>k+1)
        cy.wrap(genArr).each((index) => {
        for(let i =2; i <= 7; i++){
        add_BM_homepage_element.Get_POGO_BM_Homepage_PracticeProfile_Xaxis_RightDropdown().click();
        cy.get("span > div > .cpu-container > .cpu-option-container:nth-child("+i+") > input").click();
         add_BM_homepage_element.Get_POGO_BM_Homepage_GetQuadrant_Apply().click();
        cy.wait(2000);
        cy.get('#root > div > div.container-fluid.content.appDiv > div > div.quadrant-chart-summary-card-container > div.qc-container > div.profile-quadrant-chart-container > div > div > svg > g:nth-child(5) > path').should('not.contain', '$');
        cy.get('#chart-axis-7-axisLabel-0 > tspan').contains('Patient Visits'); 
            }
        })
    }

    BM_HomePage_PracticeProfile_Xaxis_LeftDropDown_ProceduresPerformed(){
        add_BM_homepage_element.Get_POGO_BM_Homepage_PracticeProfile_Xaxis_LeftDropdown().click();
        cy.get('span > div > .cpu-container > .cpu-option-container:nth-child(3) > input').click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_GetQuadrant_Apply().click();
        var genArr = Array.from({length:1},(v,k)=>k+1)
        cy.wrap(genArr).each((index) => {
        for(let i = 2; i <= 8; i++){
        add_BM_homepage_element.Get_POGO_BM_Homepage_PracticeProfile_Xaxis_RightDropdown().click();
        cy.get("span > div > .cpu-container > .cpu-option-container:nth-child("+i+") > input").click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_GetQuadrant_Apply().click();
        cy.wait(2000);
        cy.get('#root > div > div.container-fluid.content.appDiv > div > div.quadrant-chart-summary-card-container > div.qc-container > div.profile-quadrant-chart-container > div > div > svg > g:nth-child(5) > path').should('not.contain', '$');
        cy.get('#chart-axis-7-axisLabel-0 > tspan').contains('Procedures Performed'); 
            }
        })
    }

    BM_HomePage_PracticeProfile_Xaxis_LeftDropDown_UniquePatientsSeen(){
        add_BM_homepage_element.Get_POGO_BM_Homepage_PracticeProfile_Xaxis_LeftDropdown().click();
        cy.get('span > div > .cpu-container > .cpu-option-container:nth-child(4) > input').click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_GetQuadrant_Apply().click();
        var genArr = Array.from({length:1},(v,k)=>k+1)
        cy.wrap(genArr).each((index) => {
        for(let i = 2; i <= 11; i++){
        add_BM_homepage_element.Get_POGO_BM_Homepage_PracticeProfile_Xaxis_RightDropdown().click();
        cy.get("span > div > .cpu-container > .cpu-option-container:nth-child("+i+") > input").click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_GetQuadrant_Apply().click();
        cy.wait(2000);
        cy.get('#root > div > div.container-fluid.content.appDiv > div > div.quadrant-chart-summary-card-container > div.qc-container > div.profile-quadrant-chart-container > div > div > svg > g:nth-child(5) > path').should('not.contain', '$');
        cy.get('#chart-axis-7-axisLabel-0 > tspan').contains('Unique Patients Seen'); 
            }
        })
    }

    BM_HomePage_PracticeProfile_Xaxis_LeftDropDown_Providers(){
        add_BM_homepage_element.Get_POGO_BM_Homepage_PracticeProfile_Xaxis_LeftDropdown().click();
        cy.get('span > div > .cpu-container > .cpu-option-container:nth-child(6) > input').click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_GetQuadrant_Apply().click();
        var genArr = Array.from({length:1},(v,k)=>k+1)
        cy.wrap(genArr).each((index) => {
        for(let i = 2; i <= 4; i++){
        add_BM_homepage_element.Get_POGO_BM_Homepage_PracticeProfile_Xaxis_RightDropdown().click();
        cy.get("span > div > .cpu-container > .cpu-option-container:nth-child("+i+") > input").click();
         add_BM_homepage_element.Get_POGO_BM_Homepage_GetQuadrant_Apply().click();
        cy.wait(2000);
        cy.get('#root > div > div.container-fluid.content.appDiv > div > div.quadrant-chart-summary-card-container > div.qc-container > div.profile-quadrant-chart-container > div > div > svg > g:nth-child(5) > path').should('not.contain', '$');
        cy.get('#chart-axis-7-axisLabel-0 > tspan').contains('Providers'); 
            }
        })
    }

    BM_HomePage_PracticeProfile_Xaxis_LeftDropDown_ActivePatients(){
        add_BM_homepage_element.Get_POGO_BM_Homepage_PracticeProfile_Xaxis_LeftDropdown().click();
        cy.get('span > div > .cpu-container > .cpu-option-container:nth-child(5) > input').click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_GetQuadrant_Apply().click();
        var genArr = Array.from({length:1},(v,k)=>k+1)
        cy.wrap(genArr).each((index) => {
        for(let i = 2; i <= 8; i++){
        add_BM_homepage_element.Get_POGO_BM_Homepage_PracticeProfile_Xaxis_RightDropdown().click();
        cy.get("span > div > .cpu-container > .cpu-option-container:nth-child("+i+") > input").click();
         add_BM_homepage_element.Get_POGO_BM_Homepage_GetQuadrant_Apply().click();
        cy.wait(2000);
        cy.get('#root > div > div.container-fluid.content.appDiv > div > div.quadrant-chart-summary-card-container > div.qc-container > div.profile-quadrant-chart-container > div > div > svg > g:nth-child(5) > path').should('not.contain', '$');
        cy.get('#chart-axis-7-axisLabel-0 > tspan').contains('Active Patients'); 
            }
        })
    }

    BM_HomePage_PracticeProfile_Yaxis_LeftDropDown_NetProduction(){
        add_BM_homepage_element.Get_POGO_BM_Homepage_PracticeProfile_Yaxis_LeftDropdown().click();
        cy.get('span > div > .cpu-container > .cpu-option-container:nth-child(1) > input').click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_GetQuadrant_Apply().click();
        var genArr = Array.from({length:1},(v,k)=>k+1)
        cy.wrap(genArr).each((index) => {
        for(let i = 2; i <=11; i++){
        add_BM_homepage_element.Get_POGO_BM_Homepage_PracticeProfile_Yaxis_RightDropdown().click();
        cy.get("span > div > .cpu-container > .cpu-option-container:nth-child("+i+") > input").click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_GetQuadrant_Apply().click();
        cy.wait(2000);
        cy.get('#chart-axis-8-tickLabels-0 > tspan').contains('$');
        cy.get('#chart-axis-8-axisLabel-0 > tspan').contains('Net Production'); 
            }
        })
    }

    BM_HomePage_PracticeProfile_Yaxis_LeftDropDown_NetCollections(){
        add_BM_homepage_element.Get_POGO_BM_Homepage_PracticeProfile_Yaxis_LeftDropdown().click();
        cy.get('span > div > .cpu-container > .cpu-option-container:nth-child(2) > input').click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_GetQuadrant_Apply().click();
        var genArr = Array.from({length:1},(v,k)=>k+1)
        cy.wrap(genArr).each((index) => {
        for(let i = 2; i <= 11; i++){
        add_BM_homepage_element.Get_POGO_BM_Homepage_PracticeProfile_Yaxis_RightDropdown().click();
        cy.get("span > div > .cpu-container > .cpu-option-container:nth-child("+i+") > input").click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_GetQuadrant_Apply().click();
        cy.wait(2000);
        cy.get('#chart-axis-8-tickLabels-0 > tspan').contains('$');
        cy.get('#chart-axis-8-axisLabel-0 > tspan').contains('Net Collections'); 
            }
        })
    }

    BM_HomePage_PracticeProfile_Yaxis_LeftDropDown_PatientVisits(){
        add_BM_homepage_element.Get_POGO_BM_Homepage_PracticeProfile_Yaxis_LeftDropdown().click();
        cy.get('span > div > .cpu-container > .cpu-option-container:nth-child(3) > input').click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_GetQuadrant_Apply().click();
        var genArr = Array.from({length:1},(v,k)=>k+1)
        cy.wrap(genArr).each((index) => {
        for(let i = 2; i <= 7; i++){
        add_BM_homepage_element.Get_POGO_BM_Homepage_PracticeProfile_Yaxis_RightDropdown().click();
        cy.get("span > div > .cpu-container > .cpu-option-container:nth-child("+i+") > input").click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_GetQuadrant_Apply().click();
        cy.wait(2000);
        cy.get('#root > div > div.container-fluid.content.appDiv > div > div.quadrant-chart-summary-card-container > div.qc-container > div.profile-quadrant-chart-container > div > div > svg > g:nth-child(6) > path').should('not.contain', '$');
        cy.get('#chart-axis-8-axisLabel-0 > tspan').contains('Patient Visits'); 
            }
        })
    }

    BM_HomePage_PracticeProfile_Yaxis_LeftDropDown_ProceduresPerformed(){
        add_BM_homepage_element.Get_POGO_BM_Homepage_PracticeProfile_Yaxis_LeftDropdown().click();
        cy.get('span > div > .cpu-container > .cpu-option-container:nth-child(4) > input').click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_GetQuadrant_Apply().click();
        var genArr = Array.from({length:1},(v,k)=>k+1)
        cy.wrap(genArr).each((index) => {
        for(let i = 2; i <= 8; i++){
        add_BM_homepage_element.Get_POGO_BM_Homepage_PracticeProfile_Yaxis_RightDropdown().click();
        cy.get("span > div > .cpu-container > .cpu-option-container:nth-child("+i+") > input").click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_GetQuadrant_Apply().click();
        cy.wait(2000);
        cy.get('#root > div > div.container-fluid.content.appDiv > div > div.quadrant-chart-summary-card-container > div.qc-container > div.profile-quadrant-chart-container > div > div > svg > g:nth-child(6) > path').should('not.contain', '$');
        cy.get('#chart-axis-8-axisLabel-0 > tspan').contains('Procedures Performed'); 
            }
        })
    }

    BM_HomePage_PracticeProfile_Yaxis_LeftDropDown_UniquePatientsSeen(){
        add_BM_homepage_element.Get_POGO_BM_Homepage_PracticeProfile_Yaxis_LeftDropdown().click();
        cy.get('span > div > .cpu-container > .cpu-option-container:nth-child(5) > input').click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_GetQuadrant_Apply().click();
        var genArr = Array.from({length:1},(v,k)=>k+1)
        cy.wrap(genArr).each((index) => {
        for(let i = 2; i <= 11; i++){
        add_BM_homepage_element.Get_POGO_BM_Homepage_PracticeProfile_Yaxis_RightDropdown().click();
        cy.get("span > div > .cpu-container > .cpu-option-container:nth-child("+i+") > input").click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_GetQuadrant_Apply().click();
        cy.wait(2000);
        cy.get('#root > div > div.container-fluid.content.appDiv > div > div.quadrant-chart-summary-card-container > div.qc-container > div.profile-quadrant-chart-container > div > div > svg > g:nth-child(6) > path').should('not.contain', '$');
        cy.get('#chart-axis-8-axisLabel-0 > tspan').contains('Unique Patients Seen'); 
            }
        })
    }

    BM_HomePage_PracticeProfile_Yaxis_LeftDropDown_Providers(){
        add_BM_homepage_element.Get_POGO_BM_Homepage_PracticeProfile_Yaxis_LeftDropdown().click();
        cy.get('span > div > .cpu-container > .cpu-option-container:nth-child(6) > input').click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_GetQuadrant_Apply().click();
        var genArr = Array.from({length:1},(v,k)=>k+1)
        cy.wrap(genArr).each((index) => {
        for(let i = 2; i <= 4; i++){
        add_BM_homepage_element.Get_POGO_BM_Homepage_PracticeProfile_Yaxis_RightDropdown().click();
        cy.get("span > div > .cpu-container > .cpu-option-container:nth-child("+i+") > input").click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_GetQuadrant_Apply().click();
        cy.wait(2000);
        cy.get('#root > div > div.container-fluid.content.appDiv > div > div.quadrant-chart-summary-card-container > div.qc-container > div.profile-quadrant-chart-container > div > div > svg > g:nth-child(6) > path').should('not.contain', '$');
        cy.get('#chart-axis-8-axisLabel-0 > tspan').contains('Providers'); 
            }
        })
    }

    /* HomePage > Provider Productivity Test Cases */
    BM_HomePage_ProviderProductivity_DropDown_NetProduction(){
        add_BM_homepage_element.Get_POGO_BM_Homepage_ProviderProductivity_Dropdown().select('Net Production');
        cy.wait(500);
        cy.get('#chart-axis-3-tickLabels-0 > tspan').contains('$')
        cy.get('#chart-axis-3-axisLabel-0 > tspan').should('have.text', 'Net Production');
    }

    BM_HomePage_ProviderProductivity_DropDown_NetCollection(){
        add_BM_homepage_element.Get_POGO_BM_Homepage_ProviderProductivity_Dropdown().select('Net Collection');
        cy.wait(1000);
        cy.get('#chart-axis-3-tickLabels-0 > tspan').contains('$')
        cy.get('#chart-axis-3-axisLabel-0 > tspan').should('have.text', 'Net Collection');
    }

    BM_HomePage_ProviderProductivity_DropDown_PatientVisits(){
        add_BM_homepage_element.Get_POGO_BM_Homepage_ProviderProductivity_Dropdown().select('Patient Visits');
        cy.wait(2000);
        cy.get('#chart-axis-3-tickLabels-0 > tspan').should('not.contain', '$')
        cy.get('#chart-axis-3-axisLabel-0 > tspan').should('have.text', 'Patient Visits');
    }

    BM_HomePage_ProviderProductivity_DropDown_ROIAnalysis(){
        add_BM_homepage_element.Get_POGO_BM_Homepage_ProviderProductivity_Dropdown().select('ROI Analysis');
        cy.get('#chart-axis-3-tickLabels-0 > tspan').should('not.contain', '$')
        cy.get('#chart-axis-3-axisLabel-0 > tspan').should('have.text', 'ROI');
    }

    /* HomePage > Insurance Analysis Test Cases */ 
    BM_HomePage_InsuranceAnalysis_LeftDropdown_ClaimStatusSubmitted(){
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Xaxis().contains('Claims Submitted');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_daysoutstanding0to30().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply().click();
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Xaxis().contains('Claims Submitted');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_daysoutstanding30to60().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply().click();
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Xaxis().contains('Claims Submitted');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_daysoutstanding60to90().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply().click();
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Xaxis().contains('Claims Submitted');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_daysoutstanding90().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply().click();
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Xaxis().contains('Claims Submitted');
    }

    BM_HomePage_InsuranceAnalysis_LeftDropdown_Unsubmitted(){
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown().click();
        cy.get('.fade:nth-child(10) > .modal-dialog > .modal-content > div > .popup-radio-buttons > div > #unsubmitted').click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_TotalOutstanding().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply().click();
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Xaxis().contains('Claims Unsubmitted');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_daysoutstanding0to30().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply().click();
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Xaxis().contains('Claims Unsubmitted');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_daysoutstanding30to60().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply().click();
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Xaxis().contains('Claims Unsubmitted');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_daysoutstanding60to90().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply().click();
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Xaxis().contains('Claims Unsubmitted');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_daysoutstanding90().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply().click();
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Xaxis().contains('Claims Unsubmitted');
    }

    BM_HomePage_InsuranceAnalysis_LeftDropdown_Rejected(){
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown().click();
        cy.get('.fade:nth-child(10) > .modal-dialog > .modal-content > div > .popup-radio-buttons > div > #rejected').click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_TotalOutstanding().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply().click();
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Xaxis().contains('Claims Rejected');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_daysoutstanding0to30().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply().click();
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        cy.get('#provider-productivity-page > div.no-gutters.row > div.col-xxl-8.pr-lg-2.mb-3.col-xl-9 > div > div.borderRadius > div').contains('Did not receive data.');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_daysoutstanding30to60().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply().click();
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Xaxis().contains('Claims Rejected');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_daysoutstanding60to90().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply().click();
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Xaxis().contains('Claims Rejected');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_daysoutstanding90().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply().click();
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Xaxis().contains('Claims Rejected');
    }

    BM_HomePage_InsuranceAnalysis_LeftDropdown_paidfull(){
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown().click();
        cy.get('.fade:nth-child(10) > .modal-dialog > .modal-content > div > .popup-radio-buttons > div > #paid\\(full\\)').click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_TotalOutstanding().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply().click();
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Xaxis().contains('Claims Paid (Full)');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_daysoutstanding0to30().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply().click();
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Xaxis().contains('Claims Paid (Full)');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_daysoutstanding30to60().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply().click();
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Xaxis().contains('Claims Paid (Full)');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_daysoutstanding60to90().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply().click();
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Xaxis().contains('Claims Paid (Full)');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_daysoutstanding90().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply().click();
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Xaxis().contains('Claims Paid (Full)');
    }

    BM_HomePage_InsuranceAnalysis_LeftDropdown_paidpartial(){
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown().click();
        cy.get('.fade:nth-child(10) > .modal-dialog > .modal-content > div > .popup-radio-buttons > div > #paid\\(partial\\)').click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_TotalOutstanding().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply().click();
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Xaxis().contains('Claims Paid (Partial)');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_daysoutstanding0to30().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply().click();
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        cy.get('#provider-productivity-page > div.no-gutters.row > div.col-xxl-8.pr-lg-2.mb-3.col-xl-9 > div > div.borderRadius > div').contains('Did not receive data.');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_daysoutstanding30to60().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply().click();
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Xaxis().contains('Claims Paid (Partial)');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_daysoutstanding60to90().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply().click();
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Xaxis().contains('Claims Paid (Partial)');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_daysoutstanding90().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply().click();
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Xaxis().contains('Claims Paid (Partial)');
    }

    BM_HomePage_InsuranceAnalysis_LeftDropdown_Other(){
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown().click();
        cy.get('.fade:nth-child(10) > .modal-dialog > .modal-content > div > .popup-radio-buttons > div > #other').click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_TotalOutstanding().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply().click();
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Xaxis().contains('Claims Other (Eg-inprocess, error)');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_daysoutstanding0to30().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply().click();
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Xaxis().contains('Claims Other (Eg-inprocess, error)');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_daysoutstanding30to60().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply().click();
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Xaxis().contains('Claims Other (Eg-inprocess, error)');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_daysoutstanding60to90().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply().click();
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Xaxis().contains('Claims Other (Eg-inprocess, error)');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_daysoutstanding90().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply().click();
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Xaxis().contains('Claims Other (Eg-inprocess, error)');
    }

    BM_HomePage_InsuranceAnalysis_RightDropdown_ClaimStatusSubmitted(){
        cy.wait(2000);
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_RightDropdown().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_daysoutstanding0to30().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply().click();
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        cy.get('div:nth-child(2) > .VictoryContainer > svg > g > #chart-axis-8-axisLabel-0 > tspan').contains('Days outstanding (0-30)');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_RightDropdown().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_daysoutstanding30to60().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply().click();
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        cy.get('div:nth-child(2) > .VictoryContainer > svg > g > #chart-axis-8-axisLabel-0 > tspan').contains('Days outstanding (31-60)');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_RightDropdown().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_daysoutstanding60to90().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply().click();
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        cy.get('div:nth-child(2) > .VictoryContainer > svg > g > #chart-axis-8-axisLabel-0 > tspan').contains('Days outstanding (61-90)');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_RightDropdown().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_daysoutstanding90().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply().click();
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        cy.get('div:nth-child(2) > .VictoryContainer > svg > g > #chart-axis-8-axisLabel-0 > tspan').contains('Days outstanding (91+)');
    }

    BM_HomePage_InsuranceAnalysis_RightDropdown_ClaimUnsubmitted(){
        cy.wait(2000);
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_RightDropdown().click();
        cy.get('.fade:nth-child(10) > .modal-dialog > .modal-content > div > .popup-radio-buttons > div > #unsubmitted').click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_TotalOutstanding().click();
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_RightDropdown().click();
        cy.get('div:nth-child(2) > .VictoryContainer > svg > g > #chart-axis-8-axisLabel-0 > tspan').contains('Total outstanding');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_daysoutstanding0to30().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply().click();
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        cy.get('div:nth-child(2) > .VictoryContainer > svg > g > #chart-axis-8-axisLabel-0 > tspan').contains('Days outstanding (0-30)');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_RightDropdown().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_daysoutstanding30to60().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply().click();
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        cy.get('div:nth-child(2) > .VictoryContainer > svg > g > #chart-axis-8-axisLabel-0 > tspan').contains('Days outstanding (31-60)');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_RightDropdown().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_daysoutstanding60to90().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply().click();
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        cy.get('div:nth-child(2) > .VictoryContainer > svg > g > #chart-axis-8-axisLabel-0 > tspan').contains('Days outstanding (61-90)');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_RightDropdown().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_daysoutstanding90().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply().click();
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        cy.get('div:nth-child(2) > .VictoryContainer > svg > g > #chart-axis-8-axisLabel-0 > tspan').contains('Days outstanding (91+)');
    }

    BM_HomePage_InsuranceAnalysis_RightDropdown_ClaimRejected(){
        cy.wait(2000);
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_RightDropdown().click();
        cy.get('.fade:nth-child(10) > .modal-dialog > .modal-content > div > .popup-radio-buttons > div > #rejected').click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_TotalOutstanding().click();
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_RightDropdown().click();
        cy.get('div:nth-child(2) > .VictoryContainer > svg > g > #chart-axis-8-axisLabel-0 > tspan').contains('Total outstanding');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_daysoutstanding0to30().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply().click();
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        cy.get('#provider-productivity-page > div.no-gutters.row > div.col-xxl-8.pr-lg-2.mb-3.col-xl-9 > div > div.borderRadius > div').contains('Did not receive data.');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_RightDropdown().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_daysoutstanding30to60().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply().click();
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        cy.get('div:nth-child(2) > .VictoryContainer > svg > g > #chart-axis-8-axisLabel-0 > tspan').contains('Days outstanding (31-60)');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_RightDropdown().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_daysoutstanding60to90().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply().click();
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        cy.get('div:nth-child(2) > .VictoryContainer > svg > g > #chart-axis-8-axisLabel-0 > tspan').contains('Days outstanding (61-90)');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_RightDropdown().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_daysoutstanding90().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply().click();
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        cy.get('div:nth-child(2) > .VictoryContainer > svg > g > #chart-axis-8-axisLabel-0 > tspan').contains('Days outstanding (91+)');
    }

    BM_HomePage_InsuranceAnalysis_RightDropdown_Claimpaidfull(){
        cy.wait(2000);
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_RightDropdown().click();
        cy.get('.fade:nth-child(10) > .modal-dialog > .modal-content > div > .popup-radio-buttons > div > #paid\\(full\\)').click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_TotalOutstanding().click();
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_RightDropdown().click();
        cy.get('div:nth-child(2) > .VictoryContainer > svg > g > #chart-axis-8-axisLabel-0 > tspan').contains('Total outstanding');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_daysoutstanding0to30().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply().click();
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        cy.get('div:nth-child(2) > .VictoryContainer > svg > g > #chart-axis-8-axisLabel-0 > tspan').contains('Days outstanding (0-30)');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_RightDropdown().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_daysoutstanding30to60().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply().click();
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        cy.get('div:nth-child(2) > .VictoryContainer > svg > g > #chart-axis-8-axisLabel-0 > tspan').contains('Days outstanding (31-60)');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_RightDropdown().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_daysoutstanding60to90().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply().click();
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        cy.get('div:nth-child(2) > .VictoryContainer > svg > g > #chart-axis-8-axisLabel-0 > tspan').contains('Days outstanding (61-90)');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_RightDropdown().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_daysoutstanding90().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply().click();
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        cy.get('div:nth-child(2) > .VictoryContainer > svg > g > #chart-axis-8-axisLabel-0 > tspan').contains('Days outstanding (91+)');
    }

    BM_HomePage_InsuranceAnalysis_RightDropdown_ClaimpaidPartial(){
        cy.wait(2000);
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_RightDropdown().click();
        cy.get('.fade:nth-child(10) > .modal-dialog > .modal-content > div > .popup-radio-buttons > div > #paid\\(partial\\)').click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_TotalOutstanding().click();
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_RightDropdown().click();
        cy.get('div:nth-child(2) > .VictoryContainer > svg > g > #chart-axis-8-axisLabel-0 > tspan').contains('Total outstanding');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_daysoutstanding0to30().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply().click();
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        cy.get('#provider-productivity-page > div.no-gutters.row > div.col-xxl-8.pr-lg-2.mb-3.col-xl-9 > div > div.borderRadius > div').contains('Did not receive data.');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_RightDropdown().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_daysoutstanding30to60().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply().click();
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        cy.get('div:nth-child(2) > .VictoryContainer > svg > g > #chart-axis-8-axisLabel-0 > tspan').contains('Days outstanding (31-60)');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_RightDropdown().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_daysoutstanding60to90().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply().click();
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        cy.get('div:nth-child(2) > .VictoryContainer > svg > g > #chart-axis-8-axisLabel-0 > tspan').contains('Days outstanding (61-90)');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_RightDropdown().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_daysoutstanding90().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply().click();
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        cy.get('div:nth-child(2) > .VictoryContainer > svg > g > #chart-axis-8-axisLabel-0 > tspan').contains('Days outstanding (91+)');
    }

    BM_HomePage_InsuranceAnalysis_RightDropdown_Other(){
        cy.wait(2000);
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_RightDropdown().click();
        cy.get('.fade:nth-child(10) > .modal-dialog > .modal-content > div > .popup-radio-buttons > div > #other').click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_TotalOutstanding().click();
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_RightDropdown().click();
        cy.get('div:nth-child(2) > .VictoryContainer > svg > g > #chart-axis-8-axisLabel-0 > tspan').contains('Total outstanding');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_daysoutstanding0to30().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply().click();
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        cy.get('div:nth-child(2) > .VictoryContainer > svg > g > #chart-axis-8-axisLabel-0 > tspan').contains('Days outstanding (0-30)');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_RightDropdown().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_daysoutstanding30to60().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply().click();
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        cy.get('div:nth-child(2) > .VictoryContainer > svg > g > #chart-axis-8-axisLabel-0 > tspan').contains('Days outstanding (31-60)');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_RightDropdown().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_daysoutstanding60to90().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply().click();
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        cy.get('div:nth-child(2) > .VictoryContainer > svg > g > #chart-axis-8-axisLabel-0 > tspan').contains('Days outstanding (61-90)');
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_RightDropdown().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_LeftDropdown_daysoutstanding90().click();
        add_BM_homepage_element.Get_POGO_BM_Homepage_InsuranceAnalysis_Claims_Apply().click();
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$');
        cy.get('div:nth-child(2) > .VictoryContainer > svg > g > #chart-axis-8-axisLabel-0 > tspan').contains('Days outstanding (91+)');
    }

    /* HomePage > QuickStat Test Cases */
    BM_HomePage_QuickStat_NetProduction_LeftDropdown_Total(){
        add_BM_homepage_element.Get_POGO_BM_Homepage_QuickStat_NetProduction_LeftDropdown().select('Total');
        cy.get('#chart-axis-0-tickLabels-0 > tspan').contains('$')
        cy.get('#chart-legend-7-labels-0 > tspan').contains('Total');
    }
    
}