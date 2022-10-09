@feature
Feature: Quick link validation

    Scenario: Verify UI for About Us page feature
        Given I am on Home page
        When user clicks on link "Blogs" under section "Quick Links"
        Then user navigates to respective url for link "blog/list"
        And Header text "Blogs" for section "Blogs" should get displayed
        And Blogs option should get displayed in the Page


    Scenario: Verify UI for SiteMap
        Given I am on Home page
        When user clicks on link "Sitemap" under section "Quick Links"
        Then user navigates to respective url for link "sitemap"
        And Header text "Sitemap" for section "Sitemap" should get displayed
        And Main Home menu should get displayed
        And toggle menu should get displayed
        And Non-toggle menu should get displayed


    Scenario Outline:  Verify subMenu for "<subMenu>"
        Given I am on Home page
        When user clicks on link "Sitemap" under section "Quick Links"
        Then user navigates to respective url for link "sitemap"
        And Header text "Sitemap" for section "Sitemap" should get displayed
        And submenu for "<subMenu>" should displayed
        Examples:
            | subMenu               |
            | Jobseeker             |
            | Recruiter/Host Family |
            | Agency                |