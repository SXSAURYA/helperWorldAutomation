@feature
Feature: What Host Families say about us validation

    Scenario:  Verify the UI for feedback page on click of Write a Review
        Given I am on Home page
        Then Header text "What Host Families say about us" for section "What Host Families say about us" should get displayed
        When I click on Write a Review link
        Then Header text "Feedback" for section "Write a Review" should get displayed
        And Forms field should get displayed

    Scenario:  Verify the user is able to submit a form or not
        Given I am on Home page
        Then Header text "What Host Families say about us" for section "What Host Families say about us" should get displayed
        When I click on Write a Review link
        Then Header text "Feedback" for section "Write a Review" should get displayed
        When User submits feedback forms
        Then Thanks message should get displayed