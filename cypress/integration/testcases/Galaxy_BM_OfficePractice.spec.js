import BM_LoginPageActions from '../../pageobjects/pageactions/BM_LoginPageActions';
import BM_OfficePractice_PageActions from '../../pageobjects/pageactions/BM_OfficePractice_PageActions';


const BM_loginPage = new BM_LoginPageActions();
const BM_officePage = new BM_OfficePractice_PageActions();

describe("Business Manager Login to Galaxy", () => {




    before(() => {

        cy.fixture('testdata').then((data) => {

            globalThis.data = data;

        })


    })

    beforeEach(() => {

        BM_loginPage.navigateToURL();


    })


    it("Add Business Manager username and password and click on login buttton", () => {


        BM_loginPage.BM_Login_to_POGO(data.Sales_Demo_BM_Login, data.Sales_Demo_BM_Password);


    })


})

describe("Select OfficePractice", () => {

    it("Click on All buttton", () => {
        BM_officePage.BM_Clickto_ALLBtn();

    })
    it("Verify Office Practice Page", () => {
        BM_officePage.BM_Verify_PageAll();
    })
    it("All Practices divs visible or not", () => {
        BM_officePage.BM_Visible_Office_wholeDivs();
    })
    it("Indivisual Div visible or not", () => {
        BM_officePage.BM_Visible_Office_IndiDiv();
    })



    it('verify first practice details - Practivenames', function () {
        //cy.wait(6000);
        BM_officePage.BM_Checking_OfficeFirst_Practicename();
    })
    it('verify first practice details - Phone Number', function () {
        BM_officePage.BM_Checking_OfficeFirst_Phone();
    })
    it('verify first practice details - City', function () {
        BM_officePage.BM_Checking_OfficeFirst_City();
    })
    it('verify first practice details - State', function () {
        BM_officePage.BM_Checking_OfficeFirst_State();
    })
    it('verify first practice details - No of Provider', function () {
        BM_officePage.BM_Checking_OfficeFirst_NoofProvider();
    })
    it('verify first practice details - Number of Active patients', function () {
        BM_officePage.BM_Checking_OfficeFirst_NoofActivePt();
    })
    it('verify first practice details - Speciality', function () {
        BM_officePage.BM_Checking_OfficeFirst_Speciality();
    })
    it('verify first practice details - NPI', function () {
        BM_officePage.BM_Checking_OfficeFirst_NPI()
    })
    it('verify first practice details - PMS', function () {
        BM_officePage.BM_Checking_OfficeFirst_PMS();
    })
    it('verify first practice details - MCID', function () {
        BM_officePage.BM_Checking_OfficeFirst_MCID();
    })



    it('verify Second practice details - Practivenames', function () {
        //cy.wait(6000);
        BM_officePage.BM_Checking_OfficeSecond_Practicename();
    })
    it('verify Second practice details - Phone Number', function () {
        BM_officePage.BM_Checking_OfficeSecond_Phone();
    })
    it('verify Second practice details - City', function () {
        BM_officePage.BM_Checking_OfficeSecond_City();
    })
    it('verify Second practice details - State', function () {
        BM_officePage.BM_Checking_OfficeSecond_State();
    })
    it('verify Second practice details - No of Provider', function () {
        BM_officePage.BM_Checking_OfficeSecond_NoofProvider();
    })
    it('verify Second practice details - Number of Active patients', function () {
        BM_officePage.BM_Checking_OfficeSecond_NoofActivePt();
    })
    it('verify Second practice details - Speciality', function () {
        BM_officePage.BM_Checking_OfficeSecond_Speciality();
    })
    it('verify Second practice details - NPI', function () {
        BM_officePage.BM_Checking_OfficeSecond_NPI()
    })
    it('verify Second practice details - PMS', function () {
        BM_officePage.BM_Checking_OfficeSecond_PMS();
    })
    it('verify Second practice details - MCID', function () {
        BM_officePage.BM_Checking_OfficeSecond_MCID();
    })




    it('verify Third practice details - Practivenames', function () {
        //cy.wait(6000);
        BM_officePage.BM_Checking_OfficeThird_Practicename();
    })
    it('verify Third practice details - Phone Number', function () {
        BM_officePage.BM_Checking_OfficeThird_Phone();
    })
    it('verify Third practice details - City', function () {
        BM_officePage.BM_Checking_OfficeThird_City();
    })
    it('verify Third practice details - State', function () {
        BM_officePage.BM_Checking_OfficeThird_State();
    })
    it('verify Third practice details - No of Provider', function () {
        BM_officePage.BM_Checking_OfficeThird_NoofProvider();
    })
    it('verify Third practice details - Number of Active patients', function () {
        BM_officePage.BM_Checking_OfficeThird_NoofActivePt();
    })
    it('verify Third practice details - Speciality', function () {
        BM_officePage.BM_Checking_OfficeThird_Speciality();
    })
    it('verify Third practice details - NPI', function () {
        BM_officePage.BM_Checking_OfficeThird_NPI()
    })
    it('verify Third practice details - PMS', function () {
        BM_officePage.BM_Checking_OfficeThird_PMS();
    })
    it('verify Third practice details - MCID', function () {
        BM_officePage.BM_Checking_OfficeThird_MCID();
    })




    it("Cancel Buttons visible or not visible or not", () => {
        BM_officePage.BM_CancelButton_Visible();
    })

    it("Go Buttons visible or not visible or not", () => {
        BM_officePage.BM_GoButton_Visible();
    })



    it("Click on cancel Button", () => {
        BM_officePage.BM_Cancelbtn_Click();
    })
    it("Click on Go Button", () => {
        BM_officePage.BM_Gobtn_Click();
    })


})
