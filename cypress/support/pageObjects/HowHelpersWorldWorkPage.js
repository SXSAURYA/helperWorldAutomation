import BasePage from "./BasePage";

class HowHelpersWorldWorkPage extends BasePage {

    header(){
        return cy.get(`div.section-title h2`).contains('How Helper World works',{matchCase:false})
    }

    pointText(sectionHeader,text){
        return cy.get(`div.timeline h3`)
        .contains(sectionHeader,{matchCase:false})
        .parents('div.timeline-content')
        .find('ul li')
        .contains(text,{matchCase:false})
    }
}

export default HowHelpersWorldWorkPage