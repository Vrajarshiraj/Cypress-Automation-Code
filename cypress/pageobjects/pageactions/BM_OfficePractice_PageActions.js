import BM_OfficePractice_Element from '../pageelements/BM_OfficePractice_Element';

export default class BM_OfficePractice_PageActions {
    constructor() {

        globalThis.add_BM_OfficeP_element = new BM_OfficePractice_Element();
    }
    BM_Clickto_ALLBtn() {

        add_BM_OfficeP_element.Get_Office_ALL().click();

    }
    BM_Verify_PageAll() {
        add_BM_OfficeP_element.Get_All_Title().contains("Practices")
    }

    BM_Visible_Office_wholeDivs() {

        add_BM_OfficeP_element.Get_AllPractice_Div().should("be.visible");
    }
    BM_Visible_Office_IndiDiv() {
        add_BM_OfficeP_element.Get_AllIndi_Div().should("be.visible");
    }

    BM_Checking_OfficeFirst_Practicename() {
        add_BM_OfficeP_element.Get_PracticeAll_Practicename().contains("Practice Name");
    }
    BM_Checking_OfficeFirst_Phone() {
        add_BM_OfficeP_element.Get_PracticeAll_Phonenumber().contains("Phone Number");
    }
    BM_Checking_OfficeFirst_City() {
        add_BM_OfficeP_element.Get_PracticeAll_City().contains("City");
    }
    BM_Checking_OfficeFirst_State() {
        add_BM_OfficeP_element.Get_PracticeAll_State().contains("State");
    } 
    BM_Checking_OfficeFirst_NoofProvider() {
        add_BM_OfficeP_element.Get_PracticeAll_NoofProvider().contains("No of Providers");
    }
    BM_Checking_OfficeFirst_NoofActivePt() {
        add_BM_OfficeP_element.Get_PracticeAll_NoofActivept().contains("No of Active Patients");
    }
    BM_Checking_OfficeFirst_Speciality() {
        add_BM_OfficeP_element.Get_PracticeAll_Speciality().contains("Specialty");
    }
    BM_Checking_OfficeFirst_NPI() {
        add_BM_OfficeP_element.Get_PracticeAll_NPI().contains("NPI");
    }
    BM_Checking_OfficeFirst_PMS() {
        add_BM_OfficeP_element.Get_PracticeAll_PMS().contains("PMS");
    }
    BM_Checking_OfficeFirst_MCID() {
        add_BM_OfficeP_element.Get_PracticeAll_MCID().contains("MCID");
    }



    BM_Checking_OfficeSecond_Practicename() {
        add_BM_OfficeP_element.Get_PracticeSecond_Practicename().contains("Practice Name");
    }
    BM_Checking_OfficeSecond_Phone() {
        add_BM_OfficeP_element.Get_PracticeSecond_Phonenumber().contains("Phone Number");
    }
    BM_Checking_OfficeSecond_City() {
        add_BM_OfficeP_element.Get_PracticeSecond_City().contains("City");
    }
    BM_Checking_OfficeSecond_State() {
        add_BM_OfficeP_element.Get_PracticeSecond_State().contains("State");
    }
    BM_Checking_OfficeSecond_NoofProvider() {
        add_BM_OfficeP_element.Get_PracticeSecond_NoofProvider().contains("No of Providers");
    }
    BM_Checking_OfficeSecond_NoofActivePt() {
        add_BM_OfficeP_element.Get_PracticeSecond_NoofActivept().contains("No of Active Patients");
    }
    BM_Checking_OfficeSecond_Speciality() {
        add_BM_OfficeP_element.Get_PracticeSecond_Speciality().contains("Specialty");
    }
    BM_Checking_OfficeSecond_NPI() {
        add_BM_OfficeP_element.Get_PracticeSecond_NPI().contains("NPI");
    }
    BM_Checking_OfficeSecond_PMS() {
        add_BM_OfficeP_element.Get_PracticeSecond_PMS().contains("PMS");
    }
    BM_Checking_OfficeSecond_MCID() {
        add_BM_OfficeP_element.Get_PracticeSecond_MCID().contains("MCID");
    }


   

    BM_Checking_OfficeThird_Practicename() {
        add_BM_OfficeP_element.Get_PracticeThird_Practicename().contains("Practice Name");
    }
    BM_Checking_OfficeThird_Phone() {
       
        add_BM_OfficeP_element.Get_PracticeThird_Phonenumber().contains("Phone Number");
    }
    BM_Checking_OfficeThird_City() {
        add_BM_OfficeP_element.Get_PracticeThird_City().contains("City");
    }
    BM_Checking_OfficeThird_State() {
        add_BM_OfficeP_element.Get_PracticeThird_State().contains("State");
    } 
    BM_Checking_OfficeThird_NoofProvider() {
        add_BM_OfficeP_element.Get_PracticeThird_NoofProvider().contains("No of Providers");
    }
    BM_Checking_OfficeThird_NoofActivePt() {
        add_BM_OfficeP_element.Get_PracticeThird_NoofActivept().contains("No of Active Patients");
    }
    BM_Checking_OfficeThird_Speciality() {
        add_BM_OfficeP_element.Get_PracticeThird_Speciality().contains("Specialty");
    }
    BM_Checking_OfficeThird_NPI() {
        add_BM_OfficeP_element.Get_PracticeThird_NPI().contains("NPI");
    }
    BM_Checking_OfficeThird_PMS() {
        add_BM_OfficeP_element.Get_PracticeThird_PMS().contains("PMS");
    }
    BM_Checking_OfficeThird_MCID() {
        add_BM_OfficeP_element.Get_PracticeThird_MCID().contains("MCID");
    }


    BM_CancelButton_Visible(){
        add_BM_OfficeP_element. Get_Office_CancelBtn().should("be.visible");
    }
    BM_GoButton_Visible(){
        add_BM_OfficeP_element.Get_Office_GolBtn().should("be.visible");
    }


    BM_Cancelbtn_Click(){
        add_BM_OfficeP_element. Get_Office_CancelBtn().click();
        add_BM_OfficeP_element.Get_Verify_Cancel().should("be.visible");
        add_BM_OfficeP_element.Get_Office_ALL().click();
        
    }

    BM_Gobtn_Click(){
        add_BM_OfficeP_element.Get_Verify_Go1()
        .invoke("text").then((text1)=>
        {
            add_BM_OfficeP_element.Get_Verify_Go1().click();
            add_BM_OfficeP_element.Get_Office_GolBtn().click();
            add_BM_OfficeP_element.Get_Verify_Go2().invoke("text")
        .should((text2)=>
        {
            expect(text1).to.eq(text2)
        })

        })

}
}