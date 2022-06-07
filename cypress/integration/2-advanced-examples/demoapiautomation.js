/// <reference types="cypress" />

describe('GET API Automation',function()
{
    it('Get API -MotorBike',function()
    {
        cy.request('https://flask-rest-api-demo.herokuapp.com/product/motorbike').then((res)=>
        {
            expect(res.status).equal(200);
            expect(res.body.product[0]).has.property('price',599.99);
            expect(res.body.product[0]).has.property('product','motorbike');
        })
        
    })

    it('Get API - Users',function()
    {
        cy.request('https://flask-rest-api-demo.herokuapp.com/users').then((res)=>
        {
            expect(res.status).eq(200);
            expect(res.body.users[0]).has.property('username','test_1');
            expect(res.body.users[1]).has.property('password','qwaszx');
            expect(res.body.users).has.length(5);
        })
    })

    it('Get API - Register',function()
    {
        cy.request('https://reqres.in/api/users?page=2').then((res)=>
        {
            expect(res.status).eq(200);
            expect(res.body.data[0]).has.property('first_name','Michael');
            expect(res.body.data[1]).has.property('last_name','Ferguson');
            expect(res.body.data).has.length(6);
        })
    })
})