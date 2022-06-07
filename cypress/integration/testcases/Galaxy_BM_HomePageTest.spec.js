/// <reference types="cypress" />

import BM_LoginPageActions from '../../pageobjects/pageactions/BM_LoginPageActions';
import BM_HomePage_PageActions from '../../pageobjects/pageactions/BM_HomePage_PageActions';

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

describe("Home Tab Practice Profile Test Cases",()=>{

    const BM_HomePage = new BM_HomePage_PageActions();

    it("Select a Group ALL",()=>{
        BM_HomePage.BM_HomePage_SelectGroup();
    })   
    
    it("Select a TimeRange of 12 month",()=>{
        BM_HomePage.BM_SelectTimeRange();
    })   
    
    it('To check all headings available on HomePage', () => 
    {
    BM_HomePage.BM_HomePage_VerifyContent();
    })

    it('Check all contains available on Practice Profile', () => 
    {
        BM_HomePage.BM_HomePage_PracticeProfile_VerifyContent();
    })
   
    it("Select Net Production from left side drop down of Xaxis and select all filters of right side and  Check $ sign is avileble at x axis",()=>{
        BM_HomePage.BM_HomePage_PracticeProfile_Xaxis_LeftDropDown_NetProduction();
    })   
   
    it("Select Patient Visits from left side drop down of Xaxis and select all filters of right side and  Check $ sign is avileble at x axis",()=>{
        BM_HomePage.BM_HomePage_PracticeProfile_Xaxis_LeftDropDown_PatientVisits();
    })  
    
    it("Select Procedures Performed from left side drop down of Xaxis and select all filters of right side and  Check $ sign is avileble at x axis",()=>{
        BM_HomePage.BM_HomePage_PracticeProfile_Xaxis_LeftDropDown_ProceduresPerformed();
    }) 
    
    it("Select Unique Patients Seen from left side drop down of Xaxis and select all filters of right side and  Check $ sign is avileble at x axis",()=>{
        BM_HomePage.BM_HomePage_PracticeProfile_Xaxis_LeftDropDown_UniquePatientsSeen();
    }) 
    
    it("Select Providers from left side drop down of Xaxis and select all filters of right side and  Check $ sign is avileble at x axis",()=>{
        BM_HomePage.BM_HomePage_PracticeProfile_Xaxis_LeftDropDown_Providers();
    }) 
 
    it("Select Active Patients from left side drop down of Xaxis and and select all filters of right side and Check $ sign is avileble at x axis",()=>{
        BM_HomePage.BM_HomePage_PracticeProfile_Xaxis_LeftDropDown_ActivePatients();
    }) 

    it("Select Net Production from left side drop down of Yaxis and Check $ sign is avileble at Y axis",()=>{
        BM_HomePage.BM_HomePage_PracticeProfile_Yaxis_LeftDropDown_NetProduction();
    }) 

    it("Select Net Collections from left side drop down of Yaxis and Check $ sign is avileble at Y axis",()=>{
        BM_HomePage.BM_HomePage_PracticeProfile_Yaxis_LeftDropDown_NetCollections();
    }) 

    it("Select Patient Visits from left side drop down of Yaxis and Check $ sign is avileble at Y axis",()=>{
        BM_HomePage.BM_HomePage_PracticeProfile_Yaxis_LeftDropDown_PatientVisits();
    }) 

    it("Select Procedures Performed from left side drop down of Yaxis and Check $ sign is avileble at Y axis",()=>{
        BM_HomePage.BM_HomePage_PracticeProfile_Yaxis_LeftDropDown_ProceduresPerformed();
    }) 

    it("Select Unique Patients Seen from left side drop down of Yaxis and Check $ sign is avileble at Y axis",()=>{
        BM_HomePage.BM_HomePage_PracticeProfile_Yaxis_LeftDropDown_UniquePatientsSeen();
    }) 

    it("Select Providers from left side drop down of Yaxis and Check $ sign is avileble at Y axis",()=>{
        BM_HomePage.BM_HomePage_PracticeProfile_Yaxis_LeftDropDown_Providers();
    }) 
})

describe("Home Tab Provider Productivity Test Cases",()=>{

    const BM_HomePage = new BM_HomePage_PageActions();

    it("Select Net Production from drop down and Check $ sign is avileble at x axis",()=>{
        BM_HomePage.BM_HomePage_ProviderProductivity_DropDown_NetProduction();
    })  
    
    it("Select Net Collection from drop down and Check $ sign is avileble at x axis",()=>{
        BM_HomePage.BM_HomePage_ProviderProductivity_DropDown_NetCollection();
    })  

    it("Select Patient Visits from drop down and Check $ sign is not avileble at x axis",()=>{
        BM_HomePage.BM_HomePage_ProviderProductivity_DropDown_PatientVisits();
    })  

    it("Select ROI Analysis from drop down and Check $ sign is not avileble at x axis",()=>{
        BM_HomePage.BM_HomePage_ProviderProductivity_DropDown_ROIAnalysis();
    }) 
     
})

describe("Home Tab Insurance Analysis- Claim Tab Test Cases",()=>{

    const BM_HomePage = new BM_HomePage_PageActions();
    
    it("Select Claims Submitted from left drop down",()=>{
        BM_HomePage.BM_HomePage_InsuranceAnalysis_LeftDropdown_ClaimStatusSubmitted();
    })  

    it("Select Claims Unsubmitted from left drop down",()=>{
        BM_HomePage.BM_HomePage_InsuranceAnalysis_LeftDropdown_Unsubmitted();
    })  

    it("Select Claims Rejected from left drop down",()=>{
        BM_HomePage.BM_HomePage_InsuranceAnalysis_LeftDropdown_Rejected();
    })  
    
    it("Select Claims Paid Full from left drop down",()=>{
        BM_HomePage.BM_HomePage_InsuranceAnalysis_LeftDropdown_paidfull();
    })   

    it("Select Claims Paid Partial from left drop down",()=>{
        BM_HomePage.BM_HomePage_InsuranceAnalysis_LeftDropdown_paidpartial();
    }) 

    it("Select Claims Paid Partial from left drop down",()=>{
        BM_HomePage.BM_HomePage_InsuranceAnalysis_LeftDropdown_Other();
    }) 
 
    it("Select Claims Submitted from Right drop down",()=>{
        BM_HomePage.BM_HomePage_InsuranceAnalysis_RightDropdown_ClaimStatusSubmitted();
    })  
    
    it("Select Claims UnSubmitted from Right drop down",()=>{
        BM_HomePage.BM_HomePage_InsuranceAnalysis_RightDropdown_ClaimUnsubmitted();
    })  
    
    it("Select Claim Rejected from Right drop down",()=>{
        BM_HomePage.BM_HomePage_InsuranceAnalysis_RightDropdown_ClaimRejected();
    })  

    it("Select Claim Paid Full from Right drop down",()=>{
        BM_HomePage.BM_HomePage_InsuranceAnalysis_RightDropdown_Claimpaidfull();
    })  

    it("Select Claim Paid Partial from Right drop down",()=>{
        BM_HomePage.BM_HomePage_InsuranceAnalysis_RightDropdown_ClaimpaidPartial();
    }) 
    
    it("Select Claim Paid Other from Right drop down",()=>{
        BM_HomePage.BM_HomePage_InsuranceAnalysis_RightDropdown_Other();
    }) 

})

describe("Home Tab Quick Stats-Net Production  Test Cases",()=>{

    const BM_HomePage = new BM_HomePage_PageActions();

    it("Select Total from drop down",()=>{
        BM_HomePage.BM_HomePage_QuickStat_NetProduction_LeftDropdown_Total();
    })  
    
   
})