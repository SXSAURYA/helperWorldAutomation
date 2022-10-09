import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor'
import HomePage from '../../support/pageObjects/HomePage'
const homePage = new HomePage()

When('I click on {string} link', (text) => {
    homePage.quickSearchBtn(text).should('be.visible').click()
})

And("Header text {string} for section {string} should get displayed", (header, section) => {
    homePage.headerText(header).scrollIntoView()
    homePage.headerText(header).should('be.visible')
})

And("Paragraph text for section {string} should get displayed", (text) => {
    cy.fixture("expectedText").then(data => {
        let paraText = "";
        switch (text) {
            case `How Helpers World Work`:
                paraText = data.how_helper_world_works;
                break;
            case `Agency Update Step 1`:
                paraText = data.agency_step1;
                break;
            case `Employee Update Step 1`:
                paraText = data.employee_step1;
                break;
            case `Employer Update Step 1`:
                paraText = data.employer_step1;
                break;
            case `Become a jobseeker`:
                paraText = data.become_jobseeker;
                break;
            case `Do you have an agency`:
                paraText = data.do_you_have_agency;
                break;
            case "Latest Blogs":
                paraText = data.latest_blogs;
                break;
            case "What Host Families say about us":
                paraText = data.what_family_say_about_us;
                break;
            case "Frequently Asked Question":
                paraText = data.freq_asked_questions;
                break;
            case "Do you have any questions?":
                paraText = data.do_you_have_any_questions;
                break;
            case "Full service Agency":
                paraText = data.full_service_agency;
                break;

            case "Become a host family":
                paraText = data.become_host_family;
                break;
            case "Premium Member under Recruiter":
                paraText = data.premium_recruiter;
                break;
            case "Premium Member under Jobseeker":
                paraText = data.premium_jobseeker;
                break;
            case "Premium Member under Agency":
                paraText = data.premium_agency;
                break;
            default:
                break;
        }
        cy.log(`paragrah text is ${paraText} for section ${text}`)

        homePage.paragraphText(paraText).should('exist')
    })
})

And("{string} link should get displayed", (text) => {
    homePage.linkText(text).should('exist')
})