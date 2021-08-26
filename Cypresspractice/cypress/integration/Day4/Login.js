describe('Hari Ke 4 ', function(){
    // before (()=> {

    // })
    // beforeEach (()=> {
    //     cy.visit('https://www.demoblaze.com/index.html')
    //     cy.wait(1000)

        it ('Login',function(){
            cy.BukaUrl()
            cy.get('#login2').click()
            cy.get('#loginusername').type("zaraki").should('have.value','zaraki')
            cy.get('#loginpassword').type('indonesia12').should('have.value','indonesia12')
            cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        })
})