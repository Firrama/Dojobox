describe('Kumpulan Test', function(){
    // before (()=> {

    // })
    beforeEach (()=> {
        cy.visit('https://bukalapak.com')
        cy.wait(1000)
    })
    it ('test',function(){
        cy.contains('Daftar').click()
        cy.go('back')
    })
    it ('test1',function(){
        cy.contains('Daftar').click()
    })
})