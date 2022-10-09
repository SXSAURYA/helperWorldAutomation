@feature
Feature: Anonymous User : Home : Find a Worker

    @regression
    Scenario: Verify UI and navigation for Find a worker
        Given I am on Home page
        When I click on 'Find a Worker' link
        Then User should navigates to Quick search for 'employee/jobseeker'
        And "We are looking for a candidate from" select label and dropdown should get displayed
        And "Male candidate" label and radio button should get displayed
        And "Female candidate" label and radio button should get displayed
        And "Earliest Start Date" select label and dropdown should get displayed
        And "Latest Date" select label and dropdown should get displayed
        And "Maximum stay" select label and dropdown should get displayed
        And "Maximum stay" select label and dropdown should get displayed
        And "State" select label and dropdown should get displayed
        And Search button should get displayed



    @regression
    Scenario: Verify whether user is able to searh Employees or not
        Given I am on Home page
        When I click on 'Find a Worker' link
        Then User should navigates to Quick search for 'employee/jobseeker'
        When select "Nigeria" option from "We are looking for a candidate from" dropdown
        And I click on search button
        Then Search should consist of some result