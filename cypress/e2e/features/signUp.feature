@feature
Feature: Sign Up feature


    Scenario: Verify whether user is able to navigate to respective page on click on link Sign Up
        Given I am on Home page
        And I am on Login Page
        When user click on "Sign Up" link
        Then URL should consist of "registration-type"

    Scenario: Verify whether UI for respective page on click on link Sign Up
        Given I am on Home page
        And I am on Login Page
        When user click on "Sign Up" link
        Then URL should consist of "registration-type"
        And Header text "What you get as a registered user at Helper's World" for section "Sign Up>" should get displayed
        And user should be able to see field related to "Sign Up"

    Scenario: Verify whether Navigation for Employer Host Family Registration
        Given I am on Home page
        And I am on Login Page
        When user click on "Sign Up" link
        Then URL should consist of "registration-type"
        And Header text "What you get as a registered user at Helper's World" for section "Sign Up" should get displayed
        And User clicks on "Employer/ host family" icon
        And Header text "Employer/host family" for section "Sign Up" should get displayed


    Scenario: Verify whether Navigation for Jobseeker Registration
        Given I am on Home page
        And I am on Login Page
        When user click on "Sign Up" link
        Then URL should consist of "registration-type"
        And Header text "What you get as a registered user at Helper's World" for section "Sign Up" should get displayed
        And User clicks on "Jobseeker" icon
        And Header text "Jobseeker Registration" for section "Jobseeker" should get displayed


    Scenario: Verify whether Navigation for Agency Registration
        Given I am on Home page
        And I am on Login Page
        When user click on "Sign Up" link
        Then URL should consist of "registration-type"
        And Header text "What you get as a registered user at Helper's World" for section "Sign Up" should get displayed
        And User clicks on "Agency" icon
        And Header text "Agency Registration" for section "Agency" should get displayed
