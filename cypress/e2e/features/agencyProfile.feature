@feature
Feature: My Profile Step 1 View

    Scenario: Verify UI for Step 1 View under my profile
        Given I am on Home page
        And I am on Login Page
        When User tries to login as "Agency"
        Then User should be able to login as "Agency"
        And Header text "Dashboard" for section "Dashboard" should get displayed
        And Click on "My Profile" dashboard menu from the dashboard list
        Then Header text "My Profile" for section "My Profile" should get displayed
        When Click on "Step 1 View" in my profile section
        Then labels for "Step 1" should get displayed for "Agency"


        
    Scenario: Verify UI for Step 2 View under my profile
        Given I am on Home page
        And I am on Login Page
        When User tries to login as "Agency"
        Then User should be able to login as "Agency"
        And Header text "Dashboard" for section "Dashboard" should get displayed
        And Click on "My Profile" dashboard menu from the dashboard list
        Then Header text "My Profile" for section "My Profile" should get displayed
        When Click on "Step 2 View" in my profile section
        Then labels for "Step 2" should get displayed for "Agency"


        
    Scenario: Verify UI for Step 3 View under my profile
        Given I am on Home page
        And I am on Login Page
        When User tries to login as "Agency"
        Then User should be able to login as "Agency"
        And Header text "Dashboard" for section "Dashboard" should get displayed
        And Click on "My Profile" dashboard menu from the dashboard list
        Then Header text "My Profile" for section "My Profile" should get displayed
        When Click on "Step 3 View" in my profile section
        Then labels for "Step 3" should get displayed for "Agency"


        
    Scenario: Verify UI for profile Disabled tab View under my profile
        Given I am on Home page
        And I am on Login Page
        When User tries to login as "Agency"
        Then User should be able to login as "Agency"
        And Header text "Dashboard" for section "Dashboard" should get displayed
        And Click on "My Profile" dashboard menu from the dashboard list
        Then Header text "My Profile" for section "My Profile" should get displayed
        When Click on "Profile Disable" in my profile section
        Then UI for profile disable tab should get displayed as expected


    Scenario: Verify whether user is able to disable the profile or not
        Given I am on Home page
        And I am on Login Page
        When User tries to login as "Agency"
        Then User should be able to login as "Agency"
        And Header text "Dashboard" for section "Dashboard" should get displayed
        And Click on "My Profile" dashboard menu from the dashboard list
        Then Header text "My Profile" for section "My Profile" should get displayed
        When Click on "Profile Disable" in my profile section
        And User "disable" the profile
        Then User should get "disable" message


    Scenario: Verify whether user is able to enable the profile or not
        Given I am on Home page
        And I am on Login Page
        When User tries to login as "Agency"
        Then User should be able to login as "Agency"
        And Header text "Dashboard" for section "Dashboard" should get displayed
        And Click on "My Profile" dashboard menu from the dashboard list
        Then Header text "My Profile" for section "My Profile" should get displayed
        When Click on "Profile Disable" in my profile section
        And User "enable" the profile
        Then User should get "enable" message