@feature
Feature: Dashboard validation for Agency

    Scenario: Verify whether user is able to see the dashboard feature
        Given I am on Home page
        And I am on Login Page
        When User tries to login as "Agency"
        Then User should be able to login as "Agency"
        And Header text "Dashboard" for section "Dashboard" should get displayed
        And Header text "Transaction Details" for section "Dashboard" should get displayed
        And Column Name of transaction details for "Agency" user should get displayed