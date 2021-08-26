describe('Hari Ke 4 ', function(){
    // before (()=> {

    // })
    // beforeEach (()=> {
    //     cy.visit('https://www.demoblaze.com/index.html')
    //     cy.wait(1000)

        it ('Register-1',function(){
            cy.BukaUrl()
            cy.get('#signin2').click()
            cy.wait(200)
            cy.get('#sign-username').type("hahaha").should('have.value','hahaha')
            cy.get('#sign-password').type('indonesia12').should('have.value','indonesia12')
            cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click().should('be.selected')
        })
})
