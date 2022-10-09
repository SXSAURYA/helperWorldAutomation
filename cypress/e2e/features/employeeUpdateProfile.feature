@feature
Feature: Update Profile for Employee

    Scenario: Verify UI for Updated 1 View under my profile
        Given I am on Home page
        And I am on Login Page
        When User tries to login as "Employee"
        Then User should be able to login as "Employee"
        And Header text "Dashboard" for section "Dashboard" should get displayed
        And Click on "Update Profile" dashboard menu from the dashboard list
        Then Header text "Update Profile" for section "Update Profile" should get displayed
        When Click on "Update Step 1" in my profile section
        Then Update Step 1 fields and Options shouls get displayed for "Employee" under "About Me"
        And Update Step 1 fields and Options shouls get displayed for "Employee" under "Contact details"

    Scenario: Verify UI for Updated 2 View under my profile
        Given I am on Home page
        And I am on Login Page
        When User tries to login as "Employee"
        Then User should be able to login as "Employee"
        And Header text "Dashboard" for section "Dashboard" should get displayed
        And Click on "Update Profile" dashboard menu from the dashboard list
        Then Header text "Update Profile" for section "Update Profile" should get displayed
        When Click on "Update Step 2" in my profile section
        Then Update Step 2 fields and Options shouls get displayed for "Employee" under "My Search"
        Then Update Step 2 fields and Options shouls get displayed for "Employee" under "Hws, further questions"
        Then Update Step 2 fields and Options shouls get displayed for "Employee" under "When would you like to start working."
        Then Update Step 2 fields and Options shouls get displayed for "Employee" under "How long would you like to stay with your employer?"


    Scenario: Verify UI for Updated 3 View under my profile
        Given I am on Home page
        And I am on Login Page
        When User tries to login as "Employee"
        Then User should be able to login as "Employee"
        And Header text "Dashboard" for section "Dashboard" should get displayed
        And Click on "Update Profile" dashboard menu from the dashboard list
        Then Header text "Update Profile" for section "Update Profile" should get displayed
        When Click on "Update Step 3" in my profile section
        Then Update Step 3 fields and Options shouls get displayed for "Employee"