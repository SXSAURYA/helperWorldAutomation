@feature
Feature: Do you have any Question validation

    Scenario Outline:  Verify user is able to send query or not
        Given I am on Home page
        Then Header text "Do you have any questions?" for section "Do you have any questions?" should get displayed
        When User fills the form
        Then User should get an thankyou message