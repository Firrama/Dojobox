describe ('Kumpulan test case',function(){
    it ('tc-1',function(){
    // cy.visit('https://www.bukalapak.com/')
    // cy.get('.bl-link > .pr-4').click()
    // cy.get('.bl-text-field__input').type('ilham')
    cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
    cy.get('select').select('Opel')
    cy.get('[value="Bike"]').check()
    })

    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })

})