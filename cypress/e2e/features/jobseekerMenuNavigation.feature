@feature
Feature: Jobseeker Menu Navigation

    Scenario Outline: Verify Navigation for sub menu "<subMenu>" under "<mainMenu>"
        Given I am on Home page
        When User clicks on link Submenu "<subMenu>" under menu "<mainMenu>"
        And Header text "<header>" for section "<subMenu>" should get displayed

        Examples:
            | subMenu                       | mainMenu  | header                                 |
            | Become a jobseeker            | Jobseeker | Jobseeker/Employee                     |
            | Find an employer/ host family | Jobseeker | Quick search for employers/host family |
            | Find agency                   | Jobseeker | Quick search for agencies              |
            | Register as a jobseeker       | Jobseeker | Jobseeker Registration                 |
            | Profile boost                 | Jobseeker | Profile Boost                          |
            | Online safety                 | Jobseeker | Online safety employee                 |