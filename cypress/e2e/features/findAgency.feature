@feature
Feature: Anonymous User : Home : Find an Agency

    @regression
    Scenario: Verify UI and navigation for Find Agencies
        Given I am on Home page
        When I click on 'Find Agency' link
        Then User should navigates to Quick search for 'agencies'
        And "I live in" select label and dropdown should get displayed
        And "Select job" select label and dropdown should get displayed
        And "State" select label and dropdown should get displayed
        And Type of Agency label and input text box should get displayed
        And Search button should get displayed


    @regression
    Scenario: Verify whether user is able to search agencies or not
        Given I am on Home page
        When I click on 'Find Agency' link
        Then User should navigates to Quick search for 'agencies'
        When select "Nigeria" option from "I live in" dropdown
        And I click on search button
        Then Search should consist of some result