/// <reference types="cypress" />

import BM_Patient_Analysis_PageElements from '../pageelements/BM_Patient_Analysis_PageElements';

export default class BM_PatientAnalysis_PageActions{


    constructor(){

        globalThis.add_BM_patientanalysis_element = new BM_Patient_Analysis_PageElements();
    }



    BM_Login_Clickto_PatientAnalysis(){

        
        add_BM_patientanalysis_element.Get_POGO_BM_Login_MenuIcon().click();
        add_BM_patientanalysis_element.Get_POGO_BM_Login_Analysis_Tab().click();
      
        cy.contains('Patient Analysis').click();
        
    }


    /*
- Check page of the selected module is loading or not
- Check all content of a page
- Check page is loading for the different date range
- Check for $ Sign of amount values
- Modules available for Bm and FD 
- find out the broken link
    */


}
