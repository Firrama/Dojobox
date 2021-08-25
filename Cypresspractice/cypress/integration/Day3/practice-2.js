describe ('Kumpulan Testcase', function() {
    it ('Belajarcontains',function () {
        cy.visit('https://www.bukalapak.com/')
        cy.contains('Daftar').click()
        // cy.contains('BukaBantuan').click()  
        cy.get('.mv-48').should('exist')
        cy.get('.bl-text-field__input').type('Jojo').should('have.value','Jojo')
    })
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})