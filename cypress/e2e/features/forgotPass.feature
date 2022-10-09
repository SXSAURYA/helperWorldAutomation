@feature
Feature: Forgot password


    Scenario: Verify whether user is able to navigate to respective page on click on link Forgot password?
        Given I am on Home page
        And I am on Login Page
        When user click on "Forgot password?" link
        Then URL should consist of "password/reset"

    Scenario: Verify whether UI for respective page on click on link "<link>"
        Given I am on Home page
        And I am on Login Page
        When user click on "Forgot password?" link
        Then URL should consist of "password/reset"
        And Header text "Reset Password" for section "Forgot password?" should get displayed
        And user should be able to see field related to "Forgot password?"