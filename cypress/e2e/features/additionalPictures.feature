@feature
Feature: Additional Pictures feature

    Scenario Outline: Verify UI for Additional Pictures for "<type>"
        Given I am on Home page
        And I am on Login Page
        When User tries to login as "<type>"
        Then User should be able to login as "<type>"
        And Header text "Dashboard" for section "Dashboard" should get displayed
        And Click on "Additional Pictures" dashboard menu from the dashboard list
        And Header text "Image Gallery" for section "Additional Pictures" should get displayed
        Examples:
            | type     |
            | Employee |
            | Employer |


    Scenario Outline: Verify Navigation to Upload Additional Picture for "<type>"
        Given I am on Home page
        And I am on Login Page
        When User tries to login as "<type>"
        Then User should be able to login as "<type>"
        And Header text "Dashboard" for section "Dashboard" should get displayed
        And Click on "Additional Pictures" dashboard menu from the dashboard list
        And Header text "Image Gallery" for section "Additional Pictures" should get displayed
        When User clicks on Add picture Icon
        Then Upload Additional Picture fields and Options shouls get displayed for "<type>"
        Examples:
            | type     |
            | Employee |
            | Employer |