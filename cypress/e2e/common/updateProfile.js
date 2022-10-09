import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor'


And("Update Step 1 fields and Options shouls get displayed for {string} under {string}", (type, section) => {
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

And("Update Step 2 fields and Options shouls get displayed for {string} under {string}", (type, section) => {
    cy.fixture("updateProfile").then(data => {
        let nameHeader;
        switch (type) {
            case "Employee":
                if (section === 'My Search') {
                    nameHeader = data.Employee.Update_Step_2.my_search;
                } else if (section === 'Hws, further questions') {
                    nameHeader = data.Employee.Update_Step_2.furthe_ques;
                } else if (section === 'When would you like to start working.') {
                    nameHeader = data.Employee.Update_Step_2.start_working;
                } else {
                    nameHeader = data.Employee.Update_Step_2.minimum_stay;
                }
                break;
            case "Employer":
                if (section === 'My Search') {
                    nameHeader = data.Employer.Update_Step_2.my_search;
                } else if (section === 'When would you like you candidate to start work.') {
                    nameHeader = data.Employer.Update_Step_2.start_working;
                } else {
                    nameHeader = data.Employer.Update_Step_2.minimum_stay;
                }
                break;
            case "Agency":
                nameHeader = data.Agency.Update_Step_2
                break;
            default:
                break;
        }

        cy.get(`div.fc-heading h3`)
            .contains(section, { matchCase: false })
            .scrollIntoView()
            .should('be.visible')

        nameHeader.forEach(labelText => {
            let label = labelText.split("~")[0]
            let type2 = labelText.split("~")[1]
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
            } else if (type2 === 'Checkbox') {
                cy.get(`div.fc-heading h3`)
                    .contains(section, { matchCase: false })
                    .parents('div.form-card')
                    .find('label')
                    .contains(label, { matchCase: false })
                    .parents('div.form-group')
                    .find('div.checkbox-row')
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

And(`Update Step 3 fields and Options shouls get displayed for {string}`, (type) => {
    let sectionHeaders;
    switch (type) {
        case 'Employee':
            sectionHeaders = ["1. Upload profile photo","2. Profile texts"]
            break;
        case 'Employer':
            sectionHeaders = ["1. Upload logo","2. Profile texts"]
            // sectionHeaders = 
            break;
        case 'Agency':
            sectionHeaders = ["1. Upload logo","2. Profile texts"]
            break;

        default:
            break;
    }

    sectionHeaders.forEach(label => {
        cy.get(`div.form-card h3`)
            .contains(label, { matchCase: false }).
        scrollIntoView()
            .should('be.visible')
    })
})

And(`Upload Additional Picture fields and Options shouls get displayed for {string}`, (type) => {
    let sectionHeaders;
    switch (type) {
        case 'Employee':
            sectionHeaders = ["1. Upload Additional Picture"]
            break;
        case 'Employer':
            sectionHeaders = ["1. Upload Additional Picture"]
            break;
        case 'Agency':
            sectionHeaders = ["1. Upload logo","2. Profile texts"]
            break;

        default:
            break;
    }

    sectionHeaders.forEach(label => {
        cy.get(`div.form-card h3`)
            .contains(label, { matchCase: false }).
        scrollIntoView()
            .should('be.visible')
    })
})


And("User clicks on Add picture Icon",()=>{
    cy.get(`div.dashboard-content a`).should('be.visible')
    .click()
})