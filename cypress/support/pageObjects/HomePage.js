import BasePage from "./BasePage";

class HomePage extends BasePage {

    sectionHeader1() {
        return cy.get(`section#hero h1`).contains(`PROVIDING EASY AND SECURE WAY TO FIND DIRECT STAFF,CHILDCARE AND DOMESTIC WORKERS`, { matchCase: false })
    }

    footerlinks(section, text) {
        if (section === 'Our Social Media Networks') {
            return cy.get(`footer h4`).contains(section, { matchCase: false })
                .parent().find(`a[class='${text}']`)
        } else {
            return cy.get(`footer h4`).contains(section, { matchCase: false })
                .parent().find(`ul li a`)
                .contains(text, { matchCase: false })
        }
    }

    footerSection(section) {
        return cy.get(`footer h4`).contains(section, { matchCase: false })
    }

    getStartedOptions(text) {
        return cy.get(`div.row a[href*='how-helpers-world-works']`).contains(text, { matchCase: false })
    }

    whatyougetOptions(text) {
        return cy.get(`div.overview-list ul li`).contains(text, { matchCase: false })
    }

    whatyougetOptions(text) {
        return cy.get(`div.overview-list ul li`).contains(text, { matchCase: false })
    }

    faqOptions(text){
        return cy.get(`div.faq-list ul li`).contains(text,{matchCase:false})
    }

    blogsSection() {
        return cy.get(`div.row div.jobs-item`)
    }

    blogsSectionLink(text) {
        return cy.get(`div.row div.jobs-item`)
            .contains(text, { matchCase: false })
            .parent()
            .find('a')
            .contains('View Details')
    }

    reviewBlogs(){
        return cy.get(`div.owl-stage div.owl-item[class*='active']`)
    }

    questionTextBox(text,type){
        if (type==='TextBox') {
            return cy.get(`form#post-contact-form input[placeholder='${text}']`)
        } else {
            return cy.get(`form#post-contact-form textarea[placeholder='${text}']`)
        }
    }

    questionSubmitButton(){
        return cy.get(`form#post-contact-form button`).contains('Send Message',{matchCase:false})
    }

    
    emailText(){
        return cy.get(`div.email p`).contains('info@helpersworld.org',{matchCase:false})
    }

    emailHeader(){
        return cy.get(`div.email h4`).contains('Email:',{matchCase:false})
    }

    emailIcon(){
        return cy.get(`div.email svg`)
    }
}

export default HomePage