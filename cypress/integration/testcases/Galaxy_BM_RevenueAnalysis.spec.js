/// <reference types="cypress" />

import BM_LoginPageActions from '../../pageobjects/pageactions/BM_LoginPageActions';
import BM_Revenue_analysis_PageAction from '../../pageobjects/pageactions/BM_Revenue_analysis_PageAction';

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

describe("Revenue_analysis  Production collection Test Cases",()=>{

    const BM_RevenueAnalysis= new BM_Revenue_analysis_PageAction();

    it("Click on Revenue analysis_ from the Menu and check if page loading or not",()=>{
        BM_RevenueAnalysis.BM_Login_Clickto_RevenueAnalysis();
    })
    it("Select a Group ALL",()=>{
        BM_RevenueAnalysis.BM_RevenueAnalysis_SelectGroup();
    })   
    
    it("Select a TimeRange of 12 month",()=>{
        BM_RevenueAnalysis.BM_SelectTimeRange();
    })   

    it("Verify Content Revenue Analysis module Production collection tab",()=>{
        BM_RevenueAnalysis.BM_RevenueAnalysis_Production_Collection_VerifyContent();
    })
    it("Verify $ sign Revenue Analysis module Production collection tab",()=>{ 
    BM_RevenueAnalysis.BM_RevenueAnalysis_Production_Collection_Verify_$_sign();
    })
    it("Select Production collection Dentist Btn and Verify Content",()=>{
        BM_RevenueAnalysis.BM_RevenueAnalysis_Production_collection_ClickDentistBtn();
        BM_RevenueAnalysis.BM_RevenueAnalysis_Production_Collection_VerifyContent();
    }) 
    it("Select Total Production dentist Btn and Verify Content",()=>{ 
        BM_RevenueAnalysis.BM_RevenueAnalysis_Fee_Optimizer_TotalProduction();
    })
    it("Select Total collection dentist Btn and Verify Content",()=>{ 
        BM_RevenueAnalysis.BM_RevenueAnalysis_Fee_Optimizer_TotalCollection();
    })
    it("Select Net Production dentist Btn and Verify Content",()=>{ 
        BM_RevenueAnalysis.BM_RevenueAnalysis_Fee_Optimizer_NetProduction();
    })
    it("Select Net Collection dentist Btn and Verify Content",()=>{ 
        BM_RevenueAnalysis.BM_RevenueAnalysis_Fee_Optimizer_NetCollection();
    })
    it("Select Net Production Hygienist Btn and Verify Content",()=>{
        BM_RevenueAnalysis.BM_RevenueAnalysis_Production_Collection_ClickHygienistBtn();
       // BM_RevenueAnalysis.BM_RevenueAnalysis_Production_Collection_VerifyContent();
    })
    
    it("Select Total Production Hygienist Btn and Verify Content",()=>{ 
        BM_RevenueAnalysis.BM_RevenueAnalysis_Fee_Optimizer_TotalProduction();
    })
    it("Select Total collection Hygienist Btn and Verify Content",()=>{ 
        BM_RevenueAnalysis.BM_RevenueAnalysis_Fee_Optimizer_TotalCollection();
    })
    it("Select Net Production Hygienist Btn and Verify Content",()=>{ 
        BM_RevenueAnalysis.BM_RevenueAnalysis_Fee_Optimizer_NetProduction();
    })
    it("Select Net Collection Hygienist Btn and Verify Content",()=>{ 
        BM_RevenueAnalysis.BM_RevenueAnalysis_Fee_Optimizer_NetCollection();
    })
   
    
})

describe("Revenue_Analysis fee optimizer Test Cases",()=>{

   const BM_RevenueAnalysis= new BM_Revenue_analysis_PageAction();

   it("Click on  fee optimizer check if page loading or not",()=>{
        BM_RevenueAnalysis.Click_to_Fee_optimizer();
   })
   
    it("Verify Content Revenue Analysis module fee optimizer tab",()=>{
        BM_RevenueAnalysis.BM_RevenueAnalysis_Fee_optimizer_VerifyContent();
    }) 
    it("Verify all sign Revenue Analysis module Fee optimizer tab",()=>{ 
        BM_RevenueAnalysis.BM_RevenueAnalysis_Fee_Optimizer_Verify_all_sign();
        })
    it("Verify  Rank by dropdown Fee optimizer tab",()=>{ 
        BM_RevenueAnalysis.BM_RevenueAnalysis_Fee_Optimizer_Highest_NetProduction_Dropdown();
        BM_RevenueAnalysis.BM_RevenueAnalysis_Fee_Optimizer_Highest_Fee_Dropdown();
            })
    it("Verify Quadrant analysis  current Button Fee optimizer tab",()=>{ 
        BM_RevenueAnalysis.BM_RevenueAnalysis_Fee_Optimizer_Current_Button();
        
                })
    it("Verify Quadrant analysis  Recommended Button Fee optimizer tab",()=>{ 
        BM_RevenueAnalysis.BM_RevenueAnalysis_Fee_Optimizer_Recommended_Button();
    })

    it("Verify  Select Percentile Fee optimizer tab",()=>{ 
        BM_RevenueAnalysis.BM_RevenueAnalysis_Fee_Optimizer_Select_Percentile();
       
        })
})