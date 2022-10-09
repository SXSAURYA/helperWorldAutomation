import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor'
import HomePage from '../../support/pageObjects/HomePage'
const homePage = new HomePage()

Then('User should navigates to Quick search for {string}', (text) => {
   homePage.quickSearchHeader(text).should('be.visible')
})


Then('User should navigates to Quick search for {string} as Agenncy User', (text) => {
   homePage.quickSearchHeader(text).should('be.visible')
})

And("{string} select label and dropdown should get displayed", (text) => {
   homePage.searchSelectLabel(text).should('be.visible')
   homePage.searchSelectField(text).should((text === 'State' || text === 'Select job') ? 'exist' : 'be.visible')
})

And("{string} label and radio button should get displayed", (text) => {
   homePage.searchRadioButton(text).should('exist')
   homePage.searchRadioLabel(text).should('be.visible')
})

And("Search button should get displayed", () => {
   cy.get(`div.form-card button`)
      .contains('Search', { matchCase: false })
      .should('be.visible')
})

And("I click on search button", () => {
   cy.get(`div.form-card button`)
      .contains('Search', { matchCase: false })
      .should('be.visible')
   cy.get(`div.form-card button`)
      .contains('Search', { matchCase: false })
      .click()
      cy.wait(2000)
      Cypress.on('uncaught:exception', (err, runnable) => {
         // returning false here prevents Cypress from
         // failing the test
         return false
       })
})

And("select {string} option from {string} dropdown", (text, dropdown) => {
   homePage.searchSelectField(dropdown).should('be.visible')
   homePage.searchSelectField(dropdown).select(text, { force: true })
})

And("check {string} option from {string} radio button", (option, radiobutton) => {
   homePage.searchRadioButton(text).should('exist')
   homePage.searchRadioButton(text).check({ force: true })
})

And('Search should consist of some result',()=>{
   cy.get(`div.container div.row div.profile-card`).should('have.length.greaterThan',0)
})


And('Select one of the search result from results for {string}',(type)=>{

   cy.get(`div.container div.row div.profile-card`)
   .eq(0)
   .find(`div.pc-info a[href*='find/details']`)
   .then($el=>{
      let text = $el.text().trim()
      cy.log(`${text} has been selected from result`)
      Cypress.env(`${type}_fav`,text)
   })
   cy.wait(2000)
   cy.get(`div.container div.row div.profile-card`)
   .eq(0)
   .find(`a.addFavorite`)
   .should('be.visible')
   .click({force:true})
   cy.wait(2000)
})