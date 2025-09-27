/// <reference types="cypress" />

beforeEach('Open test application', () => {
	cy.visit('https://www.saucedemo.com/')
	cy.get('#user-name').type('standard_user')
	cy.get('#password').type('secret_sauce')
	cy.get('#login-button').click()
})

describe('test', () => {
	it('Test 1', () => {
		cy.visit('https://www.saucedemo.com/inventory.html');
	})

})