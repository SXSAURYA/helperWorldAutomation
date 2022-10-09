import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor'
import HomePage from '../../support/pageObjects/HomePage'
const homePage = new HomePage()

When(`user clicks on link {string} under section {string}`, (text1, text2) => {
    if (text2 === 'Our Social Media Networks') {
        homePage.footerlinks(text2, text1).should('be.visible').invoke('removeAttr', 'target').click();
        cy.wait(1500)
    } else {
        homePage.footerlinks(text2, text1).should('be.visible').click()
    }
})

Then(`user navigates to respective url for link {string}`, (text) => {
    cy.url().should('contain', text)
})