import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor'
import HomePage from '../../../support/pageObjects/HomePage'
import SiteMapPage from '../../../support/pageObjects/SiteMapPage'
const homePage = new HomePage()
const sitemappage = new SiteMapPage();




And("Blogs option should get displayed in the Page", () => {
    cy.get(`#blog div.row div[class^='col-lg']`)
        .should('have.length.greaterThan', 0)
})

And("Main Home menu should get displayed", () => {
    sitemappage.homeMainMenu().should('be.visible')
})

And("toggle menu should get displayed", () => {
    let toggleMenus = [];
    toggleMenus.push('Recruiter/Host Family')
    toggleMenus.push('Jobseeker')
    toggleMenus.push('Agency')
    toggleMenus.forEach(menu => sitemappage.toggleMenu(menu))
})

And("Non-toggle menu should get displayed", () => {
    let nontoggleMenus = [];
    nontoggleMenus.push('Home')
    nontoggleMenus.push('Services')

    nontoggleMenus.forEach(menu => sitemappage.nontoggleMenu(menu))
})

And("submenu for {string} should displayed", (text) => {
    sitemappage.toggleMenu(text).should('be.visible')
        .click();
    let subMenus = [];
    switch (text) {
        case 'Jobseeker':
            subMenus.push('Become a jobseeker')
            subMenus.push('Find an employer/ host family')
            subMenus.push('Find agency')
            subMenus.push('Register as a jobseeker')
            subMenus.push('Premium membership')
            subMenus.push('Online safety')
            break;
        case 'Recruiter/Host Family':
            subMenus.push('Become a host family')
            subMenus.push('Find an helper/employee')
            subMenus.push('Find agency')
            subMenus.push('Register as a employer/host family')
            subMenus.push('Premium membership')
            subMenus.push('Online safety')
            break;
        case 'Agency':
            subMenus.push('Do you have an agency')
            subMenus.push('Find an employers/ host family')
            subMenus.push('Find jobseekers')
            subMenus.push('Register as an agency')
            subMenus.push('Premium membership')
            subMenus.push('Online safety')
            break;
        default:
            break;
    }
    subMenus.forEach(subMenu => sitemappage.subMenus(text, subMenu))
})

And(`Click on {string} subMenu under {string} main menu`, (subMenu, mainMenu) => {
    sitemappage.toggleMenu(mainMenu).should('be.visible')
        .click();

    sitemappage.subMenus(mainMenu, subMenu).should('be.visible').click()
})

And('Premium Membership tiles should get displayed', () => {
    cy.get(`section.premium-plan div[class='box mb-3 mt-3']`)
        .should('have.length.greaterThan', 0)
})

And(`Different Paragraph section should get displayed for {string}`, (page) => {

    let paragraphTexts;
    if (page === 'Online Safety') {
        paragraphTexts = ["Your Safety and security are important to us", "To keep you safe we provide", "Profile Checks", "Profile Protection", "Report Profile", "How to be safe when hiring at Helpers’ World", "Interview", "Background checks", "Be aware of scam and fraudulent people", "Communication and Attention to details", "Contact Us"]
    } else if (page === 'Terms and Conditions') {
        paragraphTexts = [
            "Terms and Conditions",
            "You are",
            "Definitions",
            "Our Website",
            "Children on Our Website",
            "Duties and responsibilities of users",
            "All Helper’s World users must not do the following",
            "Service information",
            "Warranties",
            "Disclaimers and limitation of liability",
            "Breach of Terms and Conditions contract",
            "Applicable Law / Final Provisions"
        ]
    } else {
        paragraphTexts = [
            "Privacy Notice",
            "Introduction",
            "Data Protection",
            "What is personal data?",
            "Visibility of your personal data",
            "Contact form for partner agencies and partner institutions",
            "Messenger feature",
            "If you do not provide personal information we need",
            "Information we process because we have a contractual obligation with you",
            "Information we process with your consent",
            "Information we process for the purposes of legitimate interests",
            "Information we process because we have a legal obligation",
            "Specific uses of information you provide to us",
            "Complaints regarding content on our website",
            "Information relating to your method of payment",
            "Job application and employment",
            "Affiliate and business partner information",
            "Cookies",
            "Our use of re-marketin",
            "Disclosure and sharing of your information",
            "Information we obtain from third parties",
            "Your duty to inform us of changes",
            "Access to your personal information",
            "Removal of your information",
            "Use of site by children",
            "Encryption of data sent between us",
            "How you can complain",
            "Retention period for personal data",
            "Review of this privacy poli",
            "Compliance with the law",
            "Verification of your information"
        ]
    }

    paragraphTexts.forEach(paraText => cy.get(`div.editor-text p strong`)
        .contains(paraText, { matchCase: false })
        .should('be.visible'))
})