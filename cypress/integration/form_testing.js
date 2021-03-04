describe('App', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    const textInput = () => cy.get('input[name="name"]')
    const InstrInput = () => cy.get('input[name="specIns"]')
    const submitButton = () => cy.get('button[id="submitBtn"]')

    it('get the nam input and type a name', () => {
        textInput().should('exist')
        InstrInput().should('exist')
        submitButton().should('exist')

    })

    describe('Filling out the inputs', () => {
        it('submit button is disabled', () => {
            submitButton().should('be.disabled')
        })
    })
})