@feature
Feature: Individual Sign Up

    Scenario: Verify whether UI for Employer Host Family Registration
        Given I am on Home page
        And I am on Login Page
        When user click on "Sign Up" link
        Then URL should consist of "registration-type"
        And Header text "What you get as a registered user at Helper's World" for section "Sign Up" should get displayed
        And User clicks on "Employer/ host family" icon
        And Header text "Employer/host family" for section "Sign Up" should get displayed
        And Registration Step 1 fields and Options shouls get displayed for "Employer" under "About Me"
        And Registration Step 1 fields and Options shouls get displayed for "Employer" under "Contact details"


    Scenario: Verify whether UI for Jobseeker Registration
        Given I am on Home page
        And I am on Login Page
        When user click on "Sign Up" link
        Then URL should consist of "registration-type"
        And Header text "What you get as a registered user at Helper's World" for section "Sign Up" should get displayed
        And User clicks on "Jobseeker" icon
        And Header text "Jobseeker Registration" for section "Jobseeker" should get displayed
        And Registration Step 1 fields and Options shouls get displayed for "Employee" under "About Me"
        And Registration Step 1 fields and Options shouls get displayed for "Employee" under "Contact details"


    Scenario: Verify whether UI for Agency Registration
        Given I am on Home page
        And I am on Login Page
        When user click on "Sign Up" link
        Then URL should consist of "registration-type"
        And Header text "What you get as a registered user at Helper's World" for section "Sign Up" should get displayed
        And User clicks on "Agency" icon
        And Header text "Agency Registration" for section "Agency" should get displayed
        Then Registration Step 1 fields and Options shouls get displayed for "Agency" under "Login information"
        And Registration Step 1 fields and Options shouls get displayed for "Agency" under "Contact information"
        And Registration Step 1 fields and Options shouls get displayed for "Agency" under "Primary telephone number"
        And Registration Step 1 fields and Options shouls get displayed for "Agency" under "Secondary telephone number"
