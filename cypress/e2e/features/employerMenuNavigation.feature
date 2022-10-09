@feature
Feature: Employer Host family Menu Navigation

    Scenario Outline: Verify Navigation for sub menu "<subMenu>" under "<mainMenu>"
        Given I am on Home page
        When User clicks on link Submenu "<subMenu>" under menu "<mainMenu>"
        And Header text "<header>" for section "<subMenu>" should get displayed

        Examples:
            | subMenu                             | mainMenu              | header                              |
            | Become a host family                | Employer/ Host family | Recruiter/Family                    |
            | Find a employee/jobseeker           | Employer/ Host family | Quick search for employee/jobseeker |
            | Find agency                         | Employer/ Host family | Quick search for agencies           |
            | Register as an employer/host Family | Employer/ Host family | Employer/host family                |
            | Premium membership                  | Employer/ Host family | Recruiter/Family Premium Plan       |
            | Online safety                       | Employer/ Host family | Online safety Recruiter/host family |