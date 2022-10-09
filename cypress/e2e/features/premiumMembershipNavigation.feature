@feature
Feature: Premium Membership Navigation feature

    Scenario Outline: Verify UI whether user is able to navigate to "<tab>" for "<type>"
        Given I am on Home page
        And I am on Login Page
        When User tries to login as "<type>"
        Then User should be able to login as "<type>"
        And Header text "Dashboard" for section "Dashboard" should get displayed
        And Click on "<tab>" dashboard menu from the dashboard list
        Then Header text "<header>" for section "<tab>" should get displayed
        Examples:
            | type     | tab                | header                        |
            | Employee | Profile Boost      | Profile Boost                 |
            | Employer | Premium Membership | Recruiter/Family Premium Plan |
            | Agency   | Premium Membership | Agency Premium Plan           |