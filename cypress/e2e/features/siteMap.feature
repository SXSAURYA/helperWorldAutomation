@feature
Feature: Site Map validation

    Scenario: Verify Navigation to Become a host family link and Verify UI
        Given I am on Home page
        When user clicks on link "Sitemap" under section "Quick Links"
        Then user navigates to respective url for link "sitemap"
        And Header text "Sitemap" for section "Sitemap" should get displayed
        And Click on "Become a host family" subMenu under "Recruiter/Host Family" main menu
        And Header text "Recruiter/Family" for section "Become a host family" should get displayed
        And Paragraph text for section "Become a host family" should get displayed

    Scenario: Verify Navigation to Become a Jobseeker link and Verify UI
        Given I am on Home page
        When user clicks on link "Sitemap" under section "Quick Links"
        Then user navigates to respective url for link "sitemap"
        And Header text "Sitemap" for section "Sitemap" should get displayed
        And Click on "Become a jobseeker" subMenu under "Jobseeker" main menu
        And Header text "Jobseeker/Employee" for section "Become a jobseeker" should get displayed
        And Paragraph text for section "Become a jobseeker" should get displayed

    Scenario: Verify Navigation to Do you have an agency link and Verify UI
        Given I am on Home page
        When user clicks on link "Sitemap" under section "Quick Links"
        Then user navigates to respective url for link "sitemap"
        And Header text "Sitemap" for section "Sitemap" should get displayed
        And Click on "Do you have an agency" subMenu under "Agency" main menu
        And Header text "Agency" for section "Do you have an agency" should get displayed
        And Paragraph text for section "Do you have an agency" should get displayed

    Scenario: Verify Navigation to Premium membership under Recruiter link and Verify UI
        Given I am on Home page
        When user clicks on link "Sitemap" under section "Quick Links"
        Then user navigates to respective url for link "sitemap"
        And Header text "Sitemap" for section "Sitemap" should get displayed
        And Click on "Premium membership" subMenu under "Recruiter/Host Family" main menu
        And Header text "Recruiter/Family Premium Plan" for section "Premium Member under Recruiter" should get displayed
        And Paragraph text for section "Premium Member under Recruiter" should get displayed
        And Premium Membership tiles should get displayed

    Scenario: Verify Navigation to Premium membership under Jobseeker link and Verify UI
        Given I am on Home page
        When user clicks on link "Sitemap" under section "Quick Links"
        Then user navigates to respective url for link "sitemap"
        And Header text "Sitemap" for section "Sitemap" should get displayed
        And Click on "Premium membership" subMenu under "Jobseeker" main menu
        And Header text "Profile Boost" for section "Premium Member under Jobseeker" should get displayed
        And Paragraph text for section "Premium Member under Jobseeker" should get displayed
        And Premium Membership tiles should get displayed


    Scenario: Verify Navigation to Premium membership under Agency link and Verify UI
        Given I am on Home page
        When user clicks on link "Sitemap" under section "Quick Links"
        Then user navigates to respective url for link "sitemap"
        And Header text "Sitemap" for section "Sitemap" should get displayed
        And Click on "Premium membership" subMenu under "Agency" main menu
        And Header text "Agency Premium Plan" for section "Premium Member under Agency" should get displayed
        And Paragraph text for section "Premium Member under Agency" should get displayed
        And Premium Membership tiles should get displayed


    Scenario Outline:  Verify Navigation to Online safety under "<mainMenu>" and Verify UI
        Given I am on Home page
        When user clicks on link "Sitemap" under section "Quick Links"
        Then user navigates to respective url for link "sitemap"
        And Header text "Sitemap" for section "Sitemap" should get displayed
        And Click on "Online Safety" subMenu under "<mainMenu>" main menu
        And Header text "<header>" for section "Online Safety" should get displayed
        And Different Paragraph section should get displayed for "Online Safety"
        Examples:
            | mainMenu              | header                              |
            | Recruiter/Host Family | Online safety Recruiter/host family |
            | Jobseeker             | Online safety employee              |
            | Agency                | Online safety agency                |


    Scenario:  Verify Navigation to Terms and Condition and verify UI
        Given I am on Home page
        When user clicks on link "Terms and Conditions" under section "Quick Links"
        Then Header text "Terms and Conditions" for section "Terms and Conditions" should get displayed
        And Different Paragraph section should get displayed for "Terms and Conditions"


    Scenario:  Verify Navigation to Privacy Policy and verify UI
        Given I am on Home page
        When user clicks on link "Privacy Policy" under section "Quick Links"
        Then Header text "Privacy Policy" for section "Privacy Policy" should get displayed
        And Different Paragraph section should get displayed for "Privacy Policy"


    Scenario Outline:  Verify Navigation to "<subMenu>" under "<mainMenu>"
        Given I am on Home page
        When user clicks on link "Sitemap" under section "Quick Links"
        Then user navigates to respective url for link "sitemap"
        And Header text "Sitemap" for section "Sitemap" should get displayed
        And Click on "<subMenu>" subMenu under "<mainMenu>" main menu
        And Header text "<header>" for section "<subMenu>" should get displayed
        Examples:
            | subMenu                             | mainMenu              | header                                 |
            | Find a helper/employee              | Recruiter/Host Family | Quick search for employee/jobseeker    |
            | Find agency                         | Recruiter/Host Family | Quick search for agencies              |
            | Register as an employer/host Family | Recruiter/Host Family | Employer/host family                   |
            | Find an employer/ host Family       | Jobseeker             | Quick search for employers/host family |
            | Find agency                         | Jobseeker             | Quick search for agencies              |
            | Register as a jobseeker             | Jobseeker             | Jobseeker Registration                 |
            | Find employers / host Family        | Agency                | Quick search for employers/host family |
            | Find jobseekers                     | Agency                | Quick search for employee/jobseeker    |
            | Register as an agency               | Agency                | Agency Registration                    |