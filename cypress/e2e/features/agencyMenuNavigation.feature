@feature
Feature: Agency Menu Navigation

    Scenario Outline: Verify Navigation for sub menu "<subMenu>" under "<mainMenu>"
        Given I am on Home page
        When User clicks on link Submenu "<subMenu>" under menu "<mainMenu>"
        And Header text "<header>" for section "<subMenu>" should get displayed

        Examples:
            | subMenu                      | mainMenu | header                                 |
            | Do you have an agency        | Agency   | Agency                                 |
            | Find employers / host family | Agency   | Quick search for employers/host family |
            | Find jobseekers              | Agency   | Quick search for employee/jobseeker    |
            | Register as an agency        | Agency   | Agency Registration                    |
            | Premium membership           | Agency   | Agency Premium Plan                    |
            | Online safety                | Agency   | Online safety agency                   |