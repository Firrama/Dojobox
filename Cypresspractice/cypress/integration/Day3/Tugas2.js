describe ('Kumpulan Testcase', function() {
    it ('Nomor 1',function () {
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('#et_pb_contact_name_0').type('ilham').should('have.value','ilham')
        cy.get('#et_pb_contact_email_0').type('contact.ilhamazis@gmail.com').should('have.value','contact.ilhamazis@gmail.com')
        // cy.get('.et_pb_contact_submit').click().should('exist')
        //atau
        cy.contains('Email Me!').click()
    }),
    it ('Nomor 2',function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('[value="male"]').check().should('be.checked')
    })
    it ('Nomor 3',function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('[value="Bike"]').check().should('be.checked')
    })
    it ('Nomor 4',function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('select').select('audi').should('have.value','audi')
    })
    it ('Nomor 5',function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('.et_pb_cta_0 > .et_pb_button_wrapper > .et_pb_button').click()
        //cy.get('.entry-title').should('contain', 'Button success')
        //atau 
        cy.get('.entry-title').should('exist')
    })
    
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})
