@feature
Feature: About Helpers World Menu Navigation

    Scenario Outline: Verify Navigation for sub menu "<subMenu>" under "<mainMenu>"
        Given I am on Home page
        When User clicks on link Submenu "<subMenu>" under menu "<mainMenu>"
        And Header text "<header>" for section "<subMenu>" should get displayed

        Examples:
            | subMenu                  | mainMenu             | header                 |
            | About us                 | About Helper’s World | About us               |
            | How helper’s world works | About Helper’s World | How Helper World works |
            | Reviews                  | About Helper’s World | Review & rating        |
            | Blog                     | About Helper’s World | Blogs                  |
            | FAQ                      | About Helper’s World | Faq's                  |