/// <reference types="cypress" />

import BM_LoginPageActions from '../../pageobjects/pageactions/BM_LoginPageActions';
import BM_GrossProductionByDentalCategory_PageActions from '../../pageobjects/pageactions/BM_GrossProductionByDentalCategory_PageActions';

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


describe("Click on Gross Production By Dental Category menu item from the Analysis tab of Main Menu",()=>{

    it("Click on Gross Production By Dental Category Menu Item",()=>{

        const BM_grossproductionbydentalcategoryPage = new BM_GrossProductionByDentalCategory_PageActions();

        BM_grossproductionbydentalcategoryPage.BM_Login_Clickto_GrossProductionByDentalCategory();
        
    })   
    it('Go to gross production by dental category and verify title of the page', () =>
    {
        const BM_grossproductionbydentalcategoryPage = new BM_GrossProductionByDentalCategory_PageActions();

        BM_grossproductionbydentalcategoryPage.BM_Login_Clickto_GrossProductionByDentalCategory();
    })
    it('Check All element are availeble on Gross Production by dental category Pie chart page', () => 
   {
    const BM_grossproductionbydentalcategoryPage = new BM_GrossProductionByDentalCategory_PageActions();

        BM_grossproductionbydentalcategoryPage.BM_Login_Clickto_PieChart();
    })
    it('Check Date selections on Gross Production by dental category Pie chart page', () => 
    {
     const BM_grossproductionbydentalcategoryPage = new BM_GrossProductionByDentalCategory_PageActions();
 
         BM_grossproductionbydentalcategoryPage.BM_Login_Clickto_PieChart_Date();
     })
     it('Check Group selections on Gross Production by dental category Pie chart page', () => 
     {
      const BM_grossproductionbydentalcategoryPage = new BM_GrossProductionByDentalCategory_PageActions();
  
          BM_grossproductionbydentalcategoryPage.BM_Login_Clickto_PieChart_Group();
      })
    it('Check All element are availeble on Gross Production by dental category Trend chart page', () => 
   {
    const BM_grossproductionbydentalcategoryPage = new BM_GrossProductionByDentalCategory_PageActions();

        BM_grossproductionbydentalcategoryPage.BM_Login_Clickto_TrendChart();
    })
    it('Check checkbox on Gross Production by dental category Trend chart page', () => 
    {
     const BM_grossproductionbydentalcategoryPage = new BM_GrossProductionByDentalCategory_PageActions();
 
         BM_grossproductionbydentalcategoryPage.BM_Login_Clickto_TrendChart_Checkbox();
     })
    it('Check Date on Gross Production by dental category Trend chart page', () => 
    {
     const BM_grossproductionbydentalcategoryPage = new BM_GrossProductionByDentalCategory_PageActions();
 
         BM_grossproductionbydentalcategoryPage.BM_Login_Clickto_TrendChart_Date();
     })
     it('Check Group on Gross Production by dental category Trend chart page', () => 
    {
     const BM_grossproductionbydentalcategoryPage = new BM_GrossProductionByDentalCategory_PageActions();
 
         BM_grossproductionbydentalcategoryPage.BM_Login_Clickto_TrendChart_Group();
     })
    
    
})