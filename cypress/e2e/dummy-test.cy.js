/// <reference types="cypress"/>

describe('First Test', () => {



	// beforeEach(() => {
	// 	cy.visit('/');
	// 	cy.get('#user-name').type('standard_user');
	// 	cy.get('#password').type('secret_sauce');
	// 	cy.get('#login-button').click();
	// });

	// it('Check Products Page as default page', () => {
	// 	cy.get('.app_logo').should('contain', 'Swag Labs');
	// });

	// it('Check About page', () => {
	// 	cy.get('#react-burger-menu-btn').click();
	// 	cy.get('#about_sidebar_link').click();
	// 	cy.url().should('include', 'https://saucelabs.com/');
	// });

	it('Radio Buttons', () => {
		cy.visit('/');
		cy.contains('Forms').click();
		y.contains('Form Layouts').click();
	});

});