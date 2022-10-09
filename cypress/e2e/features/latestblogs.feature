@feature
Feature: Latest Blog validation

    Scenario Outline:  Verify whether on click of View details under Blog section "<type>" user navigates to respective blog page
        Given I am on Home page
        Then Header text "Latest Blogs" for section "Latest Blogs" should get displayed
        When I click on View details link under section "<type>"
        Then User navigates to respective blogs page
        Examples:
            | type |
            | 1    |
            | 2    |
            | 3    |