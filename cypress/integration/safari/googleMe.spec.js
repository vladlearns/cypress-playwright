
it('Google vladlearns in Safari', () => {
    cy.onlyOn('mac')
    cy.task('playwright', 'googleMe');
    })
