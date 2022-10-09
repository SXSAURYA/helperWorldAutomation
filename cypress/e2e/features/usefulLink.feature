@feature
Feature: UseFul link validation

    Scenario: Verify UI for About Us page feature
        Given I am on Home page
        When user clicks on link "About us" under section "Useful Links"
        Then user navigates to respective url for link "about-us"
        And Header text "About us" for section "About us" should get displayed
        And About Helpers world text should get displayed



    Scenario: Verify UI for Contact US feature
        Given I am on Home page
        When user clicks on link "Contact us" under section "Useful Links"
        Then user navigates to respective url for link "helpersworld.org"
        And Header text "Do you have any questions?" for section "contact us" should get displayed
        And Do you have any questions form should get displayed
        And Email details should get displayed

    Scenario: Verify UI for FAQS feature
        Given I am on Home page
        When user clicks on link "Faq's" under section "Useful Links"
        Then user navigates to respective url for link "faqs"
        And Header text "Faq's" for section "Faq's" should get displayed


    Scenario: Verify UI for Write a Review feature
        Given I am on Home page
        When user clicks on link "Write a review" under section "Useful Links"
        Then user navigates to respective url for link "feedback"
        And Header text "Feedback" for section "Write a review" should get displayed
        And Forms field should get displayed