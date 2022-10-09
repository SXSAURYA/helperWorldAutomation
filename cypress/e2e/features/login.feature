@feature
Feature: Login as different user validation

    Scenario Outline: Verify whether user is able to login as "<type>" user
        Given I am on Home page
        And I am on Login Page
        When User tries to login as "<type>"
        Then User should be able to login as "<type>"
        When User logout from application
        Then User should reach to login screen

        Examples:
            | type     |
            | Employee |
            | Employer |
            | Agency   |