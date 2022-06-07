/// <reference types="cypress" />


const or = require("../../locators.json");

export default class BM_SelectGroupElement{


    Get_POGO_BM_ALL(){

        cy.wait(1000);
        return cy.get(or.POGO_BM_Selectgroupfn.POGO_BM_ClickAllBtn);
    }
    Get_All_Title(){
        cy.wait(500);
        return cy.get(or.POGO_BM_Selectgroupfn.All_Title);
    }

    Get_POGO_BM_SelectGroup_Tab(){

        cy.wait(100);
        return cy.get(or.POGO_BM_Selectgroupfn.POGO_BM_Selectgrouptab);

    }
    
    Get_Group_Title(){
        cy.wait(100);
        return cy.get(or.POGO_BM_Selectgroupfn.Group_Title);
    }
   Get_AllGroup_Div(){
        cy.wait(100);
        return cy.get(or.POGO_BM_Selectgroupfn.Group_AllGroupDiv);
    }
    Get_Single_Div(){
        cy.wait(100)
        return cy.get(or.POGO_BM_Selectgroupfn.Group_perticularDiv);
    }


   Get_GroupAll_Groupname(){
        cy.wait(100)
        return cy.get(or.POGO_BM_Selectgroupfn.Group_GroupAll_Groupname);
    }
    Get_GroupAll_NoPractices(){
        cy.wait(100)
        return cy.get(or.POGO_BM_Selectgroupfn.Group_groupAll_NoPractice);
    }
    Get_GroupAll_Practices(){
        cy.wait(100)
        return cy.get(or.POGO_BM_Selectgroupfn.Group_GroupAll_Practices);
    }
    Get_GroupAll_City(){
        cy.wait(100)
        return cy.get(or.POGO_BM_Selectgroupfn.Group_GroupAll_City);
    }


    Get_GroupSecond_Groupname(){
        cy.wait(100)
        return cy.get(or.POGO_BM_Selectgroupfn.Group_GroupSecond_Groupname);
    }
    Get_GroupSecond_NoPractices(){
        cy.wait(100)
        return cy.get(or.POGO_BM_Selectgroupfn.Group_groupSecond_NoPractice);
    }
    Get_GroupSecond_Practices(){
        cy.wait(100)
        return cy.get(or.POGO_BM_Selectgroupfn.Group_GroupSecond_Practices);
    }
    Get_GroupSecond_City(){
        cy.wait(100)
        return cy.get(or.POGO_BM_Selectgroupfn.Group_GroupSecond_City);
    }


    
    Get_GroupThird_Groupname(){
        cy.wait(100)
        return cy.get(or.POGO_BM_Selectgroupfn.Group_GroupThird_Groupname);
    }
    Get_GroupThird_NoPractices(){
        cy.wait(100)
        return cy.get(or.POGO_BM_Selectgroupfn.Group_groupThird_NoPractice);
    }
    Get_GroupThird_Practices(){
        cy.wait(100)
        return cy.get(or.POGO_BM_Selectgroupfn.Group_GroupThird_Practices);
    }
    Get_GroupThird_City(){
        cy.wait(100)
        return cy.get(or.POGO_BM_Selectgroupfn.Group_GroupThird_City);
    }


    Get_Group_CancelButton(){
        cy.wait(100)
        return cy.get(or.POGO_BM_Selectgroupfn.Group_Cancel_Button);
    }
    
    Get_Group_GoButton(){
        cy.wait(100)
        return cy.get(or.POGO_BM_Selectgroupfn.Group_Go_Button);
    }


    Get_Group_VerifyCancel(){
        cy.wait(100)
        return cy.get(or.POGO_BM_Selectgroupfn.Group_VerifyCancelClick)
    }
    
    Get_Group_VerifyGo(){
        cy.wait(100)
        return cy.get(or.POGO_BM_Selectgroupfn.Group_VerifyGoClick)
    }
    Get_Group_VerifyGo2(){
        cy.wait(100)
        return cy.get(or.POGO_BM_Selectgroupfn.Group_VerifyGoClick2)
    }

}