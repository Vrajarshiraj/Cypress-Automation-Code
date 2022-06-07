/// <reference types="cypress" />

import BM_SelectGroupElement from '../pageelements/BM_SelectGroupElement';
import BM_SelectGroupElemen from '../pageelements/BM_SelectGroupElement';

export default class BM_SelectGroup_PageActions{


    constructor(){

        globalThis.add_BM_SelectGroup_element = new BM_SelectGroupElement();
    }



    BM_Login_Clickto_ALLBtn(){

        add_BM_SelectGroup_element.Get_POGO_BM_ALL().click();
    }
    BM_VerifyPage_all(){
        add_BM_SelectGroup_element.Get_All_Title().contains("Practices");
    }
    BM_Login_Clickto_Grouptab(){

        add_BM_SelectGroup_element.Get_POGO_BM_SelectGroup_Tab().click();
    }
    BM_VerifyPage_Group(){
        add_BM_SelectGroup_element.Get_Group_Title().contains("Groups");
       
        
        
    }

   BM_Visible_wholeDivs()
    {
        
        add_BM_SelectGroup_element.Get_AllGroup_Div().should("be.visible");
    }
    BM_Visible_IndivisualDivs(){
        add_BM_SelectGroup_element.Get_Single_Div().should("be.visible");
    }


   BM_Checking_GroupAll_Groupname(){
        add_BM_SelectGroup_element.Get_GroupAll_Groupname().contains("Group Name");
   }
   BM_Checking_GroupAll_NoofPractice(){
        add_BM_SelectGroup_element.Get_GroupAll_NoPractices().contains("No of Practice");
   }
   BM_Checking_GroupAll_Practice(){
        add_BM_SelectGroup_element.Get_GroupAll_Practices().contains("Practice");
   }
   BM_Checking_GroupAll_City(){
        add_BM_SelectGroup_element.Get_GroupAll_City().contains("City");
    }


    BM_Checking_GroupSecond_Groupname(){
        add_BM_SelectGroup_element. Get_GroupSecond_Groupname().contains("Group Name");
    }
    BM_Checking_GroupSecond_NoofPractices(){
        add_BM_SelectGroup_element.Get_GroupSecond_NoPractices().contains("No of Practice");
    }
    BM_Checking_GroupSecond_Practices(){
        add_BM_SelectGroup_element.Get_GroupSecond_Practices().contains("Practice");
    }
    BM_Checking_GroupSecond_City(){
        add_BM_SelectGroup_element.Get_GroupSecond_City().contains("City");
    }


    BM_Checking_GroupThird_Groupname(){
        add_BM_SelectGroup_element.Get_GroupThird_Groupname().contains("Group Name");
    }
    BM_Checking_GroupThird_NoofPractices(){
        add_BM_SelectGroup_element.Get_GroupThird_NoPractices().contains("No of Practice");
    }
    BM_Checking_GroupThird_practices(){
        add_BM_SelectGroup_element.Get_GroupThird_Practices().contains("Practice");
    }
    BM_Checking_GroupThird_City(){
        add_BM_SelectGroup_element.Get_GroupThird_City().contains("City");
    }


    BM_CancelButton_Visible(){
        add_BM_SelectGroup_element.Get_Group_CancelButton().should("be.visible");
    }
    BM_GoButton_Visible(){
        add_BM_SelectGroup_element.Get_Group_GoButton().should("be.visible");
    }



    BM_Cancelbtn_Click(){
        add_BM_SelectGroup_element.Get_Group_CancelButton().click();
        add_BM_SelectGroup_element.Get_Group_VerifyCancel().should("be.visible");
        add_BM_SelectGroup_element.Get_POGO_BM_ALL().click();
        add_BM_SelectGroup_element.Get_POGO_BM_SelectGroup_Tab().click();
    }
    BM_Gobtn_Click(){
        add_BM_SelectGroup_element.Get_Group_VerifyGo()
        .invoke("text").then((text1)=>
        {
            add_BM_SelectGroup_element.Get_Group_VerifyGo().click();
            add_BM_SelectGroup_element.Get_Group_GoButton().click();
            add_BM_SelectGroup_element.Get_Group_VerifyGo2().invoke("text")
        .should((text2)=>
        {
            expect(text1).to.eq(text2)
        })

        })

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
