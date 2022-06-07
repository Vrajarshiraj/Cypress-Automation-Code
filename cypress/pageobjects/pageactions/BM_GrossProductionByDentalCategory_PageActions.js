/// <reference types="cypress" />

import BM_Gross_Production_By_Dental_Category_PageElements from '../pageelements/BM_Gross_Production_By_Dental_Category_PageElements';

export default class BM_GrossProductionByDentalCategory_PageActions{


    constructor(){

        globalThis.add_BM_grossproductionbydentalcategory_element = new BM_Gross_Production_By_Dental_Category_PageElements();
    }



    BM_Login_Clickto_GrossProductionByDentalCategory(){

        
        add_BM_grossproductionbydentalcategory_element.Get_POGO_BM_Login_MenuIcon().click();
        add_BM_grossproductionbydentalcategory_element.Get_POGO_BM_Login_Analysis_Tab().click();
        
      
        cy.contains('Gross Production By Dental Category').click();
    }
    BM_Login_Clickto_PieChart(){
       

        cy.contains('Pie Chart')
        cy.contains('Trend Line')
        cy.contains('Procedure Category')
        cy.contains('description')
        cy.contains('gross Production')
        cy.contains('procedure Count')
        cy.contains('gross Production Per procedure')
        cy.contains('As a percent of total')
        cy.contains('production')
        cy.contains('production count')
     
        cy.contains('Diagnostic (D0100 - D0999)').click();
        cy.contains('Preventive (D1000 - D1999)').click();
        cy.contains('Endodontics (D3000 - D3999)').click();
        cy.contains('Periodontics (D4000 - D4999)').click();
        cy.contains('Prosthodontics (D5000 - D5899)').click();
        cy.contains('Maxillo (D5900 - D5999)').click();
        cy.contains('Implant Services (D6000 - D6199)').click();
        cy.contains('Prosthodontics, Fixed (D6200 - D6999)').click();
        cy.contains('Oral & Maxillofacial Surgery (D7000 - D7999)').click();
        cy.contains('Orthodontics (D8000 - D8999)').click();
        
        cy.contains('Miscellaneous').click();
    }
    BM_Login_Clickto_PieChart_Date(){
        add_BM_grossproductionbydentalcategory_element.Get_POGO_BM_Login_Date().click();
       
        add_BM_grossproductionbydentalcategory_element.Get_POGO_BM_Login_Date1().click();
        add_BM_grossproductionbydentalcategory_element.Get_POGO_BM_Login_Date2().click();
        add_BM_grossproductionbydentalcategory_element.Get_POGO_BM_Login_Date3().click();
        add_BM_grossproductionbydentalcategory_element.Get_POGO_BM_Login_Date4().click();
      
        cy.contains('APPLY').click();
    }
    BM_Login_Clickto_PieChart_Group(){
        add_BM_grossproductionbydentalcategory_element.Get_POGO_BM_Login_Date5().click();
        add_BM_grossproductionbydentalcategory_element.Get_POGO_BM_Login_Date6().click();
        add_BM_grossproductionbydentalcategory_element.Get_POGO_BM_Login_Date7().click();
        add_BM_grossproductionbydentalcategory_element.Get_POGO_BM_Login_Date8().click();
       
       
 }
    BM_Login_Clickto_TrendChart(){
        cy.contains('Trend Line').click();

        cy.contains('Select up to 7')
        cy.contains('Clear all')
        cy.contains('Select Practice')
        cy.contains('Production')
        cy.contains('description')
        cy.contains('gross Production')
        cy.contains('procedure Count')
        cy.contains('gross Production Per procedure')
        cy.contains('As a percent of total')
        cy.contains('production')
        cy.contains('production count')
    }
    BM_Login_Clickto_TrendChart_Checkbox(){
        add_BM_grossproductionbydentalcategory_element.Get_POGO_BM_Login_Date9().click();
        add_BM_grossproductionbydentalcategory_element.Get_POGO_BM_Login_Date10().click();
        add_BM_grossproductionbydentalcategory_element.Get_POGO_BM_Login_Date11().click();
        add_BM_grossproductionbydentalcategory_element.Get_POGO_BM_Login_Date12().click();
        add_BM_grossproductionbydentalcategory_element.Get_POGO_BM_Login_Date13().click();
        add_BM_grossproductionbydentalcategory_element.Get_POGO_BM_Login_Date14().click();
        add_BM_grossproductionbydentalcategory_element.Get_POGO_BM_Login_Date15().click();
        add_BM_grossproductionbydentalcategory_element.Get_POGO_BM_Login_Date16().click();
        add_BM_grossproductionbydentalcategory_element.Get_POGO_BM_Login_Date17().click();
        add_BM_grossproductionbydentalcategory_element.Get_POGO_BM_Login_Date18().contains('Production');
    }
    BM_Login_Clickto_TrendChart_Date(){
        add_BM_grossproductionbydentalcategory_element.Get_POGO_BM_Login_Date19().click();
        add_BM_grossproductionbydentalcategory_element.Get_POGO_BM_Login_Date20().click();
        add_BM_grossproductionbydentalcategory_element.Get_POGO_BM_Login_Date21().click();
        add_BM_grossproductionbydentalcategory_element.Get_POGO_BM_Login_Date22().click();
    }
    BM_Login_Clickto_TrendChart_Group(){
        add_BM_grossproductionbydentalcategory_element.Get_POGO_BM_Login_Date23().click();
        add_BM_grossproductionbydentalcategory_element.Get_POGO_BM_Login_Date24().click();
        add_BM_grossproductionbydentalcategory_element.Get_POGO_BM_Login_Date25().click();
        add_BM_grossproductionbydentalcategory_element.Get_POGO_BM_Login_Date26().click();
      
    }

  }
    /*
- Check page of the selected module is loading or not
- Check all content of a page
- Check page is loading for the different date range
- Check for $ Sign of amount values
- Modules available for Bm and FD 
- find out the broken link
    */



