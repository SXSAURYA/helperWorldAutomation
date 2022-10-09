@feature
Feature: Update Profile for Agency

    Scenario: Verify UI for Updated 1 View under my profile
        Given I am on Home page
        And I am on Login Page
        When User tries to login as "Agency"
        Then User should be able to login as "Agency"
        And Header text "Dashboard" for section "Dashboard" should get displayed
        And Click on "Update Profile" dashboard menu from the dashboard list
        Then Header text "Update Profile" for section "Update Profile" should get displayed
        When Click on "Update Step 1" in my profile section
        Then Update Step 1 fields and Options shouls get displayed for "Agency" under "Login information"
        And Update Step 1 fields and Options shouls get displayed for "Agency" under "Contact information"
        And Update Step 1 fields and Options shouls get displayed for "Agency" under "Primary telephone number"
        And Update Step 1 fields and Options shouls get displayed for "Agency" under "Secondary telephone number"


    Scenario: Verify UI for Updated 2 View under my profile
        Given I am on Home page
        And I am on Login Page
        When User tries to login as "Agency"
        Then User should be able to login as "Agency"
        And Header text "Dashboard" for section "Dashboard" should get displayed
        And Click on "Update Profile" dashboard menu from the dashboard list
        Then Header text "Update Profile" for section "Update Profile" should get displayed
        When Click on "Update Step 2" in my profile section
        Then Update Step 2 fields and Options shouls get displayed for "Agency" under "Agency information"


    Scenario: Verify UI for Updated 3 View under my profile
        Given I am on Home page
        And I am on Login Page
        When User tries to login as "Agency"
        Then User should be able to login as "Agency"
        And Header text "Dashboard" for section "Dashboard" should get displayed
        And Click on "Update Profile" dashboard menu from the dashboard list
        Then Header text "Update Profile" for section "Update Profile" should get displayed
        When Click on "Update Step 3" in my profile section
        Then Update Step 3 fields and Options shouls get displayed for "Agency"