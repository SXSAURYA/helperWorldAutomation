@feature
Feature: Home Page Validations

    @regression
    Scenario: Verify the UI for Home Page
        Given I am on Home page
        Then User should be able to see the all the navigation links "Home,Employer/ Host family,Jobseeker,Agency,About Helper’s World"
        And "Useful Links" section links "Home,About us,Contact us,Faq's,Write a review" should be visible
        And "Quick Links" section links "Blogs,Sitemap,Terms and Conditions,Privacy Policy" should be visible
        And "Our Social Media Networks" section links "facebook,twitter,linkedin,pinterest" should be visible


    Scenario: UI validation for How helpers section works
        Given I am on Home page
        Then Header text "How Helpers World Work" for section "How Helpers World Work" should get displayed
        And Paragraph text for section "How Helpers World Work" should get displayed
        And What you get options should get displayed
        And Header text "What you get?" for section "How Helpers World Work" should get displayed

    Scenario: UI validation for Get started section
        Given I am on Home page
        Then Header text "Get started" for section "Get Started" should get displayed
        And All four option "Create a Profile","Search Job", "Make contact","Have an agreement" should get displayed

    Scenario: UI validation for Latest Blogs section
        Given I am on Home page
        Then Header text "Latest Blogs" for section "Latest Blogs" should get displayed
        And Paragraph text for section "Latest Blogs" should get displayed
        And Blogs option should get displayed

    Scenario: UI validation for What Host Families say about us
        Given I am on Home page
        Then Header text "What Host Families say about us" for section "What Host Families say about us" should get displayed
        And Paragraph text for section "What Host Families say about us" should get displayed
        And "Write a review" link should get displayed
        And What family says about us sections should get displayed


    Scenario: UI validation for Frequently Asked Question
        Given I am on Home page
        Then Header text "Frequently Asked Question" for section "Frequently Asked Question" should get displayed
        And Paragraph text for section "Frequently Asked Question" should get displayed
        And Frequently asked Question options should get displayed

    Scenario: UI validation for Do you have any Questions
        Given I am on Home page
        Then Header text "Do you have any questions?" for section "Do you have any questions?" should get displayed
        And Paragraph text for section "Do you have any questions?" should get displayed
        And Do you have any questions form should get displayed
        And Email details should get displayed

    Scenario: UI validation for Full service Agency
        Given I am on Home page
        Then Header text "Full service Agency" for section "Full service Agency" should get displayed
        And Paragraph text for section "Full service Agency" should get displayed
        And Blogs option should get displayed

