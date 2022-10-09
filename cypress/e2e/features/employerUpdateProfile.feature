@feature
Feature: Update Profile for Employer

    Scenario: Verify UI for Updated 1 View under my profile
        Given I am on Home page
        And I am on Login Page
        When User tries to login as "Employer"
        Then User should be able to login as "Employer"
        And Header text "Dashboard" for section "Dashboard" should get displayed
        And Click on "Update Profile" dashboard menu from the dashboard list
        Then Header text "Update Profile" for section "Update Profile" should get displayed
        When Click on "Update Step 1" in my profile section
        Then Update Step 1 fields and Options shouls get displayed for "Employer" under "About Me"
        And Update Step 1 fields and Options shouls get displayed for "Employer" under "Contact details"

    Scenario: Verify UI for Updated 2 View under my profile
        Given I am on Home page
        And I am on Login Page
        When User tries to login as "Employer"
        Then User should be able to login as "Employer"
        And Header text "Dashboard" for section "Dashboard" should get displayed
        And Click on "Update Profile" dashboard menu from the dashboard list
        Then Header text "Update Profile" for section "Update Profile" should get displayed
        When Click on "Update Step 2" in my profile section
        Then Update Step 2 fields and Options shouls get displayed for "Employer" under "My Search"
        Then Update Step 2 fields and Options shouls get displayed for "Employer" under "When would you like you candidate to start work."
        Then Update Step 2 fields and Options shouls get displayed for "Employer" under "How long would you like your candidate to stay?"


    Scenario: Verify UI for Updated 3 View under my profile
        Given I am on Home page
        And I am on Login Page
        When User tries to login as "Employer"
        Then User should be able to login as "Employer"
        And Header text "Dashboard" for section "Dashboard" should get displayed
        And Click on "Update Profile" dashboard menu from the dashboard list
        Then Header text "Update Profile" for section "Update Profile" should get displayed
        When Click on "Update Step 3" in my profile section
        Then Update Step 3 fields and Options shouls get displayed for "Employer"


    Scenario: Verify UI for Upload Additional View under my profile
        Given I am on Home page
        And I am on Login Page
        When User tries to login as "Employer"
        Then User should be able to login as "Employer"
        And Header text "Dashboard" for section "Dashboard" should get displayed
        And Click on "Update Profile" dashboard menu from the dashboard list
        Then Header text "Update Profile" for section "Update Profile" should get displayed
        When Click on "Upload additional pictures" in my profile section
        Then Upload Additional Picture fields and Options shouls get displayed for "Employer"