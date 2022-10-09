import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor'


And("favorites should get added for {string}", (type) => {
    cy.get(`div.profile-card div.pc-info h3`)
        .eq(0).then($el => {
            let etx = $el.text().trim()
            cy.log('first fav is ' + etx + "==" + Cypress.env(`${type}_fav`))
        })
})


And("I delete added favorite for {string}", (type) => {
    cy.get(`div.profile-card div.pc-info h3`)
        .eq(0).then($el => {
            let etx = $el.text().trim()
            cy.log('first fav is ' + etx + "==" + Cypress.env(`${type}_fav`)+"===")
        })

    cy.get(`div.profile-card`)
        .eq(0)
        .find(`a[class^='confirmDeleteBtn']`)
        .should('be.visible')
        .click()
})

And("Added favorites should not exist for {string}", (type) => {
    cy.get(`body`).then($body => {
        if ($body.find(`div.profile-card`).length === 0) {
            expect($body.find(`div.profile-card`).length).to.equal(0)
        } else {
            cy.get(`div.profile-card div.pc-info h3`)
                .contains(Cypress.env(`${type}_fav`), { matchCase: false })
                .should('not.exist')
        }
    })
})