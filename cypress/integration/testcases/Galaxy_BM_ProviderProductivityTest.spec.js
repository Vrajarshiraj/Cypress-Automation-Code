/// <reference types="cypress" />

import BM_LoginPageActions from '../../pageobjects/pageactions/BM_LoginPageActions';
import BM_ProviderProductivity_PageActions from '../../pageobjects/pageactions/BM_ProviderProductivity_PageActions';

describe("Business Manager Login to Galaxy",()=>{

    const BM_loginPage = new BM_LoginPageActions();
    
    before(()=>{
        cy.fixture('testdata').then((data)=>{
        globalThis.data = data;
        })
    })

    beforeEach(()=>{
        BM_loginPage.navigateToURL();
    })


    it("Add Business Manager username and password and click on login buttton",()=>{ 
        BM_loginPage.BM_Login_to_POGO(data.Sales_Demo_BM_Login, data.Sales_Demo_BM_Password);
    })
})

describe("Provider Productivity Net Production Test Cases",()=>{

    const BM_ProviderProductivity = new BM_ProviderProductivity_PageActions();

    it("Click on Provider Productivity from the Menu and check if page loading or not",()=>{
        BM_ProviderProductivity.BM_Login_Clickto_ProviderProductivity();
    })

    it("Select a Group ALL",()=>{
        BM_ProviderProductivity.BM_ProviderProductivity_SelectGroup();
    })   

    it("Select a TimeRange of 12 month",()=>{
        BM_ProviderProductivity.BM_SelectTimeRange();
    })   

    it("Verify Content Provider Productivity module Net Production tab",()=>{
        BM_ProviderProductivity.BM_ProviderProductivity_NetProduction_VerifyContent();
    }) 

    it("Verify Net Production Check box should select upto 7 only",()=>{
        BM_ProviderProductivity.BM_ProviderProductivity_Trends();
    })  
    
    it("Verify Selected Trend should be visible",()=>{
        BM_ProviderProductivity.BM_ProviderProductivity_NetProductionTrends_Visible();
    }) 

    it("Clear Selected trend of Net Production",()=>{
        BM_ProviderProductivity.BM_ProviderProductivity_ClearSelectedTrends();
    }) 

    it("Verify Net Producion Table's Provider Column",()=>{
        BM_ProviderProductivity.BM_ProviderProductivity_NetProduction_Table_ProviderColumn();
    }) 

    it("Verify Net Producion Table's Role Column",()=>{
        BM_ProviderProductivity.BM_ProviderProductivity_NetProduction_Table_RoleColumn();
    }) 

    it("Verify Net Producion Table's Production Column ",()=>{
        BM_ProviderProductivity.BM_ProviderProductivity_NetProduction_Table_ProductionColumn();
    }) 

    it("Verify Net Producion Table's Production Adjustments Column",()=>{
        BM_ProviderProductivity.BM_ProviderProductivity_NetProduction_Table_ProductionAdjustmentsColumn();
    }) 

    it("Verify Net Producion Table's Net Production Column",()=>{
        BM_ProviderProductivity.BM_ProviderProductivity_NetProduction_Table_NetProductionColumn();
    }) 

    it("Select Net Production Dentist Btn and Verify Content",()=>{
        BM_ProviderProductivity.BM_ProviderProductivity_NetProduction_ClickDentistBtn();
        BM_ProviderProductivity.BM_ProviderProductivity_NetProduction_VerifyContent();
    }) 

    it("Select Net Production Hygienist Btn and Verify Content",()=>{
        BM_ProviderProductivity.BM_ProviderProductivity_NetProduction_ClickHygienistBtn();
        BM_ProviderProductivity.BM_ProviderProductivity_NetProduction_VerifyContent();
    }) 

})

describe("Provider Productivity Net Collection Test Cases",()=>{

    const BM_ProviderProductivity = new BM_ProviderProductivity_PageActions();

    it("Verify Content Provider Productivity module Net Collection tab",()=>{
        BM_ProviderProductivity. BM_ProviderProductivity_NetCollection_VerifyContent();
    })
   
    it("Verify Net Collection Check box should select upto 7 only",()=>{
        BM_ProviderProductivity.BM_ProviderProductivity_Trends();
    })  
        
    it("Verify Selected Trend should be visible",()=>{
        BM_ProviderProductivity.BM_ProviderProductivity_NetCollectionTrends_Visible();
    }) 

    it("Clear Selected trend of Net Collection",()=>{
        BM_ProviderProductivity.BM_ProviderProductivity_ClearSelectedTrends();
    }) 

    it("Verify Net Collection Table's Provider Column",()=>{
        BM_ProviderProductivity.BM_ProviderProductivity_NetProduction_Table_ProviderColumn();
    }) 

    it("Verify Net Collection  Table's Role Column",()=>{
        BM_ProviderProductivity.BM_ProviderProductivity_NetProduction_Table_RoleColumn();
    }) 
    
    it("Verify Net Collection Table's Collections Column ",()=>{
        BM_ProviderProductivity.BM_ProviderProductivity_NetCollection_Table_CollectionsColumn();
    }) 

    it("Verify Net Collection Table's CollectionsperHour Column ",()=>{
        BM_ProviderProductivity.BM_ProviderProductivity_NetCollection_Table_CollectionsperHourColumn();
    }) 

    it("Verify Net Collection Table's Collection Adjustments Column ",()=>{
        BM_ProviderProductivity.BM_ProviderProductivity_NetCollection_Table_CollectionAdjustmentsColumn();
    }) 

    it("Verify Net Collection Table's Net Collection Column ",()=>{
        BM_ProviderProductivity.BM_ProviderProductivity_NetCollection_Table_NetCollectionColumn();
    }) 

    it("Select Net Production Dentist Btn and Verify Content",()=>{
        BM_ProviderProductivity.BM_ProviderProductivity_NetProduction_ClickDentistBtn();
        BM_ProviderProductivity.BM_ProviderProductivity_NetCollection_VerifyContent();
    }) 

    it("Select Net Production Hygienist Btn and Verify Content",()=>{
        BM_ProviderProductivity.BM_ProviderProductivity_NetProduction_ClickHygienistBtn();
        BM_ProviderProductivity.BM_ProviderProductivity_NetCollection_VerifyContent();
    })  

})

describe("Provider Productivity Patient Visits Test Cases",()=>{

    const BM_ProviderProductivity = new BM_ProviderProductivity_PageActions();

    it("Verify Content Provider Productivity module Patient Visits tab",()=>{
        BM_ProviderProductivity. BM_ProviderProductivity_PatientVisits_VerifyContent();
    })
  
    it("Verify Patient Visits Check box should select upto 7 only",()=>{
        BM_ProviderProductivity.BM_ProviderProductivity_Trends();
    })  
    
    it("Verify Patient Visits Selected Trend should be visible",()=>{
        BM_ProviderProductivity.BM_ProviderProductivity_PatientVisistTrends_Visible();
    }) 
  
    it("Clear Selected trend of Patient Visits",()=>{
        BM_ProviderProductivity.BM_ProviderProductivity_ClearSelectedTrends();
    }) 

    it("Verify Patient Visits Table's Provider Column",()=>{
        BM_ProviderProductivity.BM_ProviderProductivity_NetProduction_Table_ProviderColumn();
    }) 

    it("Verify Patient Visits Table's Patient Visits Column",()=>{
        BM_ProviderProductivity.BM_ProviderProductivity_PatientVisits_Table_patientVisitsColumn();
    }) 

    it("Verify Patient Visits Table's patient Visits per hour Column",()=>{
        BM_ProviderProductivity.BM_ProviderProductivity_PatientVisits_Table_patientVisitsperhourColumn();
    }) 

    it("Verify Patient Visits Table Procedures  Performed Column",()=>{
        BM_ProviderProductivity.BM_ProviderProductivity_PatientVisits_Table_proceduresperformedColumn();
    }) 

    it("Verify Patient Visits Table Procedures Performed per hour Column",()=>{
        BM_ProviderProductivity.BM_ProviderProductivity_PatientVisits_Table_proceduresperformedperhourColumn();
    }) 
   
    it("Select Net Production Dentist Btn and Verify Content",()=>{
        BM_ProviderProductivity.BM_ProviderProductivity_NetProduction_ClickDentistBtn();
        BM_ProviderProductivity.BM_ProviderProductivity_PatientVisits_VerifyContent();
    }) 

    it("Select Net Production Hygienist Btn and Verify Content",()=>{
        BM_ProviderProductivity.BM_ProviderProductivity_NetProduction_ClickHygienistBtn();
        BM_ProviderProductivity.BM_ProviderProductivity_PatientVisits_VerifyContent();
    })  
})

describe("Provider Productivity Hygienist ROI Test Cases",()=>{

    const BM_ProviderProductivity = new BM_ProviderProductivity_PageActions();

    it("Verify Content Provider Productivity module Hygienist ROI tab",()=>{
        BM_ProviderProductivity.BM_ProviderProductivity_HygienistROI_VerifyContent();
    })
  
    it("Verify Hygienist ROI Check box should select upto 7 only",()=>{
        BM_ProviderProductivity.BM_ProviderProductivity_Trends();
    })  

    
    it("Verify Hygienist ROI Selected Trend should be visible",()=>{
        BM_ProviderProductivity.BM_ProviderProductivity_HygienistROI_Visible();
    }) 
  
    it("Clear Selected trend of Hygienist ROI",()=>{
        BM_ProviderProductivity.BM_ProviderProductivity_ClearSelectedTrends();
    }) 
})
