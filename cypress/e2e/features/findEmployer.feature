@feature
Feature: Anonymous User : Home : Find and Employeer

    @regression
    Scenario: Verify UI and navigation of Find Employer
        Given I am on Home page
        When I click on 'Find an Employer' link
        Then User should navigates to Quick search for 'employers/host family'
        And "We are based in" select label and dropdown should get displayed
        And "Select job" select label and dropdown should get displayed
        And "Male" label and radio button should get displayed
        And "Female" label and radio button should get displayed
        And "We are looking for employers/Host families in" select label and dropdown should get displayed
        And "Earliest Start Date" select label and dropdown should get displayed
        And "Latest Date" select label and dropdown should get displayed
        And "State" select label and dropdown should get displayed
        And Search button should get displayed


    @regression
    Scenario: Verify whether user is able to searh employer
        Given I am on Home page
        When I click on 'Find an Employer' link
        Then User should navigates to Quick search for 'employers/host family'
        When select "Nigeria" option from "We are based in" dropdown
        And select "Nigeria" option from "We are looking for employers/Host families in" dropdown
        And I click on search button
        Then Search should consist of some result