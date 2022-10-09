const https = require('https')

class BasePage {

  quickSearchBtn(btnText) {
    return cy.get(`a.btns`).contains(btnText, { matchCase: false })
  }

  quickSearchHeader(text) {
    return cy.get(`div.container h2`).contains(text, { matchCase: false })
  }

  navigationLink(text) {
    return cy.get(`ul.navbar-nav.ml-auto li a.nav-link`).contains(text, { matchCase: false })
  }

  paragraphText(text) {
    return cy.get('p').contains(text, { matchCase: false })
  }

  headerText(text) {
    return cy.get('h2,h3').contains(text, { matchCase: false })
  }

  linkText(text){
    return cy.get(`a`).contains(text)
  }

  searchSelectField(lblText){
    return cy.get(`div.form-card label[for]:not([for^='radio'])`)
    .contains(lblText,{matchCase:false})
    .parents('div.form-group')
    .find('select')
  }

  
  searchSelectLabel(lblText){
    return cy.get(`div.form-card label[for]:not([for^='radio'])`)
    .contains(lblText,{matchCase:false})
  }

  searchInputField(lblText){
    return cy.get(`div.form-card label[for]:not([for^='radio'])`)
    .contains(lblText,{matchCase:false})
    .parents('div.form-group')
    .find('input')
  }

  
  searchInputLabel(lblText){
    return cy.get(`div.form-card label[for]:not([for^='radio'])`)
    .contains(lblText,{matchCase:false})
  }

  searchRadioLabel(lblText){
    return cy.get(`div.form-card label[for][for^='radio']`)
    .contains(lblText,{matchCase:false})
  }

  searchRadioButton(lblText){
    return cy.get(`div.form-card label[for][for^='radio']`)
    .contains(lblText,{matchCase:false})
    .parent()

    .find('input')
  }
}

export default BasePage