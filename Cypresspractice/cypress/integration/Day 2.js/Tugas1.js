describe ('Kumpulan test case',function(){
    it ('tc-1',function(){
    cy.visit('https://demoqa.com/automation-practice-form')
    cy.get('#firstName').type('Ilham')
    cy.get('#lastName').type('Azis')
    cy.get('#userEmail').type('Contact.ilhamazis@gmail.com')
    cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click()
    cy.get('#userNumber').type('08979849493')
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').click()
    cy.get('#currentAddress').type('JoharBaru Jakarta pusat')
    cy.get('#submit').click()
    })

    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })

})