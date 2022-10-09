@feature
Feature: verify change password

    Scenario Outline: Verify UI for Change password for "<type>"
        Given I am on Home page
        And I am on Login Page
        When User tries to login as "<type>"
        Then User should be able to login as "<type>"
        And Header text "Dashboard" for section "Dashboard" should get displayed
        And Click on "Change Password" dashboard menu from the dashboard list
        Then Header text "Change Password" for section "Change Password" should get displayed
        Then Change Password labels and text boxes should get dislayed
        Examples:
            | type     |
            | Employee |
            | Employer |
            | Agency   |