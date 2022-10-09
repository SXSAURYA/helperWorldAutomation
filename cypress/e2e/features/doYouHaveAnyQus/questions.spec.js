import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor'
import feedBackPage from '../../../support/pageObjects/feedBackPage'
import HomePage from '../../../support/pageObjects/HomePage'
const homePage = new HomePage()
const feedbackPage = new feedBackPage();

And("User fills the form", () => {
    cy.generateRandomString(4).then(text => {
        homePage.questionTextBox('Your Name', 'TextBox').should('be.visible').clear().type(text)
    })

    cy.generateRandomString(4).then(text => {
        homePage.questionTextBox('Your Email', 'TextBox').should('be.visible').clear().type(text + "@gmail.com")
    })

    cy.generateRandomString(4).then(text => {
        homePage.questionTextBox('Subject', 'TextBox').should('be.visible').clear().type(text)
    })

    cy.generateRandomString(4).then(text => {
        homePage.questionTextBox('Message', 'TextArea').should('be.visible').clear().type(text)
    })



    homePage.questionSubmitButton().should('be.visible').click()
})

And('User should get an thankyou message', () => {
    cy.contains('Thank You, your query has been submitted successfully.', { matchCase: false }).should('be.visible')
})