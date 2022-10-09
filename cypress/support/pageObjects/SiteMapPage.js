import { fa } from "faker/lib/locales";
import BasePage from "./BasePage";

class SiteMapPage extends BasePage {

    homeMainMenu() {
        return cy.get(`#main a[href*='Web']`)
    }

    toggleMenu(text) {
        return cy.get(`div#Web ul li a[data-toggle='collapse']`)
            .contains(text, { matchCase: false })
    }

    nontoggleMenu(text) {
        return cy.get(`div#Web ul li a:not([data-toggle='collapse'])`)
            .contains(text, { matchCase: false })
    }

    subMenus(text, subMenu) {
        return cy.get(`div#Web ul li a[data-toggle='collapse']`)
            .contains(text, { matchCase: false })
            .parent()
            .siblings('ul')
            .find(`a:not([data-toggle='collapse'])`)
            .contains(subMenu, { matchCase: false })
    }
}

export default SiteMapPage