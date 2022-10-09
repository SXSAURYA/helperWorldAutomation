import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor'


And("Verify the UI for Messages for {string}", (type) => {
    switch (type) {
        case "Employer":
        case "Agency":
            cy.get(`div.modal-content p`)
                .contains(`Become a premium member to send and read messages.`, { matchCase: false })
                .should('be.visible')

            cy.get(`div.modal-content button`)
                .contains('Ok', { matchCase: false })
                .should('be.visible')
            cy.get(`div.modal-content button`)
                .contains('Cancel', { matchCase: false })
                .should('be.visible')
            break;
        case "Employee":
           cy.get(`h2`)
           .contains('Messages',{matchCase:false})
           .should('be.visible')

           cy.get(`div.messenger-messagingView nav a.user-name`)
           .contains('Messenger',{matchCase:false})
           .should('be.visible')

           break;

        default:
            break;
    }
})