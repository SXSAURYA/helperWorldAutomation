import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor'
import HomePage from '../../../support/pageObjects/HomePage'
import HowHelpersWorldWorkPage from '../../../support/pageObjects/HowHelpersWorldWorkPage'
const homePage = new HomePage()
const howHelperWorldworks = new HowHelpersWorldWorkPage()




And("I click on {string} option under get started", (option) => {

    homePage.getStartedOptions(option).should('exist').should('be.visible')
    homePage.getStartedOptions(option).click();
    cy.wait(2000)
})

And("User navigates to How helpers world works Page", () => {

    howHelperWorldworks.header().should('be.visible')
})

And(`Points for {string} section should get displayed`, (text) => {
    let sectionlabel = "";
    cy.fixture("aboutHelpersWorld").then(data => {
        switch (text) {
            case 'Step 1. Create a Profile':
                sectionlabel = data.create_a_profile
                break;
            case 'Step 2. Search Job':
                sectionlabel = data.search_job
                break;
            case 'Step 3. Make Contact':
                sectionlabel = data.make_contact
                break;
            case 'Step 4. Have an agreement.':
                sectionlabel = data.have_an_agreement
                break;
            case 'Step 5. Prepare for a start':
                sectionlabel = data.prepare_for_start
                break;
            default:
                break;
        }

        sectionlabel.forEach(el => howHelperWorldworks.pointText(text, el))
    })
})


When(`User clicks on {string} button`, (text) => {
    cy.get(`div.timeline h3`)
        .contains(`Step 1. Create a Profile`, { matchCase: false })
        .parents('div.timeline-content')
        .find('a')
        .contains(text, { matchCase: false })
        .should('be.visible')

    cy.get(`div.timeline h3`)
        .contains(`Step 1. Create a Profile`, { matchCase: false })
        .parents('div.timeline-content')
        .find('a')
        .contains(text, { matchCase: false })
        .click()
})