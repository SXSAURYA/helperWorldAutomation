import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor'


And("Column Name of transaction details for {string} user should get displayed", (type) => {
    cy.fixture("dashboard").then(data => {
        let nameHeader;
        switch (type) {
            case "Employee":
                nameHeader = data.employee_dashboard
                break;
            case "Employer":
                nameHeader = data.employer_dashboard
                break;
            case "Agency":
                nameHeader = data.agency_dashboard
                break;

            default:
                break;
        }
        nameHeader.forEach(element => {
            cy.get(`table.table thead tr th`)
                .contains(element, { matchCase: false })
                .should('be.visible')
        });
    })
})

And("Click on {string} dashboard menu from the dashboard list",(dashboard)=>{
     cy.get(`div.dashboard-list li a`)
     .contains(dashboard,{matchCase:false})
     .should('be.visible')
     .click()  
})

And("Change Password labels and text boxes should get dislayed",()=>{
    let labels = ["Old Password","Password","Password Confirmation"]

    labels.forEach(label=>{
        cy.get(`div.form-card label`)
        .contains(label,{matchCase:false})
        .should('be.visible')

        cy.get(`div.form-card label`)
        .contains(label,{matchCase:false})
        .siblings(`input`)
        .should('be.visible')
    })
})