@feature
Feature: Dashboard validation for Employer

    Scenario: Verify whether user is able to see the dashboard feature
        Given I am on Home page
        And I am on Login Page
        When User tries to login as "Employer"
        Then User should be able to login as "Employer"
        And Header text "Dashboard" for section "Dashboard" should get displayed
        And Header text "Transaction Details" for section "Dashboard" should get displayed
        And Column Name of transaction details for "Employer" user should get displayed