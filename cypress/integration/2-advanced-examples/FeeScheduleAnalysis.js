/// <reference types="cypress" />
describe('Fee Schedule Analysis', function () 
{
    it('Login', function () {
        cy.visit("https://pogalaxy.sikkasoft.com/login")
        cy.get(".form-control[placeholder='Username']").type("BMdemo")
        cy.get(".form-control[placeholder='Password']").type("BoringAI@1")
        cy.get(".btn[type='submit']").click()
        cy.get("title").contains("Optimizer Galaxy")
    })

    it('Click on Menu',function()
    {
        cy.get('#root > div > div:nth-child(1) > div > div.divLogo > i').click()
    })

    it('Click on Analysis Menu',function()
    { 
        cy.get('#top-nav-bar > div > div:nth-child(1) > div:nth-child(2) > div').click({force:true})
    }) 

    it('Click on Fee-Schedule Analysis',function()
    {
        cy.get('#top-nav-bar > div > div:nth-child(1) > div:nth-child(2) > ul > li:nth-child(7) > a').click()
    })
    
    it('Verify Fee-Schedule Analysis Header',function()
    {
        cy.get('title').contains('Optimizer Galaxy')
        cy.get('#provider-productivity-page > div:nth-child(1) > div > div:nth-child(1) > div > div > div > span').contains('Fee Schedule Analysis')
    })

    it('Practice View Fee Schedule',function()
    {
        cy.get('#provider-productivity-page > div:nth-child(2) > div:nth-child(1) > span').contains('Tap on a practice to view fee schedules')
    })

    
    it('Verify Compare Fee Schedules',function()
    {
        cy.get('#provider-productivity-page > div:nth-child(4) > div:nth-child(1) > div:nth-child(1)').contains('Compare Fee Schedules')
    })

    it('Verify Drop Down in Fee Schedules',function()
    {
        // cy.get('#provider-productivity-page > div:nth-child(4) > div:nth-child(1) > select').children('option').then(options => {
        //     const actual = [...options].map(o => o.value)
        //     expect(actual).to.deep.eq(['D0100-D0999 DIAGNOSTIC', 'D1000-D1999 PREVENTIVE', 'D2000-D2999 RESTORATIVE', 'D3000-D3999 ENDODONTICS', 'D4000-D4999 PERIODONTICS', 'D5000-D5899 PROSTHODONTICS', 'D6000-D6199 IMPLANT SERVICES', 'D6200-D6999 PROSTHODONTICS FIXED', 'D7000-D7999 ORAL & MAXILLOFACIAL SURGERY','D8000-D8999 ORTHODONTICS','D5900-D5999 MAXILLOFACIAL PROSTHETICS'])
        // })

        cy.get("select[name='dropdownSelect']").select("D0100-D0999 DIAGNOSTIC").should('have.value','0')
        cy.get("select[name='dropdownSelect']").select("D1000-D1999 PREVENTIVE").should('have.value','1')
        cy.get("select[name='dropdownSelect']").select("D2000-D2999 RESTORATIVE").should('have.value','2')
        cy.get("select[name='dropdownSelect']").select("D3000-D3999 ENDODONTICS").should('have.value','3')
        cy.get("select[name='dropdownSelect']").select("D4000-D4999 PERIODONTICS").should('have.value','4')
        cy.get("select[name='dropdownSelect']").select("D5000-D5899 PROSTHODONTICS").should('have.value','5')
        cy.get("select[name='dropdownSelect']").select("D6000-D6199 IMPLANT SERVICES").should('have.value','6')
        cy.get("select[name='dropdownSelect']").select("D6200-D6999 PROSTHODONTICS FIXED").should('have.value','7')
        cy.get("select[name='dropdownSelect']").select("D7000-D7999 ORAL & MAXILLOFACIAL SURGERY").should('have.value','8') 
        cy.get("select[name='dropdownSelect']").select("D8000-D8999 ORTHODONTICS").should('have.value','9')
        cy.get("select[name='dropdownSelect']").select("D5900-D5999 MAXILLOFACIAL PROSTHETICS").should('have.value','10')
        
        //cy.get("select[name='dropdownSelect']").select("MISCELLANEOUS").should('have.value','11')
    })

    it('Click on Check-Box Master Standard Fee',function()
    {
        cy.get('#provider-productivity-page > div:nth-child(4) > div:nth-child(2) > div.col-lg-3.col-xl-3 > div > div > div:nth-child(2) > div > input[type=checkbox]').check({force:true})
    })

    it('Click on Clear All and Verify its Functionality',function()
    {
        cy.get('#provider-productivity-page > div:nth-child(4) > div:nth-child(2) > div.col-lg-3.col-xl-3 > div > div > div:nth-child(1) > div:nth-child(2)').click()
        
        //Verify whether 'Clear All' it is working as per its functionality
        cy.get('#chart-axis-1-tickLabels-4 > tspan').contains('$1').should('be.visible')
        cy.get('#chart-axis-1-tickLabels-3 > tspan').contains('$1').should('be.visible')
        cy.get('#chart-axis-1-tickLabels-2 > tspan').contains('$1').should('be.visible')
        cy.get('#chart-axis-1-tickLabels-1 > tspan').contains('$0').should('be.visible')
        cy.get('#chart-axis-1-tickLabels-0 > tspan').contains('$0').should('be.visible')
    })

    it('Verify Procedure Fee by Fee-Schedule Functionality',function()
    {  
        cy.get("select[name='feeSchedule0']").select('Master Standard Fee').should('have.text','Master Standard Fee')
        cy.get("select[name='feeSchedule1']").select('Master Standard Fee').should('have.text','Master Standard Fee')
    })

    it('Verify Categories in Procedure Fee by Fee-Schedule Functionality',function()
    {
        cy.get('#expandable-table > tbody > tr:nth-child(1) > td > div > i').click()
        
        cy.get('#expandable-table > tbody > tr:nth-child(1) > td > div > i').click({force:false})
        cy.get('#expandable-table > tbody > tr:nth-child(3) > td > div > i').click()
        cy.get('#expandable-table > tbody > tr:nth-child(3) > td > div > i').click({force:false})
    })

    it('Verify Data in Procedure Fee by Fee-Schedule',function()
    {
        // cy.get("#expandable-table > tbody > tr td:nth-child(2)").contains('td','Not Defined In PMS')
        cy.get("#expandable-table > tbody > tr td:nth-child(4)")

        cy.get("#expandable-table > tbody > tr td:nth-child(2)").each(($e,index,$list) =>{

            const text=$e.text()

           if(text.includes("Not Defined In PMS"))
           {
               cy.get("#expandable-table > tbody > tr td:nth-child(4)").eq(index).then(function(extText)
               {
                   const visibleText=extText.text()
                   expect(visibleText).to.equal("N/A")
               })     
            }
        })
        
    })

    it('Verify Each Option from Procedures Category and CheckBox Value',function()
    {
        cy.get("select[name='dropdownSelect']").select("D0100-D0999 DIAGNOSTIC")
        cy.get("input[type='checkbox']").should('be.checked')
        cy.get("select[name='dropdownSelect']").select("D1000-D1999 PREVENTIVE")
        cy.get("input[type='checkbox']").should('be.checked')
        cy.get("select[name='dropdownSelect']").select("D2000-D2999 RESTORATIVE")
        cy.get("input[type='checkbox']").should('be.checked')
        cy.get("select[name='dropdownSelect']").select("D3000-D3999 ENDODONTICS")
        cy.get("input[type='checkbox']").should('be.checked')
        cy.get("select[name='dropdownSelect']").select("D4000-D4999 PERIODONTICS")
        cy.get("input[type='checkbox']").should('be.checked')
        cy.get("select[name='dropdownSelect']").select("D5000-D5899 PROSTHODONTICS")
        cy.get("input[type='checkbox']").should('be.checked')
        cy.get("select[name='dropdownSelect']").select("D6000-D6199 IMPLANT SERVICES")
        cy.get("input[type='checkbox']").should('be.checked')
        cy.get("select[name='dropdownSelect']").select("D6200-D6999 PROSTHODONTICS FIXED")
        cy.get("input[type='checkbox']").should('be.checked')
        cy.get("select[name='dropdownSelect']").select("D7000-D7999 ORAL & MAXILLOFACIAL SURGERY")
        cy.get("input[type='checkbox']").should('be.checked')
        cy.get("select[name='dropdownSelect']").select("D8000-D8999 ORTHODONTICS")
        cy.get("input[type='checkbox']").should('be.checked')
        cy.get("select[name='dropdownSelect']").select("D5900-D5999 MAXILLOFACIAL PROSTHETICS")
        cy.get("input[type='checkbox']").should('be.checked')

    })


})

