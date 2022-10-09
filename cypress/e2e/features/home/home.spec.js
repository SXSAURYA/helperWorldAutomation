import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor'
import HomePage from '../../../support/pageObjects/HomePage'
const homePage = new HomePage()


Then('User should be able to see the all the navigation links {string}', (text) => {
    const navLinks = text.split(',')
    navLinks.forEach(element => {
        cy.log(`checking for ${element}`)
        homePage.navigationLink(element).should('be.visible')
    });
})

And(`{string} section links {string} should be visible`, (text1, text2) => {
    const footerLinks = text2.split(',');
    footerLinks.forEach(element => {
        cy.log(`checking for ${element} under section ${text1}`)
        homePage.footerlinks(text1, element).should('be.visible')
    })
})

Then(`What you get options should get displayed`, () => {
    cy.fixture("expectedText").then(data => {
        let jsonArray = data.wht_you_get_Options;
        jsonArray.forEach(k => homePage.whatyougetOptions(k).should('exist'))
    })
})

And("All four option {string},{string}, {string},{string} should get displayed", (option1, option2, option3, option4) => {
  let options = []
  options.push(option1)
  options.push(option2)
  options.push(option3)
  options.push(option4)
  options.forEach(ele=>homePage.getStartedOptions(ele).should('exist'))
})

And(`Blogs option should get displayed`,()=>{
   homePage.blogsSection().should('have.length.greaterThan',0)
})


And(`What family says about us sections should get displayed`,()=>{
    homePage.reviewBlogs().should('have.length.greaterThan',0)
 })

 And(`Frequently asked Question options should get displayed`,()=>{
    cy.fixture("expectedText").then(data => {
        let jsonArray = data.faq_options;
        jsonArray.forEach(k => homePage.faqOptions(k).should('exist'))
    })
 })

 And(`Do you have any questions form should get displayed`,()=>{
    let formsFields = [];
    formsFields.push("Your Name~TextBox")
    formsFields.push("Your Email~TextBox")
    formsFields.push("Subject~TextBox")
    formsFields.push("Message~TextArea")

    formsFields.forEach(element => {
        let text = element.split("~")
        homePage.questionTextBox(text[0],text[1]).should('be.visible')
    });
    homePage.questionSubmitButton().should('be.visible')
 })


 And("Email details should get displayed",()=>{
   homePage.emailHeader().should('be.visible')
   homePage.emailText().should('be.visible')
   homePage.emailIcon().should('be.visible')
 })