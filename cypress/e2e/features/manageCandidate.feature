@feature
Feature: Manage Candidates Feature for Agency

    Scenario: Verify Navigation to Manage Candidates
        Given I am on Home page
        And I am on Login Page
        When User tries to login as "Agency"
        Then User should be able to login as "Agency"
        And Header text "Dashboard" for section "Dashboard" should get displayed
        And Click on "Manage Candidate's" dashboard menu from the dashboard list
        And Header text "Candidate's profile list" for section "Manage Candidate's" should get displayed

    Scenario: Verify Default UI for Manage Candidates
        Given I am on Home page
        And I am on Login Page
        When User tries to login as "Agency"
        Then User should be able to login as "Agency"
        And Header text "Dashboard" for section "Dashboard" should get displayed
        And Click on "Manage Candidate's" dashboard menu from the dashboard list
        And Header text "Candidate's profile list" for section "Manage Candidate's" should get displayed
        And Columns for Manage Candidate Table should get displayed
        And Add Candidate icon should get displayed



    Scenario: Verify Navigation to Add Candidate Page
        Given I am on Home page
        And I am on Login Page
        When User tries to login as "Agency"
        Then User should be able to login as "Agency"
        And Header text "Dashboard" for section "Dashboard" should get displayed
        And Click on "Manage Candidate's" dashboard menu from the dashboard list
        And Header text "Candidate's profile list" for section "Manage Candidate's" should get displayed
        When User Click on add Candidate Icon
        Then Header text "Add Agency’s Candidate " for section "Add Agency Candidate" should get displayed


    Scenario: Verify UI for Add Agency Page
        Given I am on Home page
        And I am on Login Page
        When User tries to login as "Agency"
        Then User should be able to login as "Agency"
        And Header text "Dashboard" for section "Dashboard" should get displayed
        And Click on "Manage Candidate's" dashboard menu from the dashboard list
        And Header text "Candidate's profile list" for section "Manage Candidate's" should get displayed
        When User Click on add Candidate Icon
        Then Header text "Add Agency’s Candidate " for section "Add Agency Candidate" should get displayed
        And Add Agency forms field should get displayed