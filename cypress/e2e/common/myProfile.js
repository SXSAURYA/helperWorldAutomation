import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor'


And("labels for {string} should get displayed for {string}", (step, type) => {
    cy.fixture("myProfile").then(data => {
        let nameHeader;
        switch (type) {
            case "Employee":
                if (step === 'Step 1') {
                    nameHeader = data.Employee.Step_1
                } else if (step === 'Step 2') {
                    nameHeader = data.Employee.Step_2
                } else {
                    nameHeader = data.Employee.Step_3
                }
                break;
            case "Employer":
                if (step === 'Step 1') {
                    nameHeader = data.Employer.Step_1
                } else if (step === 'Step 2') {
                    nameHeader = data.Employer.Step_2
                } else {
                    nameHeader = data.Employer.Step_3
                }
                break;
            case "Agency":
                if (step === 'Step 1') {
                    nameHeader = data.Agency.Step_1
                } else if (step === 'Step 2') {
                    nameHeader = data.Agency.Step_2
                } else {
                    nameHeader = data.Agency.Step_3
                }
                break;

            default:
                break;
        }
        nameHeader.forEach(element => {
            cy.get(`div.tab-pane.active div.table-responsive table.table th`)
                .contains(element, { matchCase: false })
                .should('be.visible')
        });
    })
})

And("Click on {string} in my profile section", (step) => {
    cy.get(`ul[role='tablist'] li a`)
        .contains(step, { matchCase: false })
        .should('be.visible')
        .click()
})


And("UI for profile disable tab should get displayed as expected", () => {
    cy.get(`div.tab-pane.active div.text-center`)
        .contains('Profile Disable', { matchCase: false })
        .should('be.visible')

    cy.get(`div.tab-pane.active input[type='checkbox']`)
        .should('be.visible')

    cy.get(`div.tab-pane.active input[type='submit']`)
        .should('be.visible')
})


And("User {string} the profile", (action) => {

    if (action === 'enable') {
        cy.get(`div.tab-pane.active input[type='checkbox']`)
            .should('be.visible')
            .check()
    } else {
        cy.get(`div.tab-pane.active input[type='checkbox']`)
            .should('be.visible')
            .uncheck()
    }

    cy.get(`div.tab-pane.active input[type='submit']`)
        .should('be.visible')
        .click()
})

And("User should get {string} message", (action) => {
    cy.contains(action === 'enable' ? `Your profile has been Disabled successfully` : `Your profile has been Disabled successfully`).should('be.visible')
})