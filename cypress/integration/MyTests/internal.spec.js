describe('internal site testing', () => {
    beforeEach(() => {
        cy.visit('https://flamboyant-euclid-991866.netlify.app/');
    });
    it('field should be "warning" without value, "Ok" disabled', () => {
        cy.get('input').each(el => el.focus().blur());
        cy.contains('button', 'Ok').should('be.disabled');
        cy.pause();
    });
    it('"Ok" should be active after typed all field', () => {
        cy.get('input[name=preparation_time]').type('05:00:00');
        cy.get('input[name=type]').parent().click('right');
        cy.get('li').first().click();
        cy.get('input[name=name]').type('something');
        cy.get('input[name=diameter]').type('256.12');
        cy.contains('button', 'Ok').should('be.enabled').click();
    });
});