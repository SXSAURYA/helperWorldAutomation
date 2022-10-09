import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor'
import HomePage from '../../../support/pageObjects/HomePage'
const homePage = new HomePage()

Then('Type of Agency label and input text box should get displayed',()=>{
   homePage.searchInputField('Type of Agency').should('be.visible')
   homePage.searchInputLabel('Type of Agency').should('be.visible')
})