describe('Cypress testing', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
        cy.get('span').as('counter');
        cy.get('button').as('buttons');
    });
    it('should counter be {start}', () => {
        const start = '22';
        cy.get('@counter').should('have.text', start);
    });
    it('should have buttons ("+/-")', () => {
        cy.get('@buttons')
            .should('contain', '+')
            .should('contain', '-');
    });
    it ('should counter be modified after cliked +/-', () => {
        const increment = cy.get('@buttons').contains('+');
        for (let i = 0; i < 5; i++){
            increment.click();
        }
        cy.get('@counter').should('have.text', '27');
        cy.get('@buttons').contains('-').click();
        cy.get('@counter').should('have.text', '26');
    });
    it ('should counter be modified after clicked "Zmień"', () => {
        const TESTVALUE = '367';
        cy.get('input').type(TESTVALUE, {delay: 500}).should('have.value', TESTVALUE);
        cy.wait(500);
        cy.get('@buttons').contains('Zmień').click();
        cy.get('@counter').should('have.text', TESTVALUE);
        cy.wait(500);
    });
    it ('should counter be {start} after clicked "Reset"', () => {
        cy.get('@buttons').contains('Reset').click();
        cy.get('@counter').should('have.text', '22');
    })
});