@feature
Feature: Manage Candidates Feature for Agency


    Scenario: Verify whether user is able to add Agency Candidate or not
        Given I am on Home page
        And I am on Login Page
        When User tries to login as "Agency"
        Then User should be able to login as "Agency"
        And Header text "Dashboard" for section "Dashboard" should get displayed
        And Click on "Manage Candidate's" dashboard menu from the dashboard list
        And Header text "Candidate's profile list" for section "Manage Candidate's" should get displayed
        When User Click on add Candidate Icon
        Then Header text "Add Agency’s Candidate " for section "Add Agency Candidate" should get displayed
        When User fills the Add Agency Forms
        And User clicks on Submit Button
        Then User should get a success message


    Scenario: Verify whether user is able see the added add Agency Candidate or not
        Given I am on Home page
        And I am on Login Page
        When User tries to login as "Agency"
        Then User should be able to login as "Agency"
        And Header text "Dashboard" for section "Dashboard" should get displayed
        And Click on "Manage Candidate's" dashboard menu from the dashboard list
        And Header text "Candidate's profile list" for section "Manage Candidate's" should get displayed
        And Added User should get displaed

    Scenario: Verify whether user is able see the edit the add Agency Candidate or not
        Given I am on Home page
        And I am on Login Page
        When User tries to login as "Agency"
        Then User should be able to login as "Agency"
        And Header text "Dashboard" for section "Dashboard" should get displayed
        And Click on "Manage Candidate's" dashboard menu from the dashboard list
        And Header text "Candidate's profile list" for section "Manage Candidate's" should get displayed
        When user clicks on Edit icon for added candidate
        And User edits first Name for Candidate
        And User clicks on Submit Button
        Then Edited message should get displayed

    Scenario: Verify whether edited name is displaying properly or not
        Given I am on Home page
        And I am on Login Page
        When User tries to login as "Agency"
        Then User should be able to login as "Agency"
        And Header text "Dashboard" for section "Dashboard" should get displayed
        And Click on "Manage Candidate's" dashboard menu from the dashboard list
        And Header text "Candidate's profile list" for section "Manage Candidate's" should get displayed
        Then Edited user name should get displayed

    Scenario: Verify whether user is able to delete the added user or not
        Given I am on Home page
        And I am on Login Page
        When User tries to login as "Agency"
        Then User should be able to login as "Agency"
        And Header text "Dashboard" for section "Dashboard" should get displayed
        And Click on "Manage Candidate's" dashboard menu from the dashboard list
        And Header text "Candidate's profile list" for section "Manage Candidate's" should get displayed
        When user clicks on Delete icon for added candidate
        Then Delete message should get displayed
        And Deleted user should not exist
