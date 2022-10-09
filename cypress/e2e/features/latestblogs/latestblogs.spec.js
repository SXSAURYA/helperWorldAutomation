import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor'
import HomePage from '../../../support/pageObjects/HomePage'
const homePage = new HomePage()




And("I click on View details link under section {string}", (option) => {

    homePage.blogsSection().eq((parseInt(option) - 1)).should('be.visible')
    homePage.blogsSection().eq((parseInt(option) - 1)).find('a')
        .contains('View Details').should('be.visible')

    homePage.blogsSection().eq((parseInt(option) - 1)).find('h3')
        .then($el => {
            let text = $el.text().trim().replace(/\./g,'');
            cy.log("section " + option + " header is " + text)
            Cypress.env('blog_header', text)
        })

    homePage.blogsSection().eq((parseInt(option) - 1)).find('a')
        .contains('View Details').click();


})

And("User navigates to respective blogs page", () => {
    cy.get('h2').contains('Blogs', { matchCase: false })
        .should('be.visible')
    cy.get(`h2.entry-title`)
        .contains(Cypress.env('blog_header'), { matchCase: false })
        .should('be.visible')

})