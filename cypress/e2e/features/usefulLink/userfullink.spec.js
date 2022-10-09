import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor'
import HomePage from '../../../support/pageObjects/HomePage'
const homePage = new HomePage()




And("About Helpers world text should get displayed", () => {
    cy.get(`div.editor-text`)
        .contains(`Helpers World was born from our own struggles with finding suitable au pairs and nannies for our own children. We wanted to create a space to make it easy to browse profiles and make contact with your chosen helper/family.`, { matchCase: false }).should('be.visible')
})