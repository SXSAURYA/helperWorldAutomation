import BasePage from "./BasePage";

class feedBackPage extends BasePage {
    feedBackTextBox(text,type){
        if (type==='TextBox') {
            return cy.get(`form#post-feedback-form input[placeholder='${text}']`)
        } else {
            return cy.get(`form#post-feedback-form textarea[placeholder='${text}']`)
        }
    }

    feedBackSubmitButton(){
        return cy.get(`form#post-feedback-form button`).contains('Submit',{matchCase:false})
    }

    startRatingIcon(){
        return cy.get('span.star-rating')
    }
}

export default feedBackPage