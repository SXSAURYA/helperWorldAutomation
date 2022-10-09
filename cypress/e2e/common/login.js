import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor'


Given('I am on Login Page', () => {
    cy.visit(`${Cypress.env('baseUrl')}login`)
})


And("User should be able to login as {string}", (type) => {
    cy.fixture("login").then(data => {
        let nameHeader;
        switch (type) {
            case "Employee":
                nameHeader = data.Employee.fName
                break;
            case "Employer":
                nameHeader = data.Employer.fName
                break;
            case "Agency":
                nameHeader = data.Agency.fName
                break;

            default:
                break;
        }
        cy.get(`#topbar div.contact-info`)
            .contains(nameHeader, { matchCase: false })
            .should('be.visible')
    })
})


And(`User tries to login as {string}`, (type) => {
    cy.fixture("login").then(data => {
        let user, pass;
        switch (type) {
            case "Employee":
                user = data.Employee.email
                pass = data.Employee.pass
                // fName = data.Employee.fName
                break;
            case "Employer":
                user = data.Employer.email
                pass = data.Employer.pass
                // fName = data.Employer.fName
                break;
            case "Agency":
                user = data.Agency.email
                pass = data.Agency.pass
                // fName = data.Agency.fName
                break;

            default:
                break;
        }
        cy.get(`input[type='email']`)
            .should('be.visible')
            .clear().type(user)

        cy.get(`input[type='password']`)
            .should('be.visible')
            .clear().type(pass)

        cy.get(`button[type='submit']`).should('be.visible')
            .click()
    })
});

And("User logout from application", () => {
    cy.get(`a#dropdownMenuLink`)
        .should('be.visible')
        .click();

    cy.get(`a#dropdownMenuLink`)
        .siblings('div[class^="dropdown-menu"]')
        .find('a[class^="dropdown-item"]')
        .contains('Logout')
        .should('be.visible')
        .click()
})


And("User clicks on Dashboard from dropdown menu of Profile Icon", () => {
    cy.get(`a#dropdownMenuLink`)
        .should('be.visible')
        .click();

    cy.get(`a#dropdownMenuLink`)
        .siblings('div[class^="dropdown-menu"]')
        .find('a[class^="dropdown-item"]')
        .contains('Dashboard')
        .should('be.visible')
        .click()
})


And("User should reach to login screen", () => {
    cy.url().should('not.contain', 'employee/dashboard')
})

And(`user click on {string} link`, (linkText) => {
    cy.get(`div.login-form a`)
        .contains(linkText, { matchCase: false })
        .should('be.visible')
        .click()
})

And(`user should be able to see field related to {string}`, (text) => {
    if (text === 'Forgot password?') {
        cy.get(`input[type='email']`)
            .should('be.visible')
        cy.get('button')
            .contains(`Send Password Reset Link`, { matchCase: false })
            .should('be.visible')
        cy.get(`a`).contains(`Sign In`, { matchCase: false })
            .should('be.visible')
    } else {
        cy.log(`Checking all login signup features`)
        let labels = ["Employer/ host family","Jobseeker","Agency"];
        labels.forEach(label=>cy.get(`div.icon-box h4`).contains(label,{matchCase:false}).should('be.visible'))
    }
})


And("User clicks on {string} icon",(label)=>{
    cy.get(`div.icon-box h4`).contains(label,{matchCase:false}).should('be.visible')
    cy.get(`div.icon-box h4`).contains(label,{matchCase:false}).siblings('a')
    .should('be.visible')
    .click()
})

And(`URL should consist of {string}`,(url)=>{
    cy.url().should('contain',url)
})


And("Registration Step 1 fields and Options shouls get displayed for {string} under {string}", (type, section) => {
    cy.fixture("updateProfile").then(data => {
        let nameHeader;
        switch (type) {
            case "Employee":
                if (section === 'About Me') {
                    nameHeader = data.Employee.Update_Step_1.about_me;
                } else {
                    nameHeader = data.Employee.Update_Step_1.contact_details;
                }
                break;
            case "Employer":
                if (section === 'About Me') {
                    nameHeader = data.Employer.Update_Step_1.about_me;
                } else {
                    nameHeader = data.Employer.Update_Step_1.contact_details;
                }
                break;
            case "Agency":
                if (section === 'Login information') {
                    nameHeader = data.Agency.Update_Step_1.Login_Information;
                } else if (section === 'Contact information') {
                    nameHeader = data.Agency.Update_Step_1.Contact_Information;
                } else if (section === 'Primary telephone number') {
                    nameHeader = data.Agency.Update_Step_1.Primary_Phone_Number;
                } else {
                    nameHeader = data.Agency.Update_Step_1.Sec_Phone_Number;
                }
                break;
            default:
                break;
        }

        cy.get(`div.fc-heading h3`)
            .contains(section, { matchCase: false })
            .scrollIntoView()
            .should('be.visible')

        cy.log(nameHeader + " for " + section)

        nameHeader.forEach(labelText => {
            let label = labelText.split("~")[0]
            let type2 = labelText.split("~")[1]
            cy.log(`checking for label ${label} for type ${type2}`)

            cy.get(`div.fc-heading h3`)
                .contains(section, { matchCase: false })
                .parents('div.form-card')
                .find('label')
                .contains(label, { matchCase: false })
                .should('be.visible')

            if (type2 === 'TextBox') {
                cy.get(`div.fc-heading h3`)
                    .contains(section, { matchCase: false })
                    .parents('div.form-card')
                    .find('label')
                    .contains(label, { matchCase: false })
                    .parents('div.form-group')
                    .find('input')
                    .should('be.visible')
            } else if (type2 === 'Dropdown') {
                cy.get(`div.fc-heading h3`)
                    .contains(section, { matchCase: false })
                    .parents('div.form-card')
                    .find('label')
                    .contains(label, { matchCase: false })
                    .parents('div.form-group')
                    .find('select')
                    .should('be.visible')
            } else if (type2 === 'Radio') {
                cy.get(`div.fc-heading h3`)
                    .contains(section, { matchCase: false })
                    .parents('div.form-card')
                    .find('label')
                    .contains(label, { matchCase: false })
                    .parents('div.form-group')
                    .find('div.radio-row')
                    .should('be.visible')
            } else {
                cy.get(`div.fc-heading h3`)
                    .contains(section, { matchCase: false })
                    .parents('div.form-card')
                    .find('label')
                    .contains(label, { matchCase: false })
                    .parents('div.form-group')
                    .find('div.dob-form')
                    .should('be.visible')
            }
        })
    })
})