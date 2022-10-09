import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor'
import feedBackPage from '../../../support/pageObjects/feedBackPage'
import HomePage from '../../../support/pageObjects/HomePage'
const homePage = new HomePage()
const feedbackPage = new feedBackPage();

And("I click on Write a Review link", () => {
    cy.get(`div.section-title a[href*='feedback']`)
        .should('be.visible')
    cy.get(`div.section-title a[href*='feedback']`)
        .click()
})

And("Forms field should get displayed", () => {
    feedbackPage.feedBackTextBox('Name', 'TextBox').should('be.visible')
    feedbackPage.feedBackTextBox('Email', 'TextBox').should('be.visible')
    feedbackPage.feedBackTextBox('Title', 'TextBox').should('be.visible')
    feedbackPage.feedBackTextBox('Write a feedback', 'TextArea').should('be.visible')
    feedbackPage.startRatingIcon().should('be.visible')
    feedbackPage.feedBackSubmitButton().should('be.visible')
})

And("User submits feedback forms", () => {
    cy.generateRandomString(4).then(text => {
        feedbackPage.feedBackTextBox('Name', 'TextBox').should('be.visible').clear().type(text)
    })

    cy.generateRandomString(4).then(text => {
        feedbackPage.feedBackTextBox('Email', 'TextBox').should('be.visible').clear().type(text + "@gmail.com")
    })

    cy.generateRandomString(4).then(text => {
        feedbackPage.feedBackTextBox('Title', 'TextBox').should('be.visible').clear().type(text)
    })

    cy.generateRandomString(4).then(text => {
        feedbackPage.feedBackTextBox('Write a feedback', 'TextArea').should('be.visible').clear().type(text)
    })

    feedbackPage.startRatingIcon().should('be.visible')
    cy.get(`span.star-rating`)
    .parent()
    .find('input[value="5"]')
    .check({force:true})

    cy.get(`input[type='file']`).selectFile('cypress/fixtures/feedpic.jpg')



    feedbackPage.feedBackSubmitButton().should('be.visible').click()
})

And('Thanks message should get displayed',()=>{
   cy.contains('Thank you',{matchCase:false}).should('be.visible')
})