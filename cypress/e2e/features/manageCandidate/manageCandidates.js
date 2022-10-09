import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor'
import HomePage from '../../../support/pageObjects/HomePage'
const homePage = new HomePage()

And('Columns for Manage Candidate Table should get displayed', () => {

   let headers = [
      "First Name",
      "Last Name",
      "Surname",
      "Looking for an",
      "Job Title",
      "Qualities/experience/ request",
      "Select Candidate",
      "Action"
   ]
   headers.forEach(label => cy.get(`table.table thead th`).contains(label, { matchCase: false }).should('be.visible'))
})

And('Add Candidate icon should get displayed', () => {
   cy.get(`div.dashboard-content a[href*='add-helper']`).should('be.visible')
})

And('User Click on add Candidate Icon', () => {
   cy.get(`div.dashboard-content a[href*='add-helper']`).should('be.visible').click()
})

And('User clicks on Submit Button', () => {
   cy.get(`input[type='submit']`)
      .should('be.visible')
      .click()
})


And(`Added User should get displaed`, () => {
   cy.log(Cypress.env('First_Name'))

   cy.get(`table.table tbody tr`)
      .contains('td', Cypress.env(`First_Name`))
      .should('be.visible')
})


And(`Edited user name should get displayed`, () => {
   cy.log(Cypress.env('First_Name_Edit'))

   cy.get(`table.table tbody tr`)
      .contains('td', Cypress.env(`First_Name_Edit`))
      .should('be.visible')
})

And("User should get a success message", () => {
   cy.contains(`A new candidate has been added successfully.`)
      .should('be.visible')
})

And("Edited message should get displayed", () => {
   cy.contains(`The candidate has been Updated successfully.`)
      .should('be.visible')
})

And('Delete message should get displayed', () => {
   cy.contains(`The helper has been Deleted successfully.`)
      .should('be.visible')
})

And("User fills the Add Agency Forms", () => {
   let labels = [
      "Last Name~TextBox",
      "Surname~TextBox",
      "Looking for an~Radio",
      "Select job~Dropdown",
      "Select candidate~Dropdown"
   ]

   cy.generateRandomString(5).then(text => {
      cy.get(`div.form-card label`)
         .contains('First Name', { matchCase: false })
         .parents('div.form-group')
         .find('input')
         .should('be.visible')
         .clear()
         .type(text)

      Cypress.env('First_Name', text);
   })

   labels.forEach(labelText => {
      let label = labelText.split("~")[0];
      let type = labelText.split("~")[1];

      cy.get(`div.form-card label`)
         .contains(label, { matchCase: false })
         .should('be.visible')
      if (type === 'TextBox') {
         cy.generateRandomString(5).then(text => {
            cy.get(`div.form-card label`)
               .contains(label, { matchCase: false })
               .parents('div.form-group')
               .find('input')
               .should('be.visible')
               .clear()
               .type(text)

            Cypress.env(label.replaceAll(' ', '_'), text)
         })
      } else if (type === 'Dropdown') {
         cy.get(`div.form-card label`)
            .contains(label, { matchCase: false })
            .parents('div.form-group')
            .find('select')
            .should('be.visible')
            .select(2)
      } else {
         cy.get(`div.form-card label`)
            .contains(label, { matchCase: false })
            .parents('div.form-group')
            .find('div.radio-row')
            .should('be.visible')

         cy.get(`div.form-card label`)
            .contains(label, { matchCase: false })
            .parents('div.form-group')
            .find('div.radio-row')
            .find('input')
            .eq(0).check({ force: true })
      }


      cy.generateRandomString(5).then(text => {
         cy.get(`div.form-card label`)
            .contains('Qualities/experience/ request', { matchCase: false })
            .parents('div.form-group')
            .find('input')
            .should('be.visible')
            .clear()
            .type(text)

         Cypress.env(label.replaceAll(' ', '_'), text)
      })
   })

})

And('Add Agency forms field should get displayed', () => {
   let labels = [
      "First Name~TextBox",
      "Last Name~TextBox",
      "Surname~TextBox",
      "Looking for an~Radio",
      "Select job~Dropdown",
      "Select candidate~Dropdown"
   ]

   labels.forEach(labelText => {
      let label = labelText.split("~")[0];
      let type = labelText.split("~")[1];

      cy.get(`div.form-card label`)
         .contains(label, { matchCase: false })
         .should('be.visible')
      if (type === 'TextBox') {
         cy.get(`div.form-card label`)
            .contains(label, { matchCase: false })
            .parents('div.form-group')
            .find('input')
            .should('be.visible')
      } else if (type === 'Dropdown') {
         cy.get(`div.form-card label`)
            .contains(label, { matchCase: false })
            .parents('div.form-group')
            .find('select')
            .should('be.visible')
      } else {
         cy.get(`div.form-card label`)
            .contains(label, { matchCase: false })
            .parents('div.form-group')
            .find('div.radio-row')
            .should('be.visible')
      }
   })
})

And("user clicks on Edit icon for added candidate", () => {
   cy.get(`table.table tbody tr`)
      .contains('td', Cypress.env(`First_Name`))
      .should('be.visible')


   cy.get(`table.table tbody tr`)
      .contains('td', Cypress.env(`First_Name`))
      .parent()
      .find(`a[href*='edit-helper']`)
      .should('be.visible')
      .click()
})

And('Deleted user should not exist', () => {
   cy.get(`body`).then($body => {
      if ($body.find('table tbody').length > 0) {
         cy.get(`table.table tbody tr`)
            .contains('td', Cypress.env(`First_Name_Edit`))
            .should('not.exist')
      } else {
         cy.get(`table.table tbody`).should('not.exist')
      }
   })
})

And(`user clicks on Delete icon for added candidate`, () => {
   cy.get(`table.table tbody tr`)
      .contains('td', Cypress.env(`First_Name_Edit`))
      .should('be.visible')


   cy.get(`table.table tbody tr`)
      .contains('td', Cypress.env(`First_Name_Edit`))
      .parent()
      .find(`a[href*='delete-helper']`)
      .should('be.visible')
      .click()
})

And("User edits first Name for Candidate", () => {
   cy.generateRandomString(5).then(text => {
      cy.get(`div.form-card label`)
         .contains('First Name', { matchCase: false })
         .parents('div.form-group')
         .find('input')
         .should('be.visible')
         .clear()
         .type(text)

      Cypress.env(`First_Name_Edit`, text)
   })
})