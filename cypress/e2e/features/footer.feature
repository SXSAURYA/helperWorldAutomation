@feature
Feature: Footer link validation

    Scenario Outline: Verify Navigation for different footer links "<Links>" under section Useful Links to respective urls
        Given I am on Home page
        When user clicks on link "<Links>" under section "<Section>"
        Then user navigates to respective url for link "<Url>"
        Examples:
            | Section      | Links          | Url              |
            | Useful Links | Home           | helpersworld.org |
            | Useful Links | About us       | about-us         |
            | Useful Links | Contact us     | contact          |
            | Useful Links | Faq's          | faqs             |
            | Useful Links | Write a review | feedback         |


    Scenario Outline: Verify Navigation for different footer links "<Links>" under section Quick Links to respective urls
        Given I am on Home page
        When user clicks on link "<Links>" under section "<Section>"
        Then user navigates to respective url for link "<Url>"
        Examples:
            | Section     | Links                | Url                       |
            | Quick Links | Blogs                | blog/list                 |
            | Quick Links | Sitemap              | sitemap                   |
            | Quick Links | Terms and Conditions | page/terms-and-conditions |
            | Quick Links | Privacy Policy       | page/privacy-policy       |

    Scenario Outline: Verify Navigation for different footer links "<Links>" under section Our Social Media Networks to respective urls
        Given I am on Home page
        When user clicks on link "<Links>" under section "<Section>"
        Then user navigates to respective url for link "<Url>"
        Examples:
            | Section                   | Links    | Url                       |
            | Our Social Media Networks | facebook | facebook.com/Helpersworld |
            | Our Social Media Networks | twitter  | twitter.com/HelpersWorld1 |
# | Our Social Media Networks | linkedin  | instagram                        |
# | Our Social Media Networks | pinterest | channel/UCN7lmBWiy094dolkEVD9a_g |