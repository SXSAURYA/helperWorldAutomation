@feature
Feature: Verify Messages feature

    Scenario Outline: Verify UI for Messages section for "<type>"
        Given I am on Home page
        And I am on Login Page
        When User tries to login as "<type>"
        Then User should be able to login as "<type>"
        And Header text "Dashboard" for section "Dashboard" should get displayed
        And Click on "Messages" dashboard menu from the dashboard list
        Then Verify the UI for Messages for "<type>"
        Examples:
            | type     |
            | Employee |
            | Employer |
            | Agency   |