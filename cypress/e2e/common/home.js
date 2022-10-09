import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor'


And('I am on Home page', () => {
    cy.visit(Cypress.env('baseUrl'))
    cy.wait(2000)
    cy.get(`h1`).contains(`PROVIDING EASY AND SECURE WAY TO FIND DIRECT STAFF,CHILDCARE AND DOMESTIC WORKERS`, { matchCase: false }).should('be.visible')
})

And(`User clicks on link Submenu {string} under menu {string}`, (subMenu, mainMenu) => {
    cy.get(`ul[class='navbar-nav ml-auto'] li a[class='nav-link dropdown-toggle']`)
        .contains(mainMenu, { matchCase: false })
        .should('be.visible')

    cy.get(`ul[class='navbar-nav ml-auto'] li a[class='nav-link dropdown-toggle']`)
        .contains(mainMenu, { matchCase: false })
        .click();

    cy.get(`ul[class='navbar-nav ml-auto'] li a[class='nav-link dropdown-toggle']`)
        .contains(mainMenu, { matchCase: false })
        .parents(`li[class^='nav-item dropdown']`)
        .find(`a[class='dropdown-item']`)
        .contains(subMenu, { matchCase: false })
        .should('be.visible')
        .click()

})