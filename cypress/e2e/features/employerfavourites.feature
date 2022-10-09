@feature
Feature: Verify Favorites Feature for Employer

    Scenario: Verify UI for Favorites section for Employee
        Given I am on Home page
        And I am on Login Page
        When User tries to login as "Employer"
        Then User should be able to login as "Employer"
        And Header text "Dashboard" for section "Dashboard" should get displayed
        And Click on "Favourites" dashboard menu from the dashboard list
        And Header text "My Favourites" for section "Dashboard" should get displayed

    Scenario: Verify whether user is able to add favorites or not
        Given I am on Home page
        And I am on Login Page
        When User tries to login as "Employer"
        Then User should be able to login as "Employer"
        And I am on Home page
        When I click on 'Find a Worker' link
        Then User should navigates to Quick search for 'employee/jobseeker'
        When select "Nigeria" option from "We are looking for a candidate from" dropdown
        And I click on search button
        Then Search should consist of some result
        And Select one of the search result from results for "Employer"


    Scenario: Verify whether user is able to see added favourite in favorite screen or not
        Given I am on Home page
        And I am on Login Page
        When User tries to login as "Employer"
        Then User should be able to login as "Employer"
        And Click on "Favourites" dashboard menu from the dashboard list
        And Header text "My Favourites" for section "Dashboard" should get displayed
        And favorites should get added for "Employer"


    Scenario: Verify whether user is able to delete the added favorites
        Given I am on Home page
        And I am on Login Page
        When User tries to login as "Employer"
        Then User should be able to login as "Employer"
        And Header text "Dashboard" for section "Dashboard" should get displayed
        And Click on "Favourites" dashboard menu from the dashboard list
        And Header text "My Favourites" for section "Dashboard" should get displayed
        When I delete added favorite for "Employer"
        Then Added favorites should not exist for "Employer"