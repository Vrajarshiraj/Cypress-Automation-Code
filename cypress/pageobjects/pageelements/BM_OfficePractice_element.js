/// <reference types="cypress" />


const or = require("../../locators.json");
export default class BM_OfficePractice_Element{

    Get_Office_ALL(){

        cy.wait(1000);
        return cy.get(or.POGO_BM_OfficePracticefn.BM_Office_AllButton);
    }
    Get_All_Title(){
        cy.wait(500);
        return cy.get(or.POGO_BM_OfficePracticefn.BM_Office_VerifyAllPage);
    }
     Get_AllPractice_Div(){
        cy.wait(100);
        return cy.get(or.POGO_BM_OfficePracticefn.BM_Office_PracticeDiv);
    }
    Get_AllIndi_Div(){
        cy.wait(100);
        return cy.get(or.POGO_BM_OfficePracticefn.BM_Office_Indi_div);
    }


    Get_PracticeAll_Practicename(){
        cy.wait(100);
        return cy.get(or.POGO_BM_OfficePracticefn.Office_firstPractice_PracticeNames);
    }
    
    Get_PracticeAll_Phonenumber(){
        cy.wait(100);
        return cy.get(or.POGO_BM_OfficePracticefn.Office_firstPractice_Phonenumber);
    }
    Get_PracticeAll_City(){
        cy.wait(100);
        return cy.get(or.POGO_BM_OfficePracticefn.Office_firstPractice_City);
    }
    Get_PracticeAll_State(){
        cy.wait(100);
        return cy.get(or.POGO_BM_OfficePracticefn.Office_firstPractice_State);
    }
    Get_PracticeAll_NoofProvider(){
        cy.wait(100);
        return cy.get(or.POGO_BM_OfficePracticefn.Office_firstPractice_NoofProvider);
    }
    Get_PracticeAll_NoofActivept(){
        cy.wait(100);
        return cy.get(or.POGO_BM_OfficePracticefn.Office_firstPractice_NoofActivept);
    }
    Get_PracticeAll_Speciality(){
        cy.wait(100);
        return cy.get(or.POGO_BM_OfficePracticefn.Office_firstPractice_Speciality);
    }
    Get_PracticeAll_NPI(){
        cy.wait(100);
        return cy.get(or.POGO_BM_OfficePracticefn.Office_firstPractice_NPI);
    }
    Get_PracticeAll_PMS(){
        cy.wait(100);
        return cy.get(or.POGO_BM_OfficePracticefn.Office_firstPractice_PMS);
    }
    Get_PracticeAll_MCID(){
        cy.wait(100);
        return cy.get(or.POGO_BM_OfficePracticefn.Office_firstPractice_MCID);
    }




    
    Get_PracticeSecond_Practicename(){
        cy.wait(100);
        return cy.get(or.POGO_BM_OfficePracticefn.Office_SecondPractice_PracticeNames);
    }
    
    Get_PracticeSecond_Phonenumber(){
        cy.wait(100);
        return cy.get(or.POGO_BM_OfficePracticefn.Office_SecondPractice_Phonenumber);
    }
    Get_PracticeSecond_City(){
        cy.wait(100);
        return cy.get(or.POGO_BM_OfficePracticefn.Office_SecondPractice_City);
    }
    Get_PracticeSecond_State(){
        cy.wait(100);
        return cy.get(or.POGO_BM_OfficePracticefn.Office_SecondPractice_State);
    }
    Get_PracticeSecond_NoofProvider(){
        cy.wait(100);
        return cy.get(or.POGO_BM_OfficePracticefn.Office_SecondPractice_NoofProvider);
    }
    Get_PracticeSecond_NoofActivept(){
        cy.wait(100);
        return cy.get(or.POGO_BM_OfficePracticefn.Office_SecondPractice_NoofActivept);
    }
    Get_PracticeSecond_Speciality(){
        cy.wait(100);
        return cy.get(or.POGO_BM_OfficePracticefn.Office_SecondPractice_Speciality);
    }
    Get_PracticeSecond_NPI(){
        cy.wait(100);
        return cy.get(or.POGO_BM_OfficePracticefn.Office_SecondPractice_NPI);
    }
    Get_PracticeSecond_PMS(){
        cy.wait(100);
        return cy.get(or.POGO_BM_OfficePracticefn.Office_SecondPractice_PMS);
    }
    Get_PracticeSecond_MCID(){
        cy.wait(100);
        return cy.get(or.POGO_BM_OfficePracticefn.Office_SecondPractice_MCID);
    }




    Get_PracticeThird_Div(){
        cy.wait(100);
        return cy.get(or.POGO_BM_OfficePracticefn.Office_ThirdPractice_Div);
    }
    Get_PracticeThird_Practicename(){
        cy.wait(100);
        return cy.get(or.POGO_BM_OfficePracticefn.Office_ThirdPractice_PracticeNames);
    }
    
    Get_PracticeThird_Phonenumber(){
        cy.wait(100);
      
        return cy.get(or.POGO_BM_OfficePracticefn.Office_ThirdPractice_Phonenumber);
    }
    Get_PracticeThird_City(){
        cy.wait(100);
        return cy.get(or.POGO_BM_OfficePracticefn.Office_ThirdPractice_City);
    }
    Get_PracticeThird_State(){
        cy.wait(100);
        return cy.get(or.POGO_BM_OfficePracticefn.Office_ThirdPractice_State);
    }
    Get_PracticeThird_NoofProvider(){
        cy.wait(100);
        return cy.get(or.POGO_BM_OfficePracticefn.Office_ThirdPractice_NoofProvider);
    }
    Get_PracticeThird_NoofActivept(){
        cy.wait(100);
        return cy.get(or.POGO_BM_OfficePracticefn.Office_ThirdPractice_NoofActivept);
    }
    Get_PracticeThird_Speciality(){
        cy.wait(100);
        return cy.get(or.POGO_BM_OfficePracticefn.Office_ThirdPractice_Speciality);
    }
    Get_PracticeThird_NPI(){
        cy.wait(100);
        return cy.get(or.POGO_BM_OfficePracticefn.Office_ThirdPractice_NPI);
    }
    Get_PracticeThird_PMS(){
        cy.wait(100);
        return cy.get(or.POGO_BM_OfficePracticefn.Office_ThirdPractice_PMS);
    }
    Get_PracticeThird_MCID(){
        cy.wait(100);
        return cy.get(or.POGO_BM_OfficePracticefn.Office_ThirdPractice_MCID);
    }



    Get_Office_CancelBtn(){
        cy.wait(100);
        return cy.get(or.POGO_BM_OfficePracticefn.Office_Cancel_Button)
    }
    Get_Office_GolBtn(){
        cy.wait(100);
        return cy.get(or.POGO_BM_OfficePracticefn.Office_Go_Button)
    }


    Get_Verify_Cancel(){
        cy.wait(100);
        return cy.get(or.POGO_BM_OfficePracticefn.Office_Verify_Cancel)
    }
    Get_Verify_Go1(){
        cy.wait(100);
        return cy.get(or.POGO_BM_OfficePracticefn.Office_Verify_Go1)
    }
    Get_Verify_Go2(){
        cy.wait(100);
        return cy.get(or.POGO_BM_OfficePracticefn.Office_Verify_Go2)
    }
}