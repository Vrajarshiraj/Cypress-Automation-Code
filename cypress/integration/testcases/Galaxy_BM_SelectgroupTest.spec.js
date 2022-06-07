import BM_LoginPageActions from '../../pageobjects/pageactions/BM_LoginPageActions';
import BM_SelectGroup_PageActions from '../../pageobjects/pageactions/BM_SelectGroup_PageActions';

const BM_loginPage = new BM_LoginPageActions();
const BM_clickallPage = new BM_SelectGroup_PageActions();

describe("Business Manager Login to Galaxy",()=>{

    
    

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

describe("Select Group",()=>{

    it("Click on All buttton",()=>{
        BM_clickallPage.BM_Login_Clickto_ALLBtn();
        
    })
    it("Verify page all button",()=>{
        BM_clickallPage.BM_VerifyPage_all();
    })

    it("Click on Group Tab",()=>{             
        BM_clickallPage.BM_Login_Clickto_Grouptab();
    })
    it("Verify group tab page",()=>{
        BM_clickallPage.BM_VerifyPage_Group();
    })

  it("All Groups divs visible or not",()=>{
        BM_clickallPage. BM_Visible_wholeDivs();
    })
    it("Indivisual Div visible or not",()=>{
        BM_clickallPage.BM_Visible_IndivisualDivs();
    })



   it("Group all Groupname headings visible or not",()=>{
        BM_clickallPage.BM_Checking_GroupAll_Groupname()
    })
    it("Group all NoofPractice headings visible or not",()=>{
        BM_clickallPage.BM_Checking_GroupAll_NoofPractice()
    })
    it("Group all Practices headings visible or not",()=>{
        BM_clickallPage.BM_Checking_GroupAll_Practice()
    })
    it("Group all City headings visible or not",()=>{
        BM_clickallPage.BM_Checking_GroupAll_City()
    })


   it("Group Second Groupname headings visible or not",()=>{
        BM_clickallPage.BM_Checking_GroupSecond_Groupname()
    })
    it("Group Second NoofPractices headings visible or not",()=>{
        BM_clickallPage.BM_Checking_GroupSecond_NoofPractices()
    })
    it("Group Second Practices headings visible or not",()=>{
        BM_clickallPage.BM_Checking_GroupSecond_Practices()
    })
    it("Group Second City headings visible or not",()=>{
        BM_clickallPage.BM_Checking_GroupSecond_City()
    })



    it("Group Third Groupname headings visible or not",()=>{
        BM_clickallPage.BM_Checking_GroupThird_Groupname()
    })
    
    it("Group Third No Of Practices headings visible or not",()=>{
        BM_clickallPage.BM_Checking_GroupThird_NoofPractices()
    })
    
    it("Group Third Practices headings visible or not",()=>{
        BM_clickallPage.BM_Checking_GroupThird_practices()
    })
    
    it("Group Third City headings visible or not",()=>{
        BM_clickallPage.BM_Checking_GroupThird_City()
    })



    it("Cancel Buttons visible or not visible or not",()=>{
        BM_clickallPage.BM_CancelButton_Visible();
    })
    
    it("Go Buttons visible or not visible or not",()=>{
        BM_clickallPage.BM_GoButton_Visible();
    })


    it("Click on cancel Button",()=>{
        BM_clickallPage.BM_Cancelbtn_Click();
    })
    it("Click on Go Button",()=>{
        BM_clickallPage.BM_Gobtn_Click();
    })
    
})
